import { Metrics } from '../components/Metrics';
import { TargetSegments } from '../components/TargetSegments';
import { HowItWorks } from '../components/HowItWorks';
import { DualValueProp } from '../components/DualValueProp';
import { AppInterface } from '../components/AppInterface';

export function Product() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <HowItWorks />
      <Metrics />
      <TargetSegments />
      <DualValueProp />
      <AppInterface />
    </div>
  );
}
