interface EnhancedGradientBackgroundProps {
  className?: string;
}

export function EnhancedGradientBackground({
  className = '',
}: EnhancedGradientBackgroundProps) {
  return (
    <div className={`${className} pointer-events-none overflow-hidden`}>
      {/* Multi-layer animated gradients */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
          animation: 'gradient-shift 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.3) 0%, transparent 60%), radial-gradient(circle at 50% 100%, rgba(168, 85, 247, 0.3) 0%, transparent 60%)',
          animation: 'gradient-shift-reverse 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'linear-gradient(45deg, rgba(245, 158, 11, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
          filter: 'blur(40px)',
          animation: 'gradient-pulse 10s ease-in-out infinite',
        }}
      />

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(10%, 10%) scale(1.1);
          }
          66% {
            transform: translate(-10%, 5%) scale(0.9);
          }
        }

        @keyframes gradient-shift-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-5%, -10%) scale(1.05);
          }
          66% {
            transform: translate(10%, -5%) scale(0.95);
          }
        }

        @keyframes gradient-pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
