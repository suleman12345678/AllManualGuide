const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const legacyDir = path.join(__dirname, 'legacy-html');
const appDir = path.join(__dirname, 'app');

const files = fs.readdirSync(legacyDir).filter(f => f.endsWith('.html'));

function htmlToJSX(html) {
    if (!html) return '';
    return html
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--.*?-->/g, '')
        .replace(/<img(.*?)>/g, (match, p1) => {
            if (p1.endsWith('/')) return match;
            return `<img${p1} />`;
        })
        .replace(/<hr(.*?)>/g, (match, p1) => {
            if (p1.endsWith('/')) return match;
            return `<hr${p1} />`;
        })
        .replace(/<input(.*?)>/g, (match, p1) => {
            if (p1.endsWith('/')) return match;
            return `<input${p1} />`;
        })
        .replace(/<br(.*?)>/g, (match, p1) => {
            if (p1.endsWith('/')) return match;
            return `<br${p1} />`;
        })
        .replace(/style="([^"]*)"/g, (match, p1) => {
            return ``; 
        })
        .replace(/charSet=/g, 'charSet=')
        .replace(/crossorigin=/g, 'crossOrigin=')
        .replace(/stroke-width=/g, 'strokeWidth=')
        .replace(/stroke-linecap=/g, 'strokeLinecap=')
        .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
        .replace(/fill-rule=/g, 'fillRule=')
        .replace(/clip-rule=/g, 'clipRule=')
        .replace(/xmlns:xlink=/g, 'xmlnsXlink=');
}

// Extract layout from overview.html
const overviewContent = fs.readFileSync(path.join(legacyDir, 'overview.html'), 'utf8');
const $ = cheerio.load(overviewContent);

const asideHtml = $('aside').parent().html();
const headerHtml = $('header').html();

const layoutContent = `
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JobMatch AI',
  description: 'AI-powered recruitment platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F9FB] text-[#1A1A1A]">
        <div className="flex min-h-screen">
          <div className="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 opacity-0 invisible"></div>
          
          <div className="fixed lg:sticky top-0 h-screen w-64 flex-shrink-0 z-[70] transition-transform duration-300 -translate-x-full lg:translate-x-0">
            ${htmlToJSX(asideHtml)}
          </div>
          
          <div className="flex-1 min-w-0 flex flex-col">
            <header className="h-16 border-b border-[#E5E7EB] bg-white flex items-center sticky top-0 z-40">
              ${htmlToJSX(headerHtml)}
            </header>
            
            <main className="p-4 lg:p-8 pb-24 max-w-6xl mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
`;

fs.writeFileSync(path.join(appDir, 'layout.tsx'), layoutContent);

// Process each file
for (const file of files) {
    if (file === '404.html' || file === '_not-found.html' || file === 'index.html') continue;
    
    const pageName = file.replace('.html', '');
    const content = fs.readFileSync(path.join(legacyDir, file), 'utf8');
    const $page = cheerio.load(content);
    
    const mainHtml = $page('main').html();
    
    let pageContent = '';
    if (mainHtml) {
        pageContent = `
export default function ${pageName.replace(/-/g, '')}Page() {
    return (
        <>
            ${htmlToJSX(mainHtml)}
        </>
    );
}
`;
    } else {
        const bodyHtml = $page('body').html();
        pageContent = `
export default function ${pageName.replace(/-/g, '')}Page() {
    return (
        <div dangerouslySetInnerHTML={{ __html: \`${bodyHtml.replace(/`/g, '\\`').replace(/\\$/g, '\\\\$')}\` }} />
    );
}
`;
    }
    
    const targetDir = path.join(appDir, pageName);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageContent);
}

// Write index redirect to overview
fs.writeFileSync(path.join(appDir, 'page.tsx'), `
import { redirect } from 'next/navigation';
export default function Home() {
    redirect('/overview');
}
`);
