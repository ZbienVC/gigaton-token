"use client";
import { motion } from "framer-motion";
import { Crown, Target, Eye, Send } from "lucide-react";

export default function Narrative() {
  const points = [
    {
      icon: <Crown className="w-5 h-5" style={{ color: '#0088CC' }} />,
      title: "Gigachad on TON = GIGATON",
      text: "The biggest meme meets the biggest chain. Gigachad didn't come to play small — and neither does $GIGATON. One billion metric tons of unstoppable force."
    },
    {
      icon: <Target className="w-5 h-5" style={{ color: '#00B4FF' }} />,
      title: "900M Users. One Chad.",
      text: "TON has the largest crypto distribution channel on Earth. When 900 million Telegram users need a mascot, the Gigachad steps up. The distribution is already there."
    },
    {
      icon: <Eye className="w-5 h-5" style={{ color: '#005F8F' }} />,
      title: "Real Memes Win. Always.",
      text: "$DOGE had the dog. $PEPE had the frog. $GIGATON has the most dominant male specimen on the internet. Real memes with real normie recognition are the only meme coins that last."
    },
  ];

  return (
    <section id="why" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">

        {/* Main two-col section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[560px] rounded-3xl overflow-hidden border"
            style={{ borderColor: 'rgba(0,136,204,0.22)' }}
          >
            <img src="/gigaton-2.jpg" alt="Gigachad laser eyes" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,12,20,0.92) 0%, rgba(2,12,20,0.15) 60%, transparent 100%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(0,180,255,0.1) 0%, transparent 60%)' }} />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xl md:text-2xl font-bold leading-snug" style={{ color: '#E8F4FD' }}>
                "There are billions of tokens. There is only one $GIGATON."
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0088CC' }}>It's Gigachad...</p>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-4" style={{ color: '#E8F4FD' }}>
                Real Memes Meet Real Culture.
              </h2>
              <p className="text-lg leading-relaxed font-medium" style={{ color: 'rgba(232,244,253,0.6)' }}>
                We're tired of weak metas and rugs dressed up as memes. $GIGATON is built on a meme that your normie friends actually recognize — and a chain that's about to onboard the world.
              </p>
            </motion.div>

            <div className="flex flex-col gap-7">
              {points.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1"
                    style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.18)' }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5" style={{ color: '#E8F4FD' }}>{p.title}</h3>
                    <p className="leading-relaxed font-medium text-sm" style={{ color: 'rgba(232,244,253,0.55)' }}>{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Community join section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl overflow-hidden relative"
          style={{ border: '1px solid rgba(0,136,204,0.18)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,136,204,0.1) 0%, transparent 60%), rgba(0,10,20,0.8)' }} />
          <div className="relative z-10 px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0088CC' }}>Did you do your pushups?</p>
              <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-3" style={{ color: '#E8F4FD' }}>
                Join the $GIGATON Community
              </h3>
              <p className="font-medium max-w-md" style={{ color: 'rgba(232,244,253,0.5)' }}>
                Real chads only. Follow for updates, memes, and the signal.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <a href="https://t.me/+9AnxRg7pxQFhN2Yx" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #0088CC, #005F8F)', color: '#fff', boxShadow: '0 4px 20px rgba(0,136,204,0.3)' }}>
                <Send className="w-4 h-4" /> Telegram
              </a>
              <a href="https://x.com/giggaton?s=21&t=9s3gbKuoRlIQ5nUEVhx4fQ" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
                style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.25)', color: '#0088CC' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter / X
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
