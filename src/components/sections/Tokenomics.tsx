"use client";
import { motion } from "framer-motion";
import { Coins, Lock, Flame, Heart } from "lucide-react";

export default function Tokenomics() {
  const cards = [
    { title: "1,000,000,000", label: "Total Supply", icon: <Coins className="w-6 h-6" style={{ color: '#0088CC' }} />, border: 'rgba(0,136,204,0.28)', glow: 'rgba(0,136,204,0.08)' },
    { title: "0% Tax", label: "Buy & Sell freely", icon: <Flame className="w-6 h-6" style={{ color: '#00B4FF' }} />, border: 'rgba(0,180,255,0.25)', glow: 'rgba(0,180,255,0.07)' },
    { title: "LP Locked", label: "Burned forever", icon: <Lock className="w-6 h-6" style={{ color: '#005F8F' }} />, border: 'rgba(0,95,143,0.28)', glow: 'rgba(0,95,143,0.1)' },
    { title: "100% Fair", label: "Community owned", icon: <Heart className="w-6 h-6" style={{ color: '#0088CC' }} />, border: 'rgba(0,136,204,0.22)', glow: 'rgba(0,24,50,0.15)' },
  ];
  return (
    <section id="tokenomics" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0088CC' }}>
          Giganomics
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-4" style={{ color: '#E8F4FD' }}>
          Project Tokenomics
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mb-16 font-medium" style={{ color: 'rgba(232,244,253,0.5)' }}>
          Simple. Transparent. Built for chads.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }} className="p-8 rounded-3xl flex flex-col items-center gap-4"
              style={{ background: c.glow, border: `1px solid ${c.border}`, backdropFilter: 'blur(12px)' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(2,12,20,0.7)', border: '1px solid rgba(0,136,204,0.12)' }}>{c.icon}</div>
              <h3 className="text-2xl font-bold tracking-tight" style={{ color: '#E8F4FD' }}>{c.title}</h3>
              <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: 'rgba(232,244,253,0.45)' }}>{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
