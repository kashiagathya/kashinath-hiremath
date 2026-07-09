import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold text-slate-900"
        >
          <span>🚀</span>
          <span>Kashinath Hiremath</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/kashiagathya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 transition hover:text-blue-600"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/kashihiremath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 transition hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Placeholder */}
        <div className="md:hidden">
          <button className="rounded-md border px-3 py-2 text-sm font-medium">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}