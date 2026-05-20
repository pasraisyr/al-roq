import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import menuLogo from '../assets/menu-logo.png';
import alroqLogo from '../assets/ALROQ LOGO-07.png';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/alroq.io',
    icon: (
      <svg viewBox="0 0 448 512" className="w-5 h-5" fill="currentColor">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@alroqsdnbhd',
    icon: (
      <svg viewBox="0 0 448 512" className="w-5 h-5" fill="currentColor">
        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61578200601019',
    icon: (
      <svg viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor">
        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 389.1 512 256h0z"/>
      </svg>
    ),
  },
];

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
          <div className="flex items-center overflow-hidden h-8" style={{ width: '120px' }}>
            <img
              src={alroqLogo}
              alt="ALROQ"
              className={`transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
              style={{ width: '120px', marginTop: '-38px', marginBottom: '-38px' }}
            />
          </div>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/60137977986" className={`hidden md:inline-block border px-5 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${scrolled ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white/60 text-white hover:bg-white hover:text-black'}`}>
              Initiate Contact
            </a>
            <button
              className={`md:hidden p-1 transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : (
                <div className="overflow-hidden" style={{ width: '28px', height: '28px' }}>
                  <img
                    src={menuLogo}
                    alt="menu"
                    className={scrolled ? '' : 'brightness-0 invert'}
                    style={{ width: '28px', height: '28px', transform: 'scale(1.6)', transformOrigin: 'center' }}
                  />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#e0e0e0] bg-white/95 backdrop-blur-md px-6 py-6 flex flex-col gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#999] mb-4">Follow Us</p>
              <div className="flex flex-col gap-4">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-black hover:text-[#555] transition-colors"
                  >
                    {s.icon}
                    <span className="font-mono text-xs tracking-widest uppercase">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-[#e0e0e0] pt-4">
              <p className="font-mono text-[10px] tracking-widest uppercase text-[#999] mb-1">AL ROQ SDN BHD</p>
              <p className="font-mono text-[10px] tracking-widest text-[#bbb]">202401046612 (1592458-P)</p>
            </div>

            <a
              href="https://wa.me/60137977986"
              onClick={() => setMenuOpen(false)}
              className="border border-black text-black font-mono text-xs tracking-widest uppercase px-5 py-3 text-center hover:bg-black hover:text-white transition-all"
            >
              Initiate Contact
            </a>
          </div>
        )}
      </header>


    </>
  );
}
