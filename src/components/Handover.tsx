"use client";

import { Clock, AlertTriangle, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Handover() {
  return (
    <div className="space-y-5 rounded-2xl border border-slate-800 bg-surface/90 p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
      <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-electric" />
          <span className="font-mono uppercase tracking-[0.16em] text-slate-500">
            The Handover Window
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-0">
        {/* HoneyLabs Detects */}
        <div className="flex w-full items-center gap-3 rounded-xl border border-electric/40 bg-electric/5 px-3 py-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric/15 text-electric shadow-[0_0_18px_rgba(0,210,255,0.55)]">
            <Clock className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-100">
              HoneyLabs Detects
            </p>
            <p className="text-[11px] text-slate-500">
              Signal correlated and scored internally.
            </p>
          </div>
        </div>

        {/* Vertical timeline */}
        <div className="relative flex w-full flex-col items-center py-1">
          <div className="h-6 w-px border-l border-dashed border-slate-700/60" />

          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute h-8 w-8 rounded-full bg-electric/10"
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 rounded-full border border-electric/40 bg-background/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-electric shadow-[0_0_20px_rgba(0,210,255,0.25)]">
              24{"\u2013"}72 h lead time
            </div>
          </div>

          <div className="h-6 w-px border-l border-dashed border-slate-700/60" />
        </div>

        {/* Public Disclosure */}
        <div className="flex w-full items-center gap-3 rounded-xl border border-threat/50 bg-threat/5 px-3 py-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-threat/20 text-threat shadow-[0_0_24px_rgba(255,77,0,0.5)]">
            <AlertTriangle className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-100">
              Public Disclosure
            </p>
            <p className="text-[11px] text-slate-500">
              CVE published, advisory released, attackers scale up.
            </p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-500">
        The handover window is the time between when{" "}
        <span className="text-electric">HoneyLabs surfaces a signal</span>{" "}
        and when it becomes{" "}
        <span className="text-threat">public knowledge</span>.
        That window is your advantage{" \u2014 "}patch, hunt, or block before
        the rest of the world knows.
      </p>
    </div>
  );
}
