import Image from "next/image";
import portfolio from "@/lib/portfolio";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">

      <div className="flex flex-col items-center">

        <Image
          src={portfolio.personal.photo}
          alt={portfolio.personal.name}
          width={128}
          height={128}
          className="mb-4 rounded-full border object-cover"
          priority
        />

        <h2 className="text-2xl font-bold">
          {portfolio.personal.name}
        </h2>

        <p className="mt-2 text-slate-500">
          {portfolio.personal.currentRole.designation}
        </p>

        <p className="mt-6 text-center text-sm text-slate-600">
          {portfolio.personal.bio}
        </p>

      </div>

    </div>
  );
}