"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Wallet, Activity } from 'lucide-react';

export default function TradingDashboard() {
  const [balance, setBalance] = useState(12500.50);
  const [prices, setPrices] = useState({
    BTC: { price: 67240.00, change: 2.4 },
    ETH: { price: 3480.25, change: -1.2 },
    SUI: { price: 1.75, change: 5.8 },
    DOGE: { price: 0.142, change: 12.1 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        BTC: { price: prev.BTC.price + (Math.random() - 0.5) * 50, change: prev.BTC.change },
        ETH: { price: prev.ETH.price + (Math.random() - 0.5) * 5, change: prev.ETH.change },
        SUI: { price: prev.SUI.price + (Math.random() - 0.5) * 0.02, change: prev.SUI.change },
        DOGE: { price: prev.DOGE.price + (Math.random() - 0.5) * 0.002, change: prev.DOGE.change }
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMockTrade = (coin: string, type: 'BUY' | 'SELL') => {
    alert(`تم تنفيذ أمر ${type === 'BUY' ? 'شراء' : 'بيع'} لعملة ${coin} بنجاح!`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans" dir="rtl">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mohamed Market Analyst Platform
          </h1>
          <p className="text-slate-400 text-sm mt-1">نظام المحاكاة وتحليل أسواق الكريبتو اللحظي</p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 self-stretch md:self-auto justify-between">
          <div className="text-right">
            <p className="text-xs text-slate-400">الرصيد المتوفر</p>
            <p className="font-mono font-bold text-emerald-400 text-left">${balance.toLocaleString()}</p>
          </div>
          <Wallet className="text-cyan-400 w-5 h-5" />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Object.entries(prices).map(([ticker, info]) => (
          <div key={ticker} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all text-right">
            <div className="flex justify-between items-start mb-3">
              <span className="font-bold text-lg text-slate-200">{ticker}/USDT</span>
              <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                info.change >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
              }`}>
                {info.change >= 0 ? <ArrowUpRight className="w-3 h-3 ml-1" /> : <ArrowDownRight className="w-3 h-3 ml-1" />}
                {info.change}%
              </span>
            </div>
            <div className="text-2xl font-mono font-bold text-white mb-4 text-left">
              ${info.price.toLocaleString(undefined, { minimumFractionDigits: ticker === 'DOGE' ? 3 : 2 })}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => handleMockTrade(ticker, 'BUY')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-xl text-sm transition-colors"
              >
                شراء
              </button>
              <button 
                onClick={() => handleMockTrade(ticker, 'SELL')}
                className="bg-rose-600 hover:bg-rose-500 text-white font-medium py-2 rounded-xl text-sm transition-colors"
              >
                بيع
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-right">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 justify-start">
          <Activity className="text-cyan-400 w-5 h-5" /> مراقب حركة السوق المباشر
        </h3>
        <div className="h-48 flex items-center justify-center border border-dashed border-slate-800 rounded-xl bg-slate-950/50">
          <p className="text-slate-500 text-sm animate-pulse">جاري سحب التغذية السعرية الحية للمؤشرات الفنية...</p>
        </div>
      </div>
    </div>
  );
                   
}
