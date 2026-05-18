export default function Footer() {
  return (
    <footer className="border border-[#e0e0e0] bg-[#f7f7f7] p-8 flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
      <div className="font-bebas text-2xl text-[#aaa]">ALROQ</div>
      <div className="font-mono text-[10px] tracking-widest text-[#aaa] text-center md:text-left">
        AL ROQ SDN BHD · 202401046612 (1592458-P) • 013-7977986 • [EMAIL_ADDRESS]
      </div>
      <div className="flex gap-4 font-mono text-[10px] tracking-widest text-[#aaa]">
        <a href="#" className="hover:text-black">FB</a>
        <a href="#" className="hover:text-black">IG</a>
        <a href="#" className="hover:text-black">IN</a>
      </div>
    </footer>
  );
}
