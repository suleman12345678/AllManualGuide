export default function Home() {
  return (
    <>
      <div className="mb-20">
        <h1
          className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6"
          id="overview"
        >
          Upeventer – Event Management Overview
        </h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">
          Powered by R.I.B Technology – AI-driven communication and comprehensive event lifecycle automation.
        </p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">
          Upeventer is a specialized event management ecosystem built on top of R.I.B Assist. It automates vendor registrations, streamlines attendee communication, and ensures continuous engagement with organizers using AI-powered calling, chatbot automation, and omnichannel messaging.
        </p>
      </div>
      
      <section className="mb-20" id="preview">
        <h2 className="text-[28px] font-black text-gray-900 mb-8 tracking-tight">
          Platform Dashboard Preview
        </h2>
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden p-2 transition-transform hover:scale-[1.01] duration-500">
          <div className="bg-white rounded-[2rem] border border-gray-50 overflow-hidden shadow-inner">
            <img
              src="/images/VendorDashboard.png"
              alt="Upeventer Platform Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-20">
        <h2 className="text-[24px] font-black text-gray-900 mb-10 tracking-tight text-center">
          Core System Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col group cursor-pointer">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-1.5 mb-6 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                src="/images/BulkCaller.png"
                alt="AI Caller"
                className="w-full h-auto rounded-2xl border border-gray-50 object-cover object-top aspect-[16/10]"
              />
            </div>
            <h3 className="text-center font-bold text-lg text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
              AI Bulk Caller
            </h3>
          </div>
          <div className="flex flex-col group cursor-pointer">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-1.5 mb-6 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                src="/images/AdminVendorAnalytics.png"
                alt="Vendor Analytics"
                className="w-full h-auto rounded-2xl border border-gray-50 object-cover object-top aspect-[16/10]"
              />
            </div>
            <h3 className="text-center font-bold text-lg text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
              Vendor Analytics
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
