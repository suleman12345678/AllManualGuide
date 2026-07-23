export default function BulkCaller() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">AI Bulk Caller</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Automated attendee outreach via AI-powered voice calling.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">The AI Bulk Caller transforms how organizers engage with their audience. By automating personalized voice outreach, you can confirm RSVPs, provide event updates, and drive engagement at scale without manual effort.</p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Telephony Dashboard</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/BulkCaller.png" alt="AI Bulk Caller Interface" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Under the Hood</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">Organizers upload a CSV containing attendee contact information. The system parses this dataset and maps the contacts to a selected AI voice model. Once initiated, the platform leverages underlying SIP trunks and telephony APIs to execute concurrent outbound calls. The AI utilizes natural language processing (NLP) to dynamically converse with attendees to provide event reminders, send invitations, or gather RSVP statuses. It logs the semantic success and conversational outcome of every call directly back into the vendor's dashboard.</p>
      </section>
    </>
  );
}
