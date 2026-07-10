import portfolio from "@/lib/portfolio";

export default function ResumePage() {
  const about = portfolio.about;

  return (
    <main>
      <h1>{about.title}</h1>
      <p>{about.description}</p>
    </main>
  );
}