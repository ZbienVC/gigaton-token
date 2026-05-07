"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; s: number; d: number; bright: boolean }[]>([]);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({ id: i, x: Math.random() * 100, y: Math.random() * 100, s: Math.random() * 3 + 1, d: Math.random() * 20 + 12, bright: Math.random() > 0.5 });
    }
    setParticles(arr);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {particles.map((p) => (
        <motion.div key={p.id} className="absolute rounded-full"
          style={{ width: p.s, height: p.s, left: `${p.x}vw`, top: `${p.y}vh`, background: p.bright ? '#00B4FF' : '#0088CC', boxShadow: `0 0 ${p.s * 2}px ${p.bright ? 'rgba(0,180,255,0.9)' : 'rgba(0,136,204,0.9)'}` }}
          animate={{ y: ["-15vh", "15vh"], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "linear", times: [0, 0.5, 1] }}
        />
      ))}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full blur-[100px]" style={{ background: 'rgba(0,136,204,0.12)' }} />
      <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full blur-[120px] animate-float" style={{ background: 'rgba(0,95,143,0.1)' }} />
      <div className="absolute bottom-[15%] left-[40%] w-64 h-64 rounded-full blur-[80px]" style={{ background: 'rgba(0,180,255,0.08)' }} />
    </div>
  );
}
