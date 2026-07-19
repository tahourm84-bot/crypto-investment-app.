'use client';
import { motion } from "framer-motion";

export default function Ticker() {
  return (
    <div className="w-full bg-black border-b border-green-900 py-3 overflow-hidden">
      <motion.div 
        className="flex gap-10 whitespace-nowrap text-green-500 font-mono"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <span>SUI: $1.24 (+2.5%)</span>
        <span>BTC: $65,200 (-0.8%)</span>
        <span>DOGE: $0.12 (+5.1%)</span>
        <span>TSLAI: $240.50 (+1.2%)</span>
      </motion.div>
    </div>
  );
 
}
