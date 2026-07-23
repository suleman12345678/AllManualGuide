import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-slate-100 border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 md:translate-x-0 -translate-x-full">
            <div className="h-[72px] flex items-center justify-between px-6 border-b border-gray-200 shrink-0">
                <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center w-12 h-12 relative shrink-0"><img alt="Scanora AI Logo" loading="lazy" decoding="async" data-nimg="fill" className="object-contain scale-[1.35] mix-blend-multiply" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} src="/images/logo.png" /></div>
                    <div className="flex flex-col leading-tight mt-1"><span className="text-[15px] font-bold text-gray-900 tracking-tight">Scanora AI</span><span className="text-[9px] font-semibold text-gray-500 uppercase tracking-widest">by R.I.B
                            TECHNOLOGY</span></div>
                </div><button className="md:hidden p-2 -mr-2 text-gray-400 hover:text-gray-600 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg></button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div>
                    <p className="px-2 mb-2 text-[11px] font-bold text-gray-400 tracking-[0.1em] select-none">MAIN</p>
                    <ul className="space-y-1">
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/new-test"><span>New Test</span></Link></li>
                    </ul>
                </div>
                <div>
                    <p className="px-2 mb-2 text-[11px] font-bold text-gray-400 tracking-[0.1em] select-none">TESTING</p>
                    <ul className="space-y-1">
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/test-history"><span>Test History</span></Link></li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/saved-scripts"><span>Saved Scripts</span></Link></li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/api-testing"><span>API Testing</span><span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-amber-600 bg-amber-100/50">New</span></Link>
                        </li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/scheduled-jobs"><span>Scheduled Jobs</span></Link></li>
                    </ul>
                </div>
                <div>
                    <p className="px-2 mb-2 text-[11px] font-bold text-gray-400 tracking-[0.1em] select-none">ANALYTICS</p>
                    <ul className="space-y-1">
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/compare-tests"><span>Compare Tests</span><span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-amber-600 bg-amber-100/50">New</span></Link>
                        </li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/ai-analytics"><span>AI Analytics</span><span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-amber-600 bg-amber-100/50">New</span></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="px-2 mb-2 text-[11px] font-bold text-gray-400 tracking-[0.1em] select-none">TOOLS</p>
                    <ul className="space-y-1">
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/test-planner"><span>Test Planner</span><span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-emerald-600 bg-emerald-100/50">AI</span></Link>
                        </li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-[#2563eb] font-medium bg-blue-50/50" href="/agent-builder"><span>Agent Builder</span></Link></li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/code-generator"><span>Code Generator</span></Link></li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/link-crawler"><span>Link Crawler</span><span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-amber-600 bg-amber-100/50">New</span></Link>
                        </li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/security-scanner"><span>Security Scanner</span><span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-amber-600 bg-amber-100/50">New</span></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="px-2 mb-2 text-[11px] font-bold text-gray-400 tracking-[0.1em] select-none">CONFIG</p>
                    <ul className="space-y-1">
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/profile"><span>Profile</span></Link></li>
                        <li><Link className="group flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] transition-colors duration-100 text-gray-600 font-normal hover:text-gray-900 hover:bg-gray-50" href="/settings"><span>Settings</span></Link></li>
                    </ul>
                </div>
            </nav>
            <div className="p-4 border-t border-gray-200 mt-auto shrink-0 space-y-3">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2.5 border border-gray-100">
                    <div className="flex items-center gap-2"><svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg><span className="text-[12px] font-semibold text-gray-900">AI Engine</span></div><span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">Online</span>
                </div>
                <div className="flex items-center gap-1.5 px-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span><span className="text-[11px] text-gray-500 font-medium">16 agents ready</span></div>
            </div>
        </aside>
  );
}
