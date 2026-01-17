import { motion } from "motion/react";

export function AppInterface() {
  return (
    <section className="py-24 px-6 bg-white font-['Inter'] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Side - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 blur-3xl opacity-30 transform scale-110"></div>
            <div className="relative w-80 mx-auto md:ml-0 h-[600px] bg-slate-900 rounded-[3rem] shadow-2xl border-8 border-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 w-32 h-8 bg-slate-950 rounded-b-xl z-20"></div>

              {/* Screen Content */}
              <div className="w-full h-full bg-slate-800 rounded-[2rem] overflow-hidden relative">
                {/* Header */}
                <div className="h-20 bg-slate-900 flex items-end p-4 pb-2">
                  <div className="text-white font-bold text-lg">Liqwik</div>
                </div>
                {/* Body */}
                <div className="p-4 space-y-4">
                  <div className="bg-slate-700/50 p-4 rounded-xl">
                    <div className="text-slate-400 text-xs mb-1">Total Liquidity</div>
                    <div className="text-2xl font-bold text-white">$1,240,500</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-700 p-3 rounded-lg flex justify-between items-center bg-gradient-to-r from-slate-700 to-slate-600">
                      <div className="text-slate-200 text-sm">Invoice #0023</div>
                      <div className="text-amber-400 font-bold">$12,000</div>
                    </div>
                    <div className="bg-slate-700 p-3 rounded-lg flex justify-between items-center bg-gradient-to-r from-slate-700 to-slate-600">
                      <div className="text-slate-200 text-sm">Invoice #0024</div>
                      <div className="text-amber-400 font-bold">$8,450</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block p-2 px-4 rounded-full bg-purple-50 text-purple-600 font-bold text-sm tracking-wide">
              MOBILE FIRST
            </div>
            <h2 className="text-5xl font-bold mb-8 text-slate-900 leading-tight">
              Enterprise Liquidity <br />
              <span className="text-slate-400">in Your Pocket.</span>
            </h2>
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
              <p>
                Our mobile-first platform brings enterprise-grade liquidity management to your fingertips. Manage your cash flow wherever you are.
              </p>
              <div className="pl-6 border-l-4 border-slate-200 space-y-4">
                <p>
                  <strong className="text-slate-900 block mb-1">Real-time Tracking</strong>
                  Track invoices, monitor bids, and receive instant payments through an intuitive dashboard.
                </p>
                <p>
                  <strong className="text-slate-900 block mb-1">Secure Access</strong>
                  Designed for business owners and investors who need secure, transparent, and lightning-fast access.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
