"use client";

import portfolio from "@/lib/portfolio";
import { Download } from "lucide-react";

export default function ResumeCTA() {

return(

<section className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 p-12 text-center text-white">

<h2 className="text-4xl font-bold">

Interested in working together?

</h2>

<p className="mt-5 text-slate-300">

Download my latest resume to learn more about my professional experience.

</p>

<a
href={portfolio.personal.resume.file}
className="inline-flex items-center gap-3 mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700"
>

<Download size={20}/>

Download Resume

</a>

</section>

);

}