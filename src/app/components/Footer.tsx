import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900 font-['Inter'] text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-widest">LIQWIK</div>
        <div className="flex gap-8 text-sm">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="mailto:info@liqwik.com" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-sm">
          © 2025 Liqwik. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
