import { Building2, Zap, Cloud, Briefcase } from 'lucide-react';

export function TargetSegments() {
  return (
    <section className="py-12 px-6 bg-white font-['Inter']">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {/* Segment 1: SMEs */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Building2 size={28} strokeWidth={1} className="text-gray-400" />
            </div>
            <p className="text-sm text-black">SMEs</p>
          </div>

          {/* Segment 2: Startups */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Zap size={28} strokeWidth={1} className="text-gray-400" />
            </div>
            <p className="text-sm text-black">Startups</p>
          </div>

          {/* Segment 3: Asset Light */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Cloud size={28} strokeWidth={1} className="text-gray-400" />
            </div>
            <p className="text-sm text-black">Asset Light</p>
          </div>

          {/* Segment 4: Professional Services */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Briefcase size={28} strokeWidth={1} className="text-gray-400" />
            </div>
            <p className="text-sm text-black">Pro. Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
