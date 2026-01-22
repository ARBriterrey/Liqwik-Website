import { motion } from "motion/react";
import { CheckCircle, Zap, Shield } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-20 px-6 bg-white font-['Inter']">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="w-12 h-1 bg-black mb-6"></div>
          <h1 className="text-5xl font-bold text-black mb-1">Liqwik</h1>
          <p className="text-xl text-gray-400">Fintech</p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <p className="text-gray-600 leading-relaxed">
            Liqwik is a global digital exchange that enables frictionless accounts receivable trading through an auction system. It enables efficient price discovery of current assets unlike today's systems of arbitrary and expensive pricing. As a CAAS solution, it enables unlocking of tied up liquidity for businesses globally through private contract mechanisms. Unlike other similar platforms, Liqwik provides a secondary market as well as fractional bidding. Liqwik transforms current models of working capital finance and enables a new asset class for retail investors.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-3 mb-12"
        >
          <div className="flex items-center gap-3 text-gray-600">
            <CheckCircle className="w-5 h-5 text-gray-400" />
            <span>Smart Contracts</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Zap className="w-5 h-5 text-gray-400" />
            <span>Instant Liquidity</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Shield className="w-5 h-5 text-gray-400" />
            <span>Trusted Tech</span>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-gray-400 mb-16"
        >
          <p>© 2025</p>
          <p>All Rights Reserved</p>
        </motion.div>

        {/* Founder Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16"
        >
          <h2 className="text-lg font-bold text-black mb-2">Founder Profile: Kumar Kittuswamy Ph.D.</h2>
          <a
            href="https://www.linkedin.com/in/kumarkittuswamy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 text-sm mb-4 inline-block"
          >
            LinkedIn
          </a>

          <div className="space-y-4 text-gray-600 leading-relaxed mt-4">
            <p>
              Kumar Kittuswamy Ph.D., Founder & Principal of Liqwik, is a global leader in financial innovation. As a Board Member of a $30B financial institution, he combines unmatched expertise in finance and blockchain technology.
            </p>
            <p>
              Kumar's doctoral thesis provides the intellectual foundation for Liqwik. His vision is to transform receivable trading using secure, smart contract-driven exchanges, making finance seamless and borderless.
            </p>
            <p>
              With a PhD in platform strategy and blockchain, Kumar leads Liqwik's mission to become the world's pre-eminent Contract-As-A-Service platform, built on trust and advanced technology.
            </p>
          </div>
        </motion.div>

        {/* The Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-lg font-bold text-black mb-4">The Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Liqwik's vision is to transform global working capital by providing a secure, efficient digital exchange for receivables—empowering businesses and investors through CAAS technology rooted in academic and industry expertise.
          </p>
        </motion.div>

        {/* Our Team & Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-lg font-bold text-black mb-6">Our Team & Partners</h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              The Development Team at Liqwik brings together experience in fintech, software engineering, and Web3. Each member is committed to cutting-edge solutions for secure trading.
            </p>
            <p>
              Our Advisors include thought leaders from finance and blockchain, guiding Liqwik's mission with rigor and vision.
            </p>
            <p>
              Key partners like Aximsoft accelerate our growth and ensure that Liqwik is built with best-in-class technology and support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
