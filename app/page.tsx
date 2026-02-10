import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Features } from "@/components/features";
import { SocialProof } from "@/components/socialproof";

const CornerCross = ({ color = "bg-white", position }) => {
  const posClasses = {
    // Each corner shifts outward by 50% to center the intersection on the border
    tl: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    tr: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    bl: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    br: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  };

  return (
    <div className={`absolute ${posClasses[position]} w-3 h-3 pointer-events-none z-20`}>
      {/* Horizontal Line */}
      <div className={`absolute top-1/2 left-0 w-full h-[1px] ${color} -translate-y-1/2`} />
      {/* Vertical Line */}
      <div className={`absolute left-1/2 top-0 h-full w-[1px] ${color} -translate-x-1/2`} />
    </div>
  );
};

export default function Page() {
  return (
    <main className="bg-zinc-950">
      {/* The Master Container */}
      <div className="max-w-6xl mx-auto relative border-x border-dashed border-zinc-900 min-h-screen">
        
        {/* All Four Corner Crosses on the Master Edges */}
        <CornerCross position="tl" color="bg-zinc-800" />
        <CornerCross position="tr" color="bg-zinc-800" />
        <CornerCross position="bl" color="bg-zinc-800" />
        <CornerCross position="br" color="bg-zinc-800" />
        
        <Hero />
        <Pricing />
        <Features />
        <SocialProof />

        
      </div>
    </main>
  );
}

