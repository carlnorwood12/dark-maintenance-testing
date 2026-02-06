"use client";
import { useEffect, useState } from "react";
import ColorBends from "./ColorBends"; 

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[650px] px-6 py-24 overflow-hidden bg-[#09090b] text-gray-100 flex justify-center items-center">
      {/* Background ColorBends Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && (
          <ColorBends
          rotation={180}
          speed={0.2}
          colors={["#0ea5e9"]}
          transparent
          autoRotate={2}
          scale={1}
          frequency={1}
          warpStrength={0.95}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent={true}
        />
        )}
        {/* Subtle radial gradient overlay to keep focus on the center text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)] opacity-70" />
      </div>

      {/* Content Layer */}
      <div className="relative w-full max-w-6xl z-10">
        <div>
          <h1 className="text-[clamp(2.1875rem,1.2043rem+4.5732vw,4.0625rem)] font-bold leading-tight mb-6 max-w-[900px]">
            <span className="text-white">
              Website Maintenance
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl text-zinc-400 mb-10">
            Geneva-Based Expert Web Maintenance. Secure, fast, and always online.
            We handle the updates and security so you can focus on your
            business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-2 rounded-full text-lg font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl"
            >
              View Plans
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-5 rounded-full text-lg font-semibold border-[1.5px] border-white/20 text-white bg-transparent hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}