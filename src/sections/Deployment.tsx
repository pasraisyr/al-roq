import { useEffect, useRef, useState } from 'react';

const steps = [
  { num: "01", phase: "BROWSE & PICK", desc: "Explore ALROQ's ecosystem. Identify the product closest to your need." },
  { num: "02", phase: "TELL US WHAT'S MISSING", desc: "Share your workflow, missing features, and custom requirements." },
  { num: "03", phase: "WE BUILD YOUR VERSION", desc: "We add your desired flow and features on top of the base product." },
  { num: "04", phase: "GO LIVE. DONE.", desc: "Deploy. Train. Scale. No waiting. No broken promises." },
];

export default function Deployment() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="deployment"
      ref={ref}
      className="bg-black flex flex-col flex-1 min-h-0"
    >
      {/* Header strip */}
      <div className="flex items-center justify-between px-10 py-5 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3">
          <span className="inline-block w-5 h-[1px] bg-white/30" />
          <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Deployment Protocol</span>
        </div>
        <span className="font-bebas text-white/10 text-xl tracking-widest">ALROQ</span>
      </div>

      {/* 4 steps — equal flex rows */}
      <div className="flex flex-col flex-1">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex-1 flex items-center border-b border-white/10 last:border-b-0 px-10 group cursor-default hover:bg-white/[0.03] transition-colors duration-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-24px)',
              transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
            }}
          >
            {/* Big number */}
            <span
              className="font-bebas text-white/40 group-hover:text-white/60 transition-colors duration-300 shrink-0 leading-none select-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', width: '14vw' }}
            >
              {step.num}
            </span>

            {/* Step name — fills middle */}
            <h3
              className="font-bebas text-white leading-none flex-1 tracking-wide"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}
            >
              {step.phase}
            </h3>

            {/* Desc — right */}
            <p className="font-sans text-sm text-white leading-relaxed max-w-xs text-right shrink-0">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
