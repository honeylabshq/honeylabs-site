"use client";

import { motion } from "framer-motion";

function OssBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/8 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
      <span className="h-1 w-1 rounded-full bg-emerald-400" />
      Open Source
    </span>
  );
}

function ProprietaryBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-threat/50 bg-threat/8 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-threat shadow-[0_0_12px_rgba(255,77,0,0.25)]">
      <span className="h-1 w-1 rounded-full bg-threat shadow-[0_0_6px_rgba(255,77,0,0.8)]" />
      Proprietary
    </span>
  );
}

function SensorNode({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" strokeLinecap="round" />
          <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>
      <p className="text-xs font-semibold text-emerald-300">Sensor</p>
      <p className="text-[10px] text-slate-500">Internet Probe</p>
    </motion.div>
  );
}

function EnricherNode({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 rounded-xl border border-electric/30 bg-electric/5 p-4"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-electric/30 bg-electric/10 text-electric shadow-[0_0_16px_rgba(0,210,255,0.35)]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          <circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="14" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="10" cy="18" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <p className="text-sm font-semibold text-electric">Enricher</p>
      <p className="text-[10px] text-slate-500">Normalisation &amp; Context</p>
      <OssBadge />
    </motion.div>
  );
}

function ConnectorLine() {
  return (
    <div className="relative mx-auto h-8 w-px md:h-10">
      <div className="absolute inset-0 border-l border-dashed border-slate-700/60" />
      <motion.div
        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_12px_rgba(0,210,255,0.8)]"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ProtocolLabel() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-surface/80 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-slate-500">
      <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5 text-emerald-400">
        <rect x="2" y="5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      TLS / HTTPS
    </span>
  );
}

export default function Architecture() {
  return (
    <section aria-label="Architecture" className="space-y-8">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
            Open Source Foundation. Proprietary Intelligence.
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            Our sensor and enrichment layers are fully open source. The
            correlation engine that turns raw probes into pre-public threat
            intelligence is where HoneyLabs adds value.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-electric shadow-[0_0_20px_rgba(0,210,255,0.25)]">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_8px_rgba(0,210,255,0.9)]" />
          Open Core Architecture
        </div>
      </div>

      {/* Pipeline diagram */}
      <div className="rounded-2xl border border-slate-800 bg-surface/60 p-6 md:p-8">
        {/* Desktop layout */}
        <div className="hidden md:block">
          {/* Row 1: Sensors */}
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <OssBadge />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <SensorNode delay={0} />
                <SensorNode delay={0.07} />
                <SensorNode delay={0.14} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <OssBadge />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <SensorNode delay={0.05} />
                <SensorNode delay={0.12} />
                <SensorNode delay={0.19} />
              </div>
            </div>
          </div>

          {/* Connectors: Sensors -> Enrichers */}
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col items-center py-2">
              <ConnectorLine />
              <ProtocolLabel />
              <ConnectorLine />
            </div>
            <div className="flex flex-col items-center py-2">
              <ConnectorLine />
              <ProtocolLabel />
              <ConnectorLine />
            </div>
          </div>

          {/* Row 2: Enrichers */}
          <div className="grid grid-cols-2 gap-12">
            <div className="flex justify-center">
              <div className="w-48">
                <EnricherNode delay={0.25} />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48">
                <EnricherNode delay={0.3} />
              </div>
            </div>
          </div>

          {/* Connectors: Enrichers -> HoneyLabs */}
          <div className="flex items-center justify-center gap-0 py-2">
            <div className="flex flex-1 flex-col items-end">
              <div className="relative h-10 w-1/2">
                <div className="absolute bottom-0 left-0 right-0 top-0 border-b border-r border-dashed border-slate-700/60 rounded-br-2xl" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <ProtocolLabel />
              <ConnectorLine />
            </div>
            <div className="flex flex-1 flex-col items-start">
              <div className="relative h-10 w-1/2">
                <div className="absolute bottom-0 left-0 right-0 top-0 border-b border-l border-dashed border-slate-700/60 rounded-bl-2xl" />
              </div>
            </div>
          </div>

          {/* Row 3: HoneyLabs Engine */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="flex w-72 flex-col items-center gap-3 rounded-2xl border border-threat/40 bg-threat/5 p-5 shadow-[0_0_40px_rgba(255,77,0,0.1)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-threat/40 bg-threat/10 text-threat shadow-[0_0_24px_rgba(255,77,0,0.4)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <p className="text-base font-semibold text-slate-100">HoneyLabs</p>
              <p className="text-[11px] text-slate-500">Correlation Engine &amp; Database</p>
              <ProprietaryBadge />
              <p className="mt-1 text-center text-[10px] leading-relaxed text-slate-600">
                Correlates, scores, and surfaces pre-public exploit signals from
                all connected sensors and enrichers.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mobile layout — stacked vertical */}
        <div className="flex flex-col items-center gap-1 md:hidden">
          <div className="w-full space-y-2">
            <div className="flex items-center justify-center">
              <OssBadge />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <SensorNode delay={0} />
              <SensorNode delay={0.05} />
              <SensorNode delay={0.1} />
            </div>
          </div>

          <ConnectorLine />
          <ProtocolLabel />
          <ConnectorLine />

          <div className="w-56">
            <EnricherNode delay={0.15} />
          </div>

          <ConnectorLine />

          <div className="w-full space-y-2">
            <div className="flex items-center justify-center">
              <OssBadge />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <SensorNode delay={0.1} />
              <SensorNode delay={0.15} />
              <SensorNode delay={0.2} />
            </div>
          </div>

          <ConnectorLine />
          <ProtocolLabel />
          <ConnectorLine />

          <div className="w-56">
            <EnricherNode delay={0.25} />
          </div>

          <ConnectorLine />
          <ProtocolLabel />
          <ConnectorLine />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex w-full max-w-xs flex-col items-center gap-3 rounded-2xl border border-threat/40 bg-threat/5 p-5 shadow-[0_0_40px_rgba(255,77,0,0.1)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-threat/40 bg-threat/10 text-threat shadow-[0_0_24px_rgba(255,77,0,0.4)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="text-base font-semibold text-slate-100">HoneyLabs</p>
            <p className="text-[11px] text-slate-500">Correlation Engine &amp; Database</p>
            <ProprietaryBadge />
            <p className="mt-1 text-center text-[10px] leading-relaxed text-slate-600">
              Correlates, scores, and surfaces pre-public exploit signals from
              all connected sensors and enrichers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
