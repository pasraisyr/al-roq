import { useState, useEffect, useRef } from 'react';
import servionVideo from '../assets/videos/servion.mp4';
import skilioVideo from '../assets/videos/skilio.mp4';
import yarpyVideo from '../assets/videos/yarpy.mp4';
import vendoVideo from '../assets/videos/vendo.mp4';
import hulaceVideo from '../assets/videos/hulace.mp4';
import kaunterVideo from '../assets/videos/kaunter.mp4';
import { products } from '../data/products';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import CoreSystems from '../sections/CoreSystems';
import Capabilities from '../sections/Capabilities';
import Deployment from '../sections/Deployment';
import Footer from '../sections/Footer';
import StatBanner from '../sections/StatBanner';
import Modal from '../sections/Modal';
import type { Product } from '../data/products';

const productVideos: Record<string, string> = {
  SERVION: servionVideo,
  YARPY: yarpyVideo,
  SKILIO: skilioVideo,
  VENDO: vendoVideo,
  HULACE: hulaceVideo,
  KAUNTER: kaunterVideo,
};
import type { Service } from '../data/services';

type ModalState =
  | { type: 'product'; data: Product }
  | { type: 'service'; data: Service }
  | null;

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<ModalState>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % products.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [activeIndex]);

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : 'auto';
  }, [activeModal]);

  return (
    <div className="min-h-screen text-[#555555] font-sans selection:bg-black/10 selection:text-black overflow-x-hidden">

      {/* Fixed background video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          ref={bgVideoRef}
          key={activeIndex}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={productVideos[products[activeIndex].title]} type="video/mp4" />
        </video>
        {/* White overlay supaya content tetap readable */}
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Background Grid */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#999" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 px-6 pb-20 max-w-[1600px] mx-auto flex flex-col gap-8" style={{ position: 'relative' }}>
        <CoreSystems 
          onSelect={(p) => setActiveModal({ type: 'product', data: p })} 
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
        <Hero />
        <StatBanner />
        <div className="grid lg:grid-cols-2 gap-8">
          <Capabilities onSelect={(s) => setActiveModal({ type: 'service', data: s })} />
          <Deployment />
        </div>
        <Footer />
      </main>

      <Modal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
