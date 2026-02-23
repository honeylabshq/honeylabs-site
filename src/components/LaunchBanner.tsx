"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Radio } from "lucide-react";

export default function LaunchBanner() {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-2xl border border-electric/40 bg-surface/95 shadow-[0_0_60px_rgba(0,210,255,0.15)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-electric/5 via-transparent to-transparent pointer-events-none" />

              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 rounded-full border border-slate-800 bg-background/80 p-1.5 text-slate-400 transition hover:border-slate-600 hover:text-slate-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>

              <div className="relative px-6 pb-6 pt-8 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-electric/30 bg-electric/10 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                  <Radio className="h-5 w-5 text-electric" />
                </div>

                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-electric">
                  <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-electric shadow-[0_0_10px_rgba(0,210,255,0.9)]" />
                  Pre-Launch
                </div>

                <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-100">
                  We&apos;re Still Building
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                  Our sensors are live across 3+ continents, capturing raw
                  exploit traffic. We&apos;re enriching and correlating
                  signals before full launch.
                </p>

                <div className="mx-auto mt-5 max-w-xs rounded-xl border border-slate-800 bg-background/60 p-3">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                    <span>Launch Progress</span>
                    <span className="font-mono text-electric">In Progress</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-electric via-sky-400 to-electric shadow-[0_0_12px_rgba(0,210,255,0.6)]"
                    />
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-[10px]">
                    <div className="text-left text-emerald-400">Sensors Live</div>
                    <div className="text-center text-electric">Enriching Data</div>
                    <div className="text-right text-slate-600">Full Launch</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="mailto:info@honeylabs.net?subject=HoneyLabs%20Early%20Access%20Request&body=Hi%20HoneyLabs%20team%2C%0A%0AI%27d%20like%20early%20access%20to%20the%20platform.%0A%0A-%20"
                    className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-electric via-sky-400 to-electric px-5 py-2.5 text-sm font-medium text-slate-900 shadow-[0_0_30px_rgba(0,210,255,0.45)] transition hover:shadow-[0_0_40px_rgba(0,210,255,0.7)]"
                  >
                    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 animate-[shimmer_2.5s_linear_infinite]" />
                    </span>
                    <span className="relative">Request Early Access</span>
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-surface/70 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-electric/70 hover:text-electric"
                  >
                    Explore the Platform
                  </button>
                  <p className="text-[10px] text-slate-600">
                    Live threat feed &middot; Open-source architecture &middot; SIEM integrations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
