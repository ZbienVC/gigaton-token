"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const CA = "EQAOE9fCXU8NyFebcX1YhGgImGzO1qbUcfB9gEmZC8mEYJXz";
  const handleCopy = () => { navigator.clipboard.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-0 flex items-center justify-between w-full h-16"
      style={{
        background: 'rgba(2,8,16,0.92)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,136,204,0.1)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
          style={{ border: '1px solid rgba(0,136,204,0.4)', boxShadow: '0 0 12px rgba(0,136,204,0.3)', minWidth: 36, minHeight: 36 }}>
          <img src="/gigaton-logo.jpg" alt="GIGATON" className="w-full h-full object-cover object-center" />
        </div>
        <span className="text-lg font-black tracking-tight font-[family-name:var(--font-fredoka)] whitespace-nowrap" style={{ color: '#E8F4FD' }}>
          GIGATON
        </span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
        {[
          { label: "Story", href: "#story" },
          { label: "Giganomics", href: "#tokenomics" },
          { label: "Chart", href: "#chart" },
          { label: "Memes", href: "#gallery" },
          { label: "Community", href: "#why" },
          { label: "How to Buy", href: "#how-to-buy" },
        ].map((item) => (
          <Link key={item.label} href={item.href}
            className="transition-colors hover:text-[#0088CC]"
            style={{ color: 'rgba(232,244,253,0.5)' }}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right: CA copy + Buy */}
      <div className="flex items-center gap-3">
        <button onClick={handleCopy}
          className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all hover:opacity-80"
          style={{ background: 'rgba(0,136,204,0.07)', border: '1px solid rgba(0,136,204,0.2)', color: 'rgba(0,136,204,0.8)' }}>
          <Copy className="w-3 h-3" />
          {copied ? "Copied!" : "Copy CA"}
        </button>
        <a href="https://groypfi.io/token/EQAOE9fCXU8NyFebcX1YhGgImGzO1qbUcfB9gEmZC8mEYJXz" target="_blank" rel="noreferrer"
          className="px-5 py-2 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #0088CC, #005F8F)', boxShadow: '0 2px 16px rgba(0,136,204,0.25)' }}>
          Buy $GIGATON
        </a>
      </div>
    </motion.nav>
  );
}
