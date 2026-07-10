import Sidebar from "./Sidebar";
import Header from "./Header";
import Hero from "@/components/hero/Hero";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex flex-1 flex-col">

        <Header />

    <div className="space-y-8 p-8">

    <Hero />


</div>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>

      </div>
    </div>
  );
}