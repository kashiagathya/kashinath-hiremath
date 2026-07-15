import portfolio from "@/lib/portfolio";

import DashboardCard from "./DashboardCard";
import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";

import {
  User,
  Briefcase,
  FolderGit2,
  BrainCircuit,
  FileText,
  Mail,
} from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  User: <User size={24} />,
  Briefcase: <Briefcase size={24} />,
  FolderGit2: <FolderGit2 size={24} />,
  BrainCircuit: <BrainCircuit size={24} />,
  FileText: <FileText size={24} />,
  Mail: <Mail size={24} />,
};

export default function DashboardGrid() {
  return (
    <div className="space-y-10">

      {/* Stats */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Experience"
          value={String(portfolio.experience?.length || 0)}
          subtitle="Years"
          // route="/experience"
        />

        <StatsCard
          title="Projects"
          value={String(portfolio.projects?.length || 0)}
          subtitle="Completed"
          // route="/projects"
        />

        <StatsCard
          title="Skills"
          value={String(Object.values(portfolio.skills || {}).reduce((sum, category) => sum + (category.items?.length || 0), 0))}
          subtitle="Technologies"
          // route="/skills"
        />

        <StatsCard
          title="Education"
          value={String(portfolio.educations?.length || 0)}
          subtitle="Degrees"
          // route="/education"
        />

      </div>

      {/* Main */}

      <div className="grid gap-8 lg:grid-cols-3">

        <ProfileCard />

        <div className="lg:col-span-2">

          <div className="grid gap-8 md:grid-cols-2">

            {portfolio.dashboard.map((item) => {
  console.log(item);

  return (
    <DashboardCard
      key={item.id}
      title={item.title}
      description={item.description}
      href={item.route}
      icon={icons[item.icon]}
    />
  );
})}
          </div>

        </div>

      </div>

    </div>
  );
}