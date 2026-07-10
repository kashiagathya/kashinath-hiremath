interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
}

export default function StatsCard({
  title,
  value,
  subtitle,
}: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-5xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-2 text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}