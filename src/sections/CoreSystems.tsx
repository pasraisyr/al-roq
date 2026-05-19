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
      style={{ height: '220px' }}
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
      <div className="absolute inset-0 bg-black/40" />
      {/* Left gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 flex items-center gap-3 md:gap-6 h-full pl-4 md:pl-6 pr-3 md:pr-4">
        {/* Index */}
        <span className="font-mono text-[9px] text-white/40 shrink-0 w-4 md:w-5">{String(index + 1).padStart(2, '0')}</span>

        {/* Logo only — no name */}
        {product.img && (
          <img src={product.img} alt={product.title} className="h-8 w-28 md:w-36 object-contain shrink-0" style={{ filter: 'invert(1)' }} />
        )}

        {/* Subtitle */}
        <p className="font-mono text-[8px] text-white/40 tracking-widest uppercase shrink-0">{product.subtitle}</p>

        {/* Desc — hidden on mobile */}
        <p className="hidden md:block text-[11px] text-white/60 leading-snug w-48 shrink-0">{product.desc}</p>

        {/* Keywords — hidden on mobile */}
        <div className="hidden lg:flex flex-1 flex-wrap gap-1.5 items-center">
          {product.features.map((f) => (
            <span key={f} className="font-mono text-[9px] text-white/70 border border-white/25 px-2 py-0.5 whitespace-nowrap">
              {f}
            </span>
          ))}
        </div>

        {/* Spacer on mobile */}
        <div className="flex-1 md:hidden" />

        {/* View Details */}
        <button
          onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
          className="shrink-0 font-mono text-[8px] md:text-[9px] text-white tracking-widest uppercase border border-white/50 px-2 md:px-4 py-1.5 md:py-2 hover:bg-white hover:text-black transition-colors"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default function CoreSystems({ onSelect: _onSelect, activeIndex, onActiveIndexChange }: Props) {
  return (
    <section id="systems" className="flex flex-col bg-white">
      {/* Top header */}
      <div className="px-4 md:px-10 py-5 border-b border-black/10 shrink-0 flex items-center justify-between">
        <h2 className="font-bebas text-4xl md:text-6xl text-black tracking-wide leading-none">OUR SOFTWARE</h2>
        <span className="font-mono text-[10px] text-black/30 tracking-widest uppercase hidden md:block">6 platforms · one ecosystem</span>
      </div>

      {/* Scrollable rows — 3 visible at a time */}
      <div>
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
