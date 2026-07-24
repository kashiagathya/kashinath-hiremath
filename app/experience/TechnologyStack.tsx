"use client";

import portfolio from "@/lib/portfolio";

export default function TechnologyStack() {

const tech = [...new Set(

portfolio.experience.flatMap((item: { technologies: string[] })=>item.technologies)

)];

return(

<section className="rounded-3xl bg-white border shadow-sm p-8">

<h2 className="text-3xl font-bold mb-8">
Technology Stack
</h2>

<div className="flex flex-wrap gap-4">

{tech.map((item)=>(
<span
key={item}
className="rounded-full bg-slate-100 px-5 py-3 font-medium"
>
{item}
</span>
))}

</div>

</section>

);

}