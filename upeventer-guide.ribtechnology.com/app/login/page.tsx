export default function Login() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[44px] font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
          System Login
        </h1>
        <p className="text-[24px] text-blue-600 font-bold mb-8 leading-snug">
          Secure multi-role access for administrators and vendors.
        </p>
        <p className="text-gray-600 text-[19px] leading-relaxed max-w-4xl font-medium">
          The Upeventer platform features a centralized login portal that automatically routes users based on their assigned credentials. Whether you are an administrator managing the entire system or a vendor focusing on event registration, secure access is guaranteed.
        </p>
      </div>
      <section className="mb-20">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 tracking-tight">Login Interface</h2>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
          Users authenticate via a secure login form that requires verified credentials. The system supports multi-tenant configurations, routing the user to the correct instance upon successful authentication.
        </p>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-1 mb-10">
          <img
            src="/images/Login.png"
            alt="Login Page Interface"
            className="w-full h-auto rounded-xl border border-gray-100"
          />
        </div>
        <h3 className="text-[24px] font-bold text-gray-900 mb-3">Authentication Flow</h3>
        <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
          Upon entering the email and password, the system generates an encrypted JWT (JSON Web Token) payload. This token dictates the user's session validity and scope of access. For administrators, this unlocks the master dashboard. For vendors, this directs them strictly to their specific event submissions and analytics.
        </p>
      </section>
    </>
  );
}
