import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function DualValueProp() {
  const businessBenefits = [
    "Unlock working capital without collateral, instantly.",
    "Access liquidity in minutes through smart contracts.",
    "Transparent pricing with blockchain-backed trust.",
    "No lengthy applications or credit checks."
  ];

  const investorBenefits = [
    "Access short-term, high-yield assets backed by real invoices.",
    "Transparent, real-time marketplace powered by Web3.",
    "Diversify portfolio with secured receivables.",
    "Trade with confidence using smart contract automation."
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 font-['Inter']">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Dual Value Proposition</h2>
          <p className="text-slate-500 text-lg">Creating value for both sides of the market.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* For Businesses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
              <span className="p-2 bg-blue-100 rounded-lg text-blue-600 text-sm font-bold uppercase tracking-wide">For Businesses</span>
            </h3>
            <ul className="space-y-6">
              {businessBenefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For Investors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
              <span className="p-2 bg-amber-100 rounded-lg text-amber-600 text-sm font-bold uppercase tracking-wide">For Investors</span>
            </h3>
            <ul className="space-y-6">
              {investorBenefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600">
                  <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
