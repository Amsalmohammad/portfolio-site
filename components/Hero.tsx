export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 overflow-hidden"
    >
      {/* Decorative marker */}
      <div
        className="absolute top-32 right-10 md:right-20 text-xs font-mono uppercase tracking-[0.3em] text-muted fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available — May 2026
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <p
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-8 fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Industrial Engineer · Penn State '26
        </p>

        <h1 className="font-serif text-[clamp(3rem,11vw,9rem)] leading-[0.92] tracking-tighter font-light">
          <span
            className="block fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Amsal
          </span>
          <span
            className="block italic fade-up text-accent"
            style={{ animationDelay: "0.5s" }}
          >
            Nizamuddin
          </span>
        </h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end">
          <p
            className="md:col-span-7 md:col-start-2 text-lg md:text-xl leading-relaxed text-ink/80 fade-up max-w-2xl"
            style={{ animationDelay: "0.7s" }}
          >
            I build systems where{" "}
            <span className="italic font-serif">operations</span> meet{" "}
            <span className="italic font-serif">intelligence</span> —
            previously at Hershey driving $9M in procurement savings, currently
            running an AI automation agency from Dubai.
          </p>

          <div
            className="md:col-span-3 md:col-start-10 flex flex-col gap-2 text-sm font-mono fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex justify-between border-b border-ink/20 pb-2">
              <span className="text-muted">Based</span>
              <span>State College, PA</span>
            </div>
            <div className="flex justify-between border-b border-ink/20 pb-2">
              <span className="text-muted">Origin</span>
              <span>Dubai, UAE</span>
            </div>
            <div className="flex justify-between border-b border-ink/20 pb-2">
              <span className="text-muted">Focus</span>
              <span>Ops × AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-[0.3em] text-muted fade-up flex flex-col items-center gap-2"
        style={{ animationDelay: "1.2s" }}
      >
        <span>Scroll</span>
        <span className="block w-px h-10 bg-ink/30" />
      </div>
    </section>
  );
}
