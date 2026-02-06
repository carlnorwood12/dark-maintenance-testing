"use client";

import { useState } from "react";
import { AnimatedCheckIcon, AnimatedXIcon } from "./animated-icons";

const plans = [
  {
    name: "Essential",
    description: "Perfect for small business websites",
    price: "85.-",
    popular: false,
    features: [
      { name: "Weekly Backups", included: true },
      { name: "Security Updates", included: true },
      { name: "Uptime Monitoring", included: true },
      { name: "Monthly Speed Audit", included: false },
      { name: "Content Edits", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses",
    price: "195.-",
    popular: true,
    features: [
      { name: "Daily Backups", included: true },
      { name: "Core & Plugin Updates", included: true },
      { name: "Monthly Speed Audit", included: true },
      { name: "1hr Content Edits", included: true },
      { name: "SEO Tracking", included: false },
    ],
  },
  {
    name: "Business",
    description: "For high-traffic, critical websites",
    price: "395.-",
    popular: false,
    features: [
      { name: "Real-time Backups", included: true },
      { name: "Advanced Security", included: true },
      { name: "SEO Performance Tracking", included: true },
      { name: "3hrs Content Edits", included: true },
      { name: "24/7 Priority Support", included: true },
    ],
  },
];

function AnimatedIcon({
  included,
  isHovered,
}: {
  included: boolean;
  isHovered: boolean;
}) {
  return (
    <div className={`w-[30px] h-[30px] flex items-center justify-center bg-zinc-800 rounded-full ${included ? "text-emerald-400" : "text-zinc-500"}`}>
      {included ? <AnimatedCheckIcon className="w-4 h-4" /> : <AnimatedXIcon className="w-4 h-4" />}
    </div>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-zinc-900 rounded-md p-10 flex flex-col transition-all border ${
        plan.popular
          ? "lg:scale-105 border-zinc-400 z-10"
          : "border-zinc-800 hover:border-zinc-700"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-100 text-zinc-900 px-4 py-1.5 rounded-full text-sm font-semibold z-30">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
        <p className="text-zinc-400 text-sm mt-2">{plan.description}</p>
      </div>

      <div className="text-center mb-8">
        <span className="text-5xl font-bold text-white">{plan.price}</span>
        <span className="text-zinc-400">/Mo</span>
      </div>

      <ul className="flex-grow mb-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.name} className={`flex items-center gap-3 text-sm ${feature.included ? "text-zinc-100" : "text-zinc-500 line-through"}`}>
            <AnimatedIcon included={feature.included} isHovered={isHovered} />
            {feature.name}
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-full font-semibold transition-all z-10 ${plan.popular ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200" : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"}`}>
        Get Started
      </button>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-zinc-950">
      {/* REMOVED: px-8 md:px-12 from this div so the border-y hits the edges.
         ADDED: px-8 md:px-12 to the INNER content instead.
      */}
      <div className="max-w-6xl mx-auto relative border-y border-dashed border-zinc-900 py-16">
        
        {/* Content Wrapper to re-apply the padding inside the lines */}
        <div className="px-8 md:px-12">
          <div className="text-center mb-16 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide text-zinc-100 bg-zinc-800 mb-6">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Select Your Plan
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Choose the plan that best fits your needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}