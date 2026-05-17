export default function About() {
  return (
    <section
      id="about"
      className="py-32 md:py-48 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="label-mono sticky top-32">
              01 / about
            </p>
          </div>

          <div className="md:col-span-9 space-y-8 text-2xl md:text-3xl leading-relaxed font-sans font-light">
            <p className="text-paper">
              I&apos;m an Industrial Engineering senior at{" "}
              <span className="text-paper font-medium">Penn State</span>, finishing in May
              2026. My work sits where supply chains, procurement, and
              automation overlap.
            </p>
            <p className="text-paper/70">
              At <span className="text-paper font-medium">The Hershey Company</span>, I ran
              PPV analysis across international plants, led supplier RFPs, and
              managed a <span className="text-accent">$24M</span> packaging
              portfolio independently — delivering{" "}
              <span className="text-accent">$9M+</span> in cost reductions and
              projected savings across my co-op.
            </p>
            <p className="text-paper/70">
              On the side, I run <span className="text-paper font-medium">Catalytic AI</span>,
              an automation agency I started in Dubai. We build operational
              workflows for companies worldwide — the kind of work I&apos;d be
              doing anyway, productized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
