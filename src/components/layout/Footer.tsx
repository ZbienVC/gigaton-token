"use client";
import { Send, Hash } from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden z-10" style={{ borderTop: '1px solid rgba(0,136,204,0.12)', background: '#010810' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,136,204,0.07), transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-4xl font-bold font-[family-name:var(--font-fredoka)] glow-text" style={{ color: '#E8F4FD' }}>GIGATON</h2>
          <p className="text-sm max-w-sm text-center md:text-left font-medium" style={{ color: 'rgba(232,244,253,0.45)' }}>The most massive force on the TON blockchain. Unstoppable. Inevitable. Forever on-chain.</p>
          <div className="text-xs font-mono px-4 py-2 rounded-xl mt-1 break-all md:break-normal" style={{ background: 'rgba(0,136,204,0.07)', border: '1px solid rgba(0,136,204,0.2)', color: '#0088CC' }}>PLACEHOLDER_CA</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(232,244,253,0.3)' }}>Community</p>
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.2)', color: '#0088CC' }}><Send className="w-5 h-5" /></a>
            <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(0,136,204,0.08)', border: '1px solid rgba(0,136,204,0.2)', color: '#0088CC' }}><Hash className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="text-center py-6 text-xs" style={{ borderTop: '1px solid rgba(0,136,204,0.07)', color: 'rgba(232,244,253,0.2)' }}>
        © {new Date().getFullYear()} $GIGATON — The Biggest Force on TON.
      </div>
    </footer>
  );
}
