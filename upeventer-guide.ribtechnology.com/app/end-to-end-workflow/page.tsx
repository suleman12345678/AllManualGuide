export default function EndToEndWorkflow() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">End-to-End Event Workflow</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Complete lifecycle of event management from vendor onboarding to AI-driven attendee outreach.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">This section demonstrates how Upeventer powers the full ecosystem workflow. It covers how vendors are registered, events are prominently featured, attendees are engaged through AI calling, and on-site logistics are handled via the Badge Design Studio.</p>
      </div>
      <section className="mb-16">
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Step 1: Vendor Onboarding &amp; Admin Approval</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">Vendors register via the public-facing portal. Their profiles remain inactive until an Administrator reviews their credentials within the User Management dashboard. This gating mechanism prevents spam and ensures quality control. Once approved, vendors gain access to the event creation suite.</p>
      </section>
      <section className="mb-16">
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Step 2: Dynamic Form Creation &amp; Lead Generation</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">Once approved, vendors can create custom registration forms tailored to their event's needs. These forms are the primary tool for lead generation, allowing vendors to collect essential attendee data. After creation, vendors can distribute these form links instantly via built-in Email and WhatsApp integration, ensuring maximum reach and engagement across multiple communication channels.</p>
      </section>
      <section className="mb-16">
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Step 3: Event Setup &amp; Algorithmic Promotion</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">The vendor sets up the event logistics, ticketing tiers, and landing page. The Administrator evaluates the event and utilizes the Featured Events module to flag it for promotion. This algorithmic boost pushes the event to the top of search queries and homepage hero banners, accelerating registration momentum.</p>
      </section>
      <section className="mb-16">
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Step 4: AI-Driven Attendee Engagement</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">As registrations pour in, organizers extract attendee lists and feed them into the AI Bulk Caller. The system concurrently dials thousands of attendees to confirm RSVPs, provide venue directions, or upsell VIP packages, entirely removing the need for human call center agents.</p>
      </section>
      <section className="mb-16">
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Step 5: On-Site Execution</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">Days before the event, organizers utilize the Badge Design Studio to generate scannable QR badges based on the finalized attendee list. On the day of the event, staff use the Upeventer scanner app to validate these badges, syncing attendance data back to the Vendor Analytics dashboard in real-time.</p>
      </section>
    </>
  );
}
