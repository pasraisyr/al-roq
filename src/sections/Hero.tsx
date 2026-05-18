import { ArrowRight } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

function StatNumber({ val, label }: { val: string; label: string }) {
  const num = parseInt(val.replace(/\D/g, ''));
  const suffix = val.replace(/[0-9]/g, '');
  const count = useCounter(num);
  return (
    <div className="flex justify-between items-end border-b border-[#e0e0e0] pb-4 last:border-0 last:pb-0">
      <div className="font-mono text-xs tracking-widest text-[#555555] uppercase">{label}</div>
      <div className="font-bebas text-4xl text-black">{count}{suffix}</div>
    </div>
  );
}

const stats = [
  { val: "12+", label: "Industries" },
  { val: "10+", label: "Products" },
  { val: "50+", label: "Modules" },
  { val: "100+", label: "Companies" },
];

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[450px]">
      <div className="lg:col-span-2 border border-[#e0e0e0] bg-[#f7f7f7] p-8 lg:p-12 flex flex-col justify-center gap-8 relative overflow-hidden">
        <div>
          <div className="font-mono text-xs tracking-widest text-black uppercase mb-6 flex items-center gap-2">
            <span className="inline-block w-4 h-[1px] bg-black"></span>
            The Software Factory
          </div>
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-[90px] leading-[0.85] text-black tracking-wide mb-6">
            YOUR DIGITAL<br />BACKBONE.
          </h1>
          <p className="font-sans text-base md:text-lg text-[#555555] max-w-xl leading-relaxed">
            We build ready-to-deploy software products that solve real business problems — fast, affordable, and tailored to your operations. If your business runs on it, we have already built it.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#systems" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-black uppercase hover:text-[#555555] transition-colors border border-[#e0e0e0] px-6 py-3 bg-white">
            View Systems <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="border border-[#e0e0e0] bg-[#f7f7f7] p-8 flex flex-col gap-6 justify-center">
        {stats.map((stat, i) => (
          <StatNumber key={i} val={stat.val} label={stat.label} />
        ))}
      </div>
    </div>
  );
}
