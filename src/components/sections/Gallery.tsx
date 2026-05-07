"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";

const IMAGES = [
  {
    src: "/gigaton-2.jpg",
    label: "Laser Eyes",
    caption: "The Gigachad sees the future. It's blue. It's TON. It's $GIGATON.",
  },
  {
    src: "/gigaton-3.jpg",
    label: "The Chad Stare",
    caption: "Contemplating which wallet to put $GIGATON bags in.",
  },
  {
    src: "/gigaton-4.jpg",
    label: "TON Devotee",
    caption: "When you realize $GIGATON is the only token that matters on TON.",
  },
  {
    src: "/gigaton-5.jpg",
    label: "Gigachad Toast",
    caption: "Cheers to the holders. The ones who saw it coming.",
  },
  {
    src: "/gigaton-6.jpg",
    label: "Pavel, Pamp It",
    caption: "The call has been made. Pavel has been briefed. Charts go up.",
  },
  {
    src: "/gigaton-7.jpg",
    label: "Chad Alarm",
    caption: "GIGATON energy detected. All normies please evacuate the bags.",
  },
  {
    src: "/gigaton-8.jpg",
    label: "Uncle Gigaton Wants You",
    caption: "You. Yes, you. It's time to hold the biggest force on TON.",
  },
  {
    src: "/gigaton-9.jpg",
    label: "The Onboarding",
    caption: "Welcome to the $GIGATON community. We've been expecting you.",
  },
  {
    src: "/gigaton-10.jpg",
    label: "The Mastermind",
    caption: "When your $GIGATON bag is up 100x and you're still not selling.",
  },
  {
    src: "/gigaton-1.jpg",
    label: "Comfy Chad",
    caption: "Just sitting back while $GIGATON does the work. Unbothered. Massive.",
  },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden" style={{ background: 'rgba(1,6,12,0.5)' }}>
      <div className="max-w-7xl mx-auto mb-10 flex items-end justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-3"
            style={{ color: '#E8F4FD' }}
          >
            The Meme Vault
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm font-medium"
            style={{ color: 'rgba(232,244,253,0.45)' }}
          >
            Gigachad on TON. The culture speaks for itself.
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

      <div
        ref={scrollRef}
        className="max-w-7xl mx-auto flex gap-5 overflow-x-auto snap-x snap-mandatory py-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative shrink-0 snap-center rounded-3xl overflow-hidden group"
            style={{ width: 320, height: 420, border: '1px solid rgba(0,136,204,0.18)' }}
          >
            <img
              src={img.src}
              alt={img.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-bold text-sm mb-1.5" style={{ color: '#00B4FF' }}>{img.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(232,244,253,0.75)' }}>{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
