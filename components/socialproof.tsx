"use client";

import CardSwap, { Card } from './CardSwap'

export function SocialProof() {
  const socialCards = [
    {
      title: "Chemo To The Rescue",
      url: "https://www.chemototherescue.com/",
      image: "https://res.cloudinary.com/dfilgmh3c/image/upload/v1770730321/SCR-20260210-mwhr_prjv3m.png",
    },
    {
      title: "Dr. Bubbles",
      url: "https://drbubbles.netlify.app",
      image: "https://res.cloudinary.com/dfilgmh3c/image/upload/v1770730970/SCR-20260210-nbjx_xywhtr.jpg",
    },
    {
      title: "Dr. Bubbles",
      url: "https://drbubbles.netlify.app",
      image: "https://res.cloudinary.com/dfilgmh3c/image/upload/v1770730321/SCR-20260210-mwhr_prjv3m.png",
    },
  ];

  return (
    <section id="pricing" className="relative bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto relative border-y border-dashed border-zinc-900 py-16">
        
        <div className="px-8 md:px-12">
          <div className="text-center mb-16 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide text-zinc-100 bg-zinc-800 mb-6">
              Trusted by
            </span>
          </div>
        </div>
        <div style={{ height: '450px', position: 'relative' }}>

        <div className="px-8 md:px-12 mb-12">
  {/* Add items-center for mobile, items-start for desktop */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10 gap-4">
    
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 max-w-xl">
      We've got your back.
    </h2>
    
    <p className="text-lg text-zinc-400 max-w-xl">
      We've managed websites for clients across various industries, 
      from small local businesses to large enterprises.
    </p>
    
  </div>
</div>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
          >
            {socialCards.map((site, index) => (
              <Card key={index}>
                <div className="flex flex-col h-full bg-zinc-900/50 overflow-hidden">
                  {/* Browser Search Bar UI */}
                  <div className="flex items-center gap-3 px-1 py-1">
                    <div className="flex-1 px-1 py-1 text-xs text-zinc-500 font-mono flex items-center gap-2">
                      <span className="opacity-50">https://</span>
                      <span className="text-zinc-300">{site.url.replace('https://', '')}</span>
                    </div>
                  </div>

                  {/* Preview Image Content */}
                  <div className="relative flex-1 bg-zinc-900 overflow-hidden group">
  <img 
    src={site.image} 
    alt={site.title}
    /* Added object-left here */
    className="w-full h-full object-cover object-left opacity-80 group-hover:opacity-100 transition-opacity duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
  <div className="absolute bottom-4 left-4">
    <p className="text-sm font-medium text-white">{site.title}</p>
  </div>
</div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}