export function Metrics() {
  return (
    <section className="py-16 px-6 bg-white font-['Inter']">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Metric 1 */}
          <div className="text-center">
            <div className="text-5xl mb-3 text-black">$56T</div>
            <p className="text-gray-500 text-sm">global opportunity</p>
          </div>

          {/* Metric 2 */}
          <div className="text-center">
            <div className="text-5xl mb-3 text-black">60–120d</div>
            <p className="text-gray-500 text-sm">Avg. payment delays</p>
          </div>

          {/* Metric 3 */}
          <div className="text-center">
            <div className="text-5xl mb-3 text-black">1 platform</div>
            <p className="text-gray-500 text-sm">for instant liquidity</p>
          </div>
        </div>
      </div>
    </section>
  );
}
