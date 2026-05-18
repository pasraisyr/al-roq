import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, type Service } from '../data/services';

interface Props {
  onSelect: (service: Service) => void;
}

export default function Capabilities({ onSelect }: Props) {
  const [hoveredService, setHoveredService] = useState<Service | null>(null);

  return (
    <section id="capabilities" className="border border-[#e0e0e0] bg-[#f7f7f7] p-8">
      <h2 className="font-bebas text-4xl text-black tracking-wide mb-8">CAPABILITIES</h2>
      <div className="flex flex-col gap-4">
        {services.map((svc, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => setHoveredService(svc)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => onSelect(svc)}
          >
            <div className="border border-[#e0e0e0] bg-white p-4 flex justify-between items-center cursor-pointer hover:border-black group transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-black">{svc.num}</span>
                <span className="font-mono text-xs text-black tracking-widest uppercase">{svc.title}</span>
              </div>
              <Plus className="w-4 h-4 text-[#aaa] group-hover:text-black" />
            </div>

            <AnimatePresence>
              {hoveredService?.num === svc.num && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-full top-0 ml-4 z-30 w-64 bg-white border border-black shadow-lg p-4 pointer-events-none"
                >
                  <div className="font-mono text-[10px] text-[#aaa] tracking-widest uppercase mb-3">Service Scope</div>
                  <ul className="space-y-2">
                    {svc.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#555555] font-sans">
                        <span className="text-black mt-0.5 shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-[9px] text-[#aaa] tracking-widest uppercase mt-3 border-t border-[#e0e0e0] pt-3">Click to view details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
