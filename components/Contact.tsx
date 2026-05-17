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
      className="py-32 md:py-48 px-6 md:px-10 border-t border-ink/10 bg-paper"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-4">
              ✱ Contact
            </p>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] tracking-tight mb-8">
              Let's build <span className="italic text-accent">something</span>
              .
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed mb-10 max-w-md">
              Open to full-time roles starting May 2026 and select consulting
              projects through Catalytic AI.
            </p>

            <div className="space-y-4 font-mono text-sm">
              
                href="mailto:amsalmohdn03@gmail.com"
                className="flex items-baseline gap-4 group"
              >
                <span className="text-muted text-xs uppercase tracking-wider w-20">
                  Email
                </span>
                <span className="link-underline">amsalmohdn03@gmail.com</span>
              </a>
              <div className="flex items-baseline gap-4">
                <span className="text-muted text-xs uppercase tracking-wider w-20">
                  Phone
                </span>
                <span>+1 (814) 441-2967</span>
              </div>
              
                href="https://www.linkedin.com/in/amsalmohammad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-4 group"
              >
                <span className="text-muted text-xs uppercase tracking-wider w-20">
                  LinkedIn
                </span>
                <span className="link-underline">/in/amsalmohammad</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-7 space-y-6 md:pl-10 md:border-l border-ink/10"
          >
            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                disabled={status === "sending"}
                className="w-full bg-transparent border-b border-ink/30 py-3 text-lg font-serif focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                disabled={status === "sending"}
                className="w-full bg-transparent border-b border-ink/30 py-3 text-lg font-serif focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                disabled={status === "sending"}
                className="w-full bg-transparent border-b border-ink/30 py-3 text-lg font-serif focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-mono text-sm uppercase tracking-wider px-8 py-3 bg-ink text-paper rounded-full hover:bg-accent transition-colors duration-300 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "sent" && (
                <span className="text-sm text-accent font-mono">
                  ✓ Message sent. I'll be in touch.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-700 font-mono">
                  ✗ {errorMsg}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}