const projects = [
  {
    title: "Catalytic AI",
    subtitle: "AI Automation Agency",
    description:
      "Founded a 5-figure agency building custom automation workflows for businesses globally. Operations that previously took days now run on autopilot.",
    metric: "70%",
    metricLabel: "cost efficiency gain",
    year: "2024 —",
  },
  {
    title: "Challenger Disaster Research",
    subtitle: "Materials Simulation",
    description:
      "Modeled the 1986 Space Shuttle Challenger O-ring failure using rubber bands at varying temperatures — analyzing how cold affects elasticity and material reliability.",
    metric: "1986",
    metricLabel: "case study",
    year: "2021 — 2022",
  },
  {
    title: "Penn State Robotics",
    subtitle: "Team Lead, Design & Strategy",
    description:
      "Led a 25-person robotics team through design, assembly, and competition. Secured 2nd place in innovative solutions with a 40% performance improvement.",
    metric: "2nd",
    metricLabel: "place — innovation",
    year: "2018 — 2021",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 md:py-48 px-6 md:px-10 border-t border-ink/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-20">
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight">
            Projects <span className="italic text-accent">& research</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted hidden md:block">
            ✱ Side work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative bg-paper border border-ink/15 rounded-sm p-7 md:p-8 hover:border-accent transition-colors duration-500 min-h-[420px] flex flex-col justify-between"
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

                <h3 className="font-serif text-3xl font-light leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
                  {p.subtitle}
                </p>
                <p className="text-ink/75 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-ink/10">
                <div className="font-serif text-5xl font-light leading-none">
                  {p.metric}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted mt-2">
                  {p.metricLabel}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
