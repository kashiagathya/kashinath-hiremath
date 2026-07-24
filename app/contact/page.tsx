import ContactAvailability from "./ContactAvailability";
import ContactCTA from "./ContactCTA";
import ContactHero from "./ContactHero";
import ContactMethods from "./ContactMethods";
import ContactSocial from "./ContactSocial";
import ContactStats from "./ContactStats";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-24 px-6 py-12">
      <ContactHero />

      <ContactStats />

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <ContactMethods />
        <ContactAvailability />
      </div>

      <ContactSocial />

      <ContactCTA />
    </main>
  );
}