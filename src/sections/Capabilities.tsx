import { useState } from 'react';
import { Globe, Code2, GraduationCap, Users, Megaphone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, type Service } from '../data/services';

const icons = [Globe, Code2, GraduationCap, Users, Megaphone];

const placeholderColors = [
  'from-[#1a1a2e] to-[#16213e]',
  'from-[#0f3460] to-[#1a1a2e]',
  'from-[#1b1b2f] to-[#2c2c54]',
  'from-[#162447] to-[#1f4068]',
  'from-[#1a1a2e] to-[#0f3460]',
];

interface Props {
  onSelect: (service: Service) => void;
}

export default function Capabilities({ onSelect }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const Icon = icons[activeIndex] ?? Globe;

  return (
    <section id="capabilities" className="border border-[#e0e0e0] overflow-hidden">
      {/* Header */}
      <div className="bg-black px-8 py-6 flex items-end justify-between">
        <div>
          <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase flex items-center gap-2 mb-2">
            <span className="inline-block w-4 h-[1px] bg-white/30" />
            What We Do
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide leading-none">SERVICES</h2>
        </div>
        <p className="hidden md:block font-sans text-sm text-white/40 max-w-xs text-right leading-relaxed">
          End-to-end solutions built for businesses that move fast.
        </p>
      </div>

      {/* Body — list left, image right */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: '420px' }}>

        {/* Left — service list */}
        <div className="md:w-1/2 flex flex-col border-r border-[#e0e0e0]">
          {services.map((svc, i) => {
            const SvcIcon = icons[i] ?? Globe;
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                onClick={() => { setActiveIndex(i); onSelect(svc); }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`flex-1 flex items-center gap-5 px-8 py-5 cursor-pointer border-b border-[#e0e0e0] last:border-b-0 transition-all duration-200 group ${isActive ? 'bg-black' : 'bg-white hover:bg-[#f7f7f7]'}`}
              >
                <div className={`w-9 h-9 border flex items-center justify-center shrink-0 transition-colors duration-200 ${isActive ? 'border-white/20' : 'border-[#e0e0e0]'}`}>
                  <SvcIcon className={`w-4 h-4 transition-colors duration-200 ${isActive ? 'text-white' : 'text-black'}`} strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  <div className={`font-bebas text-xl md:text-2xl tracking-wide transition-colors duration-200 ${isActive ? 'text-white' : 'text-black'}`}>
                    {svc.title}
                  </div>
                  {isActive && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {svc.bullets.slice(0, 2).map((b, j) => (
                        <span key={j} className="font-mono text-[9px] tracking-widest uppercase text-white/40">
                          — {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <span className={`font-mono text-[10px] tracking-widest transition-colors duration-200 ${isActive ? 'text-white/30' : 'text-[#ccc]'}`}>
                  {svc.num}
                </span>

                <ArrowUpRight className={`w-4 h-4 shrink-0 transition-all duration-200 ${isActive ? 'text-white' : 'text-[#ccc] opacity-0 group-hover:opacity-100'}`} />
              </div>
            );
          })}
        </div>

        {/* Right — image panel */}
        <div className="md:w-1/2 relative overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              {active.img ? (
                <img
                  src={active.img}
                  alt={active.title}
                  className="w-full h-full object-cover opacity-70"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${placeholderColors[activeIndex]}`} />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
              </div>
              <span className="font-bebas text-2xl text-white tracking-wide">{active.title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {active.bullets.map((b, j) => (
                <span key={j} className="font-mono text-[9px] tracking-widest uppercase text-white/60 border border-white/10 px-2 py-0.5">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
