
export default function architecturePage() {
    return (
        <>
            
        <div className="py-8 space-y-12">
          <div>
            <h1 className="text-3xl font-semibold text-[#1A1A1A] mb-2">System Architecture</h1>
            <p className="text-xl text-gray-600">Understanding the core data flow and user interactions.</p>
          </div>
          <hr className="border-[#E5E7EB]" />
          <section>
            <div className="rounded-xl border-[#E5E7EB] bg-white shadow-sm p-6 text-center text-gray-700 font-medium">Admin
              → Company → Vendor → Recruiter → Candidate</div>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8">System Roles &amp; Responsibilities</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">1. Admin</h3>
                <p className="text-gray-600">Has overarching control. Configures system parameters, oversees companies, and
                  monitors vendors and recruiters. They act as the root authority.</p>
              </div>
              <div className="border-t border-[#E5E7EB] pt-6 space-y-2">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">2. Company</h3>
                <p className="text-gray-600">Initiates the hiring cycle by posting jobs. They can manage applicants directly
                  or assign requisitions to external vendors.</p>
              </div>
              <div className="border-t border-[#E5E7EB] pt-6 space-y-2">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">3. Vendor</h3>
                <p className="text-gray-600">Agencies that receive job orders from companies. They delegate these jobs to
                  internal or contracted recruiters.</p>
              </div>
              <div className="border-t border-[#E5E7EB] pt-6 space-y-2">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">4. Recruiter</h3>
                <p className="text-gray-600">The active sourcer. They search for candidates, screen them using AI tools, and
                  submit qualified profiles up the chain.</p>
              </div>
              <div className="border-t border-[#E5E7EB] pt-6 space-y-2">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">5. Candidate</h3>
                <p className="text-gray-600">The end-user seeking employment. They apply to jobs, upload resumes, and engage
                  with recruiters or companies directly.</p>
              </div>
            </div>
          </section>
        </div>
      
        </>
    );
}
