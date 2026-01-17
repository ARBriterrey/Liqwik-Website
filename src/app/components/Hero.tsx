import { motion } from "motion/react";
import { Link } from "react-router-dom";
import liqwikLogo from "@/assets/liqwik-logo.webp";

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 font-['Inter'] bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <img
            src={liqwikLogo}
            alt="Liqwik Logo"
            className="w-72 h-72 md:w-96 md:h-96 object-contain"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-amber-500"
        >
          Liquidity Quickly.
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl mb-16 text-purple-600 max-w-2xl mx-auto leading-relaxed"
        >
          A CAAS platform powering a Global Web3 Digital Exchange for Trading Accounts Receivables.
        </motion.h2>

        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
            The Problem: Businesses provide services but wait 60–120 days to get paid.
          </h3>
          <p className="text-gray-400 text-lg">
            This lag starves growth-ready companies of essential working capital.
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
            The Solution: Instantly unlock working capital by selling invoices on Liqwik's smart contract digital exchange.
          </h3>
          <p className="text-gray-400 text-lg">
            Immediate cash—no collateral—through blockchain-powered automation.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full h-px bg-gray-200 mb-16"
        ></motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-4"
        >
          <h3 className="text-2xl font-bold text-black mb-2">Power liquidity now.</h3>
          <p className="text-gray-400 mb-6">
            Be the first to join Liqwik's next-gen Web3 capital market.
          </p>
          <Link
            to="/waitlist"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Join the Exchange
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
