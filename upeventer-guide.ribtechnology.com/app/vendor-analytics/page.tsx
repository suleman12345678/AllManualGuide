export default function VendorAnalytics() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">Vendor Analytics</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Data-driven insights into vendor performance and registration trends.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">The Vendor Analytics module provides administrators with a high-level view of platform activity. Monitor registration volumes, track active vendors, and identify top-performing events through real-time data visualization and detailed reporting.</p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Analytics Dashboard</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/AdminVendorAnalytics.png" alt="Vendor Analytics Data Visualization" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Data Intelligence</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">This system continuously aggregates data points from active vendors. It maps registration curves against time, allowing organizers to pinpoint exactly when marketing campaigns hit their peak effectiveness. High-performing vendors can be identified and elevated, while lagging events can be flagged for promotional boosts.</p>
      </section>
    </>
  );
}
