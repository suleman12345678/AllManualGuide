'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        aria-label="Open navigation"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[60] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <img src="/images/upeventer-icon.png" alt="Upeventer icon" className="w-9 h-9 rounded-lg object-cover" />
            </div>
            <div>
              <div className="font-black text-gray-900 text-base leading-none tracking-tight">Upeventer</div>
              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">
                by R.I.B Technology
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
          <div>
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">GETTING STARTED</h3>
            <div className="space-y-1">
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-blue-600 bg-blue-50" href="/">Overview</Link>
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/login">Login</Link>
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/dashboard">Dashboard</Link>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">VENDOR MODULES</h3>
            <div className="space-y-1">
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/form-management">Form Management</Link>
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/bulk-caller">AI Bulk Caller</Link>
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/badge-design">Badge Design</Link>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">ADMIN MODULES</h3>
            <div className="space-y-1">
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/user-management">User Management</Link>
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/vendor-analytics">Vendor Analytics</Link>
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/featured-events">Featured Events</Link>
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/contact-inquiries">Contact Inquiries</Link>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-4">WORKFLOW</h3>
            <div className="space-y-1">
              <Link onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50" href="/end-to-end-workflow">End to end event workflow</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
