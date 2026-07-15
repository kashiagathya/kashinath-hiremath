  
import ExperienceHero from "./ExperienceHero";
import ExperienceStats from "./ExperienceStats";
import Timeline from "./Timeline";
import TechnologyStack from "./TechnologyStack";
import Achievements from "./Achievements";
import ResumeCTA from "./ResumeCTA";
export default function ExperiencePage() {
  return (
    <div className="space-y-8">

      <ExperienceHero />

      <ExperienceStats />

      <Timeline />

      <TechnologyStack />

      <Achievements />

      <ResumeCTA />

    </div>
  );
}