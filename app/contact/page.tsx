import portfolio from "@/lib/portfolio";

export default function ContactPage() {
  const contact = portfolio.personal.contact;

  return (
    <main>
      <h1>{contact.phone}</h1>
      <p>{contact.email}</p>
        <p>{contact.location}</p>
    </main>
  );
}