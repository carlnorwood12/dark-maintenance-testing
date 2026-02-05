export function Hero() {
  return (
    <section className="relative min-h-[650px] px-6 py-24 overflow-hidden bg-zinc-950 text-gray-100 flex justify-center items-center">
      <div className="relative w-full max-w-6xl z-10">
        <div>
          <h1 className="text-[clamp(2.1875rem,1.2043rem+4.5732vw,4.0625rem)] font-bold leading-tight mb-6 max-w-[900px]">
            <span className="text-slate text-4xl md:text-6xl">
              Website Maintenance
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl text-slate-300/80 mb-10">
            Geneva-Based Expert Web Maintenance Secure, fast, and always online.
            We handle the updates and security so you can focus on your
            business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-2 rounded-full text-lg font-semibold bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all"
            >
              View Plans
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-5 rounded-full text-lg font-semibold border-[1.5px] border-white text-white bg-transparent hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
