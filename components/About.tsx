export default function About() {
  return (
    <section
      id="about"
      className="py-32 md:py-48 px-6 md:px-10 border-t border-ink/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted sticky top-32">
              ✱ About
            </p>
          </div>

          <div className="md:col-span-9 space-y-8 text-2xl md:text-3xl leading-[1.35] font-serif font-light">
            <p>
              I'm an Industrial Engineering senior at{" "}
              <span className="italic">Penn State</span>, finishing in May
              2026. My work sits where supply chains, procurement, and
              automation overlap.
            </p>
            <p>
              At <span className="italic">The Hershey Company</span>, I ran
              PPV analysis across international plants, led supplier RFPs, and
              managed a <span className="text-accent">$24M</span> packaging
              portfolio independently — delivering{" "}
              <span className="text-accent">$9M+</span> in cost reductions and
              projected savings across my co-op.
            </p>
            <p>
              On the side, I run <span className="italic">Catalytic AI</span>,
              an automation agency I started in Dubai. We build operational
              workflows for companies worldwide — the kind of work I'd be
              doing anyway, productized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
