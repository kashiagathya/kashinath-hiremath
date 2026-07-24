"use client";

import Image from "next/image";
import portfolio from "@/lib/portfolio";
import { MapPin, Building2, Briefcase } from "lucide-react";

export default function AboutHero() {
    const { currentRole } = portfolio.personal;
    const { name, photo, tagline } = portfolio.personal;

    return (
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-8 md:flex-row">

                <Image
                    src={photo}
                    alt={name}
                    width={180}
                    height={180}
                    priority
                    className="h-44 w-44 rounded-3xl border border-slate-200 object-cover shadow-lg"
                />

                <div className="flex-1">

                    <h1 className="text-4xl font-bold text-slate-900">
                        {name}
                    </h1>

                    <p className="mt-2 text-xl text-blue-600 font-semibold">
                        {currentRole.designation}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-6 text-slate-600">

                        <div className="flex items-center gap-2">
                            <Building2 size={18} />
                            {currentRole.company}
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            {currentRole.location}
                        </div>

                        <div className="flex items-center gap-2">
                            <Briefcase size={18} />
                            {currentRole.employmentType}
                        </div>

                    </div>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {tagline}
                    </p>

                </div>

            </div>
        </section>
    );
}