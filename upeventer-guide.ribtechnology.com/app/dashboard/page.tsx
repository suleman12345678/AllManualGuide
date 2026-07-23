export default function Dashboard() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
          Vendor Dashboard
        </h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">
          The central hub for managing event registration forms.
        </p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">
          The Vendor Dashboard is the primary workspace for event organizers. It provides an at-a-glance overview of all created forms, real-time registration metrics, and quick-access action buttons for managing the complete event lifecycle — from form creation to attendee badge delivery.
        </p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Dashboard Overview</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img
            src="/images/VendorDashboard.png"
            alt="Vendor Dashboard Interface"
            className="w-full h-auto rounded-xl border border-gray-100"
          />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Key Metrics</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-8">
          The top section displays three critical KPIs: <strong>Total Forms</strong> (number of event forms created), <strong>Total Registrations</strong> (cumulative attendee sign-ups across all events), and <strong>Active Forms</strong> (forms currently accepting registrations). These counters update in real-time as new registrations are received.
        </p>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Event Forms Table</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
          Below the metrics, the <strong>"Your Event Forms"</strong> table lists every form with its event name, date & location, number of fields, registration progress (e.g., 0/100), active status badge, auto-send toggle, and a row of action icons for preview, link sharing, WhatsApp integration, registration management, and deletion.
        </p>
      </section>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Form Management Actions</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img
            src="/images/VendorDashboard.png"
            alt="Vendor Dashboard Form Actions"
            className="w-full h-auto rounded-xl border border-gray-100"
          />
        </div>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
          Each form row includes quick action icons that allow vendors to manage the entire lifecycle without leaving the dashboard. The <strong>"+ Create New Form"</strong> button in the top-right launches the dynamic form builder where vendors can design custom registration forms with drag-and-drop fields, branded designs, and live previews.
        </p>
      </section>
    </>
  );
}
