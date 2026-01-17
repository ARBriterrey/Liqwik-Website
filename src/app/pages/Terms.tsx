export function Terms() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16 px-6 font-['Inter']">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-6">
            Last updated: January 13, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Agreement to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By accessing or using Liqwik's platform and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Platform Description</h2>
            <p className="text-slate-700 leading-relaxed">
              Liqwik is a Contract-as-a-Service (CAAS) platform that provides a global Web3 digital exchange for trading accounts receivables. Our platform enables businesses to unlock instant liquidity by tokenizing and trading invoices through blockchain-powered smart contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">User Responsibilities</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Users of the Liqwik platform agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the security of their account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the platform for any fraudulent or illegal activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              Liqwik shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform. Our total liability shall not exceed the amount paid by you to Liqwik in the twelve months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Contact Information</h2>
            <p className="text-slate-700 leading-relaxed">
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@liqwik.com" className="text-purple-600 hover:text-purple-700 underline">
                legal@liqwik.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
