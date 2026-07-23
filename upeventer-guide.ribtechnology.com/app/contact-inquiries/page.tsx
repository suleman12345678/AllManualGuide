export default function ContactInquiries() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">Contact Inquiries</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Centralized communication hub for managing user and vendor support requests.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">The Contact Inquiries module serves as the primary communication bridge between platform users and administrators. Efficiently track, manage, and respond to incoming queries to ensure high service standards across the Upeventer ecosystem.</p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Inquiry Dashboard</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/AdminContactInqueries.png" alt="Contact Inquiries Dashboard" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Communication Flow</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">All incoming messages are categorized and prioritized, allowing support teams to efficiently allocate resources. This interface enables quick replies, ticket assignments, and historical tracking of vendor communications, maintaining a high standard of platform service.</p>
      </section>
    </>
  );
}
