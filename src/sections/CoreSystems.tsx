import { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, type Product } from '../data/products';
import servionVideo from '../assets/videos/servion.mp4';
import skilioVideo from '../assets/videos/skilio.mp4';
import yarpyVideo from '../assets/videos/yarpy.mp4';
import vendoVideo from '../assets/videos/vendo.mp4';
import hulaceVideo from '../assets/videos/hulace.mp4';
import kaunterVideo from '../assets/videos/kaunter.mp4';

const productVideos: Record<string, string> = {
  SERVION: servionVideo,
  YARPY: yarpyVideo,
  SKILIO: skilioVideo,
  VENDO: vendoVideo,
  HULACE: hulaceVideo,
  KAUNTER: kaunterVideo,
};

const VIDEO_DURATION = 5000;

interface Props {
  onSelect: (product: Product) => void;
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export default function CoreSystems({ onSelect, activeIndex, onActiveIndexChange }: Props) {
  const active = products[activeIndex];
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = (index: number) => {
    onActiveIndexChange(index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeIndex]);

  const video = productVideos[active.title];

  return (
    <section id="systems" className="border border-[#e0e0e0] bg-[#f7f7f7]">
      <div className="p-8 pb-4">
        <h2 className="font-bebas text-4xl text-black tracking-wide">CORE SYSTEMS</h2>
        <p className="font-mono text-[10px] text-[#999] tracking-widest uppercase mt-1">Auto-playing · Click to jump</p>
      </div>

      <div className="flex flex-col">

        {/* Video */}
        <div className="relative bg-black overflow-hidden" style={{ height: '460px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {video ? (
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  {active.img && (
                    <img src={active.img} alt={active.title} className="h-20 object-contain opacity-20" style={{ filter: 'invert(1)' }} />
                  )}
                  <div className="flex items-center gap-2 text-white/30">
                    <Play className="w-4 h-4" />
                    <span className="font-mono text-[10px] tracking-widest uppercase">Preview Coming Soon</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay */}
          <div className="absolute inset-0 z-[5] bg-black/40" />

          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="font-mono text-[9px] tracking-widest uppercase bg-white/10 backdrop-blur-sm text-white border border-white/20 px-3 py-1">
              SYS.0{activeIndex + 1} — {active.title}
            </div>
          </div>

          {/* Info overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-xl">{active.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {active.industries.split('·').map((ind, index) => (
                <span key={index} className="font-mono text-[10px] text-black bg-white px-2 py-0.5 tracking-widest uppercase">
                  {ind.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* View details button */}
          <button
            onClick={() => onSelect(active)}
            className="absolute bottom-6 right-6 z-10 font-mono text-[10px] tracking-widest uppercase border border-white/40 text-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            View Details
          </button>
        </div>

        {/* Bottom — horizontal product list */}
        <div className="flex border-t border-[#e0e0e0]">
          {products.map((prod, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                onClick={() => goTo(i)}
                className={`relative flex-1 flex items-center justify-center p-4 cursor-pointer border-r border-[#e0e0e0] last:border-r-0 transition-all overflow-hidden ${isActive ? 'bg-black' : 'bg-white hover:bg-[#f7f7f7]'}`}
              >
                {/* progress bar */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px] bg-white"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: VIDEO_DURATION / 1000, ease: 'linear' }}
                  />
                )}
                {prod.img
                  ? <img src={prod.img} alt={prod.title} className="h-8 w-full object-contain px-3" style={isActive ? { filter: 'invert(1)' } : {}} />
                  : <span className={`font-bebas text-lg ${isActive ? 'text-white' : 'text-[#ccc]'}`}>{prod.title}</span>
                }
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
