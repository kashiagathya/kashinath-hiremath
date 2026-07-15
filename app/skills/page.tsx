import portfolio from "@/lib/portfolio";

export default function SkillsPage() {
  const skills = portfolio.skills;

  return (
    <main>
      <h1>Skills</h1>
      <div>
        {Object.entries(skills).map(([key, category]) => (
          <section key={key}>
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}