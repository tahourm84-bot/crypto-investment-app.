'use client';

import React, { useState } from 'react';
import { sendWelcomeEmail } from './actions';

export default function HomePage() {
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
    if (!email.trim()) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);

    const result = await sendWelcomeEmail(formData);

    setLoading(false);
    if (result.success) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } else {
      alert('حدث خطأ أثناء الاشتراك، يرجى المحاولة لاحقاً.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans flex flex-col justify-between" dir="ltr">
      
      {/* شريط الأسعار المتحرك (Ticker) */}
      <div className="w-full bg-black border-b border-green-900 py-3 overflow-hidden whitespace-nowrap">
        <style>{`
          @keyframes ticker {
            0% { transform: translate(100%, 0); }
            100% { transform: translate(-100%, 0); }
          }
          .ticker-animate {
            display: inline-block;
            animation: ticker 20s linear infinite;
          }
        `}</style>
        <div className="ticker-animate text-green-500 font-mono font-bold text-sm">
          SUI: $1.75 (+5.8%) &nbsp;&nbsp;&nbsp; BTC: $67,240.00 (+2.4%) &nbsp;&nbsp;&nbsp; ETH: $3,480.25 (+1.2%) &nbsp;&nbsp;&nbsp; DOGE: $0.142 (-1.1%) &nbsp;&nbsp;&nbsp; TSLAI: $240.50 (+1.2%)
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Mohamed Market Analyst Platform
          </h1>
        </div>
        <div className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
          Live Platform
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl w-full mx-auto p-6 space-y-6 flex-grow">
        {/* TOP GRID: Market Overview & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-200">Market Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">BTC/USDT</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">$67,240.00</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">ETH/USDT</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">$3,480.25</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">SUI/USDT</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">$1.75</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">DOGE/USDT</p>
                  <p className="text-lg font-bold text-rose-400 mt-1">$0.142</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Analyst Insights</h2>
            <div className="space-y-4">
              <div className="p-3 bg-gray-950 rounded-lg border-l-2 border-emerald-500">
                <p className="text-xs text-gray-400">Technical Setup</p>
                <p className="text-sm text-gray-300 mt-1">SUI consolidating above key support levels.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/30 px-6 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mohamed Market Analyst. All rights reserved.
      </footer>
    </div>
  );
}
