import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const words = "Our software powers modern business operations in real time, connecting workflows, automating processes, and enabling faster execution across the organization.".split(' ');

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative z-10 bg-white h-screen flex flex-col items-center justify-center px-6 md:px-24 text-center border-b border-[#e0e0e0] pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono text-[10px] tracking-widest text-[#999] uppercase flex items-center gap-2 mb-8"
      >
        <span className="inline-block w-6 h-[1px] bg-[#ccc]" />
        What We Build
        <span className="inline-block w-6 h-[1px] bg-[#ccc]" />
      </motion.div>

      <p className="font-bebas text-[clamp(2rem,4vw,3.5rem)] text-black tracking-wide leading-tight max-w-6xl mx-auto w-full">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#999]">Scroll to explore</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-[#ccc]">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="7" r="2" fill="currentColor">
            <animateTransform attributeName="transform" type="translate" values="0 0;0 8;0 0" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </div>
  );
}
