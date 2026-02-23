"use client";

import { motion } from "framer-motion";
import { Zap, Shield } from "lucide-react";

const tiers = [
  {
    id: "observer",
    name: "Observer",
    badge: "Free Tier",
    highlight: false,
    description: "For labs, students and individual researchers.",
    price: "Free",
    unit: "",
    features: [
      "Limited Radar access",
      "Weekly pre-public digest",
      "Email-only alerts",
      "Community sensor data",
    ],
  },
  {
    id: "hunter",
    name: "Hunter",
    badge: "Coming Soon",
    highlight: true,
    description: "For blue teams and security engineers.",
    price: "\u2014",
    unit: "",
    features: [
      "Full Radar access",
      "Real-time exploit alerts",
      "API access & SIEM connectors",
      "Dedicated sensors for your ASN",
      "Historical search (12+ months)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Custom",
    highlight: false,
    description: "For global SOCs and MSSPs with complex estates.",
    price: "Let\u2019s talk",
    unit: "",
    features: [
      "Full Hunter feature set",
      "Private SLAs",
      "On-prem sensor deployments",
      "Custom data exports",
      "Joint IR & response workflows",
    ],
  },
];

export default function PricingTiers() {
  return (
    <section aria-label="Pricing tiers" className="space-y-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
            Choose Your Intelligence Tier
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            Start as an Observer, graduate to Hunter when we launch, or
            wire HoneyLabs directly into your SOC as an Enterprise layer.
          </p>
        </div>
        <div className="flex gap-2 text-[11px] text-slate-500">
          <div className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-surface/80 px-2 py-1">
            <Zap className="h-3 w-3 text-electric" />
            <span>Real-time alerts</span>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-surface/80 px-2 py-1">
            <Shield className="h-3 w-3 text-emerald-400" />
            <span>Dedicated sensors</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => {
          const Card = tier.highlight ? motion.div : "div";

          return (
            <Card
              key={tier.id}
              className={`relative flex flex-col rounded-2xl border bg-surface/90 p-4 ${
                tier.highlight
                  ? "border-electric/80 shadow-[0_0_30px_rgba(0,210,255,0.4)]"
                  : "border-slate-800"
              }`}
              {...(tier.highlight
                ? {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.4 },
                    transition: { duration: 0.5, ease: "easeOut" },
                  }
                : {})}
            >
              {tier.highlight && (
                <div className="pointer-events-none absolute -inset-px rounded-2xl border border-electric/60 opacity-40" />
              )}

              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-slate-100">
                    {tier.name}
                  </h3>
                  <div
                    className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      tier.highlight
                        ? "border-electric/70 bg-electric/10 text-electric"
                        : "border-slate-700 bg-slate-900/60 text-slate-300"
                    }`}
                  >
                    {tier.badge}
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  {tier.description}
                </p>
              </div>

              <div className="mb-4">
                <span className="text-2xl font-semibold text-slate-50">
                  {tier.price}
                </span>
              </div>

              <ul className="mb-4 space-y-2 text-xs text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric/60" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  tier.highlight
                    ? "border-electric bg-electric text-slate-900 hover:bg-electric/90"
                    : "border-slate-700 bg-slate-950/70 text-slate-200 hover:border-electric/70"
                }`}
              >
                {tier.id === "observer" && "Start as Observer"}
                {tier.id === "hunter" && "Join Waitlist"}
                {tier.id === "enterprise" && "Talk to Sales"}
              </button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
