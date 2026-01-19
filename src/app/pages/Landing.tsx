import { Hero } from '../components/Hero';
import { motion } from 'motion/react';

export function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Working Capital Section */}
      <section className="py-16 px-6 bg-white font-['Inter']">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* The Working Capital Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-black mb-2">
              The Working Capital Problem: <span className="font-normal">Businesses deliver, but wait 60-120 days for payment.</span>
            </h3>
            <p className="text-gray-400">
              Unlock cash now—no more waiting on slow payments.
            </p>
          </motion.div>

          {/* Liqwik Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-black mb-2">
              Liqwik offers instant liquidity via a smart contract exchange.
            </h3>
            <p className="text-gray-400">
              Sell your invoices. Get paid instantly. Disrupting a $56 Trillion market.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
