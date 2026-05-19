import { Check, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../data/products';
import type { Service } from '../data/services';

type ModalData =
  | { type: 'product'; data: Product }
  | { type: 'service'; data: Service }
  | null;

interface Props {
  activeModal: ModalData;
  onClose: () => void;
}

export default function Modal({ activeModal, onClose }: Props) {
  return (
    <AnimatePresence>
      {activeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#e0e0e0] w-full max-w-lg p-6 md:p-8 relative shadow-xl max-h-[90vh] overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-[#aaa] hover:text-black transition-colors">
              <XCircle className="w-6 h-6" strokeWidth={1} />
            </button>

            {activeModal.type === 'product' && (
              <>
                <div className="font-mono text-[10px] text-black tracking-widest uppercase mb-2">System Details</div>
                <h2 className="font-bebas text-3xl md:text-4xl text-black mb-1">{activeModal.data.title}</h2>
                <div className="font-mono text-xs text-[#555555] tracking-widest uppercase border-b border-[#e0e0e0] pb-6 mb-6">
                  {activeModal.data.subtitle}
                </div>
                <p className="font-sans text-sm text-black leading-relaxed mb-6">{activeModal.data.desc}</p>
                <div className="mb-6">
                  <div className="font-mono text-[10px] tracking-widest text-[#aaa] uppercase mb-2">Target Industries</div>
                  <p className="font-mono text-[10px] text-[#333] leading-relaxed">{activeModal.data.industries}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#aaa] uppercase mb-3">Core Modules</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModal.data.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-black mt-1 flex-shrink-0" />
                        <span className="font-sans text-xs text-[#555555]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {activeModal.type === 'service' && (
              <>
                <div className="font-mono text-[10px] text-black tracking-widest uppercase mb-2">Capability Details</div>
                <h2 className="font-bebas text-3xl md:text-4xl text-black mb-6 border-b border-[#e0e0e0] pb-6">
                  {activeModal.data.title}
                </h2>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#aaa] uppercase mb-3">Service Scope</div>
                  <ul className="space-y-3">
                    {activeModal.data.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#555555] font-sans text-sm border border-[#e0e0e0] bg-[#f7f7f7] p-3">
                        <span className="text-black mt-0.5">-</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="mt-8 pt-6 border-t border-[#e0e0e0]">
              <a href="https://wa.me/60137977986" className="w-full block text-center border border-black bg-black text-white py-3 font-mono text-xs tracking-widest uppercase hover:bg-transparent hover:text-black transition-colors">
                Request Information
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
