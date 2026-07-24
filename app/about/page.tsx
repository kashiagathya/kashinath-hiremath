import AboutHero from "./AboutHero";
import ProfessionalSummary from "./ProfessionalSummary";
import CurrentRole from "./CurrentRole";
import Expertise from "./Expertise";
import CareerHighlights from "./CareerHighlights";


export default function AboutPage() {
  return (
    <div className="space-y-8">
      <AboutHero />
      <div className="grid gap-8 lg:grid-cols-2">
        <ProfessionalSummary />
        <CurrentRole />
      </div>
      <Expertise />
      <CareerHighlights />
    </div>
  );
}
