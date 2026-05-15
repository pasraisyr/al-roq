import { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Building2, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Animate UI Components
import { FadeIn } from './components/ui/animate-ui/fade-in';
import { StaggerContainer, StaggerItem } from './components/ui/animate-ui/stagger-container';
import { TextGenerateEffect } from './components/ui/animate-ui/text-generate-effect';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tighter">
                AL ROQ
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <StaggerContainer className="flex items-center space-x-8">
                {['Home', 'Company', 'Services', 'Contacts'].map((item) => (
                  <StaggerItem key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/60137977986"
                    className="relative group inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  >
                    Get in Touch
                    <div className="absolute inset-0 rounded-full group-hover:ring-4 ring-blue-600/20 transition-all duration-300"></div>
                  </motion.a>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Mobile menu button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden flex items-center"
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
                {['Home', 'Company', 'Services', 'Contacts'].map((item, i) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href="https://wa.me/60137977986"
                  className="block mt-4 text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition-transform"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                  Software Made Simple
                </div>
              </FadeIn>

              <div className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 mb-6 leading-[1.1]">
                <FadeIn delay={0.2} direction="up">Your System.</FadeIn>
                <FadeIn delay={0.3} direction="up">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Your Way.</span>
                </FadeIn>
                <FadeIn delay={0.4} direction="up">Without the Wait.</FadeIn>
              </div>

              <FadeIn delay={0.5}>
                <TextGenerateEffect
                  words="Custom, affordable, and rapid software deployment — for every business, in every industry. Solutions for All."
                  className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium"
                />
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/60137977986"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center">
                      Lets ROQ!
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </span>
                  </motion.a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} direction="left" className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[3rem] blur-3xl opacity-50 animate-pulse"></div>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/50"
              >
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">Dashboard Overview</h3>
                    <p className="text-sm text-gray-500 font-medium">Real-time business insights</p>
                  </div>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full"
                  >
                    +14.5%
                  </motion.span>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (i * 0.2) }}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100">
                        {i}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="h-2.5 bg-gray-100 rounded-full w-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${i*3}0%` }}
                            transition={{ duration: 1, delay: 1 + (i * 0.2), ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "0+", label: "Ready to Deploy Products" },
              { value: "0%", label: "The quality of results" },
              { value: "24/7", label: "Support Available" },
              { value: "100%", label: "Customizable" }
            ].map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium text-sm lg:text-base">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section id="company" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-bold tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Built for Everyone.<br/>Backed by Vision.</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              At Al Roq Sdn Bhd, we believe technology shouldn't be reserved for large corporations with big budgets. Every business deserves world-class software that is simple, fast, and affordable.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mt-6">
              We're a proudly Malaysian software company delivering powerful, ready-made solutions that are easily customizable to fit your needs. No inflated costs. No unnecessary delays. Just smart, effective technology designed to make you run faster and scale smarter.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products Section */}
      <section id="services" className="py-24 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase mb-4">
              Products
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Your System. Your Way.</h2>
            <p className="mt-4 text-xl text-gray-600 font-medium">Ready-to-deploy products - one off and subscription</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 border border-orange-100">
                  <span className="font-black text-2xl">V</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">F & B Software</h3>
                <p className="text-gray-500 font-medium leading-relaxed">Built for restaurants, cafes, and food stalls. Track kitchen inventory, manage menus, POS systems, staff rosters, and real-time sales insights.</p>
              </motion.div>
            </StaggerItem>

            {/* Product 2 */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 border border-blue-100">
                  <Building2 size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Business Operations</h3>
                <p className="text-gray-500 font-medium leading-relaxed">Handle accounting, CRM, HR, documents, tasks, inventory, warehouse, ticketing, and sales. All your business backend needs.</p>
              </motion.div>
            </StaggerItem>

            {/* Product 3 */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 border border-purple-100">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Booking Software</h3>
                <p className="text-gray-500 font-medium leading-relaxed">For freelancers, salons, barbers, makeup artists, photographers, and service providers. Manage appointments easily.</p>
              </motion.div>
            </StaggerItem>

            {/* Product 4 */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 border border-emerald-100">
                  <span className="font-black text-2xl">Y</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Institutional Software</h3>
                <p className="text-gray-500 font-medium leading-relaxed">For schools, tuition centers, and colleges. Simplify student records, staff management, and class scheduling.</p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-widest uppercase mb-4">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Our Services</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-56 bg-gray-100 relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                    alt="Website Development"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Tech</span>
                    <h3 className="text-white text-2xl font-bold tracking-tight">Website Development</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 font-medium mb-4 line-clamp-2">Stunning, responsive, SEO-optimized websites — whether for corporate branding, e-commerce, or portfolios.</p>
                  <span className="text-blue-600 font-bold inline-flex items-center group-hover:gap-2 transition-all">Explore more <ArrowRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-56 bg-gray-100 relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
                    alt="Digital Marketing"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Marketing</span>
                    <h3 className="text-white text-2xl font-bold tracking-tight">Digital Marketing</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 font-medium mb-4 line-clamp-2">We manage your social media, create content, host live sessions, and grow your brand's digital voice.</p>
                  <span className="text-blue-600 font-bold inline-flex items-center group-hover:gap-2 transition-all">Explore more <ArrowRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-56 bg-gray-100 relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                    alt="Talent Recruitment"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">HR</span>
                    <h3 className="text-white text-2xl font-bold tracking-tight">Talent Recruitment</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 font-medium mb-4 line-clamp-2">We help companies recruit and place the right talent fast. Our streamlined process ensures your team grows.</p>
                  <span className="text-blue-600 font-bold inline-flex items-center group-hover:gap-2 transition-all">Explore more <ArrowRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 tracking-tight">Why Choose Al Roq?</h2>
              <div className="space-y-8">
                {[
                  { title: "Simplicity First", desc: "Easy-to-use systems with zero technical headaches." },
                  { title: "Rapid Deployment", desc: "Go live in days, not months." },
                  { title: "Affordable as Free", desc: "Smart pricing that never breaks your business." },
                  { title: "Ready to Customize", desc: "Every solution can be tailored to your exact needs." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] transform rotate-3 opacity-10"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100"
              >
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="w-full h-auto" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to revolutionize your business?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">Join hundreds of businesses that have transformed their operations with our software solutions.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/60137977986"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-gray-900 bg-white hover:bg-gray-50 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 block tracking-tighter">
                AL ROQ
              </span>
              <p className="text-gray-400 font-medium mb-6 leading-relaxed">
                Technology for All. From Malaysia to the world.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#company" className="hover:text-white transition-colors">Company</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Contacts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li className="flex items-start group">
                  <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-blue-600 transition-colors mr-3 mt-1">
                    <Phone className="w-4 h-4 text-gray-300 group-hover:text-white" />
                  </div>
                  <a href="tel:+60137977986" className="hover:text-white mt-1.5">+60137977986</a>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-blue-600 transition-colors mr-3 mt-1">
                    <Mail className="w-4 h-4 text-gray-300 group-hover:text-white" />
                  </div>
                  <a href="mailto:farouq@al-roq.com" className="hover:text-white mt-1.5">farouq@al-roq.com</a>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-gray-900 rounded-lg group-hover:bg-blue-600 transition-colors mr-3 mt-1">
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:text-white" />
                  </div>
                  <span className="mt-1.5 leading-relaxed">Mutiara Complex Lot 568, 3.5½ Miles Jalan Ipoh, Kuala Lumpur.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 font-medium mb-4">Stay updated with our latest news and products.</p>
              <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 text-white font-medium"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-colors font-bold">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Al Roq Sdn Bhd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
