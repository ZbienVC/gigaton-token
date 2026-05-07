"use client";
import { motion } from "framer-motion";
import { Wallet, Search, Coins, Sparkles } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    { num: "01", title: "Get Tonkeeper Wallet", text: "Download Tonkeeper or any TON-compatible wallet. Fund it with TON from any exchange.", icon: <Wallet className="w-7 h-7" style={{ color: '#0088CC' }} />, glow: 'rgba(0,136,204,0.07)', border: 'rgba(0,136,204,0.2)' },
    { num: "02", title: "Go to DeDust.io", text: "Navigate to dedust.io and connect your TON wallet. DeDust is the go-to DEX on TON.", icon: <Search className="w-7 h-7" style={{ color: '#00B4FF' }} />, glow: 'rgba(0,180,255,0.07)', border: 'rgba(0,180,255,0.2)' },
    { num: "03", title: "Paste CA", text: "Search for $GIGATON or paste the contract address to find the right token.", icon: <Coins className="w-7 h-7" style={{ color: '#005F8F' }} />, glow: 'rgba(0,95,143,0.07)', border: 'rgba(0,95,143,0.2)' },
    { num: "04", title: "Own the Force", text: "Swap TON for $GIGATON. Hold the most massive force on the blockchain.", icon: <Sparkles className="w-7 h-7" style={{ color: '#0088CC' }} />, glow: 'rgba(0,136,204,0.07)', border: 'rgba(0,136,204,0.2)' },
  ];
  return (
    <section id="how-to-buy" className="py-32 md:py-40 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,136,204,0.07) 0%, transparent 70%)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-6" style={{ color: '#E8F4FD' }}>How to Own $GIGATON</h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ color: 'rgba(232,244,253,0.55)' }}>
            You don't just buy $GIGATON. You align yourself with the most massive force on TON.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }} className="relative p-8 rounded-[2rem] overflow-hidden group transition-all"
              style={{ background: step.glow, border: `1px solid ${step.border}`, backdropFilter: 'blur(14px)' }}>
              <div className="absolute top-4 right-5 text-7xl font-black select-none font-[family-name:var(--font-fredoka)] transition-transform group-hover:scale-110"
                style={{ color: 'rgba(0,136,204,0.05)' }}>{step.num}</div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 relative z-10"
                style={{ background: 'rgba(2,12,20,0.8)', border: '1px solid rgba(0,136,204,0.12)' }}>{step.icon}</div>
              <h3 className="text-xl font-bold mb-3 relative z-10 tracking-tight" style={{ color: '#E8F4FD' }}>{step.title}</h3>
              <p className="font-medium leading-relaxed relative z-10" style={{ color: 'rgba(232,244,253,0.5)' }}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
