
export default function companyPage() {
    return (
        <>
            
        <div className="py-8 space-y-12">
          <div>
            <h1 className="text-3xl font-semibold text-[#1A1A1A] mb-2">Company Portal</h1>
            <p className="text-xl text-gray-600">End-to-end employer hiring management.</p>
          </div>
          <section>
            <p className="text-gray-600 mb-6">Empowers employers to post jobs, track applicants, manage vendor
              relationships, and leverage AI-powered tools for smarter, faster recruitment decisions.</p>
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Key Modules</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
              <li>Job Posting &amp; Requisition Tracking</li>
              <li>Applicant Tracking System (ATS)</li>
              <li>Vendor &amp; Agency Management</li>
              <li>Recruitment Analytics</li>
              <li>AI Resume Screening Integration</li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Dashboard</h3>
            <p className="text-gray-600 mb-4">High-level summary of active jobs, recent applications, and overall hiring
              pipeline health.</p><img alt="Company Dashboard" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_dashboard.png" />
            <p className="text-sm text-gray-500 mb-8">Employer insights dashboard.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Job Management</h3>
            <p className="text-gray-600 mb-4">Centralized hub for all company job postings, including status tracking and
              quick actions.</p><img alt="Job Management" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_jobs.png" />
            <p className="text-sm text-gray-500 mb-8">View and manage all active requisitions.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Post Job</h3>
            <p className="text-gray-600 mb-4">Comprehensive job creation form capturing essential details like skills,
              budget, and location.</p><img alt="Post Job" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_post_job.png" />
            <p className="text-sm text-gray-500 mb-8">Interface for creating a new job listing.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Recruiters</h3>
            <p className="text-gray-600 mb-4">Manage partnerships with individual recruiters and track their candidate
              submissions.</p><img alt="Recruiters" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_recruiters.png" />
            <p className="text-sm text-gray-500 mb-8">Recruiter relationship management.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Vendors</h3>
            <p className="text-gray-600 mb-4">Track active contracts and engagement with external recruitment agencies.</p>
            <img alt="Vendors" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_vendors.png" />
            <p className="text-sm text-gray-500 mb-8">Vendor agency tracking interface.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Analytics</h3>
            <p className="text-gray-600 mb-4">In-depth visualizations of recruitment performance, time-to-hire, and pipeline
              bottlenecks.</p><img alt="Analytics" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_analytics.png" />
            <p className="text-sm text-gray-500 mb-8">Data-driven recruitment analytics.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">AI Tools</h3>
            <p className="text-gray-600 mb-4">Intelligent matching engine that scans the candidate pool to identify best-fit
              profiles.</p><img alt="AI Tools" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_ai_tools.png" />
            <p className="text-sm text-gray-500 mb-8">AI-driven candidate matching.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Smart Search</h3>
            <p className="text-gray-600 mb-4">Advanced search tool using natural language to find candidates based on
              specific criteria.</p><img alt="Smart Search" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_smart_search.png" />
            <p className="text-sm text-gray-500 mb-8">Semantic candidate search functionality.</p>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Bulk Analysis</h3>
            <p className="text-gray-600 mb-4">Batch processing tool for uploading and scoring multiple resumes
              simultaneously.</p><img alt="Bulk Analysis" loading="lazy" width="1200" height="800" decoding="async" data-nimg="1" className="rounded-xl border-[#E5E7EB] shadow-sm mt-4 mb-2 w-full h-auto"  src="/images/company_bulk_analysis.png" />
            <p className="text-sm text-gray-500 mb-8">Bulk resume upload and AI analysis.</p>
          </section>
        </div>
      
        </>
    );
}
