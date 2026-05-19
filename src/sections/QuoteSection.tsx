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
    <div ref={ref} className="relative z-10 bg-white flex flex-col items-center justify-center px-10 md:px-24 text-center border-b border-[#e0e0e0] py-12 md:py-32">
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

      <p className="font-sans font-medium text-[clamp(1.6rem,4.5vw,3.2rem)] text-black tracking-tight leading-[1.1] max-w-5xl mx-auto w-full text-center">
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


    </div>
  );
}
