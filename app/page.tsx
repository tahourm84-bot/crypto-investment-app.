'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendWelcomeEmail } from './actions';

export default function HomePage() {
  // (باقي الكود الخاص بك سأضعه هنا)
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x99da633903a98b19df8354a0fb9b05719a836afd"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    const result = await sendWelcomeEmail(formData);
    setLoading(false);
    if (result.success) { setSubscribed(true); setEmail(''); }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans" dir="ltr">
      
      {/* هذا هو شريط الأسعار الذي تريده */}
      <div className="w-full bg-black border-b border-green-900 py-3 overflow-hidden">
        <motion.div 
          className="flex gap-10 whitespace-nowrap text-green-500 font-mono"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span>SUI: $1.75 (+5.8%)</span>
          <span>BTC: $67,240.00 (+2.4%)</span>
          <span>ETH: $3,480.25 (+1.2%)</span>
          <span>DOGE: $0.142 (-1.1%)</span>
        </motion.div>
      </div>

      {/* باقي تصميم موقعك الأصلي يبدأ من هنا */}
      <header className="border-b border-gray-800 bg-gray-900/50 p-6">
         <h1 className="text-xl font-bold text-emerald-400">Mohamed Market Analyst</h1>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* ... بقية محتوى موقعك الذي نسخته سابقاً تضعه هنا ... */}
        <p>مرحباً بك في منصة التداول الخاصة بك.</p>
      </main>
    </div>
 
  );
}
