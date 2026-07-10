import portfolio from "@/lib/portfolio";

export default function ContactPage() {
  const about = portfolio.about;

  return (
    <main>
      <h1>{about.title}</h1>
      <p>{about.description}</p>
    </main>
  );
}