const projects = [
  {
    title: "Catalytic AI",
    subtitle: "AI Automation Agency",
    description:
      "Founded a 5-figure agency building custom automation workflows for businesses globally. Operations that previously took days now run on autopilot.",
    metric: "70%",
    metricLabel: "cost efficiency gain",
    year: "2024 —",
    tags: ["AI Automation", "Ops Tooling", "Founder"],
  },
  {
    title: "Challenger Disaster Research",
    subtitle: "Materials Simulation",
    description:
      "Modeled the 1986 Space Shuttle Challenger O-ring failure using rubber bands at varying temperatures — analyzing how cold affects elasticity and material reliability.",
    metric: "1986",
    metricLabel: "case study",
    year: "2021 — 2022",
    tags: ["Materials Science", "Simulation", "Research"],
  },
  {
    title: "Penn State Robotics",
    subtitle: "Team Lead, Design & Strategy",
    description:
      "Led a 25-person robotics team through design, assembly, and competition. Secured 2nd place in innovative solutions with a 40% performance improvement.",
    metric: "2nd",
    metricLabel: "place — innovation",
    year: "2018 — 2021",
    tags: ["Robotics", "Team Lead", "Competition"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 md:py-48 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tight text-paper">
            Projects <span className="text-accent">&amp; research</span>
          </h2>
          <p className="label-mono hidden md:block">
            03 / projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group bg-surface border border-border rounded p-7 md:p-8 hover:border-accent transition-colors duration-500 min-h-[420px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")} / 03
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {p.year}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-2xl text-paper leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
                  {p.subtitle}
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div>
                <div className="mt-8 pt-6 border-t border-border mb-4">
                  <div className="font-sans font-bold text-4xl text-paper leading-none">
                    {p.metric}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted mt-2">
                    {p.metricLabel}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-ink border border-border text-muted rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
