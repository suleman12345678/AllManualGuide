import Link from 'next/link';

export default function LinkCrawlerPage() {
  return (
    <main className="min-h-full px-6 md:px-12 py-8 md:py-12 pb-24">
                    <article className="max-w-[1024px] w-full mx-auto">
                        <h1 className="text-[32px] md:text-[36px] font-semibold text-gray-900 tracking-tight leading-tight mb-4">
                            Link Crawler</h1>
                        <p className="text-[18px] md:text-[20px] font-medium text-[#2563eb] mb-6 leading-snug">Find broken
                            links across your website</p>
                        <p className="text-[16px] text-gray-600 leading-[1.6] mb-12 max-w-[900px]">The Broken Links Crawler
                            systematically navigates your website to check every URL for 404s and errors. You can
                            configure the crawl depth (e.g., "Page only" or "Full site") to
                            thoroughly audit anchors, images, scripts, and stylesheets.</p>
                        <h2 className="text-[24px] font-semibold text-gray-900 mb-6">Platform Dashboard Preview</h2>
                        <div className="relative cursor-zoom-in group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500">
                            </div>
                            <div className="relative w-full"><img alt="Link Crawler screenshot" fetchPriority="high" width="1024" height="640" decoding="async" data-nimg="1" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]" style={{"color":"transparent"}} src="/images/Link Crawler1.png" /></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/10">
                                <span className="px-6 py-3 bg-indigo-600 text-white text-[11px] font-bold rounded-lg shadow-xl uppercase tracking-widest pointer-events-none">Enlarge
                                    Image</span>
                            </div>
                        </div>
                    </article>
                </main>
  );
}
