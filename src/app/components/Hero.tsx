import liqwikLogo from "@/assets/liqwik-logo.webp";
import { BackgroundPaths } from "@/app/components/ui/background-paths";

export function Hero() {
  return (
    <BackgroundPaths
      title="Liquidity Quickly."
      subtitle="A CAAS platform powering a Global Web3 Digital Exchange for Trading Accounts Receivables."
      buttonText="Join the Exchange"
      buttonLink="/waitlist"
      logo={liqwikLogo}
    />
  );
}
