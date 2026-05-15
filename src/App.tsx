import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check, Plus, ChevronRight, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Data
const products = [
  {
    title: "SERVION",
    subtitle: "Business ERP",
    industries: "RETAIL · LOGISTICS · MANUFACTURING · CONSTRUCTION",
    features: ["Multi-branch & multi-outlet", "CRM & Pipeline", "HR & Payroll", "Full Accounting", "Inventory Management", "Purchase & Procurement", "POS Integration"],
    desc: "The central operating system for your enterprise. Integrate accounting, CRM, HR, inventory, and analytics into a single, cohesive ontology."
  },
  {
    title: "YARPY",
    subtitle: "Institution OS",
    industries: "SCHOOLS · UNIVERSITIES · ACADEMIES",
    features: ["Student Registration", "Fee Collection", "Attendance Tracking", "Class Scheduling", "Parent Portal", "Academic Results", "Teacher Management"],
    desc: "Built for educational institutions to manage students, fees, attendance, and grading in one secure platform."
  },
  {
    title: "SKILIO",
    subtitle: "Learning Management",
    industries: "CORPORATES · TRAINERS · NGOS",
    features: ["Course Builder", "Live Class Scheduling", "Certification Issuance", "Learner Dashboards", "Progress Tracking", "Assessment Module", "White-label Branding"],
    desc: "Deploy customized learning platforms for corporates and training providers with full assessment and tracking."
  },
  {
    title: "VENDO",
    subtitle: "F&B Platform",
    industries: "RESTAURANT · CAFÉ · FRANCHISE",
    features: ["POS (Dine-in, Takeaway)", "Kitchen Display System", "Table Management", "Online Ordering Sync", "Inventory Tracking", "Recipe Costing", "Loyalty Points"],
    desc: "The ultimate F&B management system. Handle orders, kitchen displays, and complex inventory routing in real-time."
  },
  {
    title: "HULACE",
    subtitle: "Event Connection",
    industries: "NETWORKING · CONFERENCES · TRADE FAIRS",
    features: ["Event Discovery", "Ticketed RSVP", "Smart Networking", "QR Check-in", "Organiser Dashboard", "Sponsor Profiles", "Push Notifications"],
    desc: "Powering events of all scales with intelligent matchmaking, ticketing, and real-time attendee analytics."
  },
  {
    title: "KAUNTER",
    subtitle: "Healthcare OS",
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
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeModal]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#888888] font-sans selection:bg-[#C9A84C]/30 selection:text-[#F5F3EE] overflow-x-hidden">

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#333" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Top Bar - Utilitarian */}
      <header className="fixed top-0 w-full z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#222]">
        <div className="px-6 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#C9A84C] animate-pulse"></div>
            <span className="font-bebas text-2xl text-[#F5F3EE] tracking-widest">ALROQ</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-mono tracking-widest uppercase text-[#888888]">
            <a href="#systems" className="hover:text-[#C9A84C] transition-colors">Systems</a>
            <a href="#capabilities" className="hover:text-[#C9A84C] transition-colors">Capabilities</a>
            <a href="#deployment" className="hover:text-[#C9A84C] transition-colors">Deployment</a>
          </div>
          <a href="https://wa.me/60137977986" className="border border-[#C9A84C] text-[#C9A84C] px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase hover:bg-[#C9A84C] hover:text-black transition-colors">
            Initiate Contact
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-24 px-6 pb-20 max-w-[1600px] mx-auto flex flex-col gap-8">

        {/* Top Bento Row: Hero + Stats */}
        <div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[450px]">

          {/* Main Hero Box */}
          <div className="lg:col-span-2 border border-[#222] bg-[#0A0A0A] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div>
              <div className="font-mono text-[10px] tracking-widest text-[#C9A84C] uppercase mb-6 flex items-center gap-2">
                <span className="inline-block w-4 h-[1px] bg-[#C9A84C]"></span>
                The Software Factory
              </div>
              <h1 className="font-bebas text-5xl md:text-7xl lg:text-[90px] leading-[0.85] text-[#F5F3EE] tracking-wide mb-6">
                YOUR DIGITAL<br/>BACKBONE.
              </h1>
              <p className="font-sans text-sm md:text-base text-[#888888] max-w-xl leading-relaxed">
                We build ready-to-deploy software products that solve real business problems — fast, affordable, and tailored to your operations. If your business runs on it, we have already built it.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
               <a href="#systems" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#F5F3EE] uppercase hover:text-[#C9A84C] transition-colors border border-[#222] px-6 py-3 bg-[#111]">
                 View Systems <ArrowRight className="w-3 h-3" />
               </a>
            </div>
          </div>

          {/* Stats Box */}
          <div className="border border-[#222] bg-[#0A0A0A] p-8 flex flex-col gap-6 justify-center">
             {[
               { val: "72H", label: "Deployment Speed" },
               { val: "100%", label: "Customizable Flow" },
               { val: "12+", label: "Industries Served" },
               { val: "10+", label: "Core Products" }
             ].map((stat, i) => (
               <div key={i} className="flex justify-between items-end border-b border-[#222] pb-4 last:border-0 last:pb-0">
                 <div className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">{stat.label}</div>
                 <div className="font-bebas text-4xl text-[#C9A84C]">{stat.val}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Horizontal Track: Systems (Products) */}
        <section id="systems" className="border border-[#222] bg-[#0A0A0A] p-8 overflow-hidden flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-bebas text-4xl text-[#F5F3EE] tracking-wide">CORE SYSTEMS</h2>
              <p className="font-mono text-[10px] text-[#888888] tracking-widest uppercase mt-2">Horizontal scroll to view all nodes</p>
            </div>
            <div className="flex gap-2">
               <button onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })} className="border border-[#222] p-2 hover:bg-[#222] text-[#F5F3EE]"><ChevronRight className="w-4 h-4 rotate-180"/></button>
               <button onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })} className="border border-[#222] p-2 hover:bg-[#222] text-[#F5F3EE]"><ChevronRight className="w-4 h-4"/></button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {products.map((prod, i) => (
              <div key={i} onClick={() => setActiveModal({ type: 'product', data: prod })} className="min-w-[280px] md:min-w-[320px] border border-[#222] bg-[#111] p-6 flex flex-col gap-4 group cursor-pointer hover:border-[#C9A84C] transition-colors snap-start shrink-0">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase border border-[#C9A84C]/30 px-2 py-1 bg-[#C9A84C]/5">SYS.0{i+1}</div>
                  <Plus className="w-4 h-4 text-[#555] group-hover:text-[#C9A84C] transition-colors" />
                </div>
                <div>
                  <h3 className="font-bebas text-3xl text-[#F5F3EE] mt-2">{prod.title}</h3>
                  <div className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">{prod.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lower Grid: Capabilities & Process */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Capabilities */}
          <section id="capabilities" className="border border-[#222] bg-[#0A0A0A] p-8">
            <h2 className="font-bebas text-4xl text-[#F5F3EE] tracking-wide mb-8">CAPABILITIES</h2>
            <div className="flex flex-col gap-4">
              {services.map((svc, i) => (
                <div key={i} onClick={() => setActiveModal({ type: 'service', data: svc })} className="border border-[#222] bg-[#111] p-4 flex justify-between items-center cursor-pointer hover:border-[#C9A84C] group transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#C9A84C]">{svc.num}</span>
                    <span className="font-mono text-xs text-[#F5F3EE] tracking-widest uppercase">{svc.title}</span>
                  </div>
                  <Plus className="w-4 h-4 text-[#555] group-hover:text-[#C9A84C]" />
                </div>
              ))}
            </div>
          </section>

          {/* Deployment Process */}
          <section id="deployment" className="border border-[#222] bg-[#0A0A0A] p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-bebas text-4xl text-[#F5F3EE] tracking-wide mb-2">DEPLOYMENT PROTOCOL</h2>
              <p className="font-sans text-sm text-[#888888] mb-8">From the moment you browse to the day your software goes live — we are with you at every step.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { phase: "01. BROWSE", desc: "Explore ecosystem & identify fit." },
                { phase: "02. CONSULT", desc: "Discovery call & fixed-price quote." },
                { phase: "03. BUILD", desc: "Base system + custom workflows." },
                { phase: "04. LAUNCH", desc: "Deploy, train, and scale." }
              ].map((step, i) => (
                <div key={i} className="border border-[#222] bg-[#111] p-4">
                  <div className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase mb-2">{step.phase}</div>
                  <p className="font-sans text-xs text-[#888888]">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border border-[#222] bg-[#0A0A0A] p-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <div className="font-bebas text-2xl text-[#555]">ALROQ</div>
          <div className="font-mono text-[10px] tracking-widest text-[#555] text-center md:text-left">
            AL ROQ SDN BHD · 202401046612 (1592458-P)<br/>
            013-7977986 · info@al-roq.com
          </div>
          <div className="flex gap-4 font-mono text-[10px] tracking-widest text-[#555]">
            <a href="#" className="hover:text-[#C9A84C]">FB</a>
            <a href="#" className="hover:text-[#C9A84C]">IG</a>
            <a href="#" className="hover:text-[#C9A84C]">IN</a>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-[#C9A84C] w-full max-w-lg p-8 relative shadow-[0_0_50px_rgba(201,168,76,0.1)]"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-[#555] hover:text-[#F5F3EE] transition-colors"
              >
                <XCircle className="w-6 h-6" strokeWidth={1} />
              </button>

              {activeModal.type === 'product' && (
                <>
                  <div className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase mb-2">System Details</div>
                  <h2 className="font-bebas text-4xl text-[#F5F3EE] mb-1">{activeModal.data.title}</h2>
                  <div className="font-mono text-xs text-[#888888] tracking-widest uppercase border-b border-[#222] pb-6 mb-6">
                    {activeModal.data.subtitle}
                  </div>

                  <p className="font-sans text-sm text-[#F5F3EE] leading-relaxed mb-6">
                    {activeModal.data.desc}
                  </p>

                  <div className="mb-6">
                    <div className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-2">Target Industries</div>
                    <p className="font-mono text-[10px] text-[#C9A84C] leading-relaxed">{activeModal.data.industries}</p>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3">Core Modules</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeModal.data.features.map((feat: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-[#C9A84C] mt-1 flex-shrink-0" />
                          <span className="font-sans text-xs text-[#888888]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeModal.type === 'service' && (
                <>
                  <div className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase mb-2">Capability Details</div>
                  <h2 className="font-bebas text-4xl text-[#F5F3EE] mb-6 border-b border-[#222] pb-6">
                    {activeModal.data.title}
                  </h2>

                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3">Service Scope</div>
                    <ul className="space-y-3">
                      {activeModal.data.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-[#888888] font-sans text-sm border border-[#222] bg-[#111] p-3">
                          <span className="text-[#C9A84C] mt-0.5">-</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <div className="mt-8 pt-6 border-t border-[#222]">
                <a href="https://wa.me/60137977986" className="w-full block text-center border border-[#C9A84C] bg-[#C9A84C] text-black py-3 font-mono text-xs tracking-widest uppercase hover:bg-transparent hover:text-[#C9A84C] transition-colors">
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
