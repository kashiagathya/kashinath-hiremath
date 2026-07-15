"use client";

import portfolio from "@/lib/portfolio";
import TimelineCard from "./TimelineCard";

export default function Timeline() {

  return (

    <section>

      <h2 className="mb-8 text-3xl font-bold">
        Career Timeline
      </h2>

      <div className="space-y-8">

        {portfolio.experience.map((job) => (

          <TimelineCard
            key={job.id}
            job={{...job, description: job.summary, duration: `${job.duration.from} - ${job.duration.to}`}}
          />

        ))}

      </div>

    </section>

  );

}