"use client";
import { motion } from "framer-motion";

const IMAGES = [
  { src: "/gigaton-1.jpg",  rotate: -6,  x: -20, y: 20,  scale: 1.05, z: 1  },
  { src: "/gigaton-2.jpg",  rotate: 4,   x: 60,  y: -30, scale: 1.1,  z: 3  },
  { src: "/gigaton-3.jpg",  rotate: -3,  x: -10, y: 40,  scale: 0.95, z: 2  },
  { src: "/gigaton-4.jpg",  rotate: 7,   x: 30,  y: 10,  scale: 1.0,  z: 4  },
  { src: "/gigaton-5.jpg",  rotate: -8,  x: -40, y: -10, scale: 1.08, z: 2  },
  { src: "/gigaton-6.jpg",  rotate: 5,   x: 20,  y: 50,  scale: 0.98, z: 3  },
  { src: "/gigaton-7.jpg",  rotate: -4,  x: 50,  y: -20, scale: 1.03, z: 1  },
  { src: "/gigaton-8.jpg",  rotate: 9,   x: -30, y: 30,  scale: 1.0,  z: 4  },
  { src: "/gigaton-9.jpg",  rotate: -7,  x: 10,  y: -40, scale: 1.06, z: 2  },
  { src: "/gigaton-10.jpg", rotate: 3,   x: -50, y: 15,  scale: 0.97, z: 3  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden"
      style={{ background: 'rgba(1,6,12,0.6)' }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#0088CC' }}>
          The Meme Vault
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black font-[family-name:var(--font-fredoka)] glow-text"
          style={{ color: '#E8F4FD' }}>
          Gigachad Culture
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }} className="mt-3 text-sm font-medium"
          style={{ color: 'rgba(232,244,253,0.4)' }}>
          The meme that conquered the internet. Now conquering TON.
        </motion.p>
      </div>

      {/* Scattered card grid */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1 — 4 cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
          {IMAGES.slice(0, 4).map((img, i) => (
            <ScatteredCard key={i} img={img} delay={i * 0.07} />
          ))}
        </div>
        {/* Row 2 — 3 cards, offset */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6 md:-mt-8">
          {IMAGES.slice(4, 7).map((img, i) => (
            <ScatteredCard key={i + 4} img={img} delay={(i + 4) * 0.07} />
          ))}
        </div>
        {/* Row 3 — 3 cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:-mt-8">
          {IMAGES.slice(7, 10).map((img, i) => (
            <ScatteredCard key={i + 7} img={img} delay={(i + 7) * 0.07} />
          ))}
        </div>
      </div>

    </section>
  );
}

function ScatteredCard({ img, delay }: { img: typeof IMAGES[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: img.rotate * 0.5 }}
      whileInView={{ opacity: 1, scale: img.scale, rotate: img.rotate }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: img.scale + 0.08,
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.2 },
      }}
      className="relative overflow-hidden cursor-pointer flex-shrink-0"
      style={{
        width: 220,
        height: 280,
        borderRadius: 20,
        border: '2px solid rgba(0,136,204,0.15)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)',
        zIndex: img.z,
      }}
    >
      <img
        src={img.src}
        alt="Gigachad meme"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      {/* Subtle blue tint overlay */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,136,204,0.15) 0%, transparent 70%)' }} />
    </motion.div>
  );
}
