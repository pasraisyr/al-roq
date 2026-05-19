import { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import CoreSystems from '../sections/CoreSystems';
// import Capabilities from '../sections/Capabilities';
import Deployment from '../sections/Deployment';
import QuoteSection from '../sections/QuoteSection';
import Footer from '../sections/Footer';
import StatBanner from '../sections/StatBanner';
import Industries from '../sections/Industries';
import OtherServices from '../sections/OtherServices';
import CTA from '../sections/CTA';
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

      <Navbar />

      {/* Hero full-bleed with video */}
      <div className="relative z-10">
        <Hero />
      </div>

      <QuoteSection />

      <main className="relative z-10 bg-white flex flex-col">
        <CoreSystems
          onSelect={(p) => setActiveModal({ type: 'product', data: p })}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
        <div className="flex flex-col" style={{ height: 'calc(100vh - 57px)' }}>
          <StatBanner />
          <Deployment />
        </div>
        <div className="flex flex-col justify-end" style={{ minHeight: '100vh' }}>
          <div className="py-12 text-center">
            <p className="font-bebas text-3xl md:text-4xl text-black/40 tracking-wide max-w-4xl mx-auto uppercase px-8 md:px-0">
              "Connecting workflows, automating processes, and enabling faster execution."
            </p>
          </div>
          <OtherServices />
          <Industries />
          <CTA />
          <Footer />
        </div>
      </main>

      <Modal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
