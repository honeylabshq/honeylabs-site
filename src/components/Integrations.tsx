"use client";

import { motion } from "framer-motion";

const integrations = [
  {
    id: "splunk",
    name: "Splunk",
    description: "Stream signals directly into your Splunk SIEM via HEC.",
    href: "/docs/integrations/splunk",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M0 12.414v2.46l9.165 5.392v-2.946L3.2 14.073v-.049l5.965-3.252V7.84L0 12.414zm14.835-5.4v2.946l5.965 3.247v.049l-5.965 3.198v2.932L24 14.874v-2.46l-9.165-5.4zM10.098 20.41l3.804 2.238 3.805-2.192V17.49l-3.805 2.192-3.804-2.238v2.966zm0-16.82v2.966l3.804 2.238 3.805-2.192V3.636l-3.805 2.192L10.098 3.59z" />
      </svg>
    ),
  },
  {
    id: "sentinel",
    name: "Microsoft Sentinel",
    description: "Ingest threat intelligence via the Sentinel Data Connector.",
    href: "/docs/integrations/sentinel",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.18l8.25 4.71v9.42L12 21.02V2.18zM3.75 7.37v9.26L12 21.02v-2.36L5.63 15V9.32L12 5.36V2.18L3.75 7.37z" />
      </svg>
    ),
  },
  {
    id: "qradar",
    name: "IBM QRadar",
    description: "Forward enriched IOCs via syslog or QRadar Pulse app.",
    href: "/docs/integrations/qradar",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 110 20 10 10 0 010-20zm0 3a7 7 0 100 14 7 7 0 000-14zm0 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
      </svg>
    ),
  },
  {
    id: "elastic",
    name: "Elastic Security",
    description: "Push detection rules and IOCs into your Elastic cluster.",
    href: "/docs/integrations/elastic",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12.61 7.204h7.836a5.4 5.4 0 00-1.327-2.478A6.39 6.39 0 0013.55 2.1a7.63 7.63 0 00-5.702 1.674l4.76 3.43h.002zm0 9.592l-4.762 3.43A7.63 7.63 0 0013.55 21.9a6.39 6.39 0 005.57-2.626 5.4 5.4 0 001.326-2.478H12.61zm-1.22-.563L5.6 12l5.79-4.233L17.18 12l-5.79 4.233zM7.1 18.7a5.48 5.48 0 01-1.63-2.9h-.002a5.5 5.5 0 010-7.596A5.48 5.48 0 017.1 5.3L3.34 2.586A11.97 11.97 0 000 12a11.97 11.97 0 003.34 9.414L7.1 18.7z" />
      </svg>
    ),
  },
  {
    id: "chronicle",
    name: "Google Chronicle",
    description: "Feed curated intelligence into Google SecOps via STIX/TAXII.",
    href: "/docs/integrations/chronicle",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 0L3 4.5v7.077C3 17.907 6.844 23.478 12 24c5.156-.522 9-6.093 9-12.423V4.5L12 0zm0 2.16l7 3.5v5.917c0 5.19-3.093 9.87-7 10.387V2.16zM5 6.16v5.417c0 4.063 1.83 7.898 4.5 9.73A11.58 11.58 0 015 11.577V6.16z" />
      </svg>
    ),
  },
  {
    id: "cortex",
    name: "Palo Alto Cortex XSIAM",
    description: "Enrich alerts and automate response via XSOAR playbooks.",
    href: "/docs/integrations/cortex-xsiam",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 0L2 6v12l10 6 10-6V6L12 0zm0 2.31l7.75 4.5v3.44L12 14.69 4.25 10.25V6.81L12 2.31zM4.25 12.06L12 16.5l7.75-4.44v3.13L12 19.69l-7.75-4.5v-3.13z" />
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section aria-label="SIEM integrations" className="space-y-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
            Plug Into Your Stack
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            One API, native connectors, or syslog. Get HoneyLabs
            intelligence into the tools you already run.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-electric shadow-[0_0_20px_rgba(0,210,255,0.25)]">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_8px_rgba(0,210,255,0.9)]" />
          API &amp; Native Connectors
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, idx) => (
          <motion.a
            key={integration.id}
            href={integration.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.07, ease: "easeOut" }}
            className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-surface/80 p-4 transition-all hover:border-electric/50 hover:shadow-[0_0_25px_rgba(0,210,255,0.12)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-background/60 text-slate-500 transition-colors group-hover:border-electric/40 group-hover:text-electric group-hover:shadow-[0_0_16px_rgba(0,210,255,0.2)]">
              {integration.logo}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-electric transition-colors">
                  {integration.name}
                </h3>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                {integration.description}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-600 transition-colors group-hover:text-electric/70">
                View Docs
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
