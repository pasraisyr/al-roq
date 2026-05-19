import { services, type Service } from "../data/services";
import { motion } from 'framer-motion';
import { Monitor, Cpu, GraduationCap, Users, Megaphone } from 'lucide-react';

const MotionMonitor = motion(Monitor);
const MotionCpu = motion(Cpu);
const MotionGraduation = motion(GraduationCap);
const MotionUsers = motion(Users);
const MotionMegaphone = motion(Megaphone);

const iconMap: Record<string, React.ComponentType<any>> = {
  "01": MotionMonitor,
  "02": MotionCpu,
  "03": MotionGraduation,
  "04": MotionUsers,
  "05": MotionMegaphone,
};

const iconVariants: Record<string, any> = {
  "01": {
    hover: { rotate: [0, -6, 6, -6, 0], scale: 1.15, y: -4 }
  },
  "02": {
    hover: { rotate: 90, scale: 1.18 }
  },
  "03": {
    hover: { y: [0, -8, 2, -3, 0], rotate: [0, -6, 6, -4, 0] }
  },
  "04": {
    hover: { scale: 1.15, y: [0, -4, 0] }
  },
  "05": {
    hover: { rotate: [0, -12, 8, -8, 4, 0], scale: 1.18 }
  }
};

interface Props {
  onSelectService: (service: Service) => void;
}

export default function OtherServices({ onSelectService }: Props) {
  return (
    <section id="services" className="bg-[#f5f5f5] border-t border-black/10">
      {/* Header */}
      <div className="px-4 md:px-10 py-4 border-b border-black/10 flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-black/40 uppercase mb-1">Beyond Software</p>
          <h2 className="font-bebas text-3xl md:text-4xl text-black tracking-wide leading-none">OTHER SERVICES</h2>
        </div>
        <p className="hidden md:block font-sans text-sm text-black/50 max-w-xs text-right leading-relaxed">
          Full-stack support for businesses building on ALROQ.
        </p>
      </div>

      {/* Grid with Scroll-triggered Pop-up entrance */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4 md:p-6 overflow-visible"
      >
        {services.map((svc, i) => {
          const SvcIcon = iconMap[svc.num];
          const isLast = i === services.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              whileHover="hover"
              onClick={() => onSelectService(svc)}
              className={`relative group cursor-pointer overflow-visible mr-3 mb-3 ${
                isLast ? 'col-span-1 md:col-span-2 lg:col-span-1' : 'col-span-1'
              }`}
              style={{ height: "270px" }}
            >
              {/* 3D Side Face (Right) */}
              <div 
                className="absolute top-0 left-full h-full bg-[#1E1E1E] border-r border-t border-b border-white/10 origin-left z-0 transition-colors duration-300 group-hover:border-[#C9A84C]/30"
                style={{
                  width: "12px",
                  transform: "skewY(45deg)",
                }}
              />
              
              {/* 3D Bottom Face */}
              <div 
                className="absolute left-0 top-full w-full bg-[#0d0d0d] border-l border-r border-b border-white/10 origin-top z-0 transition-colors duration-300 group-hover:border-[#C9A84C]/30"
                style={{
                  height: "12px",
                  transform: "skewX(45deg)",
                }}
              />
              
              {/* The main Card layer */}
              <div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 p-5 flex flex-col justify-between translate-x-0 translate-y-0 group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform duration-300 z-10 shadow-md group-hover:shadow-2xl group-hover:border-[#C9A84C]/40">
                {/* 3D Wireframe Isometric Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`iso-grid-${i}`} width="30" height="17.32" patternUnits="userSpaceOnUse">
                      <path d="M15 0 L15 17.32 M0 0 L30 17.32 M0 17.32 L30 0 M0 0 L0 17.32" fill="none" stroke="#fff" strokeWidth="0.4" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#iso-grid-${i})`} />
                </svg>

                {/* Animated Centered Large Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white/[0.02] group-hover:text-white/[0.06] transition-colors duration-300 pointer-events-none z-0 overflow-hidden">
                  {SvcIcon && (
                    <SvcIcon
                      variants={iconVariants[svc.num]}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="w-44 h-44 stroke-[0.5]"
                    />
                  )}
                </div>

                {/* Top row: Number & Indicator */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className="font-mono text-xs text-white/40 group-hover:text-[#C9A84C] transition-colors duration-300 tracking-widest">
                    {svc.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#C9A84C] transition-colors duration-300" />
                </div>

                {/* Bottom info */}
                <div className="relative z-10">
                  <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide leading-tight mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {svc.bullets.slice(0, 3).map((b, j) => (
                      <li
                        key={j}
                        className="font-sans text-[11px] text-white/60 leading-snug flex items-center gap-1.5"
                      >
                        <span className="w-1 h-[1px] bg-white/30 group-hover:bg-[#C9A84C] transition-colors duration-300" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
