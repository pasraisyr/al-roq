import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import alroqLogo from '../assets/alroq-logo-cropped.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="px-6 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4">
          <img src="/favicon.png" alt="icon" className={`h-5 w-auto object-contain transition-all duration-300 ${scrolled ? '' : 'invert'}`} />
          <img src={alroqLogo} alt="ALROQ" className={`h-5 w-auto object-contain transition-all duration-300 ${scrolled ? '' : 'invert'}`} />
        </div>
        <div className={`hidden md:flex gap-8 text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-[#555555]' : 'text-white/80'}`}>
          <a href="#systems" className="hover:text-black transition-colors">Systems</a>
          <a href="#capabilities" className="hover:text-black transition-colors">Capabilities</a>
          <a href="#deployment" className="hover:text-black transition-colors">Deployment</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/60137977986" className={`hidden md:inline-block border px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${scrolled ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white/60 text-white hover:bg-white hover:text-black'}`}>
            Initiate Contact
          </a>
          <button
            className={`md:hidden p-1 transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#e0e0e0] bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {['systems', 'capabilities', 'deployment'].map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-[#555555] hover:text-black transition-colors py-1"
            >
              {link}
            </a>
          ))}
        </div>
      )}

    </header>

      {/* Mobile floating CTA */}
      <a
        href="https://wa.me/60137977986"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-black text-white font-mono text-[10px] tracking-widest uppercase px-6 py-3 shadow-lg active:scale-95 transition-transform"
      >
        Initiate Contact
      </a>
    </>
  );
}
