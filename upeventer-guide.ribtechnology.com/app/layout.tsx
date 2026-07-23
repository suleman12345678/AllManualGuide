import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import RightSidebar from '@/components/RightSidebar';
import MobileMenu from '@/components/MobileMenu';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Upeventer Guides',
  description: 'Comprehensive manual guide for the Upeventer platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex bg-white text-[#1a1a1a]">
        {/* Desktop Sidebar */}
        <aside className="w-[260px] border-r border-gray-100 bg-gray-100 hidden lg:flex flex-col shrink-0 h-screen sticky top-0 overflow-y-auto">
          <div className="px-7 pt-8 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                <img src="/images/upeventer-icon.png" alt="Upeventer icon" className="w-9 h-9 rounded-lg object-cover" />
              </div>
              <div>
                <div className="font-black text-gray-900 leading-none tracking-tight">Upeventer</div>
                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">by R.I.B Technology</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-7 space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] px-3 mb-3">GETTING STARTED</h4>
              <ul className="space-y-0.5">
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-blue-600 bg-blue-50" href="/">Overview</Link></li>
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/login">Login</Link></li>
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/dashboard">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] px-3 mb-3">VENDOR MODULES</h4>
              <ul className="space-y-0.5">
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/form-management">Form Management</Link></li>
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/bulk-caller">AI Bulk Caller</Link></li>
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/badge-design">Badge Design</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] px-3 mb-3">ADMIN MODULES</h4>
              <ul className="space-y-0.5">
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/user-management">User Management</Link></li>
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/vendor-analytics">Vendor Analytics</Link></li>
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/featured-events">Featured Events</Link></li>
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/contact-inquiries">Contact Inquiries</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] px-3 mb-3">WORKFLOW</h4>
              <ul className="space-y-0.5">
                <li><Link className="flex items-center px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50" href="/end-to-end-workflow">End to end event workflow</Link></li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 border-b border-gray-100 bg-white sticky top-0 z-40 flex justify-between items-center gap-3 px-4 md:px-8">
            <div className="flex items-center gap-3">
              <MobileMenu />
              <div className="font-bold text-gray-900 text-sm tracking-tight whitespace-nowrap shrink-0">
                Upeventer Guides
              </div>
            </div>
            <div className="max-w-lg hidden sm:block w-full flex-1 ml-4 flex justify-end">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 text-[13px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
                />
                <svg
                  className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </header>

          <main className="flex-1 py-10 px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28">
            <div className="max-w-4xl mx-auto">
              <div className="w-full">
                {children}
              </div>
            </div>
          </main>
        </div>

        {/* Right Sidebar Desktop */}
        <RightSidebar />
      </body>
    </html>
  );
}
