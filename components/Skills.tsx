const skillGroups = [
  {
    category: "Technical",
    items: ["Arduino", "Power BI", "MATLAB", "SolidWorks", "LEAN Six Sigma"],
  },
  {
    category: "Supply Chain",
    items: [
      "Supply Chain Management",
      "Supplier Industrialization",
      "Logistics Operations",
    ],
  },
  {
    category: "Procurement",
    items: ["Contract Negotiation", "Purchase Order Creation", "RFP Management"],
  },
  {
    category: "Quality Metrics",
    items: ["OEE", "Cycle Time", "Throughput", "Capacity", "Yield"],
  },
];

const marqueeItems = [
  "Supply Chain",
  "✱",
  "Procurement",
  "✱",
  "LEAN Six Sigma",
  "✱",
  "AI Automation",
  "✱",
  "Power BI",
  "✱",
  "MATLAB",
  "✱",
  "SolidWorks",
  "✱",
  "Contract Negotiation",
  "✱",
];

export default function Skills() {
  return (
    <section className="border-t border-ink/10">
      {/* Marquee */}
      <div className="py-10 overflow-hidden border-b border-ink/10">
        <div className="flex marquee-track whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className={`mx-6 font-serif text-4xl md:text-5xl font-light ${
                item === "✱" ? "text-accent" : ""
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="py-32 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                ✱ Toolkit
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 leading-tight">
                What I <span className="italic">work with</span>
              </h2>
            </div>

            <div className="md:col-span-9 grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {skillGroups.map((g) => (
                <div key={g.category}>
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                    {g.category}
                  </h3>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="font-serif text-xl md:text-2xl font-light"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
