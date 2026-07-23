export default function FeaturedEvents() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">Featured Events</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Algorithmic promotion and spotlight management for premium events.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">The Featured Events module allows administrators to curate the platform's homepage and search results. By spotlighting high-quality events, you can drive more registrations and provide additional value to your top-tier vendors.</p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Curation Interface</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/AdminFeaturedEvents.png" alt="Featured Events Curation List" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Promotion Logic</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">Events submitted by vendors enter a central pool. Admins utilize this interface to curate content manually or via programmed rules. By marking an event as "Featured", the system database updates the event's priority flag. The front-end API queries this flag to elevate its ranking, securely placing it in premium homepage slots and automated newsletter digests.</p>
      </section>
    </>
  );
}
