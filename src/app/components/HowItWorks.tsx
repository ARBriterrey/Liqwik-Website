import { motion } from "motion/react";
import { FileText, Settings, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "1. Business Posts Invoice",
      desc: "Upload invoice and request instant liquidity.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Settings,
      title: "2. Liqwik Tokenizes",
      desc: "Smart contract validates and tokenizes the invoice.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "3. Investors Bid",
      desc: "Investors bid in real-time for yield at a discount.",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const roadmap = [
    { year: "2024", title: "Prototype" },
    { year: "2025", title: "MVP" },
    { year: "2026", title: "Live Pilot Markets" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 font-['Inter']">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-slate-900"
          >
            How Liqwik Works
          </motion.h2>
          <p className="text-lg text-slate-500">
            A seamless digital flow for next-gen liquidity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-amber-200 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl ${step.color} mb-8 flex items-center justify-center shadow-sm`}>
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
              <p className="text-slate-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Simplified Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 max-w-md mx-auto"
        >
          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-slate-900">{item.title}</span>
                <span className="text-gray-400">{item.year}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
