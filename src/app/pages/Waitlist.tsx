import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Waitlist() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('business');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Mock submission
            setTimeout(() => setSubmitted(true), 800);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 font-['Inter'] flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">

                {/* Left Side: Content */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative z-10">
                        <h1 className="text-3xl font-bold mb-6">Join the Future of Liquidity</h1>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Be the first to access Liqwik's global digital exchange. Secure your spot to trade receivables instantly.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Instant account verification",
                                "Early access to high-yield pools",
                                "0% platform fees for first 3 months"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle2 size={18} className="text-amber-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    {!submitted ? (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get Early Access</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                                        placeholder="name@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">I am a...</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setRole('business')}
                                            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${role === 'business'
                                                    ? 'bg-purple-50 border-purple-200 text-purple-700'
                                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                                }`}
                                        >
                                            Business
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setRole('investor')}
                                            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${role === 'investor'
                                                    ? 'bg-amber-50 border-amber-200 text-amber-700'
                                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                                }`}
                                        >
                                            Investor
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white py-3 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group mt-2"
                                >
                                    Join Waitlist
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                            <p className="text-slate-500">
                                Thanks for joining. We'll be in touch with your exclusive invite link soon.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-8 text-sm text-purple-600 font-medium hover:text-purple-700"
                            >
                                Register another email
                            </button>
                        </motion.div>
                    )}
                </div>

            </div>
        </div>
    );
}
