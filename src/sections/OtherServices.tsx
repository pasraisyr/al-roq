import { services } from "../data/services";

export default function OtherServices() {
  return (
    <section className="bg-[#f5f5f5] border-t border-black/10">
      {/* Header */}
      <div className="px-4 md:px-10 py-4 border-b border-black/10 flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-black/40 uppercase mb-1">Beyond Software</p>
          <h2 className="font-bebas text-3xl md:text-4xl text-black tracking-wide leading-none">OTHER SERVICES</h2>
        </div>
        <p className="hidden md:block font-sans text-sm text-black/50 max-w-xs text-right leading-relaxed">
          Full-stack support for businesses building on ALROQ.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-3 md:p-4">
        {services.map((svc, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between p-4 border border-black/12 cursor-pointer hover:bg-black hover:border-transparent transition-all duration-200"
            style={{ height: "250px" }}
          >
            <span className="font-mono text-[9px] text-black/30 group-hover:text-white/30 tracking-widest transition-colors duration-200">
              {svc.num}
            </span>
            <div>
              <h3 className="font-bebas text-2xl text-black group-hover:text-white tracking-wide leading-tight mb-2 transition-colors duration-200">
                {svc.title}
              </h3>
              <ul className="space-y-1">
                {svc.bullets.slice(0, 3).map((b, j) => (
                  <li
                    key={j}
                    className="font-sans text-[10px] text-black/45 group-hover:text-white/50 leading-snug transition-colors duration-200"
                  >
                    — {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
