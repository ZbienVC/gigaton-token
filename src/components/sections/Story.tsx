"use client";
import { motion } from "framer-motion";
import { Zap, MapPin, Globe } from "lucide-react";

const fade: any = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } } };

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade} className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-6" style={{ color: '#E8F4FD' }}>The Force Behind $GIGATON</h2>
          <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(0,136,204,0.9)' }}>
            One gigaton = one billion metric tons. The most massive unit of measurement on Earth — and now on TON.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="order-2 md:order-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.28)' }}>
                <MapPin className="w-5 h-5" style={{ color: '#0088CC' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0088CC' }}>Born on TON · Built to Last</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#E8F4FD' }}>Mass. Momentum. Movement.</h3>
            <p className="leading-relaxed text-lg" style={{ color: 'rgba(232,244,253,0.55)' }}>
              A gigaton isn't just big — it's the kind of force that reshapes landscapes, moves oceans, and leaves marks on history. <strong style={{ color: '#0088CC' }}>$GIGATON</strong> channels that energy into the fastest-growing blockchain ecosystem on the planet.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(232,244,253,0.45)' }}>
              Built natively on <strong style={{ color: '#0088CC' }}>TON blockchain</strong> — the network powering Telegram's 900 million users. The distribution is already there. The momentum is already building.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="order-1 md:order-2 h-80 md:h-[420px] rounded-3xl overflow-hidden relative flex items-center justify-center"
            style={{ border: '1px solid rgba(0,136,204,0.15)', background: 'rgba(0,20,36,0.8)' }}>
            <div className="text-center p-8 relative z-10">
              <div className="text-8xl font-black font-[family-name:var(--font-fredoka)] glow-text mb-4" style={{ color: '#0088CC' }}>1GT</div>
              <p className="text-lg font-semibold" style={{ color: 'rgba(232,244,253,0.6)' }}>1,000,000,000 metric tons</p>
              <p className="text-sm mt-2" style={{ color: 'rgba(232,244,253,0.35)' }}>The weight of the world's oceans. Now tokenized.</p>
            </div>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(0,136,204,0.08) 0%, transparent 70%)' }} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="h-80 md:h-[420px] rounded-3xl overflow-hidden relative flex items-center justify-center"
            style={{ border: '1px solid rgba(0,136,204,0.15)', background: 'rgba(0,20,36,0.8)' }}>
            <div className="text-center p-8 relative z-10">
              <div className="text-6xl mb-4">🌊</div>
              <p className="text-xl font-bold" style={{ color: '#E8F4FD' }}>TON Ecosystem</p>
              <p className="text-sm mt-2" style={{ color: 'rgba(232,244,253,0.45)' }}>900M+ Telegram users. The largest crypto distribution channel ever built.</p>
            </div>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(0,95,143,0.1) 0%, transparent 70%)' }} />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,95,143,0.12)', border: '1px solid rgba(0,95,143,0.28)' }}>
                <Globe className="w-5 h-5" style={{ color: '#005F8F' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#005F8F' }}>The Ecosystem</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#E8F4FD' }}>Why TON? Why Now?</h3>
            <p className="leading-relaxed text-lg" style={{ color: 'rgba(232,244,253,0.55)' }}>
              TON isn't just another L1. It's Telegram's backbone — the network that 900 million people will onboard through. When the masses arrive, they need a token with the gravity to match.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(232,244,253,0.45)' }}>
              $GIGATON isn't riding the wave. It <em>is</em> the wave — unstoppable mass in motion, carving a path through the blockchain landscape.
            </p>
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
          className="text-center px-6 py-12 rounded-3xl"
          style={{ background: 'rgba(0,136,204,0.05)', border: '1px solid rgba(0,136,204,0.15)' }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.3)' }}>
            <Zap className="w-6 h-6" style={{ color: '#0088CC' }} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#E8F4FD' }}>Forever On-Chain</h3>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(232,244,253,0.55)' }}>
            $GIGATON is permanently etched into the TON blockchain. It cannot be stopped, reversed, or ignored. Like a gigaton of mass in free fall — it only goes one direction.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
