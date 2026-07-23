export default function Header() {
  return (
    <header className="fixed top-0 left-0 md:left-[260px] right-0 h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-10 z-20">
                <div className="flex items-center gap-4 max-w-[50%]"><button className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-lg"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg></button><span className="text-[15px] font-bold text-gray-900 truncate hidden sm:block">Scanora AI Guides</span>
                </div>
                <div className="relative flex-1 md:flex-none max-w-[240px] md:max-w-none ml-auto">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 h-10 w-full md:w-80 focus-within:ring-1 focus-within:ring-gray-300 transition-all shadow-sm">
                        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                        </svg><input type="text" placeholder="Search documentation..." className="flex-1 bg-transparent text-[14px] text-gray-700 placeholder-gray-400 outline-none" value="" />
                    </div>
                </div>
            </header>
  );
}
