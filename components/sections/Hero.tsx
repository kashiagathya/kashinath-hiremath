import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-50 pt-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-3 text-blue-600 font-semibold">
          Hello, I am
        </p>

        <h1 className="text-6xl font-bold">
          Kashinath Hiremath
        </h1>

        <h2 className="mt-4 text-3xl text-gray-600">
          Lead Engineer • Frontend Developer • AI Enthusiast
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-600">
          Building scalable web applications with React,
          Next.js, TypeScript and AI-powered solutions.
        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="#projects"
            className="rounded-lg bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="rounded-lg border px-8 py-4 transition hover:bg-gray-100"
          >
            Contact Me
          </Link>

        </div>

      </div>
    </section>
  );
}