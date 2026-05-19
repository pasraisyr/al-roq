const industries = [
  "F&B", "Education", "Healthcare", "Retail", "Manufacturing",
  "Logistics", "Property", "Events", "Construction", "Services",
  "Trading", "Hospitality", "Government", "Financial Services", "NGO",
];

export default function Industries() {
  return (
    <section className="border border-[#e0e0e0] bg-[#f7f7f7] py-6 overflow-hidden">
      <div className="px-4 md:px-8 mb-5">
        <div className="font-mono text-[10px] tracking-widest text-[#999] uppercase flex items-center gap-2">
          <span className="inline-block w-4 h-[1px] bg-[#999]" />
          Industries We Serve
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#f7f7f7] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#f7f7f7] to-transparent pointer-events-none" />

        {/* Two copies side by side — first copy scrolls to -100%, second follows seamlessly */}
        <div className="flex w-max animate-marquee">
          {[...industries, ...industries].map((ind, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-bebas text-2xl md:text-3xl text-black tracking-wide px-6">{ind}</span>
              <span className="text-[#ccc]">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
