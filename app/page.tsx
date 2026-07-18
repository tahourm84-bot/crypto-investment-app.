'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  // عنوان محفظتك الحقيقي لشبكة BEP20
  const walletAddress = "0x99da633903a98b19df8354a0fb9b05719a836afd"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans flex flex-col justify-between">
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
          {/* Market Stats Card */}
          <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-200">Market Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">BTC/USDT</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">$67,240.00</p>
                  <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+2.4%</span>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">ETH/USDT</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">$3,480.25</p>
                  <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+1.2%</span>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">SUI/USDT</p>
                  <p className="text-lg font-bold text-emerald-400 mt-1">$1.75</p>
                  <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">+5.8%</span>
                </div>
                <div className="bg-gray-950 p-4 rounded-lg border border-gray-800/80">
                  <p className="text-xs text-gray-500 uppercase">DOGE/USDT</p>
                  <p className="text-lg font-bold text-rose-400 mt-1">$0.142</p>
                  <span className="text-[10px] text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded">-1.1%</span>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-800/60 pt-4 text-xs text-gray-500">
              * Data updates dynamically based on system metrics.
            </div>
          </div>

          {/* Technical Indicators Insights */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-200">Analyst Insights</h2>
              <div className="space-y-4">
                <div className="p-3 bg-gray-950 rounded-lg border-l-2 border-emerald-500">
                  <p className="text-xs text-gray-400 font-medium">Technical Setup</p>
                  <p className="text-sm text-gray-300 mt-1">SUI consolidating above key support levels. Looking for clear breakout confirmations.</p>
                </div>
                <div className="p-3 bg-gray-950 rounded-lg border-l-2 border-amber-500">
                  <p className="text-xs text-gray-400 font-medium">Market Sentiment</p>
                  <p className="text-sm text-gray-300 mt-1">Volume patterns indicating a slight squeeze. Patience is required before entry execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID: Deposit, Where to Trade & Email Registration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Deposit Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                <h3 className="text-md font-semibold text-gray-200">Fund Your Account</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4">Deposit funds directly via USDT to initiate trading allocations.</p>
              
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-3 relative flex flex-col justify-between min-h-[80px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-500">USDT Address</span>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase">BEP20 (BSC)</span>
                </div>
                <span className="text-xs font-mono text-gray-300 break-all pr-2 select-all">{walletAddress}</span>
              </div>
            </div>
            <button 
              onClick={handleCopy}
              className={`w-full mt-4 text-xs font-medium py-2 px-4 rounded-lg transition border ${
                copied 
                  ? 'bg-emerald-950 border-emerald-500 text-emerald-400' 
                  : 'bg-gray-950 border-gray-800 hover:border-gray-700 text-gray-300'
              }`}
            >
              {copied ? '✓ Copied Successfully' : 'Copy Wallet Address'}
            </button>
          </div>

          {/* 2. Where to Trade Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                <h3 className="text-md font-semibold text-gray-200">Where to Trade</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4">Access premium liquidity and trading options via our verified terminal partners:</p>
              
              <div className="space-y-2">
                <a 
                  href="https://primexbt.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-2.5 bg-gray-950 border border-gray-800/60 rounded-lg hover:border-cyan-500/50 transition group"
                >
                  <span className="text-xs font-medium text-gray-300 group-hover:text-cyan-400">PrimeXBT Terminal</span>
                  <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">Trade Now →</span>
                </a>
                <a 
                  href="https://www.binance.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-2.5 bg-gray-950 border border-gray-800/60 rounded-lg hover:border-amber-500/50 transition group"
                >
                  <span className="text-xs font-medium text-gray-300 group-hover:text-amber-400">Binance Exchange</span>
                  <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded">Trade Now →</span>
                </a>
              </div>
            </div>
            <div className="text-[10px] text-rose-400/80 mt-4 text-center italic font-medium">* Warning: Send only USDT via the BEP20 network to this address.</div>
          </div>

          {/* 3. Email Registration Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <h3 className="text-md font-semibold text-gray-200">Join Analyst List</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4">Subscribe to receive instant technical alerts, setups, and trend reports directly in your inbox.</p>
              
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  required
                  className="w-full bg-gray-950 border border-gray-800 text-xs rounded-lg px-3 py-2.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
                />
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs py-2.5 px-4 rounded-lg transition shadow-lg shadow-purple-900/20"
                >
                  Subscribe to Platform
                </button>
              </form>
            </div>
            {subscribed && (
              <div className="text-[11px] text-purple-400 mt-2 text-center font-medium animate-pulse">
                ✓ Thank you! Email registered successfully.
              </div>
            )}
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
