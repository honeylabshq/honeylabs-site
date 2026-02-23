"use client";

import { motion } from "framer-motion";

const blips = [
  { id: 13, x: 80, y: 42 },
  { id: 14, x: 82, y: 68 },
  { id: 15, x: 78, y: 65 },
  { id: 12, x: 75, y: 38 },
  { id: 11, x: 68, y: 35 },
  { id: 9, x: 58, y: 42 },
  { id: 10, x: 50, y: 55 },
  { id: 6, x: 48, y: 30 },
  { id: 7, x: 51, y: 34 },
  { id: 8, x: 46, y: 36 },
  { id: 4, x: 28, y: 65 },
  { id: 5, x: 30, y: 72 },
  { id: 1, x: 18, y: 32 },
  { id: 2, x: 22, y: 38 },
  { id: 3, x: 15, y: 42 },
];

const SCAN_DURATION = 5;

export default function Radar() {
  return (
    <div className="relative flex h-80 w-full items-center justify-center md:h-96">
      <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950/80 to-black/95 shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
        <img
          src="/world-map.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-contain p-4 opacity-100"
          draggable={false}
        />

        {/* Subtle grid */}
        <div className="absolute top-1/4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />
        <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
        <div className="absolute top-3/4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />

        {/* Scan sweep - wide gradient band instead of a thin line */}
        <motion.div
          className="absolute top-0 bottom-0"
          style={{ width: "25%" }}
          initial={{ right: "-25%" }}
          animate={{ right: ["-25%", "100%"] }}
          transition={{
            duration: SCAN_DURATION,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            repeatDelay: 2,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-threat/[0.07] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-threat/50 to-transparent" />
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-px"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 12px 3px rgba(255,77,0,0.3)" }}
          />
        </motion.div>

        {/* Blips */}
        {blips.map((blip) => {
          const xNorm = blip.x / 100;
          const scanDelay = (1 - xNorm) * SCAN_DURATION;

          return (
            <motion.div
              key={blip.id}
              className="absolute"
              style={{ left: `${blip.x}%`, top: `${blip.y}%` }}
            >
              <motion.div
                className="absolute -inset-2 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 2.5, 3],
                  opacity: [0, 0.4, 0],
                  backgroundColor: [
                    "rgba(255,77,0,0)",
                    "rgba(255,77,0,0.25)",
                    "rgba(255,77,0,0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  delay: scanDelay,
                  repeat: Infinity,
                  repeatDelay: SCAN_DURATION + 0.5,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="h-2 w-2 rounded-full"
                initial={{
                  backgroundColor: "rgba(100,116,139,0.35)",
                  boxShadow: "0 0 4px rgba(100,116,139,0.2)",
                  scale: 0.7,
                }}
                animate={{
                  backgroundColor: [
                    "rgba(100,116,139,0.35)",
                    "rgba(255,77,0,1)",
                    "rgba(255,77,0,0.7)",
                    "rgba(100,116,139,0.35)",
                  ],
                  boxShadow: [
                    "0 0 4px rgba(100,116,139,0.2)",
                    "0 0 14px rgba(255,77,0,0.85)",
                    "0 0 8px rgba(255,77,0,0.4)",
                    "0 0 4px rgba(100,116,139,0.2)",
                  ],
                  scale: [0.7, 1.2, 1, 0.7],
                }}
                transition={{
                  duration: 2.8,
                  delay: scanDelay,
                  repeat: Infinity,
                  repeatDelay: SCAN_DURATION - 0.8,
                  ease: "easeOut",
                }}
              />
            </motion.div>
          );
        })}

        {/* Bottom label */}
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-4 text-[10px]">
          <span className="font-mono uppercase tracking-[0.16em] text-slate-500">
            Global Sensor Network
          </span>
          <div className="flex items-center gap-3 font-mono text-[9px] text-slate-600">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500/50" />
              Idle
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-threat shadow-[0_0_6px_rgba(255,77,0,0.6)]" />
              Signal Detected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
