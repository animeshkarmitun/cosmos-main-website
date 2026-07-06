import HeroLight from "./HeroLight";
import NewsTicker from "./NewsTicker";
import AboutLight from "./AboutLight";
import CodeOfGovernance from "./CodeOfGovernance";
import StatsLight from "./StatsLight";
import BusinessUnitsLight from "./BusinessUnitsLight";
import ServicesLight from "./ServicesLight";
import WhyCosmosLight from "./WhyCosmosLight";
import OurCommitment from "./OurCommitment";
import FounderLight from "./FounderLight";
import WHSPolicy from "./WHSPolicy";
import ContactLight from "./ContactLight";

interface Home2Props {
  onNavigate: (page: string) => void;
  onDialogueClick: () => void;
  onFoundationClick: () => void;
}

export default function Home2({ onNavigate, onDialogueClick, onFoundationClick }: Home2Props) {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <div className="relative z-40 pt-24 md:pt-28 -mb-24 md:-mb-28">
        <NewsTicker />
      </div>
      <HeroLight />
      <AboutLight />
      <CodeOfGovernance />
      <StatsLight />
      <BusinessUnitsLight onNavigate={onNavigate} />
      <ServicesLight />
      <WhyCosmosLight />
      <OurCommitment onDialogueClick={onDialogueClick} onFoundationClick={onFoundationClick} />
      <FounderLight />
      <WHSPolicy />
      <ContactLight />
    </main>
  );
}
