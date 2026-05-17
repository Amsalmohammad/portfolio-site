"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="font-sans font-semibold text-lg tracking-tight text-paper">
          Amsal<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-wider">
          <li>
            <a href="#about" className="text-muted hover:text-accent transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-muted hover:text-accent transition-colors duration-200">
              Work
            </a>
          </li>
          <li>
            <a href="#projects" className="text-muted hover:text-accent transition-colors duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-muted hover:text-accent transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="text-sm font-mono uppercase tracking-wider px-4 py-2 border border-border rounded-full text-paper hover:border-accent hover:text-accent transition-colors duration-300"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
