export default function Tagline() {
  return (
    <section className="border border-[#e0e0e0] bg-black px-8 text-center flex flex-col items-center justify-center flex-1">
      <div className="font-mono text-[10px] tracking-widest text-white/80 uppercase flex items-center justify-center gap-2 mb-5">
        <span className="inline-block w-6 h-[1px] bg-white/60" />
        Built For The Real World
        <span className="inline-block w-6 h-[1px] bg-white/60" />
      </div>
      <h2 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-white tracking-wide max-w-3xl mb-6">
        IF YOUR BUSINESS RUNS ON IT,<br />
        <span className="text-white/40">WE HAVE ALREADY BUILT IT.</span>
      </h2>
      <p className="font-sans text-base text-white/70 max-w-lg leading-relaxed">
        From F&B to healthcare, education to logistics — ALROQ's ecosystem covers every vertical with ready-to-deploy, fully customisable software.
      </p>
    </section>
  );
}
