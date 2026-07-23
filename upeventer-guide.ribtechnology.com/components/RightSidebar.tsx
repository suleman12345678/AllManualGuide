'use client';

import { useState } from 'react';
import Link from 'next/link';

const allPages = [
  { href: '/form-management', title: 'Form Management' },
  { href: '/bulk-caller', title: 'AI Bulk Caller' },
  { href: '/badge-design', title: 'Badge Design' },
  { href: '/user-management', title: 'User Management' },
  { href: '/vendor-analytics', title: 'Vendor Analytics' },
  { href: '/featured-events', title: 'Featured Events' },
  { href: '/contact-inquiries', title: 'Contact Inquiries' },
  { href: '/end-to-end-workflow', title: 'End-to-End Workflow' },
];

export default function RightSidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPages = allPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-[280px] border-l border-gray-100 bg-gray-50 hidden xl:flex flex-col shrink-0 h-screen sticky top-0 overflow-y-auto">
      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.15em]">Search Documentation</h3>
      </div>
      <div className="px-4 py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm placeholder:text-gray-400 font-medium"
          />
          <svg
            className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
        {/* Quick Links Section */}
        <div>
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] px-2 mb-2">Quick Links</h4>
          <div className="space-y-1">
            <Link href="/#overview" className="flex items-start px-2 py-1.5 rounded-md text-xs text-gray-600 hover:text-gray-900 hover:bg-white transition-colors group">
              <span className="text-blue-500 mr-2">→</span>
              <span className="group-hover:text-blue-600 font-medium">Platform Overview</span>
            </Link>
            <Link href="/#preview" className="flex items-start px-2 py-1.5 rounded-md text-xs text-gray-600 hover:text-gray-900 hover:bg-white transition-colors group">
              <span className="text-blue-500 mr-2">→</span>
              <span className="group-hover:text-blue-600 font-medium">Dashboard Preview</span>
            </Link>
          </div>
        </div>
        {/* On This Page Section */}
        <div>
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] px-2 mb-2">On This Page</h4>
          <div className="space-y-1">
            <Link href="/" className="flex items-start px-2 py-1.5 rounded-md text-xs text-gray-600 hover:text-gray-900 hover:bg-white transition-colors group">
              <span className="text-green-500 mr-2">•</span>
              <span className="group-hover:text-blue-600 font-medium">Overview</span>
            </Link>
            <Link href="/login" className="flex items-start px-2 py-1.5 rounded-md text-xs text-gray-600 hover:text-gray-900 hover:bg-white transition-colors group">
              <span className="text-green-500 mr-2">•</span>
              <span className="group-hover:text-blue-600 font-medium">Login</span>
            </Link>
            <Link href="/dashboard" className="flex items-start px-2 py-1.5 rounded-md text-xs text-gray-600 hover:text-gray-900 hover:bg-white transition-colors group">
              <span className="text-green-500 mr-2">•</span>
              <span className="group-hover:text-blue-600 font-medium">Dashboard</span>
            </Link>
          </div>
        </div>
        {/* Recent Pages Section */}
        <div>
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] px-2 mb-2">All Pages</h4>
          <div className="space-y-1">
            {filteredPages.map((page) => (
              <Link key={page.href} href={page.href} className="flex items-start px-2 py-1.5 rounded-md text-xs text-gray-600 hover:text-gray-900 hover:bg-white transition-colors">
                <span className="group-hover:text-blue-600 font-medium">{page.title}</span>
              </Link>
            ))}
            {filteredPages.length === 0 && (
              <div className="px-2 py-1.5 text-xs text-gray-400">No results found.</div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
