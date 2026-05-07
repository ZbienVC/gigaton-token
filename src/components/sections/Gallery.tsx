"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const IMAGES = [
  { label: "The Force", caption: "One gigaton of mass in motion. Unstoppable, inevitable, permanent.", emoji: "⚡" },
  { label: "The Ocean", caption: "A gigaton is the weight of a trillion liters of water. TON flows the same way.", emoji: "🌊" },
  { label: "The Glacier", caption: "When a gigaton moves, it reshapes everything in its path.", emoji: "🏔️" },
  { label: "The Network", caption: "TON blockchain — 900 million users waiting. $GIGATON leads the way.", emoji: "🔷" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => { if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 420, behavior: "smooth" }); };
  return (
    <section id="gallery" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden" style={{ background: 'rgba(1,6,12,0.5)' }}>
      <div className="max-w-7xl mx-auto mb-10 flex items-end justify-between">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-3" style={{ color: '#E8F4FD' }}>
            The Archive
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-sm font-medium" style={{ color: 'rgba(232,244,253,0.45)' }}>
            Visuals of mass, momentum, and the TON ecosystem.
          </motion.p>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={() => scroll(-1)} className="w-11 h-11 rounded-full flex items-center justify-center rotate-180 transition-all hover:scale-110"
            style={{ border: '1px solid rgba(0,136,204,0.28)', background: 'rgba(0,136,204,0.06)', color: '#0088CC' }}>
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scroll(1)} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ border: '1px solid rgba(0,136,204,0.28)', background: 'rgba(0,136,204,0.06)', color: '#0088CC' }}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="max-w-7xl mx-auto flex gap-5 overflow-x-auto snap-x snap-mandatory py-4" style={{ scrollbarWidth: 'none' }}>
        {IMAGES.map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="relative shrink-0 snap-center rounded-3xl overflow-hidden group flex items-center justify-center"
            style={{ width: 320, height: 420, border: '1px solid rgba(0,136,204,0.18)', background: 'rgba(0,20,36,0.9)' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="text-6xl relative z-10">{img.emoji}</div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-bold text-sm mb-1.5" style={{ color: '#0088CC' }}>{img.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(232,244,253,0.7)' }}>{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
