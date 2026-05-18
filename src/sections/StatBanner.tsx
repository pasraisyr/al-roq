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
    <div className="flex-1 flex flex-col items-center justify-center py-6 border-r border-[#e0e0e0] last:border-r-0">
      <div className="font-bebas text-4xl md:text-5xl text-black">
        {isNumeric ? `${count}${suffix}` : val}
      </div>
      <div className="font-mono text-[9px] tracking-widest text-[#999] uppercase mt-1">{label}</div>
    </div>
  );
}

export default function StatBanner() {
  return (
    <div className="border border-[#e0e0e0] bg-white/80 backdrop-blur-sm flex">
      {stats.map((stat, i) => (
        <StatBlock key={i} val={stat.val} label={stat.label} />
      ))}
    </div>
  );
}
