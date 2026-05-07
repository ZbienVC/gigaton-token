"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "1,000,000,000", label: "Total Supply" },
  { value: "0%", label: "Buy & Sell Tax" },
  { value: "Burnt 🔥", label: "Liquidity Pool" },
  { value: "Groypfi", label: "Launched On" },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section label + heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#0088CC' }}>Giganomics</p>
          <h2 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-fredoka)] tracking-tight glow-text"
            style={{ color: '#E8F4FD' }}>
            Project Tokenomics
          </h2>
        </motion.div>

        {/* Main layout: image left, stat cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">

          {/* Gigachad side-profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[420px] md:h-[520px] flex items-end justify-center lg:justify-end"
          >
            <img
              src="/gigaton-7.jpg"
              alt="Gigachad"
              className="h-full object-contain object-bottom"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 80%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 80%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
                filter: 'brightness(0.85) contrast(1.1)',
              }}
            />
            {/* Blue glow behind image */}
            <div className="absolute inset-0 -z-10 rounded-full blur-[80px]" style={{ background: 'rgba(0,136,204,0.06)' }} />
          </motion.div>

          {/* Stat cards */}
          <div className="flex flex-col gap-4 pb-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: -6 }}
                className="flex items-center justify-between px-8 py-6 rounded-2xl group transition-all cursor-default"
                style={{
                  background: i === 1 ? 'rgba(0,136,204,0.12)' : 'rgba(0,20,36,0.7)',
                  border: `1px solid ${i === 1 ? 'rgba(0,136,204,0.4)' : 'rgba(0,136,204,0.15)'}`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <h3 className="text-3xl md:text-4xl font-black font-[family-name:var(--font-fredoka)] tracking-tight"
                  style={{ color: i === 1 ? '#00B4FF' : '#E8F4FD' }}>
                  {s.value}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ color: 'rgba(232,244,253,0.35)' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
