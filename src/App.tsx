import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check, Plus, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import alroqLogo from './assets/alroq-logo-cropped.png';
import servionImg from './assets/servion-black.png';
import yarbyImg from './assets/yarpy-black.png';
import skilioImg from './assets/skillio-black.png';
import vendoImg from './assets/vendo-black.png';
import hulaceImg from './assets/hulace-black.png';

function useCounter(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

function StatNumber({ val, label }: { val: string; label: string }) {
  const num = parseInt(val.replace(/\D/g, ''));
  const suffix = val.replace(/[0-9]/g, '');
  const count = useCounter(num);
  return (
    <div className="flex justify-between items-end border-b border-[#e0e0e0] pb-4 last:border-0 last:pb-0">
      <div className="font-mono text-[10px] tracking-widest text-[#555555] uppercase">{label}</div>
      <div className="font-bebas text-4xl text-black">{count}{suffix}</div>
    </div>
  );
}

// Data
const products = [
  {
    title: "SERVION",
    subtitle: "Business ERP",
    img: servionImg,
    industries: "RETAIL · LOGISTICS · MANUFACTURING · CONSTRUCTION",
    features: ["Multi-branch & multi-outlet", "CRM & Pipeline", "HR & Payroll", "Full Accounting", "Inventory Management", "Purchase & Procurement", "POS Integration"],
    desc: "The central operating system for your enterprise. Integrate accounting, CRM, HR, inventory, and analytics into a single, cohesive ontology."
  },
  {
    title: "YARPY",
    subtitle: "Institution OS",
    img: yarbyImg,
    industries: "SCHOOLS · UNIVERSITIES · ACADEMIES",
    features: ["Student Registration", "Fee Collection", "Attendance Tracking", "Class Scheduling", "Parent Portal", "Academic Results", "Teacher Management"],
    desc: "Built for educational institutions to manage students, fees, attendance, and grading in one secure platform."
  },
  {
    title: "SKILIO",
    subtitle: "Learning Management",
    img: skilioImg,
    industries: "CORPORATES · TRAINERS · NGOS",
    features: ["Course Builder", "Live Class Scheduling", "Certification Issuance", "Learner Dashboards", "Progress Tracking", "Assessment Module", "White-label Branding"],
    desc: "Deploy customized learning platforms for corporates and training providers with full assessment and tracking."
  },
  {
    title: "VENDO",
    subtitle: "F&B Platform",
    img: vendoImg,
    industries: "RESTAURANT · CAFÉ · FRANCHISE",
    features: ["POS (Dine-in, Takeaway)", "Kitchen Display System", "Table Management", "Online Ordering Sync", "Inventory Tracking", "Recipe Costing", "Loyalty Points"],
    desc: "The ultimate F&B management system. Handle orders, kitchen displays, and complex inventory routing in real-time."
  },
  {
    title: "HULACE",
    subtitle: "Event Connection",
    img: hulaceImg,
    industries: "NETWORKING · CONFERENCES · TRADE FAIRS",
    features: ["Event Discovery", "Ticketed RSVP", "Smart Networking", "QR Check-in", "Organiser Dashboard", "Sponsor Profiles", "Push Notifications"],
    desc: "Powering events of all scales with intelligent matchmaking, ticketing, and real-time attendee analytics."
  },
  {
    title: "KAUNTER",
    subtitle: "Healthcare OS",
    img: null,
    industries: "PHARMACY · CLINICS · HOSPITALS",
    features: ["Patient Registration (EMR)", "Queue Management", "Doctor Consultation Notes", "Prescription Management", "Drug Inventory Alerts", "Panel Insurance Claims", "Appointment Booking"],
    desc: "A mission-critical operating system for healthcare providers, integrating EMR, queueing, and inventory."
  }
];

const services = [
  {
    num: "01",
    title: "WEBSITE DEVELOPMENT",
    bullets: ["Landing pages & profiles", "E-commerce storefronts", "SEO-ready architecture", "CMS integration"]
  },
  {
    num: "02",
    title: "CUSTOM APP DEV",
    bullets: ["Web apps (React, Laravel)", "iOS & Android", "API integrations", "Legacy migration"]
  },
  {
    num: "03",
    title: "TRAINING & TUTORING",
    bullets: ["ALROQ onboarding", "Digital literacy", "1-on-1 mentoring", "Post-training support"]
  },
  {
    num: "04",
    title: "TALENT RECRUITMENT",
    bullets: ["Candidate sourcing", "Interview coordination", "Tech & non-tech roles", "Retainer partnerships"]
  },
  {
    num: "05",
    title: "DIGITAL MARKETING",
    bullets: ["SEO & Local SEO", "Google & Meta Ads", "Social media management", "Content creation"]
  }
];

export default function App() {
  const [activeModal, setActiveModal] = useState<any | null>(null);
  const [hoveredService, setHoveredService] = useState<any | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused.current) {
        el.scrollLeft += 1;
        // reset to start for infinite loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const pause = () => { isPaused.current = true; };
    const resume = () => { isPaused.current = false; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeModal]);

  return (
    <div className="min-h-screen bg-white text-[#555555] font-sans selection:bg-black/10 selection:text-black overflow-x-hidden">

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ccc" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Top Bar */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="px-6 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-black animate-pulse"></div>
            <img src={alroqLogo} alt="ALROQ" className="h-5 w-auto object-contain" />
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-mono tracking-widest uppercase text-[#555555]">
            <a href="#systems" className="hover:text-black transition-colors">Systems</a>
            <a href="#capabilities" className="hover:text-black transition-colors">Capabilities</a>
            <a href="#deployment" className="hover:text-black transition-colors">Deployment</a>
          </div>
          <a href="https://wa.me/60137977986" className="border border-black text-black px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
            Initiate Contact
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-24 px-6 pb-20 max-w-[1600px] mx-auto flex flex-col gap-8">

        {/* Top Bento Row: Hero + Stats */}
        <div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[450px]">

          {/* Main Hero Box */}
          <div className="lg:col-span-2 border border-[#e0e0e0] bg-[#f7f7f7] p-8 lg:p-12 pb-12 lg:pb-16 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="font-mono text-[10px] tracking-widest text-black uppercase mb-6 flex items-center gap-2">
                <span className="inline-block w-4 h-[1px] bg-black"></span>
                The Software Factory
              </div>
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-[90px] leading-[0.85] text-black tracking-wide mb-6">
                YOUR DIGITAL<br/>BACKBONE.
              </h1>
              <p className="font-sans text-sm md:text-base text-[#555555] max-w-xl leading-relaxed">
                We build ready-to-deploy software products that solve real business problems — fast, affordable, and tailored to your operations. If your business runs on it, we have already built it.
              </p>
            </div>

            <div className="mt-auto pt-8 flex gap-4">
              <a href="#systems" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-black uppercase hover:text-[#555555] transition-colors border border-[#e0e0e0] px-6 py-3 bg-white">
                View Systems <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Stats Box */}
          <div className="border border-[#e0e0e0] bg-[#f7f7f7] p-8 flex flex-col gap-6 justify-center">
            {[
              { val: "72H", label: "Deployment Speed" },
              { val: "100%", label: "Customizable Flow" },
              { val: "12+", label: "Industries Served" },
              { val: "10+", label: "Core Products" }
            ].map((stat, i) => (
              <StatNumber key={i} val={stat.val} label={stat.label} />
            ))}
          </div>
        </div>

        {/* Horizontal Track: Systems (Products) */}
        <section id="systems" className="border border-[#e0e0e0] bg-[#f7f7f7] p-8 overflow-hidden flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-bebas text-4xl text-black tracking-wide">CORE SYSTEMS</h2>
              <p className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mt-2">Hover to pause · Click to view details</p>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden pb-4 select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...products, ...products].map((prod, i) => (
              <div key={i} onClick={() => setActiveModal({ type: 'product', data: products[i % products.length] })} className="min-w-[260px] md:min-w-[300px] border border-[#e0e0e0] bg-white group cursor-pointer hover:border-black transition-colors shrink-0 overflow-hidden">
                {/* Image area */}
                <div className="relative h-40 bg-[#f5f5f5] flex items-center justify-center border-b border-[#e0e0e0]">
                  <div className="absolute top-3 left-3 font-mono text-[9px] text-black tracking-widest uppercase border border-black/20 px-2 py-0.5 bg-white">SYS.0{(i % products.length) + 1}</div>
                  <Plus className="absolute top-3 right-3 w-4 h-4 text-[#bbb] group-hover:text-black transition-colors" />
                  {prod.img
                    ? <img src={prod.img} alt={prod.title} className="absolute inset-0 w-full h-full object-cover" />
                    : <span className="font-mono text-[9px] text-[#bbb] tracking-widest uppercase">NO IMAGE</span>
                  }
                </div>
                {/* Text area */}
                <div className="p-4">
                  <h3 className="font-bebas text-2xl text-black leading-none">{prod.title}</h3>
                  <div className="font-mono text-[9px] tracking-widest text-[#999] uppercase mt-0.5">{prod.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lower Grid: Capabilities & Process */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Capabilities */}
          <section id="capabilities" className="border border-[#e0e0e0] bg-[#f7f7f7] p-8">
            <h2 className="font-bebas text-4xl text-black tracking-wide mb-8">CAPABILITIES</h2>
            <div className="flex flex-col gap-4">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setHoveredService(svc)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setActiveModal({ type: 'service', data: svc })}
                >
                  <div className="border border-[#e0e0e0] bg-white p-4 flex justify-between items-center cursor-pointer hover:border-black group transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-black">{svc.num}</span>
                      <span className="font-mono text-xs text-black tracking-widest uppercase">{svc.title}</span>
                    </div>
                    <Plus className="w-4 h-4 text-[#aaa] group-hover:text-black" />
                  </div>

                  {/* Hover popup */}
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
                            <li key={j} className="flex items-start gap-2 text-xs text-[#555555] font-sans">
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

          {/* Deployment Process */}
          <section id="deployment" className="border border-[#e0e0e0] bg-[#f7f7f7] p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-bebas text-4xl text-black tracking-wide mb-2">DEPLOYMENT PROTOCOL</h2>
              <p className="font-sans text-sm text-[#555555] mb-8">From the moment you browse to the day your software goes live — we are with you at every step.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { phase: "01. BROWSE", desc: "Explore ecosystem & identify fit." },
                { phase: "02. CONSULT", desc: "Discovery call & fixed-price quote." },
                { phase: "03. BUILD", desc: "Base system + custom workflows." },
                { phase: "04. LAUNCH", desc: "Deploy, train, and scale." }
              ].map((step, i) => (
                <div key={i} className="border border-[#e0e0e0] bg-white p-4">
                  <div className="font-mono text-[10px] text-black tracking-widest uppercase mb-2">{step.phase}</div>
                  <p className="font-sans text-xs text-[#555555]">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border border-[#e0e0e0] bg-[#f7f7f7] p-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <div className="font-bebas text-2xl text-[#aaa]">ALROQ</div>
          <div className="font-mono text-[10px] tracking-widest text-[#aaa] text-center md:text-left">
            AL ROQ SDN BHD · 202401046612 (1592458-P)<br/>
            013-7977986 · info@al-roq.com
          </div>
          <div className="flex gap-4 font-mono text-[10px] tracking-widest text-[#aaa]">
            <a href="#" className="hover:text-black">FB</a>
            <a href="#" className="hover:text-black">IG</a>
            <a href="#" className="hover:text-black">IN</a>
          </div>
        </footer>

      </main>

      {/* Modal Popup overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-[#e0e0e0] w-full max-w-lg p-8 relative shadow-xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-[#aaa] hover:text-black transition-colors"
              >
                <XCircle className="w-6 h-6" strokeWidth={1} />
              </button>

              {activeModal.type === 'product' && (
                <>
                  <div className="font-mono text-[10px] text-black tracking-widest uppercase mb-2">System Details</div>
                  <h2 className="font-bebas text-4xl text-black mb-1">{activeModal.data.title}</h2>
                  <div className="font-mono text-xs text-[#555555] tracking-widest uppercase border-b border-[#e0e0e0] pb-6 mb-6">
                    {activeModal.data.subtitle}
                  </div>

                  <p className="font-sans text-sm text-black leading-relaxed mb-6">
                    {activeModal.data.desc}
                  </p>

                  <div className="mb-6">
                    <div className="font-mono text-[10px] tracking-widest text-[#aaa] uppercase mb-2">Target Industries</div>
                    <p className="font-mono text-[10px] text-[#333] leading-relaxed">{activeModal.data.industries}</p>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-[#aaa] uppercase mb-3">Core Modules</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeModal.data.features.map((feat: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-black mt-1 flex-shrink-0" />
                          <span className="font-sans text-xs text-[#555555]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeModal.type === 'service' && (
                <>
                  <div className="font-mono text-[10px] text-black tracking-widest uppercase mb-2">Capability Details</div>
                  <h2 className="font-bebas text-4xl text-black mb-6 border-b border-[#e0e0e0] pb-6">
                    {activeModal.data.title}
                  </h2>

                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-[#aaa] uppercase mb-3">Service Scope</div>
                    <ul className="space-y-3">
                      {activeModal.data.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-[#555555] font-sans text-sm border border-[#e0e0e0] bg-[#f7f7f7] p-3">
                          <span className="text-black mt-0.5">-</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <div className="mt-8 pt-6 border-t border-[#e0e0e0]">
                <a href="https://wa.me/60137977986" className="w-full block text-center border border-black bg-black text-white py-3 font-mono text-xs tracking-widest uppercase hover:bg-transparent hover:text-black transition-colors">
                  Request Information
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
