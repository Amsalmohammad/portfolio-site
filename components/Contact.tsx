"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }]);

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }

    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-10 border-t border-border bg-ink"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="label-mono mb-4">05 / contact</p>
            <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tight text-paper leading-[0.95] mb-8">
              Let&apos;s build <span className="text-accent">something</span>.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
              Open to full-time roles starting May 2026 and select consulting projects through Catalytic AI.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:amsalmohdn03@gmail.com" className="flex items-baseline gap-4 group">
                <span className="text-muted text-xs uppercase tracking-wider w-20">Email</span>
                <span className="text-paper hover:text-accent transition-colors duration-200">amsalmohdn03@gmail.com</span>
              </a>
              <div className="flex items-baseline gap-4">
                <span className="text-muted text-xs uppercase tracking-wider w-20">Phone</span>
                <span className="text-paper">+1 (814) 441-2967</span>
              </div>
              <a href="https://www.linkedin.com/in/amsalmohammad" target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-4 group">
                <span className="text-muted text-xs uppercase tracking-wider w-20">LinkedIn</span>
                <span className="text-paper hover:text-accent transition-colors duration-200">/in/amsalmohammad</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-10 md:border-l border-border">
            {/* Cal.com CTA */}
            <div className="mb-10">
              <p className="label-mono mb-4">
                {"// prefer to talk? grab time directly →"}
              </p>
              <a
                href="https://cal.com/amsal-mohammad-7da80l/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto text-center font-mono text-sm uppercase tracking-wider px-8 py-3 border border-accent text-accent bg-transparent hover:bg-accent hover:text-ink transition-colors duration-300 rounded-full"
              >
                Book a 30-min call
              </a>
            </div>

            {/* Divider */}
            <div className="relative mb-10">
              <div className="border-t border-border" />
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-ink px-4 label-mono">
                {"// or send a message"}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">Name</label>
              <input
                name="name"
                type="text"
                required
                disabled={status === "sending"}
                className="w-full bg-surface border border-border text-paper py-3 px-4 text-base font-sans focus:outline-none focus:border-accent transition-colors rounded disabled:opacity-50"
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                disabled={status === "sending"}
                className="w-full bg-surface border border-border text-paper py-3 px-4 text-base font-sans focus:outline-none focus:border-accent transition-colors rounded disabled:opacity-50"
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                disabled={status === "sending"}
                className="w-full bg-surface border border-border text-paper py-3 px-4 text-base font-sans focus:outline-none focus:border-accent transition-colors resize-none rounded disabled:opacity-50"
              />
            </div>

            <div className="flex items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-mono text-sm uppercase tracking-wider px-8 py-3 bg-accent text-ink rounded-full hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "sent" && (
                <span className="text-sm text-accent font-mono">Message sent. I&apos;ll be in touch.</span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-400 font-mono">{errorMsg}</span>
              )}
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}
