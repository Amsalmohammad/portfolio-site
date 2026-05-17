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
          ? "bg-paper/80 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg italic tracking-tight">
          Amsal<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-wider">
          <li>
            <a href="#about" className="link-underline">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="link-underline">
              Work
            </a>
          </li>
          <li>
            <a href="#projects" className="link-underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="link-underline">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="text-sm font-mono uppercase tracking-wider px-4 py-2 border border-ink rounded-full hover:bg-ink hover:text-paper transition-colors duration-300"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
