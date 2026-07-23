const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const legacyDir = path.join(__dirname, 'legacy-html');
const appDir = path.join(__dirname, 'app');
const componentsDir = path.join(__dirname, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

function htmlToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/viewbox/g, 'viewBox')
    .replace(/charset/g, 'charSet')
    .replace(/fetchpriority/g, 'fetchPriority')
    .replace(/crossorigin/g, 'crossOrigin')
    .replace(/<!--[\s\S]*?-->/g, '') // remove comments
    // self close tags
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<hr([^>]*[^\/])>/g, '<hr$1 />')
    .replace(/<br([^>]*[^\/])>/g, '<br$1 />')
    .replace(/<circle([^>]*[^\/])>/g, '<circle$1 />')
    .replace(/<\/circle>/g, '')
    .replace(/<path([^>]*[^\/])>/g, '<path$1 />')
    .replace(/<\/path>/g, '')
    .replace(/style="([^"]*)"/g, (match, styleString) => {
        const styleObj = {};
        styleString.split(';').forEach(rule => {
            if (!rule.trim()) return;
            const parts = rule.split(':');
            if (parts.length < 2) return;
            const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            const val = parts.slice(1).join(':').trim();
            styleObj[key] = val;
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });
}

function extractLayoutAndPages() {
  const files = fs.readdirSync(legacyDir).filter(f => f.endsWith('.html') && f !== 'index.html' && f !== '404.html');
  
  let layoutExtracted = false;

  for (const file of files) {
    const slug = file.replace('.html', '');
    const htmlContent = fs.readFileSync(path.join(legacyDir, file), 'utf8');
    
    // Load with xmlMode false to handle standard HTML
    const $ = cheerio.load(htmlContent);

    if (!layoutExtracted) {
        // Extract Sidebar
        const aside = $('aside').prop('outerHTML');
        if (aside) {
            let sidebarJsx = htmlToJsx(aside);
            sidebarJsx = sidebarJsx.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');
            fs.writeFileSync(path.join(componentsDir, 'Sidebar.tsx'), `import Link from 'next/link';\n\nexport default function Sidebar() {\n  return (\n    ${sidebarJsx}\n  );\n}\n`);
        }
        
        // Extract Header
        const header = $('header').prop('outerHTML');
        if (header) {
            let headerJsx = htmlToJsx(header);
            fs.writeFileSync(path.join(componentsDir, 'Header.tsx'), `export default function Header() {\n  return (\n    ${headerJsx}\n  );\n}\n`);
        }

        layoutExtracted = true;
    }

    // Extract Main content
    const main = $('main').prop('outerHTML');
    if (main) {
        let mainJsx = htmlToJsx(main);
        mainJsx = mainJsx.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');
        
        const routeDir = path.join(appDir, slug);
        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }
        
        const componentName = slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Page';
        
        const pageCode = `import Link from 'next/link';\n\nexport default function ${componentName}() {\n  return (\n    ${mainJsx}\n  );\n}\n`;
        fs.writeFileSync(path.join(routeDir, 'page.tsx'), pageCode);
        console.log(`Generated page: /${slug}`);
    }
  }

  // Update layout.tsx
  const layoutTsx = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scanora AI – Documentation",
  description: "AI-powered website testing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={\`\${inter.className} antialiased bg-white text-gray-900\`}>
        <div className="h-screen overflow-hidden flex bg-white">
          <Sidebar />
          <div className="flex flex-col flex-1 md:ml-[260px]">
            <Header />
            <div className="relative flex-1 mt-[72px] overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
`;
  fs.writeFileSync(path.join(appDir, 'layout.tsx'), layoutTsx);
  console.log('Updated app/layout.tsx');
  
  // Create page.tsx (Root redirect)
  const rootPageTsx = `import { redirect } from "next/navigation";\n\nexport default function Home() {\n  redirect('/new-test');\n}\n`;
  fs.writeFileSync(path.join(appDir, 'page.tsx'), rootPageTsx);
  console.log('Updated app/page.tsx with redirect to /new-test');
}

extractLayoutAndPages();
