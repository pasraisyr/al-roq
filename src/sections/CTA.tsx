import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
      {/* Request a Demo */}
      <a
        href="#contact"
        className="group flex items-center justify-between px-12 py-10 bg-white border-r border-black/10 hover:bg-black transition-colors duration-300"
      >
        <div>
          <p className="font-mono text-[9px] tracking-widest text-black/40 group-hover:text-white/40 uppercase mb-2 transition-colors duration-300">
            Get started
          </p>
          <h3 className="font-bebas text-5xl text-black group-hover:text-white tracking-wide leading-none transition-colors duration-300">
            Request a Demo
          </h3>
        </div>
        <ArrowRight className="w-8 h-8 text-black/30 group-hover:text-white transition-colors duration-300 shrink-0" />
      </a>

      {/* Start Building */}
      <a
        href="#systems"
        className="group flex items-center justify-between px-12 py-10 bg-black border-none hover:bg-white transition-colors duration-300"
      >
        <div>
          <p className="font-mono text-[9px] tracking-widest text-white/40 group-hover:text-black/40 uppercase mb-2 transition-colors duration-300">
            Explore ecosystem
          </p>
          <h3 className="font-bebas text-5xl text-white group-hover:text-black tracking-wide leading-none transition-colors duration-300">
            Start Building
          </h3>
        </div>
        <ArrowRight className="w-8 h-8 text-white/30 group-hover:text-black transition-colors duration-300 shrink-0" />
      </a>
    </section>
  );
}
