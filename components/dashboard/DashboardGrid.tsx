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

const icons = {
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
          value={portfolio.summary.experience}
          subtitle="Years"
          // route="/experience"
        />

        <StatsCard
          title="Projects"
          value={portfolio.summary.projects}
          subtitle="Completed"
          // route="/projects"
        />

        <StatsCard
          title="Skills"
          value={portfolio.summary.skills}
          subtitle="Technologies"
          // route="/skills"
        />

        <StatsCard
          title="Companies"
          value={portfolio.summary.companies}
          subtitle="Worked With"
          // route="/experience"
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
      href={item.href}
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