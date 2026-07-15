import portfolio from "@/lib/portfolio";

export default function ProjectsPage() {
  const projects = portfolio.projects;

  return (
    <main>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
        </div>
      ))}
    </main>
  );
}