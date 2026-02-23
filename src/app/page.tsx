"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Globe2, Zap } from "lucide-react";
import Radar from "@/components/Radar";
import Handover from "@/components/Handover";
import TrustSection from "@/components/TrustSection";
import Integrations from "@/components/Integrations";
import Architecture from "@/components/Architecture";
import LaunchBanner from "@/components/LaunchBanner";

type LeadStatus = "RESEARCH ONLY" | "PRE-EXPLOIT" | "EXPLOITED";

export type Lead = {
  id: string;
  status: LeadStatus;
  port: string;
  target: string;
  discoveredAt: string;
};

export const LEADS: Lead[] = [
  {
    id: "1",
    status: "RESEARCH ONLY",
    port: "443",
    target: "edge-gateway.eu-west-1",
    discoveredAt: "09:14 UTC \u00b7 24h lead",
  },
  {
    id: "2",
    status: "PRE-EXPLOIT",
    port: "8443",
    target: "vpn-core.ap-southeast-2",
    discoveredAt: "11:02 UTC \u00b7 36h lead",
  },
  {
    id: "3",
    status: "EXPLOITED",
    port: "5985",
    target: "ot-bridge.plant-03",
    discoveredAt: "00:47 UTC \u00b7 2h lead",
  },
  {
    id: "4",
    status: "RESEARCH ONLY",
    port: "22",
    target: "ssh-bastion.us-central",
    discoveredAt: "03:18 UTC \u00b7 72h lead",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-slate-50">
      <LaunchBanner />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-10 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-64 w-64 rounded-full bg-electric/20 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-threat/25 blur-3xl" />
        </div>

        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_18px_rgba(0,210,255,0.9)]" />
            <span>HoneyLabs</span>
          </div>
          <nav className="flex items-center gap-5 text-xs md:text-sm text-slate-400">
            <button className="hidden items-center gap-1 rounded-full border border-slate-800 bg-surface/60 px-3 py-1 text-xs text-slate-300 backdrop-blur md:inline-flex hover:border-slate-600">
              <Activity className="h-3.5 w-3.5 text-electric" />
              Live Signals
            </button>
            <button className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-electric">
              API Docs
            </button>
          </nav>
        </header>

        <section aria-label="Hero" className="grid flex-1 gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs text-electric shadow-[0_0_30px_rgba(0,210,255,0.4)]">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_rgba(0,210,255,0.9)]" />
              <span>Pre-Public Threat Intelligence</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                See the Exploit
                <span className="block text-transparent bg-gradient-to-r from-electric via-sky-400 to-slate-100 bg-clip-text">
                  Before the CVE.
                </span>
              </h1>
              <p className="max-w-xl text-balance text-sm text-slate-400 sm:text-base">
                HoneyLabs combines open-source sensors and enrichment with
                a custom-built correlation engine.{" "}
                <span className="font-semibold text-slate-200">
                  We surface exploit signals hours to days before public
                  disclosure
                </span>
                {" - "}enriched, de-duplicated, and ready for your pipeline.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@honeylabs.net?subject=HoneyLabs%20Early%20Access%20Request&body=Hi%20HoneyLabs%20team%2C%0A%0AI%27d%20like%20early%20access%20to%20the%20platform.%0A%0A-%20"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-electric via-sky-400 to-electric px-5 py-2.5 text-sm font-medium text-slate-900 shadow-[0_0_30px_rgba(0,210,255,0.45)] transition hover:shadow-[0_0_40px_rgba(0,210,255,0.7)]"
              >
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 animate-[shimmer_2.5s_linear_infinite]" />
                </span>
                <span className="relative">Request Early Access</span>
                <ArrowRight className="relative h-4 w-4" />
              </a>
              <a
                href="https://intel.honeylabs.net:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-surface/70 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur hover:border-electric/70"
              >
                <Zap className="h-4 w-4 text-electric" />
                View Live Demo
              </a>
            </div>

            <div className="grid gap-4 text-xs text-slate-400 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-surface/80 p-3">
                <div className="mb-1 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  <Globe2 className="h-3.5 w-3.5 text-electric" />
                  Global Sensors
                </div>
                <p className="text-sm font-semibold text-slate-100">
                  3+ Continents
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Open-source sensors deployed across perimeter &amp; OT edge.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-surface/80 p-3">
                <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Ingestion Rate
                </div>
                <p className="text-sm font-semibold text-slate-100">
                  500k+ Probes/Week
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  De-duplicated, enriched, and scored before reaching your SIEM.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-surface/80 p-3">
                <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Focus
                </div>
                <p className="text-sm font-semibold text-slate-100">
                  Pre-Public Exploits
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Active exploitation signals, not noise. No phishing, no spam.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <Radar />
          </motion.div>
        </section>

        <section aria-label="Architecture" className="mt-16">
          <Architecture />
        </section>

        <section aria-label="Live threat feed" className="mt-16 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
          <Handover />

          <div className="rounded-2xl border border-slate-800 bg-surface/90 p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
            <div className="mb-3 flex items-center justify-between gap-2 text-xs text-slate-400">
              <span className="font-mono">
                Live&nbsp;Lead&nbsp;Feed
                <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
              </span>
              <span>Streaming from HoneyLabs sensors</span>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-800/70 bg-black/40">
              <table className="min-w-full text-left text-xs font-mono">
                <thead className="bg-slate-950/80 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  <tr>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Port</th>
                    <th className="px-3 py-2">Target</th>
                    <th className="px-3 py-2">Discovery Time</th>
                  </tr>
                </thead>
                <tbody>
                  {LEADS.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-t border-slate-800/80 hover:bg-slate-900/40"
                    >
                      <td className="px-3 py-2">
                        <StatusBadge status={lead.status} />
                      </td>
                      <td className="px-3 py-2 align-middle">
                        <span className="rounded bg-slate-900/60 px-2 py-0.5 text-[11px] text-slate-200">
                          :{lead.port}
                        </span>
                      </td>
                      <td className="px-3 py-2 align-middle">
                        <span className="text-[11px] text-slate-300">
                          {lead.target}
                        </span>
                      </td>
                      <td className="px-3 py-2 align-middle">
                        <span className="text-[11px] text-slate-500">
                          {lead.discoveredAt}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-[11px] text-slate-500">
              Continuously updated from the HoneyLabs sensor network.
            </p>
          </div>
        </section>

        <section aria-label="SIEM integrations" className="mt-16">
          <Integrations />
        </section>

        <section aria-label="About our research" className="mt-16">
          <TrustSection />
        </section>

        <footer className="mt-16 flex flex-col justify-between gap-4 border-t border-slate-900/80 pt-4 text-[11px] text-slate-500 md:flex-row">
          <span>&copy; {new Date().getFullYear()} HoneyLabs. All rights reserved.</span>
          <div className="flex gap-4">
            <button className="hover:text-slate-300">API Access</button>
            <button className="hover:text-slate-300">Security</button>
            <button className="hover:text-slate-300">Legal</button>
          </div>
        </footer>
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: LeadStatus }) {
  const base =
    "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em]";

  if (status === "RESEARCH ONLY") {
    return (
      <span
        className={`${base} border-emerald-500/50 bg-emerald-500/10 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.35)]`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {status}
      </span>
    );
  }

  if (status === "PRE-EXPLOIT") {
    return (
      <span
        className={`${base} border-electric/60 bg-electric/10 text-electric shadow-[0_0_30px_rgba(0,210,255,0.4)]`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-electric" />
        {status}
      </span>
    );
  }

  return (
    <span
      className={`${base} border-threat/70 bg-threat/10 text-threat shadow-[0_0_30px_rgba(255,77,0,0.5)]`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-threat" />
      {status}
    </span>
  );
}
