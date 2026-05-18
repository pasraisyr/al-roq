import { useState, useEffect, useRef } from 'react';
import heroVideo from '../assets/videos/hero.mp4';
import { products } from '../data/products';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import CoreSystems from '../sections/CoreSystems';
import Capabilities from '../sections/Capabilities';
import Deployment from '../sections/Deployment';
import Footer from '../sections/Footer';
import StatBanner from '../sections/StatBanner';
import Industries from '../sections/Industries';
import Tagline from '../sections/Tagline';
import Modal from '../sections/Modal';
import type { Product } from '../data/products';
import type { Service } from '../data/services';

type ModalState =
  | { type: 'product'; data: Product }
  | { type: 'service'; data: Service }
  | null;

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<ModalState>(null);
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

      {/* Fixed hero video background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Background Grid */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-10">
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

      {/* Hero full-bleed */}
      <div className="relative z-10">
        <Hero />
      </div>

      <main className="relative z-10 px-6 pt-8 pb-20 max-w-[1600px] mx-auto flex flex-col gap-8">
        <CoreSystems
          onSelect={(p) => setActiveModal({ type: 'product', data: p })}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
        <div className="flex flex-col md:flex-row gap-0">
          <StatBanner vertical />
          <div className="flex-1">
            <Tagline />
          </div>
        </div>
        <Capabilities onSelect={(s) => setActiveModal({ type: 'service', data: s })} />
        <Industries />
        <Deployment />
        <Footer />
      </main>

      <Modal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
