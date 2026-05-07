"use client";
import { motion } from "framer-motion";
import { Crown, Target, Eye } from "lucide-react";

export default function Narrative() {
  const points = [
    {
      icon: <Crown className="w-5 h-5" style={{ color: '#0088CC' }} />,
      title: "Gigachad on TON = GIGATON",
      text: "The biggest meme meets the biggest blockchain. Gigachad didn't come to play small — and neither does $GIGATON."
    },
    {
      icon: <Target className="w-5 h-5" style={{ color: '#00B4FF' }} />,
      title: "900M Users. One Chad.",
      text: "TON has the largest crypto distribution channel on Earth. When 900 million Telegram users need a mascot, the Gigachad steps up."
    },
    {
      icon: <Eye className="w-5 h-5" style={{ color: '#005F8F' }} />,
      title: "Laser-Eyed. Unbothered. Massive.",
      text: "While others panic sell, the $GIGATON holder leans back, laser eyes fixed on the horizon. Mass in motion. Always up."
    },
  ];

  return (
    <section id="why" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Visual Side — Gigachad laser eyes image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border"
          style={{ borderColor: 'rgba(0,136,204,0.22)' }}
        >
          <img
            src="/gigaton-2.jpg"
            alt="Gigachad with laser eyes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,12,20,0.92) 0%, rgba(2,12,20,0.2) 60%, transparent 100%)' }} />
          <div className="absolute bottom-8 left-8 right-8 text-left">
            <p className="text-xl md:text-2xl font-bold leading-snug drop-shadow-lg" style={{ color: '#E8F4FD' }}>
              "There are billions of tokens. There is only one $GIGATON."
            </p>
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-4" style={{ color: '#E8F4FD' }}>
              Why $GIGATON?
            </h2>
            <p className="text-lg leading-relaxed font-medium" style={{ color: 'rgba(232,244,253,0.6)' }}>
              We're tired of weak metas and tiny bags. TON deserves a Gigachad-tier token — one with the mass, the meme power, and the momentum to go all the way.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-lg backdrop-blur-sm"
                  style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.18)' }}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#E8F4FD' }}>{p.title}</h3>
                  <p className="leading-relaxed font-medium" style={{ color: 'rgba(232,244,253,0.55)' }}>{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
