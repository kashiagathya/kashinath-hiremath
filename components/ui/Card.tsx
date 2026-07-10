import Link from "next/link";

type CardProps = {
  title: string;
  subtitle?: string;
  value?: string | number;
  href: string;
};

export default function Card({
  title,
  subtitle,
  value,
  href,
}: CardProps) {
  return (
    <Link href={href}>
      <div className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {value && (
          <p className="text-3xl font-bold text-blue-600">
            {value}
          </p>
        )}

        <h3 className="mt-2 text-xl font-semibold">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}