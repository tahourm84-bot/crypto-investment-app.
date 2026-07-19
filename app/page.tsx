'use client';

import React from 'react';

export default function ControlCenter() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 p-2 font-mono text-[11px] overflow-hidden">
      {/* الشريط العلوي للتحكم */}
      <header className="grid grid-cols-4 gap-2 mb-2 border border-gray-800 p-2 bg-[#0a0a0a]">
        <div className="col-span-1 text-emerald-500 font-bold">SYSTEM STATUS: ACTIVE</div>
        <div className="col-span-2 text-center text-gray-500">CONTROL ROOM: TURBINE UNIT 01-B</div>
        <div className="col-span-1 text-right text-gray-500">2026-07-19 13:29:00</div>
      </header>

      {/* منطقة النوافذ الكثيفة */}
      <div className="grid grid-cols-4 grid-rows-3 gap-2 h-[calc(100vh-60px)]">
        
        {/* نافذة كبيرة للأسعار */}
        <div className="col-span-2 row-span-2 border border-gray-800 p-4 bg-[#0a0a0a] flex flex-col">
          <h3 className="text-emerald-400 mb-2 border-b border-gray-800 pb-1">MARKET FEED (LIVE)</h3>
          <div className="flex-grow grid grid-cols-2 gap-4 items-center">
            {['BTC/USDT', 'SUI/USDT', 'ETH/USDT', 'DOGE/USDT'].map(asset => (
              <div key={asset} className="border border-gray-900 p-2">
                <div className="text-[9px] text-gray-600">{asset}</div>
                <div className="text-xl text-white">67,240.00</div>
              </div>
            ))}
          </div>
        </div>

        {/* نافذة التسجيل */}
        <div className="col-span-2 row-span-1 border border-gray-800 p-4 bg-[#0a0a0a]">
          <h3 className="text-purple-400 mb-2">ACCESS CONTROL</h3>
          <div className="grid grid-cols-2 gap-2">
            <input className="bg-black border border-gray-800 p-2 w-full" placeholder="USER ID..." />
            <button className="bg-purple-900 text-white p-2">AUTHORIZE</button>
          </div>
        </div>

        {/* نافذة التحويل */}
        <div className="col-span-1 row-span-1 border border-gray-800 p-4 bg-[#0a0a0a]">
          <h3 className="text-blue-400 mb-2">WALLET</h3>
          <div className="break-all text-[9px] bg-black p-2 border border-gray-800">0x99da633903a98b19df8354a0fb9b05719a836afd</div>
        </div>

        {/* نافذة الحالة الإضافية */}
        <div className="col-span-1 row-span-1 border border-gray-800 p-4 bg-[#0a0a0a]">
          <h3 className="text-yellow-400 mb-2">LOGS</h3>
          <div className="text-[9px] text-gray-600">
            [13:29:00] Turbine stable<br/>
            [13:28:55] Market feed synced
          </div>
        </div>

        {/* نافذة عرضية سفلية */}
        <div className="col-span-4 row-span-1 border border-gray-800 p-4 bg-[#0a0a0a]">
          <h3 className="text-rose-400 mb-2">CRITICAL ALARMS</h3>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-black p-2 border border-rose-900 text-rose-500 text-center">TEMP_NORMAL</div>
            <div className="bg-black p-2 border border-rose-900 text-rose-500 text-center">FLOW_STABLE</div>
            <div className="bg-black p-2 border border-rose-900 text-rose-500 text-center">VOLTAGE_OK</div>
            <div className="bg-black p-2 border border-rose-900 text-rose-500 text-center">NETWORK_UP</div>
          </div>
        </div>

      </div>
    </div>
  );
}
