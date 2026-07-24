"use client";

import portfolio from "@/lib/portfolio";

export default function Footer() {
    return (
        <footer className="flex h-20 items-center justify-between border-t border-slate-200 bg-white px-8">
            {/* Left */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Created by {portfolio.personal.name} | &copy; {new Date().getFullYear()}
                </h1>

            </div>


        </footer>
    );
}