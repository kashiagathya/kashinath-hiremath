"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import portfolio from "@/lib/portfolio";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface ContactMethod {
  title: string;
  icon: typeof Mail;
  accent: string;
  value: (contact: ContactInfo) => string;
  href: (contact: ContactInfo) => string;
  description: string;
  external?: boolean;
}

const methods: ContactMethod[] = [
  {
    title: "Email",
    icon: Mail,
    accent: "text-cyan-700 bg-cyan-100",
    value: (contact: ContactInfo) => contact.email,
    href: (contact: ContactInfo) => `mailto:${contact.email}`,
    description: "Best for detailed role or project discussions.",
  },
  {
    title: "Phone",
    icon: Phone,
    accent: "text-emerald-700 bg-emerald-100",
    value: (contact: ContactInfo) => contact.phone,
    href: (contact: ContactInfo) => `tel:${contact.phone}`,
    description: "Quick conversations and immediate follow ups.",
  },
  {
    title: "Location",
    icon: MapPin,
    accent: "text-amber-700 bg-amber-100",
    value: (contact: ContactInfo) => contact.location,
    href: () => "https://maps.google.com/?q=Bengaluru,Karnataka,India",
    description: "Available for remote and hybrid opportunities.",
    external: true,
  },
];

export default function ContactMethods() {
  const contact = portfolio.personal.contact as ContactInfo;

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">Preferred Contact Channels</h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Choose the channel that fits your context. Email works best for
        technical conversations and role details.
      </p>

      <div className="mt-8 space-y-4">
        {methods.map((method, index) => {
          const Icon = method.icon;

          return (
            <motion.a
              key={method.title}
              href={method.href(contact)}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group flex items-start gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
            >
              <span className={`rounded-xl p-3 ${method.accent}`}>
                <Icon size={20} />
              </span>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">{method.title}</h3>
                <p
                  className={`mt-1 text-slate-700 group-hover:text-cyan-700 ${
                    method.title === "Phone"
                      ? "underline underline-offset-4 decoration-2"
                      : ""
                  }`}
                >
                  {method.value(contact)}
                </p>
                <p className="mt-2 text-sm text-slate-500">{method.description}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}