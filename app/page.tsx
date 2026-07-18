import React from 'react';

export default function HomePage() {
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
          Live Market Data
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
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
          
          <div className="mt-8 border-t border-gray-800/60 pt-4 text-xs text-gray-500">
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

          <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition shadow-lg shadow-emerald-900/20">
            Refresh Analysis
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/30 px-6 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mohamed Market Analyst. All rights reserved.
      </footer>
    </div>
  );
}
