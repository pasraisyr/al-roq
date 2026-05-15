import { useState, useEffect } from 'react';
import { Menu, X, Check, Phone, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Animate UI Components
import { FadeIn } from './components/ui/animate-ui/fade-in';
import { StaggerContainer, StaggerItem } from './components/ui/animate-ui/stagger-container';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#888888] selection:bg-[#C9A84C]/30 selection:text-[#F5F3EE] font-sans antialiased overflow-x-hidden">
      {/* Background ambient texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222] py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-2xl font-bebas text-[#F5F3EE] tracking-widest">
                ALROQ
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {['PRODUCTS', 'SERVICES', 'PROCESS', 'CONTACT'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-xs text-[#C9A84C] tracking-widest hover:text-[#F5F3EE] transition-colors uppercase">
                  {item}
                </a>
              ))}
              <a
                href="https://wa.me/60137977986"
                className="group relative px-6 py-2 border border-[#C9A84C] text-xs tracking-widest font-mono text-[#C9A84C] overflow-hidden uppercase hover:border-[#C9A84C] transition-colors"
              >
                <div className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 group-hover:text-alroq-black transition-colors duration-300">LET'S BUILD</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#C9A84C]">
                {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-[#222222] py-8 px-6"
            >
              <div className="flex flex-col space-y-6">
                {['PRODUCTS', 'SERVICES', 'PROCESS', 'CONTACT'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-sm tracking-widest text-[#C9A84C] hover:text-[#F5F3EE] uppercase">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section (Slide 01) */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden z-10 bg-[#0D0D0D]">
        {/* Concentric circles top right */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10 pointer-events-none">
          {[800, 600, 400, 200].map((size, i) => (
            <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A84C]" style={{ width: size, height: size }}></div>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div style={{ y: y1, opacity: opacity1 }} className="max-w-4xl">
            <FadeIn delay={0.2} direction="up">
              <span className="font-mono text-xs tracking-widest text-[#C9A84C] uppercase block mb-8">
                ALROQ — THE SOFTWARE FACTORY
              </span>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <h1 className="font-bebas text-6xl md:text-8xl lg:text-[100px] leading-[0.9] text-[#F5F3EE] mb-8">
                YOUR ONE-STOP<br/>
                DIGITAL BACKBONE<br/>
                <span className="text-[#C9A84C]">FOR EVERY BUSINESS.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <p className="font-sans text-lg text-[#888888] mb-12 max-w-2xl leading-relaxed">
                We build ready-to-deploy software products that solve real business problems — fast, affordable, and tailored to your operations. From F&B to healthcare, education to enterprise: if your business runs on it, we have already built it.
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Slide 01 bottom) */}
      <section className="py-20 border-y border-[#222222] bg-[#111111] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 text-center">
            {[
              { label: "INDUSTRIES", value: "12+" },
              { label: "PRODUCTS", value: "10+" },
              { label: "MODULES", value: "50+" },
              { label: "COMPANIES", value: "100+" }
            ].map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="font-bebas text-6xl md:text-7xl text-[#C9A84C] mb-4">{stat.value}</div>
                <div className="font-mono text-xs tracking-[0.2em] text-[#888888] uppercase">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="mt-20">
            <div className="flex flex-wrap justify-center gap-3">
              {['F&B', 'EDUCATION', 'HEALTHCARE', 'RETAIL', 'MANUFACTURING', 'LOGISTICS', 'PROPERTY', 'EVENTS', 'CONSTRUCTION', 'SERVICES', 'TRADING', 'HOSPITALITY', 'GOVERNMENT', 'FINANCIAL SERVICES', 'NGO'].map((tag) => (
                <span key={tag} className="font-mono text-[10px] text-[#666666] border border-[#2A2A2A] px-4 py-2 rounded-sm uppercase tracking-widest bg-[#181818]">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products Section (Slide 02) */}
      <section id="products" className="py-32 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="font-mono text-xs tracking-widest text-[#C9A84C] uppercase mb-4">ALROQ ECOSYSTEM</div>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#F5F3EE] mb-20">SIX PRODUCTS. EVERY INDUSTRY.</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SERVION",
                subtitle: "All-In-One Business ERP",
                industries: "RETAIL · TRADING · LOGISTICS · MANUFACTURING · SERVICES · PROPERTY · CONSTRUCTION · WHOLESALE · DISTRIBUTION",
                features: ["Multi-branch & multi-outlet", "CRM & Pipeline", "HR & Payroll", "Full Accounting", "Inventory Management", "Purchase & Procurement", "POS Integration"]
              },
              {
                title: "YARPY",
                subtitle: "Institution Management System",
                industries: "KINDERGARTEN · PRESCHOOL · GOV SCHOOL · PRIVATE SCHOOL · UNIVERSITY · COLLEGE · TUITION CENTRE",
                features: ["Student Registration", "Fee Collection", "Attendance Tracking", "Class Scheduling", "Parent Portal", "Academic Results", "Teacher Management"]
              },
              {
                title: "SKILIO",
                subtitle: "Learning Management System",
                industries: "CORPORATES · TRAINING PROVIDERS · FREELANCE TRAINERS · NGOS · GOV AGENCIES · PROFESSIONAL BODIES",
                features: ["Course Builder", "Live Class Scheduling", "Certification Issuance", "Learner Dashboards", "Progress Tracking", "Assessment Module", "White-label Branding"]
              },
              {
                title: "VENDO",
                subtitle: "F&B All-In-One Platform",
                industries: "RESTAURANT · CAFÉ · CLOUD KITCHEN · FRANCHISE CHAIN · FOOD COURT · CATERING · BAKERY",
                features: ["POS (Dine-in, Takeaway)", "Kitchen Display System", "Table Management", "Online Ordering Sync", "Inventory Tracking", "Recipe Costing", "Loyalty Points"]
              },
              {
                title: "HULACE",
                subtitle: "Event Connection Platform",
                industries: "NETWORKING EVENTS · CONFERENCES · TRADE FAIRS · COMMUNITY GROUPS · CORPORATE EVENTS",
                features: ["Event Discovery", "Ticketed RSVP", "Smart Networking", "QR Check-in", "Organiser Dashboard", "Sponsor Profiles", "Push Notifications"]
              },
              {
                title: "KAUNTER",
                subtitle: "Healthcare Operating System",
                industries: "PHARMACY · KLINIK KESIHATAN · PRIVATE CLINIC · SPECIALIST CLINIC · HOSPITAL · DENTAL CLINIC",
                features: ["Patient Registration (EMR)", "Queue Management", "Doctor Consultation Notes", "Prescription Management", "Drug Inventory Alerts", "Panel Insurance Claims", "Appointment Booking"]
              }
            ].map((product, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#181818] border border-[#222222] border-l-2 border-l-alroq-gold p-8 h-full flex flex-col hover:border-[#C9A84C]/50 transition-colors">
                  <h3 className="font-bebas text-3xl text-[#F5F3EE] mb-1">{product.title}</h3>
                  <div className="font-mono text-[10px] tracking-widest text-[#C9A84C] uppercase mb-6">{product.subtitle}</div>

                  <div className="mb-6">
                    <div className="font-mono text-[9px] tracking-widest text-[#666666] uppercase mb-2">Industries</div>
                    <p className="font-sans text-xs text-[#888888] leading-relaxed">{product.industries}</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-[#2A2A2A]">
                    <div className="font-mono text-[9px] tracking-widest text-[#666666] uppercase mb-3">Core Features</div>
                    <ul className="space-y-2">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-[#C9A84C] mt-1 flex-shrink-0" />
                          <span className="font-sans text-xs text-[#888888]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Speed & Process Section (Slide 03) */}
      <section id="process" className="py-32 bg-[#0A0A0A] relative z-10 border-t border-[#222222]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#F5F3EE] mb-20 text-center">YOUR SOFTWARE. IN DAYS. NOT MONTHS.</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {[
              { value: "72H", label: "FIRST BUILD LIVE" },
              { value: "100%", label: "YOUR FLOW" },
              { value: "∞", label: "SCALABLE" },
              { value: "DAYS", label: "NOT MONTHS" }
            ].map((stat, idx) => (
              <StaggerItem key={idx} className="bg-[#111111] border border-[#222222] p-8 text-center">
                <div className="font-bebas text-5xl text-[#C9A84C] mb-4">{stat.value}</div>
                <div className="font-mono text-xs tracking-widest text-[#888888] uppercase">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="grid md:grid-cols-4 gap-8 mb-24 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-alroq-border -z-10"></div>

            {[
              { num: "01", title: "BROWSE & PICK", desc: "Explore ALROQ's ecosystem. Identify the product closest to your need." },
              { num: "02", title: "TELL US WHAT'S MISSING", desc: "Share your workflow, missing features, and custom requirements." },
              { num: "03", title: "WE BUILD YOUR VERSION", desc: "We add your desired flow and features on top of the base product." },
              { num: "04", title: "GO LIVE. DONE.", desc: "Deploy. Train. Scale. No waiting. No broken promises." }
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-[#0A0A0A]">
                <div className="font-mono text-sm text-[#C9A84C] mb-6 border-b border-[#222222] pb-4">{step.num}</div>
                <h4 className="font-mono text-xs tracking-widest text-[#F5F3EE] uppercase mb-4">{step.title}</h4>
                <p className="font-sans text-sm text-[#888888] leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn>
              <div className="bg-[#181818] border border-[#222222] p-8 md:p-12 h-full">
                <h4 className="font-mono text-sm tracking-widest text-[#666666] uppercase mb-8 pb-4 border-b border-[#2A2A2A]">THE OLD WAY</h4>
                <ul className="space-y-6">
                  {["6–18 month dev cycles", "Built from scratch every time", "Scope creep & missed deadlines", "One-size-fits-all solutions", "Agencies that disappear after launch"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#888888] font-sans text-sm">
                      <X className="w-4 h-4 text-red-900 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#181818] border border-[#C9A84C] p-8 md:p-12 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 blur-[50px]"></div>
                <h4 className="font-mono text-sm tracking-widest text-[#C9A84C] uppercase mb-8 pb-4 border-b border-[#C9A84C]/20">THE ALROQ WAY</h4>
                <ul className="space-y-6 relative z-10">
                  {["Base system ready in 72 hours", "Start with a proven product base", "Fixed scope, your features added", "100% tailored to your workflow", "Ongoing support and updates"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#F5F3EE] font-sans text-sm">
                      <Check className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="border border-[#C9A84C] p-8 md:p-12 text-center bg-[#0D0A00]">
              <p className="font-sans text-lg text-[#C9A84C] max-w-3xl mx-auto leading-relaxed">
                Pick our software. Tell us what's missing. Add your desired flow and features. Your budget, your flow. Everyone deserves to get their own software.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section (Slide 04) */}
      <section id="services" className="py-32 bg-[#0A0A0A] relative z-10 border-t border-[#222222]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#F5F3EE] mb-20 text-center">BEYOND PRODUCTS. WE BUILD WITH YOU.</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "WEBSITE DEVELOPMENT",
                desc: "Professional websites built for speed, search, and conversion. Custom-designed for your brand and optimised for every device.",
                bullets: ["Landing pages & company profiles", "E-commerce storefronts", "SEO-ready architecture", "CMS integration"]
              },
              {
                num: "02",
                title: "CUSTOM APP DEVELOPMENT",
                desc: "End-to-end development of web and mobile applications tailored to your workflows. From MVP to full enterprise build.",
                bullets: ["Web application (React, Laravel)", "iOS & Android (React Native)", "API & integrations", "Legacy system migration"]
              },
              {
                num: "03",
                title: "TRAINING & TUTORING",
                desc: "One-on-one and group training for teams learning new platforms, tools, or digital skills. Practical and hands-on.",
                bullets: ["Onboarding for ALROQ products", "Digital literacy workshops", "1-on-1 mentoring", "Post-training support"]
              },
              {
                num: "04",
                title: "RECRUITMENT SOLUTIONS",
                desc: "End-to-end hiring support — from job scoping and candidate sourcing to interviews and onboarding.",
                bullets: ["Candidate sourcing", "Technical interview coordination", "Tech & non-tech roles", "Retainer-based partnerships"]
              }
            ].map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-[#181818] border border-[#222222] p-8 lg:p-12 h-full hover:border-[#C9A84C]/30 transition-colors">
                  <div className="font-mono text-sm text-[#C9A84C] mb-6">{service.num}</div>
                  <h3 className="font-mono text-sm tracking-widest text-[#F5F3EE] uppercase mb-4">{service.title}</h3>
                  <p className="font-sans text-sm text-[#888888] leading-relaxed mb-8">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#666666] font-sans text-xs">
                        <span className="text-[#C9A84C] mt-1">-</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}

            <StaggerItem className="md:col-span-2">
              <div className="bg-[#181818] border border-[#222222] p-8 lg:p-12 hover:border-[#C9A84C]/30 transition-colors">
                <div className="font-mono text-sm text-[#C9A84C] mb-6">05</div>
                <h3 className="font-mono text-sm tracking-widest text-[#F5F3EE] uppercase mb-4">DIGITAL MARKETING & SOCIAL MEDIA MANAGEMENT</h3>
                <p className="font-sans text-sm text-[#888888] leading-relaxed mb-8 max-w-3xl">Full-service digital marketing — SEO, paid ads, social media management, content creation, email campaigns, and monthly performance reporting.</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {["SEO — on-page, local SEO", "Google & Meta Ads", "Social media management", "Content creation & copy", "Email & WhatsApp marketing", "Monthly performance report"].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-[#666666] font-sans text-xs">
                      <span className="text-[#C9A84C] mt-1">-</span>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Customer Journey (Slide 05) */}
      <section className="py-32 bg-[#050505] relative z-10 border-t border-[#222222]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#F5F3EE] mb-20 text-center">HOW WE WORK WITH YOU.</h2>
          </FadeIn>

          <div className="space-y-12">
            {[
              {
                phase: "BROWSE",
                steps: [
                  { title: "Explore the Ecosystem", desc: "Visit al-roq.com or social media. Browse all 6 products and services." },
                  { title: "Identify Your Fit", desc: "Find the product closest to your business needs. Self-qualify your industry." },
                  { title: "Discover Features", desc: "Review modules, feature lists, and industry tags per product." }
                ]
              },
              {
                phase: "CONSULT",
                steps: [
                  { title: "Reach Out", desc: "Contact via WhatsApp, email, or website form. Response within 24 hours." },
                  { title: "Discovery Call", desc: "ALROQ team learns your operations, pain points, and current tools." },
                  { title: "Proposal & Quote", desc: "Receive a clear, fixed-price quotation. No surprises. No hidden charges." }
                ]
              },
              {
                phase: "BUILD",
                steps: [
                  { title: "Base System Ready", desc: "Your chosen product is configured and handed to you within 72 hours." },
                  { title: "Custom Features Added", desc: "Your specific workflows, fields, and features are built on top." },
                  { title: "Review & Refine", desc: "You test. You give feedback. We fix and refine until it is right." }
                ]
              },
              {
                phase: "LAUNCH",
                steps: [
                  { title: "Go Live", desc: "Full deployment to your environment — cloud, on-premise, or hybrid." },
                  { title: "Team Training", desc: "ALROQ trains your staff. Manuals and guides provided." },
                  { title: "Support & Scale", desc: "Ongoing technical support. Add new features as your business grows." }
                ]
              }
            ].map((row, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                  <div className="w-full lg:w-48 flex-shrink-0 border-l-2 border-[#C9A84C] pl-4 py-2">
                    <h4 className="font-mono text-sm tracking-widest text-[#F5F3EE] uppercase">{row.phase}</h4>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6 w-full">
                    {row.steps.map((step, i) => (
                      <div key={i} className="bg-[#181818] border border-[#222222] p-6">
                        <div className="font-mono text-[10px] text-[#C9A84C] uppercase tracking-widest mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45"></div>
                          {step.title}
                        </div>
                        <p className="font-sans text-xs text-[#888888] leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-20">
            <p className="font-mono text-sm text-[#C9A84C] text-center tracking-widest uppercase border-y border-[#222222] py-8">
              From the moment you browse ALROQ to the day your software goes live — we are with you at every step.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA / Footer (Slide 06) */}
      <section id="contact" className="py-40 relative z-10 bg-[#0A0A0A] flex flex-col items-center justify-center border-t border-[#222222] text-center overflow-hidden">
        {/* Subtle background rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          {[1000, 800, 600, 400].map((size, i) => (
            <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-alroq-white" style={{ width: size, height: size }}></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-bebas text-8xl md:text-[120px] text-[#F5F3EE] tracking-widest mb-8">ALROQ</h2>
            <div className="w-24 h-[2px] bg-[#C9A84C] mx-auto mb-8"></div>
            <p className="font-bebas text-3xl md:text-4xl text-[#C9A84C] mb-20 tracking-wider">TAILORED TECHNOLOGY, DELIVERED FAST</p>
          </FadeIn>

          <StaggerContainer className="flex flex-col items-center gap-6 mb-20">
            <StaggerItem>
              <a href="tel:0137977986" className="flex items-center gap-4 text-[#F5F3EE] hover:text-[#C9A84C] transition-colors font-mono text-sm tracking-widest">
                <Phone className="w-5 h-5" /> 013-7977986
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="mailto:info@al-roq.com" className="flex items-center gap-4 text-[#F5F3EE] hover:text-[#C9A84C] transition-colors font-mono text-sm tracking-widest">
                <Mail className="w-5 h-5" /> info@al-roq.com
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://www.al-roq.com" className="flex items-center gap-4 text-[#F5F3EE] hover:text-[#C9A84C] transition-colors font-mono text-sm tracking-widest">
                <Globe className="w-5 h-5" /> www.al-roq.com
              </a>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4 mb-32">
              {['FACEBOOK', 'INSTAGRAM', 'LINKEDIN', 'TIKTOK'].map((social) => (
                <a key={social} href="#" className="font-mono text-xs tracking-widest text-[#888888] border border-[#222222] px-6 py-3 hover:bg-alroq-border hover:text-[#F5F3EE] transition-all bg-[#111111]">
                  {social}
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="font-mono text-[10px] text-[#666666] tracking-widest uppercase">
              AL ROQ SDN BHD · 202401046612 (1592458-P)
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

export default App;
