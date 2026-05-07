"use client";
import { motion } from "framer-motion";
import { Copy, TrendingUp, BarChart2 } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const CA = "PLACEHOLDER_CA";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden text-center z-10">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[70%] opacity-30" style={{ background: 'linear-gradient(to bottom, rgba(0,136,204,0.15) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] opacity-20" style={{ background: 'linear-gradient(to top, rgba(0,30,50,0.2) 0%, transparent 100%)' }} />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
        style={{ background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.35)' }}>
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00B4FF', boxShadow: '0 0 8px rgba(0,180,255,0.9)' }} />
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#00B4FF' }}>Massive · Unstoppable · On TON</span>
      </motion.div>

      <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-7xl md:text-[9rem] font-bold font-[family-name:var(--font-fredoka)] leading-none glow-text mb-2 drop-shadow-2xl"
        style={{ color: '#E8F4FD' }}>
        GIGATON
      </motion.h1>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-4xl font-semibold mb-6 max-w-2xl leading-tight" style={{ color: '#0088CC' }}>
        The Biggest Force on TON
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="text-lg md:text-xl max-w-lg mb-12 font-medium" style={{ color: 'rgba(232,244,253,0.65)' }}>
        One gigaton of mass. Infinite momentum. The most unstoppable force the TON blockchain has ever seen.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mx-auto">
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
            View Chart <BarChart2 className="w-5 h-5" />
          </motion.button>
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="mt-12 flex flex-col items-center gap-3">
        <p className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(232,244,253,0.35)' }}>Contract Address</p>
        <div onClick={handleCopy} className="flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer transition-all group"
          style={{ background: 'rgba(0,136,204,0.06)', border: '1px solid rgba(0,136,204,0.18)' }}>
          <span className="font-mono text-xs md:text-sm truncate max-w-[200px] md:max-w-none" style={{ color: '#0088CC' }}>{CA}</span>
          <Copy className="w-4 h-4 transition-colors" style={{ color: copied ? '#0088CC' : 'rgba(232,244,253,0.3)' }} />
        </div>
      </motion.div>

      {/* Gigachad hero image — bottom right */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 md:bottom-0 right-0 md:right-[4%] w-48 md:w-72 opacity-30 md:opacity-50 pointer-events-none overflow-hidden rounded-t-3xl"
      >
        <img src="/gigaton-3.jpg" alt="Gigachad" className="w-full h-full object-cover object-top" style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 40%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 40%)' }} />
      </motion.div>
    </section>
  );
}
