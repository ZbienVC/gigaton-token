"use client";
import { motion } from "framer-motion";
import { Copy, TrendingUp, BarChart2 } from "lucide-react";
import { useState } from "react";

const TICKER_ITEMS = [
  "GIGATON", "THE BIGGEST FORCE ON TON", "GIGACHAD ON TON", "0% TAX",
  "LP LOCKED", "1,000,000,000 SUPPLY", "UNSTOPPABLE", "BUILT ON TON",
  "MASSIVE", "GIGACHAD ON TON = GIGATON", "BUY $GIGATON",
];

export default function Hero() {
  const CA = "PLACEHOLDER_CA";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section className="min-h-screen pt-28 pb-0 px-4 md:px-8 flex flex-col items-center justify-start relative overflow-hidden text-center z-10">

      {/* Background — subtle logo banner watermark */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Logo watermark — wide, centered, very faint */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/gigaton-logo.jpg"
            alt=""
            className="w-full max-w-5xl object-contain opacity-[0.04] select-none"
            style={{ filter: 'blur(1px) saturate(0.5) brightness(1.5)' }}
          />
        </div>
        {/* Gradient overlays to fade the edges */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, #020C14 75%)' }} />
        <div className="absolute top-0 left-0 right-0 h-[70%] opacity-30"
          style={{ background: 'linear-gradient(to bottom, rgba(0,136,204,0.15) 0%, transparent 100%)' }} />
      </div>

      {/* Main content wrapper — side by side on desktop */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 relative z-10 flex-1">

        {/* Left: text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 gap-6">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.35)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00B4FF', boxShadow: '0 0 8px rgba(0,180,255,0.9)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#00B4FF' }}>Massive · Unstoppable · On TON</span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-7xl md:text-[8rem] lg:text-[9rem] font-bold font-[family-name:var(--font-fredoka)] leading-none glow-text drop-shadow-2xl"
            style={{ color: '#E8F4FD' }}>
            GIGATON
          </motion.h1>

          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold max-w-xl leading-tight" style={{ color: '#0088CC' }}>
            Gigachad on TON = GIGATON
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-lg md:text-xl max-w-md font-medium" style={{ color: 'rgba(232,244,253,0.65)' }}>
            The biggest meme meets the biggest blockchain. One gigaton of mass. Infinite momentum. Forever on-chain.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
            <a href="#how-to-buy" className="w-full sm:w-auto">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="w-full h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 text-white"
                style={{ background: 'linear-gradient(135deg, #0088CC, #005F8F)', boxShadow: '0 6px 28px rgba(0,136,204,0.35)' }}>
                Buy $GIGATON <TrendingUp className="w-5 h-5" />
              </motion.button>
            </a>
            <a href="#chart" className="w-full sm:w-auto">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="w-full h-14 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
                style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.28)', color: '#0088CC' }}>
                Chart <BarChart2 className="w-5 h-5" />
              </motion.button>
            </a>
          </motion.div>

          {/* Contract Address */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(232,244,253,0.35)' }}>Contract Address</p>
            <div onClick={handleCopy} className="flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer transition-all group"
              style={{ background: 'rgba(0,136,204,0.06)', border: '1px solid rgba(0,136,204,0.18)' }}>
              <span className="font-mono text-xs md:text-sm" style={{ color: '#0088CC' }}>{CA}</span>
              <Copy className="w-4 h-4 transition-colors" style={{ color: copied ? '#0088CC' : 'rgba(232,244,253,0.3)' }} />
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-3">
            {[
              { label: "Supply", value: "1,000,000,000" },
              { label: "Tax", value: "0%" },
              { label: "LP", value: "Locked 🔒" },
              { label: "Chain", value: "TON 🔷" },
            ].map((s, i) => (
              <div key={i} className="px-4 py-2 rounded-xl flex flex-col items-center"
                style={{ background: 'rgba(0,136,204,0.06)', border: '1px solid rgba(0,136,204,0.15)' }}>
                <span className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(232,244,253,0.35)' }}>{s.label}</span>
                <span className="font-bold text-sm" style={{ color: '#E8F4FD' }}>{s.value}</span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right: Gigachad hero image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0 w-full lg:w-[420px] xl:w-[500px]"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              height: 440,
              width: 440,
              border: '2px solid rgba(0,136,204,0.3)',
              boxShadow: '0 0 80px rgba(0,136,204,0.2), 0 0 160px rgba(0,136,204,0.08)',
              borderRadius: '50%',
            }}
          >
            <img src="/gigaton-logo.jpg" alt="GIGATON" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,12,20,0.7) 0%, transparent 50%)' }} />
            {/* Blue laser eye glow overlay */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(0,180,255,0.12) 0%, transparent 55%)' }} />
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: 'rgba(0,136,204,0.15)', border: '1px solid rgba(0,180,255,0.3)', color: '#00B4FF' }}>
                Gigachad on TON
              </span>
            </div>
          </motion.div>
          {/* Glow blob behind image */}
          <div className="absolute -inset-8 -z-10 rounded-full blur-[60px]" style={{ background: 'rgba(0,136,204,0.08)' }} />
        </motion.div>

      </div>

      {/* Scrolling ticker bar */}
      <div className="w-full mt-12 overflow-hidden py-3 relative z-10"
        style={{ borderTop: '1px solid rgba(0,136,204,0.12)', borderBottom: '1px solid rgba(0,136,204,0.12)', background: 'rgba(0,136,204,0.04)' }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap w-max"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-widest flex items-center gap-8">
              <span style={{ color: i % 3 === 0 ? '#00B4FF' : i % 3 === 1 ? '#0088CC' : 'rgba(232,244,253,0.4)' }}>{item}</span>
              <span style={{ color: 'rgba(0,136,204,0.3)' }}>◆</span>
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
