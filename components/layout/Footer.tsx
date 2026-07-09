export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 py-8 text-center text-white">
      <p className="text-lg font-semibold">
        © {new Date().getFullYear()} Kashinath Hiremath
      </p>

      <p className="mt-2 text-gray-400">
        Built with Next.js • TypeScript • Tailwind CSS
      </p>
    </footer>
  );
}