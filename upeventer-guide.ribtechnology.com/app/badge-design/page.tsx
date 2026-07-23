export default function BadgeDesign() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">Badge Design Studio</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Custom professional badge generation for on-site event logistics.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">The Badge Design Studio provides a powerful interface for creating scannable, professional event badges. From individual attendee badges to bulk generation for large-scale conferences, this module ensures smooth check-ins and professional presentation.</p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Single Badge Design Studio</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/SingleBadgeDesign.png" alt="Single Badge Design Studio Canvas" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Bulk Badge Generation</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/BulkDesign.png" alt="Bulk Badge Generation Canvas" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">QR Generation Engine</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">The studio provides a canvas where organizers can drag and drop typography, logos, and dynamic user fields. Crucially, it integrates a QR generation engine that automatically encodes unique attendee IDs (UUIDs) into a scannable code format. During bulk processing, the system iterates through the attendee database, applying the design template to each record and generating thousands of studio-quality, print-ready PDF badges in seconds, streamlining on-site logistics and lead retrieval.</p>
      </section>
    </>
  );
}
