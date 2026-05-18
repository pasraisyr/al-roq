import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden h-screen">

      {/* No extra overlay — global fixed bg handles it */}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-16">
        <div className="font-mono text-xs tracking-widest text-white/70 uppercase mb-6 flex items-center gap-3">
          <span className="inline-block w-6 h-[1px] bg-white/50" />
          The Software Factory
          <span className="inline-block w-6 h-[1px] bg-white/50" />
        </div>
        <h1 className="font-bebas text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] text-white tracking-wide mb-10">
          SOFTWARE BUILT FOR<br />REAL-WORLD OPERATIONS.
        </h1>

        <div className="flex gap-3 mb-16">
          <a
            href="#systems"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-white uppercase border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-colors"
          >
            View Systems <ArrowRight className="w-3 h-3" />
          </a>
          <a
            href="https://wa.me/60137977986"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-black uppercase bg-white px-6 py-3 hover:bg-white/80 transition-colors"
          >
            Get Started
          </a>
        </div>

        <div className="flex gap-10">
          {[
            { val: '12+', label: 'Industries' },
            { val: '10+', label: 'Products' },
            { val: '100+', label: 'Companies' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-white leading-none">{s.val}</div>
              <div className="font-mono text-[9px] tracking-widest text-white/40 uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
