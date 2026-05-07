"use client";
import { motion } from "framer-motion";
import { Zap, Users, TrendingUp } from "lucide-react";

const fade: any = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } } };

const thesisPoints = [
  {
    title: "What Makes A Meme Coin Work?",
    text: "$DOGE and $PEPE exploded because normies recognized the meme. Not crypto people — normies. Your uber driver. Your cousin. Your mom. Gigachad is one of the most viral memes on earth. Everyone has seen the face. Everyone knows what it means. That's the foundation of a real meme coin.",
  },
  {
    title: "Why TON? Why Now?",
    text: "TON is Telegram's blockchain — 900 million users deep. It is the largest crypto distribution channel ever built, and it's just getting started. When normies get onboarded into crypto through Telegram, they need a meme that speaks to them. $GIGATON is that meme.",
  },
  {
    title: "The GIGATON Thesis",
    text: "Gigachad on TON = GIGATON. One gigaton = one billion metric tons of unstoppable force. The meme is universal. The chain is massive. The timing is perfect. High conviction, low tax, locked liquidity. Real chads hold. Weak hands fold. You already know which one you are.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">

        {/* Anon callout */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade} className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0088CC' }}>It's important you understand, anon.</p>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-6" style={{ color: '#E8F4FD' }}>
            What Is $GIGATON?
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(232,244,253,0.7)' }}>
            Gigachad is a worldwide phenomenon — a meme based on Ernest Khalimov, the embodiment of peak masculine energy. $GIGATON brings that meme to TON blockchain: a token built for high-conviction holders, meme culture, and the 900 million people about to enter crypto through Telegram.
          </p>
        </motion.div>

        {/* Split: image + who is gigachad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            className="h-80 md:h-[480px] rounded-3xl overflow-hidden relative"
            style={{ border: '1px solid rgba(0,136,204,0.18)' }}>
            <img src="/gigaton-1.jpg" alt="Gigachad" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,12,20,0.85) 0%, transparent 60%)' }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(0,180,255,0.08) 0%, transparent 60%)' }} />
            <div className="absolute bottom-5 left-6">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(0,180,255,0.7)' }}>The One. The Only. Gigachad.</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.28)' }}>
                <Users className="w-5 h-5" style={{ color: '#0088CC' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0088CC' }}>The Meme · The Legend</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#E8F4FD' }}>Real Memes. Real Culture.</h3>
            <p className="leading-relaxed text-lg" style={{ color: 'rgba(232,244,253,0.55)' }}>
              Gigachad isn't just an internet joke. It's a <strong style={{ color: '#0088CC' }}>movement</strong> — peak performance, masculinity, self-improvement. The kind of meme that transcends crypto and lives in the real world.
            </p>
            <p className="leading-relaxed" style={{ color: 'rgba(232,244,253,0.45)' }}>
              $GIGATON is a community-run token built exclusively for high-conviction individuals. No soy jacks. No larps. Only chads who understand the assignment.
            </p>
            <div className="flex items-center gap-3 mt-2 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(0,136,204,0.07)', border: '1px solid rgba(0,136,204,0.18)' }}>
              <span className="text-sm font-bold" style={{ color: '#00B4FF' }}>Low testosterone = fear. High testosterone = conviction.</span>
            </div>
          </motion.div>
        </div>

        {/* The Thesis */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="flex flex-col gap-6">
          <div className="text-center mb-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#0088CC' }}>A Comprehensive Guide</p>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-fredoka)] glow-text" style={{ color: '#E8F4FD' }}>The GIGATON Thesis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {thesisPoints.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="p-7 rounded-3xl flex flex-col gap-4"
                style={{ background: 'rgba(0,136,204,0.05)', border: '1px solid rgba(0,136,204,0.14)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,136,204,0.1)', border: '1px solid rgba(0,136,204,0.25)' }}>
                  {i === 0 ? <TrendingUp className="w-5 h-5" style={{ color: '#0088CC' }} /> :
                   i === 1 ? <Zap className="w-5 h-5" style={{ color: '#00B4FF' }} /> :
                   <Users className="w-5 h-5" style={{ color: '#005F8F' }} />}
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#E8F4FD' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,244,253,0.5)' }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Forever on-chain callout */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
          className="text-center px-6 py-12 rounded-3xl"
          style={{ background: 'rgba(0,136,204,0.05)', border: '1px solid rgba(0,136,204,0.15)' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#0088CC' }}>It's the big one.</p>
          <h3 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-fredoka)] glow-text mb-4" style={{ color: '#E8F4FD' }}>
            Gigachad on TON = GIGATON
          </h3>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(232,244,253,0.55)' }}>
            One gigaton of force. 900 million potential holders. The most recognizable meme on the most powerful chain. This is not a drill.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
