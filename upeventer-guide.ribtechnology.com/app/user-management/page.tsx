export default function UserManagement() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">User Management</h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">Centralized administrative control for vendor access and system users.</p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">The User Management dashboard provides administrators with the tools to oversee the platform's ecosystem. From approving new vendor registrations to managing internal staff permissions, this module ensures secure and efficient operations.</p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Management Interface</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img src="/images/AdminUserManagement.png" alt="User Management Data Table" className="w-full h-auto rounded-xl border border-gray-100" />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Core Functions</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">The data table aggregates all users across the platform. You can filter by role (e.g., Vendor, Attendee, Admin) or current account status (Active, Pending, Suspended). Security protocols dictate that any Vendor making destructive API calls or failing payment validations can be instantly suspended from this interface, immediately revoking their JWT access.</p>
      </section>
    </>
  );
}
