const experiences = [
  {
    company: "The Hershey Company",
    role: "Procurement Co-Op",
    location: "Hershey, PA",
    period: "Jun 2025 — Dec 2025",
    bullets: [
      "Performed PPV analysis across international plants, reducing variance by 15%.",
      "Led supplier RFPs after packaging redesigns, generating $1M in continuous improvement savings.",
      "Independently managed Hershey's $24M packaging tail spend — $3M in cost reductions.",
      "Drove late-stage differentiation project projected to save $5M annually.",
    ],
    tags: ["Procurement", "Supply Chain", "RFP"],
  },
  {
    company: "Catalytic AI",
    role: "Founder",
    location: "Dubai, UAE",
    period: "Mar 2024 — Jun 2025",
    bullets: [
      "Founded a 5-figure AI automation agency serving companies worldwide.",
      "Streamlined operations across multiple companies — 15% time efficiency gain.",
      "Built sector-specific automations driving 70% cost efficiency improvements.",
    ],
    tags: ["AI", "Automation", "Founder"],
  },
  {
    company: "GTI Fujairah",
    role: "Project Intern",
    location: "Fujairah, UAE",
    period: "Jun 2023 — Aug 2023",
    bullets: [
      "Calibrated flow meters and pressure safety valves — 15% reliability improvement, better OEE.",
      "Co-developed compliance manuals with QHSE — 50% reduction in safety incidents.",
      "Optimized venting practices during tank maintenance — 17% reduction in methane emissions.",
      "Analyzed workflow bottlenecks — 35% efficiency increase.",
    ],
    tags: ["Operations", "QHSE", "Energy"],
  },
  {
    company: "VFS Global",
    role: "Marketing Intern",
    location: "Dubai, UAE",
    period: "Jun 2021 — Aug 2021",
    bullets: [
      "Proposed customer segmentation strategy — 20% revenue increase the following year.",
      "Designed above-the-line marketing strategies — 10% customer growth.",
      "Built financial model evaluating feasibility of new strategies.",
    ],
    tags: ["Marketing", "Strategy"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 md:py-48 px-6 md:px-10 border-t border-ink/10 bg-ink text-paper relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight">
            Selected work
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/50 hidden md:block">
            ✱ 04 positions
          </p>
        </div>

        <div className="space-y-2">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="group grid md:grid-cols-12 gap-6 py-10 border-t border-paper/15 hover:bg-paper/[0.03] transition-colors duration-300 px-2"
            >
              <div className="md:col-span-1 font-mono text-xs text-paper/40 pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl font-light">
                  {exp.company}
                </h3>
                <p className="text-paper/60 text-sm mt-1 font-mono">
                  {exp.role}
                </p>
                <p className="text-paper/40 text-xs mt-2 font-mono">
                  {exp.location} · {exp.period}
                </p>
              </div>

              <div className="md:col-span-5">
                <ul className="space-y-2 text-paper/80 text-[15px] leading-relaxed">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-accent mt-2 shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 flex flex-wrap gap-1.5 items-start md:justify-end">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-paper/20 rounded-full text-paper/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
