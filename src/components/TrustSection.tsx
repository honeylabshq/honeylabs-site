"use client";

import { motion } from "framer-motion";

const sources = [
  { id: "sensors", label: "GLOBAL SENSOR NETWORK", href: "#" },
  { id: "enrichment", label: "ENRICHMENT ENGINE", href: "#" },
  { id: "honeypots", label: "LOW-INTERACTION HONEYPOTS", href: "#" },
  { id: "correlation", label: "SIGNAL CORRELATION", href: "#" },
  { id: "scoring", label: "THREAT SCORING", href: "#" },
];

export default function TrustSection() {
  return (
    <section aria-label="Data sources" className="space-y-4">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Built In-House
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Every signal originates from our open-source sensor network,
            is enriched by our open-source pipeline, and correlated by our
            research engine.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          No third-party feeds. Pure first-party intelligence.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-surface/80 px-4 py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex items-center gap-8"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...sources, ...sources].map((source, idx) => (
            <a
              key={`${source.id}-${idx}`}
              href={source.href}
              className="group relative flex shrink-0 items-center justify-center rounded-lg px-4 py-1 text-sm font-semibold tracking-[0.18em]"
            >
              <span className="text-slate-500 group-hover:text-slate-100 transition">
                <span className="inline-block bg-gradient-to-r from-slate-500 to-slate-600 bg-clip-text text-transparent group-hover:from-electric group-hover:to-sky-400">
                  {source.label}
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
