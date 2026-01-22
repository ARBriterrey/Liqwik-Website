import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-purple-700 flex items-center gap-1 hover:text-purple-800 transition-colors z-50 relative">
            <span className="font-['Inter'] font-bold text-2xl">Liqwik</span>
            <span className="text-xs font-['Inter']">®</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-['Inter']">
            <Link to="/product" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link to="/waitlist" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 font-['Inter']">
              <Link
                to="/product"
                className="text-gray-800 hover:text-purple-700 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-purple-700 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="h-px bg-gray-100 my-2"></div>
              <Link to="/waitlist" className="bg-slate-900 text-white w-full py-3 rounded-full text-base font-medium hover:bg-slate-800 transition-colors text-center" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
