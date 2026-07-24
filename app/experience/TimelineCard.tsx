"use client";

import { Building2, Calendar } from "lucide-react";

interface Job {
  designation: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface Props {
  job: Job;
}

export default function TimelineCard({job}:Props){

  return(

<div className="rounded-3xl bg-white border shadow-sm p-8 hover:shadow-xl transition">

<div className="flex justify-between flex-wrap">

<div>

<h3 className="text-2xl font-bold">
{job.designation}
</h3>

<p className="mt-2 flex items-center gap-2 text-blue-600">

<Building2 size={18}/>

{job.company}

</p>

</div>

<div className="flex items-center gap-2 text-slate-500">

<Calendar size={18}/>

{job.duration}

</div>

</div>

<p className="mt-6 leading-8 text-slate-600">
{job.description}
</p>

<div className="mt-6 flex flex-wrap gap-3">

{job.technologies.map((tech:string)=>(

<span
key={tech}
className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
>

{tech}

</span>

))}

</div>

</div>

);

}