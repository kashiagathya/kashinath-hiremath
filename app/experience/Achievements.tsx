"use client";

export default function Achievements(){

const items=[
"Led enterprise engineering teams",
"Built scalable React & Next.js applications",
"Designed localization framework",
"Delivered Connected Vehicle Platforms",
"Mentored frontend engineers",
"Improved application performance"
];

return(

<section className="rounded-3xl bg-white border shadow-sm p-8">

<h2 className="text-3xl font-bold mb-8">

Career Highlights

</h2>

<div className="grid gap-5 md:grid-cols-2">

{items.map((item)=>(

<div
key={item}
className="rounded-2xl border p-5 bg-slate-50"
>

✓ {item}

</div>

))}

</div>

</section>

);

}