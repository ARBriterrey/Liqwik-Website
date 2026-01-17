import { motion } from "motion/react";

export function Roadmap() {
  const steps = [
    { year: "2024", title: "Prototype", desc: "Initial concept development and technical validation of the smart contract architecture." },
    { year: "2025", title: "MVP Launch", desc: "Launch of minimum viable product with core trading functionality and initial user onboarding." },
    { year: "2026", title: "Live Pilot Markets", desc: "Deploy in select markets (France, UAE) with strategic partners and full regulatory compliance." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white font-['Inter']">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Strategic Roadmap</h2>
          <p className="text-slate-400">Our path to redefining global liquidity.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-[59px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-8 items-start relative z-10"
              >
                <div className="w-20 md:w-32 flex-shrink-0 text-right pt-2">
                  <div className="text-2xl md:text-3xl font-bold text-white/20">{step.year}</div>
                </div>

                <div className="relative pt-2">
                  <div className="absolute -left-[37px] md:-left-[37px] top-4 w-4 h-4 rounded-full bg-purple-600 border-4 border-slate-900 shadow-xl"></div>
                  <div className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors w-full">
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
