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
      className="py-32 md:py-48 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tight text-paper">
            Selected work
          </h2>
          <p className="label-mono hidden md:block">
            02 / experience
          </p>
        </div>

        <div className="border-l border-border pl-6 space-y-16">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="relative">
              <span className="absolute -left-[1.8125rem] top-1.5 w-2.5 h-2.5 rounded-full bg-border border border-border group-hover:border-accent" />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                <div>
                  <span className="font-mono text-xs text-muted mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans font-semibold text-xl md:text-2xl text-paper">
                    {exp.company}
                  </span>
                </div>
                <p className="font-mono text-muted text-sm">
                  {exp.role} · {exp.location} · {exp.period}
                </p>
              </div>

              <ul className="space-y-2 mb-5">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-paper/60 text-sm leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-ink border border-border text-muted rounded"
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
