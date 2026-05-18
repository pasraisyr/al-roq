import alroqLogo from '../assets/alroq-logo-cropped.png';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
      <div className="px-6 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4">
          <img src="/favicon.png" alt="icon" className="h-5 w-auto object-contain" />
          <img src={alroqLogo} alt="ALROQ" className="h-5 w-auto object-contain" />
        </div>
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest uppercase text-[#555555]">
          <a href="#systems" className="hover:text-black transition-colors">Systems</a>
          <a href="#capabilities" className="hover:text-black transition-colors">Capabilities</a>
          <a href="#deployment" className="hover:text-black transition-colors">Deployment</a>
        </div>
        <a href="https://wa.me/60137977986" className="border border-black text-black px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
          Initiate Contact
        </a>
      </div>
    </header>
  );
}
