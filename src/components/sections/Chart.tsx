"use client";
import { motion } from "framer-motion";

const PAIR_ADDRESS = "PLACEHOLDER_PAIR";
const DEXSCREENER_URL = `https://dexscreener.com/ton/${PAIR_ADDRESS}`;
const EMBED_URL = `https://dexscreener.com/ton/${PAIR_ADDRESS}?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15`;

export default function Chart() {
  return (
    <section id="chart" className="py-24 px-4 md:px-8 relative z-10" style={{ background: 'rgba(1,8,16,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-4" style={{ color: '#E8F4FD' }}>The Market</h2>
          <p className="font-medium" style={{ color: 'rgba(232,244,253,0.5)' }}>Track $GIGATON live. Unstoppable momentum on-chain.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="w-full rounded-3xl overflow-hidden relative"
          style={{ border: '1px solid rgba(0,136,204,0.22)', boxShadow: '0 0 40px rgba(0,136,204,0.08)', height: 600 }}>
          <iframe id="dexscreener-embed" src={EMBED_URL} title="GIGATON DexScreener Chart" allow="clipboard-write"
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={DEXSCREENER_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-80"
            style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.22)', color: '#0088CC' }}>
            Open Full Chart ↗
          </a>
          <a href="#how-to-buy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-80"
            style={{ background: 'linear-gradient(135deg, #0088CC, #005F8F)', color: '#E8F4FD' }}>
            Buy $GIGATON ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
