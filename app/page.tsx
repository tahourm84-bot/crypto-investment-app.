'use client';

import React, { useState } from 'react';
import { sendWelcomeEmail } from './actions';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const walletAddress = "0x99da633903a98b19df8354a0fb9b05719a836afd";

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const result = await sendWelcomeEmail(new FormData(e.target as HTMLFormElement));
    setLoading(false);
    if (result.success) { setSubscribed(true); setEmail(''); }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 space-y-4">
      {/* نافذة علوية للأسعار */}
      <div className="bg-gray-900 border border-emerald-500/30 rounded-lg p-4 shadow-xl">
        <h3 className="text-emerald-400 font-bold mb-2 uppercase text-xs">Live Market Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-950 p-3 rounded border border-gray-800">
            <p className="text-[10px] text-gray-500">BTC/USDT</p>
            <p className="text-sm font-bold text-emerald-400">$67,240</p>
          </div>
          <div className="bg-gray-950 p-3 rounded border border-gray-800">
            <p className="text-[10px] text-gray-500">SUI/USDT</p>
            <p className="text-sm font-bold text-emerald-400">$1.75</p>
          </div>
        </div>
      </div>

      {/* نوافذ المنتصف */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* نافذة التحليلات */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-200 font-bold mb-4">Analyst Insights</h3>
          <div className="p-3 bg-gray-950 rounded border-l-2 border-emerald-500">
            <p className="text-xs text-gray-400">Technical Setup</p>
            <p className="text-sm text-gray-300 mt-1">SUI consolidating above key support levels.</p>
          </div>
        </div>

        {/* نافذة التسجيل */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-200 font-bold mb-4">Join Analyst List</h3>
          <form onSubmit={handleSubscribeSubmit} className="space-y-2">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full bg-gray-950 border border-gray-800 text-xs rounded px-3 py-2"
            />
            <button type="submit" disabled={loading} className="w-full bg-purple-600 text-white text-xs py-2 rounded">
              {loading ? 'Processing...' : 'Subscribe'}
            </button>
          </form>
          {subscribed && <p className="text-emerald-400 text-[10px] mt-2">✓ Check your inbox!</p>}
        </div>
      </div>

      {/* نافذة المحفظة */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h3 className="text-gray-200 font-bold mb-2">Fund Your Account</h3>
        <p className="text-xs text-gray-500 font-mono bg-gray-950 p-2 rounded">{walletAddress}</p>
      </div>
    </div>
    
  );
}
