export default function FormManagement() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">Form Management &amp; Distribution</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Dynamic event form builder with multi-channel distribution.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">The Form Management module is the core of the Vendor experience. It allows vendors to create custom, drag-and-drop registration forms for their events and distribute shareable links via Email and WhatsApp — all from a single dashboard.</p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Vendor Dashboard</h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">The Vendor Dashboard is the central hub for managing all event forms. It shows key metrics at a glance — Total Forms, Total Registrations, and Active Forms — and provides a table listing every created form with its event name, date, location, field count, registration progress, status, and quick action buttons.</p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/VendorDashboard.png" alt="Vendor Dashboard with Form Management" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Create Dynamic Event Form</h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">Clicking the <strong>"+ Create New Form"</strong> button opens the form builder. Vendors start by entering the event's <strong>Basic Information</strong> — Event Title, URL Slug, Description, Event Date, Event Location, and Maximum Registrations. This metadata is tied to the generated form and its shareable URL.</p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/CreateDynamicForm.png" alt="Form Builder - Basic Information" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Form Fields — Drag &amp; Drop Builder</h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">The <strong>Form Fields</strong> tab is where vendors assemble their registration form. The left panel provides field types — <em>Text Input, Email, Phone, Long Text, Dropdown, Radio, and Checkbox</em>. Vendors drag these into the right panel to build their form. Each field can be marked as required, edited, or deleted. Fields are reorderable via drag handles.</p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/FormBuilderFields.png" alt="Form Builder - Drag and Drop Field Types" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Design — Customize Appearance</h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">The <strong>Design</strong> tab allows vendors to brand their form. They can set the <em>Background Color, Text Color, and Button Color</em> to match their event branding. A <strong>Logo Upload</strong> option allows embedding the event or company logo directly into the form header for a professional, branded look.</p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/FormBuilderDesign.png" alt="Form Builder - Design Customization" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Preview — Interactive Form Preview</h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">The <strong>Preview</strong> tab renders a live, interactive preview of the form with full validation. Vendors can test the exact user experience their attendees will have before publishing, ensuring data collection accuracy and a polished registration flow.</p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/FormBuilderPreview.png" alt="Form Builder - Live Preview" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Distribution — WhatsApp &amp; Email Sharing</h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">Once a form is published, vendors can distribute it using the action icons in the dashboard table. The platform provides an <strong>Event Knowledge Base for WhatsApp</strong> integration, where vendors enter a WhatsApp number, upload event-related PDF documents, and add descriptions. This enables AI-powered WhatsApp responses to attendee inquiries about the event. Additional sharing options include a direct link copy, email distribution, and registrant management.</p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/WhatsAppKnowledgeBase.png" alt="WhatsApp Knowledge Base Integration" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Action Icons Reference</h3>
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-6">
          <ul className="space-y-3 text-gray-600 text-[16px]">
            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold mt-0.5">👁️</span><span><strong>Preview</strong> — View the live registration form as attendees see it.</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold mt-0.5">🔗</span><span><strong>Copy Link</strong> — Copy the shareable form URL to clipboard for email or social media distribution.</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold mt-0.5">💬</span><span><strong>WhatsApp Knowledge Base</strong> — Configure AI-powered WhatsApp auto-responses with event PDFs and details.</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold mt-0.5">👥</span><span><strong>View Registrations</strong> — Access the list of all registered attendees for this event.</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold mt-0.5">⚙️</span><span><strong>Auto-Send</strong> — Toggle automatic badge delivery upon successful registration.</span></li>
            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold mt-0.5">🗑️</span><span><strong>Delete</strong> — Permanently remove the event form.</span></li>
          </ul>
        </div>
      </section>
    </>
  );
}
