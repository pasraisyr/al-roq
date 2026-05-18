import { useCounter } from '../hooks/useCounter';

const stats = [
  { val: "72H", label: "First Build Live" },
  { val: "100%", label: "Your Flow" },
  { val: "∞", label: "Scalable" },
  { val: "DAYS", label: "Not Months" },
];

function StatBlock({ val, label }: { val: string; label: string }) {
  const num = parseInt(val.replace(/\D/g, ''));
  const suffix = val.replace(/[0-9]/g, '');
  const isNumeric = !isNaN(num) && num > 0;
  const count = useCounter(isNumeric ? num : 0);

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-6 border-r border-b sm:border-b-0 border-[#e0e0e0] last:border-r-0 even:border-r-0 sm:even:border-r">
      <div className="font-bebas text-4xl md:text-5xl text-black">
        {isNumeric ? `${count}${suffix}` : val}
      </div>
      <div className="font-mono text-[9px] tracking-widest text-[#999] uppercase mt-1">{label}</div>
    </div>
  );
}

export default function StatBanner({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="border border-[#e0e0e0] bg-white/80 backdrop-blur-sm flex flex-col md:w-48 shrink-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-center py-6 border-b border-[#e0e0e0] last:border-b-0">
            <div className="font-bebas text-4xl text-black">
              {(() => {
                const num = parseInt(stat.val.replace(/\D/g, ''));
                const suffix = stat.val.replace(/[0-9]/g, '');
                return isNaN(num) || num === 0 ? stat.val : `${num}${suffix}`;
              })()}
            </div>
            <div className="font-mono text-[9px] tracking-widest text-[#999] uppercase mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="border border-[#e0e0e0] bg-white/80 backdrop-blur-sm grid grid-cols-2 sm:flex">
      {stats.map((stat, i) => (
        <StatBlock key={i} val={stat.val} label={stat.label} />
      ))}
    </div>
  );
}
