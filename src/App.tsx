import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight, Globe, Shield, Cpu, Zap } from 'lucide-react';
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
    <div className="min-h-screen bg-[#000000] text-[#E0E0E0] selection:bg-blue-900 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background ambient light */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full opacity-50 mix-blend-screen"></div>
      </div>

      {/* Navbar - Palantir style (minimal, strict) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#000000]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-xl tracking-[0.2em] font-light text-white uppercase flex items-center gap-3">
                <div className="w-6 h-6 border-[1.5px] border-white flex items-center justify-center rotate-45">
                  <div className="w-2 h-2 bg-blue-500"></div>
                </div>
                AL ROQ
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {['PLATFORMS', 'SOLUTIONS', 'COMPANY', 'CAREERS'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs tracking-widest font-medium text-gray-400 hover:text-white transition-colors uppercase">
                  {item}
                </a>
              ))}
              <a
                href="https://wa.me/60137977986"
                className="group relative px-6 py-2 border border-white/20 text-xs tracking-widest font-medium text-white overflow-hidden uppercase hover:border-white transition-colors"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Contact Us</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
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
              className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 py-8 px-6"
            >
              <div className="flex flex-col space-y-6">
                {['PLATFORMS', 'SOLUTIONS', 'COMPANY', 'CAREERS'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm tracking-[0.2em] text-gray-400 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden z-10">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0 opacity-30">
           <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div style={{ y: y1, opacity: opacity1 }} className="max-w-4xl">
            <FadeIn delay={0.2} direction="up">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-blue-500"></div>
                <span className="text-xs tracking-[0.3em] text-blue-400 uppercase font-bold">Foundational Software</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[1.05] font-light text-white tracking-tight mb-8">
                Foundational <br/>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Software of Tomorrow.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
                We build software that connects data, technologies, and human intuition. For organizations that need to make crucial decisions, fast.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} direction="up">
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#platforms" className="group flex items-center justify-between px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors w-full sm:w-auto">
                  <span className="text-xs tracking-widest font-bold uppercase">Explore Platforms</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/60137977986" className="group flex items-center justify-between px-8 py-4 border border-white/20 text-white hover:border-white transition-colors w-full sm:w-auto">
                  <span className="text-xs tracking-widest font-bold uppercase">Contact Sales</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] tracking-widest uppercase text-white writing-vertical">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Data Section (Palantir style stats) */}
      <section className="py-24 border-y border-white/5 bg-[#030303] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid md:grid-cols-4 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "Deployment Speed", value: "Days", desc: "Not months or years" },
              { label: "System Reliability", value: "99.9%", desc: "Enterprise grade uptime" },
              { label: "Customization", value: "100%", desc: "Tailored to your ontology" },
              { label: "Global Reach", value: "World", desc: "From Malaysia to global" }
            ].map((stat, idx) => (
              <StaggerItem key={idx} className="pt-8 md:pt-0 md:px-8 first:pt-0 first:px-0">
                <div className="text-xs tracking-[0.2em] text-gray-500 mb-4 uppercase">{stat.label}</div>
                <div className="text-5xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-blue-400">{stat.desc}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Platforms / Products Section */}
      <section id="platforms" className="py-32 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gray-600"></div>
              <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">Operating Systems for the Modern Enterprise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-20 tracking-tight">Core Platforms</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Platform 1 */}
            <FadeIn delay={0.2}>
              <div className="group relative bg-[#0A0A0A] border border-white/10 p-10 lg:p-16 hover:border-white/30 transition-colors h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={120} strokeWidth={0.5} />
                </div>
                <div className="mb-auto relative z-10">
                  <h3 className="text-sm tracking-[0.3em] text-blue-500 font-bold mb-4">AL ROQ O.S.</h3>
                  <h4 className="text-3xl font-light text-white mb-6">Business Operations</h4>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    The central operating system for your enterprise. Integrate accounting, CRM, HR, inventory, and analytics into a single, cohesive ontology.
                  </p>
                </div>
                <div className="pt-8 border-t border-white/10 relative z-10">
                  <a href="#" className="inline-flex items-center text-xs tracking-widest text-white uppercase group/link">
                    Discover O.S. <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Platform 2 */}
            <FadeIn delay={0.4}>
              <div className="group relative bg-[#0A0A0A] border border-white/10 p-10 lg:p-16 hover:border-white/30 transition-colors h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe size={120} strokeWidth={0.5} />
                </div>
                <div className="mb-auto relative z-10">
                  <h3 className="text-sm tracking-[0.3em] text-orange-500 font-bold mb-4">AL ROQ COMMERCE</h3>
                  <h4 className="text-3xl font-light text-white mb-6">F&B and Retail Logistics</h4>
                  <p className="text-gray-400 font-light leading-relaxed mb-8">
                    Built for fast-moving consumer environments. Track inventory, manage POS systems, and visualize real-time sales velocity across multiple nodes.
                  </p>
                </div>
                <div className="pt-8 border-t border-white/10 relative z-10">
                  <a href="#" className="inline-flex items-center text-xs tracking-widest text-white uppercase group/link">
                    Discover Commerce <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-32 bg-[#050505] relative z-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Radical Integration. <br/><span className="text-gray-500">Absolute Clarity.</span></h2>
              <div className="space-y-10">
                {[
                  { icon: <Cpu className="w-5 h-5 text-blue-400" />, title: "Rapid Deployment", desc: "Our systems are ready-built. We integrate with your existing data infrastructure in days, eliminating multi-year IT failures." },
                  { icon: <Zap className="w-5 h-5 text-blue-400" />, title: "Ontology Mapping", desc: "We map your entire business logic into software. Every asset, person, and process becomes a queryable node." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="relative aspect-square md:aspect-[4/3] bg-[#0A0A0A] border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_50%)]"></div>
                {/* Abstract UI Representation */}
                <div className="relative w-3/4 h-3/4 border border-white/5 flex flex-col gap-4 p-4">
                  <div className="flex gap-4">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} transition={{ duration: 1 }} className="h-2 bg-blue-500/50"></motion.div>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1, delay: 0.2 }} className="h-2 bg-white/10"></motion.div>
                  </div>
                  <div className="flex-1 border border-white/5 bg-white/5 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 border border-blue-500/30 rounded-full border-t-blue-500"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">Deploy the future.</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">Transform your operational landscape today.</p>
            <a
              href="https://wa.me/60137977986"
              className="inline-flex items-center px-10 py-5 bg-white text-black text-sm tracking-[0.2em] font-bold uppercase hover:bg-gray-200 transition-colors"
            >
              Contact Engineering
              <ChevronRight className="ml-4 w-5 h-5" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#000000] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl tracking-[0.2em] font-light text-white uppercase flex items-center gap-3">
              <div className="w-4 h-4 border border-white flex items-center justify-center rotate-45">
                <div className="w-1.5 h-1.5 bg-blue-500"></div>
              </div>
              AL ROQ
            </div>

            <div className="flex gap-8 text-xs tracking-widest text-gray-500 uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="text-xs text-gray-600 tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Al Roq Sdn Bhd
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
