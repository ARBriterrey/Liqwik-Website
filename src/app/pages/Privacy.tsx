export function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16 px-6 font-['Inter']">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-6">
            Last updated: January 13, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Introduction</h2>
            <p className="text-slate-700 leading-relaxed">
              Liqwik ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Personal Data: Name, email address, and other contact information you voluntarily provide</li>
              <li>Usage Data: Information about how you access and use our website</li>
              <li>Device Information: Information about your device, browser, and IP address</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our platform and updates</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@liqwik.com" className="text-purple-600 hover:text-purple-700 underline">
                privacy@liqwik.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
