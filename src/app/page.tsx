import CampusIntelligenceExampleSection from "@/components/CampusIntelligenceExampleSection";
import CampusScrollHero from "@/components/CampusScrollHero";
import ComingSoonSection from "@/components/ComingSoonSection";
import FinalCtaFooterSection from "@/components/FinalCtaFooterSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ModulesSection from "@/components/ModulesSection";
import SecurityPrivacySection from "@/components/SecurityPrivacySection";
import "./landing.css";

export default function Home() {
  return (
    <div className="landing">
      <CampusScrollHero />
      <HowItWorksSection />
      <ModulesSection />
      <CampusIntelligenceExampleSection />
      <SecurityPrivacySection />
      <ComingSoonSection />
      <FinalCtaFooterSection />
    </div>
  );
}
