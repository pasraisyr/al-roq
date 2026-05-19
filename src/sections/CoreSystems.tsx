import { useRef, useEffect } from 'react';
import { products, type Product } from '../data/products';
import servionVideo from '../assets/videos/servion.mp4';
import skilioVideo from '../assets/videos/skilio.mp4';
import yarpyVideo from '../assets/videos/yarpy.mp4';
import vendoVideo from '../assets/videos/vendo.mp4';
import hulaceVideo from '../assets/videos/hulace.mp4';
import kaunterVideo from '../assets/videos/kaunter.mp4';

const productVideos: Record<string, string> = {
  SERVION: servionVideo,
  YARPY: yarpyVideo,
  SKILIO: skilioVideo,
  VENDO: vendoVideo,
  HULACE: hulaceVideo,
  KAUNTER: kaunterVideo,
};

interface Props {
  onSelect: (product: Product) => void;
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

function ProductRow({
  product,
  index,
  isActive: _isActive,
  onClick,
  onViewDetails,
}: {
  product: Product;
  index: number;
  isActive?: boolean;
  onClick: () => void;
  onViewDetails: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = productVideos[product.title];

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.load();
    const tryPlay = () => v.play().catch(() => {});
    v.addEventListener('canplay', tryPlay, { once: true });
    tryPlay();
    return () => v.removeEventListener('canplay', tryPlay);
  }, []);

  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden border-b border-white/10 last:border-b-0 cursor-pointer group"
      style={{ height: 'calc((100vh - 57px) / 3)', flexShrink: 0 }}
    >
      {/* Video — full background */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Scrim */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />

      {/* Content overlay */}
      <div className="relative z-10 flex items-center gap-6 h-full pl-6 pr-4">
        {/* Index */}
        <span className="font-mono text-[9px] text-white/40 shrink-0 w-5">{String(index + 1).padStart(2, '0')}</span>

        {/* Logo */}
        {product.img && (
          <img src={product.img} alt={product.title} className="h-6 w-16 object-contain shrink-0" style={{ filter: 'invert(1)' }} />
        )}

        {/* Name + subtitle */}
        <div className="shrink-0">
          <h3 className="font-bebas leading-none text-white whitespace-nowrap" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 3rem)' }}>
            {product.title}
          </h3>
          <p className="font-mono text-[8px] text-white/40 tracking-widest uppercase">{product.subtitle}</p>
        </div>

        {/* Desc */}
        <p className="text-[11px] text-white/60 leading-snug w-48 shrink-0">{product.desc}</p>

        {/* Keywords */}
        <div className="flex-1 flex flex-wrap gap-1.5 items-center">
          {product.features.map((f) => (
            <span key={f} className="font-mono text-[9px] text-white/70 border border-white/25 px-2 py-0.5 whitespace-nowrap">
              {f}
            </span>
          ))}
        </div>

        {/* View Details */}
        <button
          onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
          className="shrink-0 font-mono text-[9px] text-white tracking-widest uppercase border border-white/50 px-4 py-2 hover:bg-white hover:text-black transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default function CoreSystems({ onSelect: _onSelect, activeIndex, onActiveIndexChange }: Props) {
  return (
    <section id="systems" className="flex bg-white" style={{ height: 'calc(100vh - 57px)' }}>
      {/* Merged left column */}
      <div className="w-24 shrink-0 flex items-center justify-center border-r border-black/15">
        <h2
          className="font-bebas text-black select-none whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '5rem', letterSpacing: '0.05em' }}
        >
          OUR SOFTWARE
        </h2>
      </div>

      {/* Scrollable rows — 3 visible at a time */}
      <div className="flex-1 overflow-y-auto relative" style={{ scrollbarWidth: 'none' }}>
        {products.map((prod, i) => (
          <ProductRow
            key={prod.title}
            product={prod}
            index={i}
            isActive={i === activeIndex}
            onClick={() => onActiveIndexChange(i)}
            onViewDetails={() => { onActiveIndexChange(i); _onSelect(prod); }}
          />
        ))}

      </div>
    </section>
  );
}
