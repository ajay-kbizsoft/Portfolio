"use client";

import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-gray-800">
        <p className="text-gray-400">
          © 2026 Your Name. Built with{" "}
          <span className="text-red-500">❤</span> using Next.js
        </p>
      </footer>
    </main>
  );
}
