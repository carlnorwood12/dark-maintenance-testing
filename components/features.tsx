"use client";

import { Bug } from "lucide-react";
import { AnimatedShieldCheckIcon, AnimatedRefreshCwIcon, AnimatedGaugeIcon, AnimatedFilePenLineIcon, AnimatedHeadphonesIcon } from "./animated-icons";

const features = [
  {
    icon: AnimatedShieldCheckIcon,
    color: "text-emerald-500",
    titleColor: "text-emerald-500",
    bgStyles: "bg-gradient-to-tl from-emerald-500/0 via-emerald-500/[0.03] to-transparent",
    textColor: "text-emerald-500/70",
    // These define the split border colors
    leftBorder: "border-emerald-500/20",
    rightBorder: "border-emerald-500/20",
    crossColor: "bg-emerald-500/40",
    title: "Security Updates",
    description: "Regular security patches and updates to protect your site from vulnerabilities.",
  },
  {
    icon: AnimatedRefreshCwIcon,
    color: "text-sky-500",
    titleColor: "text-sky-500",
    bgStyles: "bg-gradient-to-tl from-sky-500/0 via-sky-500/[0.03] to-transparent",
    textColor: "text-sky-500/70",
    leftBorder: "border-sky-500/20",
    rightBorder: "border-sky-500/20",
    crossColor: "bg-sky-500/40",
    title: "Automatic Backups",
    description: "Daily or real-time backups ensure your data is always safe and recoverable.",
  },
  {
    icon: AnimatedGaugeIcon,
    color: "text-amber-500",
    titleColor: "text-amber-500",
    bgStyles: "bg-gradient-to-tl from-amber-500/0 via-amber-500/[0.03] to-transparent",
    textColor: "text-amber-500/70",
    leftBorder: "border-amber-500/20",
    rightBorder: "border-amber-500/20",
    crossColor: "bg-amber-500/40",
    title: "Speed Optimization",
    description: "Regular performance audits and optimizations to keep your site loading lightning fast.",
  },
  {
    icon: AnimatedFilePenLineIcon,
    color: "text-violet-500",
    titleColor: "text-violet-500",
    bgStyles: "bg-gradient-to-tl from-violet-500/0 via-violet-500/[0.03] to-transparent",
    textColor: "text-violet-500/70",
    leftBorder: "border-violet-500/20",
    rightBorder: "border-violet-500/20",
    crossColor: "bg-violet-500/40",
    title: "Content Edits",
    description: "Need text or image updates? We handle content changes quickly and professionally.",
  },
  {
    icon: Bug,
    color: "text-rose-500",
    titleColor: "text-rose-500",
    bgStyles: "bg-gradient-to-tl from-rose-500/0 via-rose-500/[0.03] to-transparent",
    textColor: "text-rose-500/70",
    leftBorder: "border-rose-500/20",
    rightBorder: "border-rose-500/20",
    crossColor: "bg-rose-500/40",
    title: "Bug Fixes",
    description: "Immediate resolution of any technical issues or bugs that affect your site.",
  },
  {
    icon: AnimatedHeadphonesIcon,
    color: "text-indigo-500",
    titleColor: "text-indigo-500",
    bgStyles: "bg-gradient-to-tl from-indigo-500/0 via-indigo-500/[0.03] to-transparent",
    textColor: "text-indigo-500/70",
    leftBorder: "border-indigo-500/20",
    rightBorder: "border-indigo-500/20",
    crossColor: "bg-indigo-500/40",
    title: "Priority Support",
    description: "Dedicated support team ready to assist you whenever you need help.",
  },
];
const CornerCross = ({ color = "bg-white", position }) => {
  const posClasses = {
    // Translating by 50% centers the cross exactly on the border corner
    tl: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    tr: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    bl: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    br: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  };

  return (
    <div className={`absolute ${posClasses[position]} w-2.5 h-2.5 pointer-events-none z-20`}>
      {/* Horizontal Line */}
      <div className={`absolute top-1/2 left-0 w-full h-[1px] ${color} -translate-y-1/2`} />
      {/* Vertical Line */}
      <div className={`absolute left-1/2 top-0 h-full w-[1px] ${color} -translate-x-1/2`} />
    </div>
  );
};

export function Features() {
  return (
    <section id="features" className="px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-12">
        
        {/* Header Box */}
        <div className="relative text-center mb-20 z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide text-zinc-100 bg-zinc-800 mb-6">
            Our services
          </span>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything Your Website Needs
            </h2>
            <p className="text-lg text-zinc-400 max-w-md mx-auto">
              Comprehensive maintenance services to keep your website running at its best
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-x-7 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              // Note: overflow-visible is required so the edge crosses aren't cut off
              className={`relative p-8 overflow-visible ${feature.bgStyles}`}
            >
              {/* Internal card borders */}
              <div className={`absolute inset-0 border border-dashed ${feature.leftBorder} pointer-events-none opacity-50`} />

              {/* All Four Corners for the Card */}
              <CornerCross color={feature.crossColor} position="tl" />
              <CornerCross color={feature.crossColor} position="tr" />
              <CornerCross color={feature.crossColor} position="bl" />
              <CornerCross color={feature.crossColor} position="br" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center py-5 mb-5">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className={`text-xl font-semibold ${feature.titleColor} mb-3`}>{feature.title}</h3>
                <p className={`leading-relaxed ${feature.textColor}`}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}