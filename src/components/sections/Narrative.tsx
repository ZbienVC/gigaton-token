"use client";
import { motion } from "framer-motion";
import { Crown, Target, Eye } from "lucide-react";

export default function Narrative() {
  const points = [
    { icon: <Crown className="w-5 h-5" style={{ color: '#0088CC' }} />, title: "Not Just a Coin", text: "It's a symbol of unstoppable force. Why settle for small when you can own a gigaton?" },
    { icon: <Target className="w-5 h-5" style={{ color: '#00B4FF' }} />, title: "TON-Native Power", text: "$GIGATON is built for TON — the blockchain with 900M users at its doorstep. The distribution network is already there." },
    { icon: <Eye className="w-5 h-5" style={{ color: '#005F8F' }} />, title: "The World is Watching", text: "As TON grows, $GIGATON grows with it. Mass in motion cannot be stopped." },
  ];
  return (
    <section id="why" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border flex items-center justify-center"
          style={{ borderColor: 'rgba(0,136,204,0.18)', background: 'rgba(0,16,28,0.8)' }}>
          <div className="text-center p-8 relative z-10">
            <div className="text-7xl font-black font-[family-name:var(--font-fredoka)] glow-text mb-6" style={{ color: '#0088CC' }}>GIGA</div>
            <p className="text-2xl font-bold mb-4" style={{ color: '#E8F4FD' }}>"There are billions of tokens. There is only one $GIGATON."</p>
            <p className="text-sm" style={{ color: 'rgba(232,244,253,0.45)' }}>A force of nature. Permanently on-chain.</p>
          </div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(0,136,204,0.08) 0%, transparent 70%)' }} />
        </motion.div>
        <div className="flex flex-col gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-4" style={{ color: '#E8F4FD' }}>Why $GIGATON?</h2>
            <p className="text-lg leading-relaxed font-medium" style={{ color: 'rgba(232,244,253,0.6)' }}>We're done with tiny. The TON ecosystem needs a token with the mass to match its ambition.</p>
          </motion.div>
          <div className="flex flex-col gap-8">
            {points.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1 shadow-lg backdrop-blur-sm"
                  style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.18)' }}>{p.icon}</div>
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
