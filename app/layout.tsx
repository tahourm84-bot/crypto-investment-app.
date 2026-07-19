'use client';

export default function ControlCenter() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      color: '#0f0',
      fontFamily: 'monospace',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateRows: 'repeat(12, 1fr)',
      gap: '4px',
      padding: '10px',
      margin: 0,
      border: '5px solid #222'
    }}>
      {/* نافذة علوية ضخمة */}
      <div style={{ gridColumn: 'span 12', border: '2px solid #0f0', padding: '10px', fontSize: '20px' }}>
        SYSTEM_ACTIVE_CONTROL_ROOM_V1
      </div>
      
      {/* نافذة بيانات رئيسية */}
      <div style={{ gridColumn: 'span 8', gridRow: 'span 8', border: '2px solid #0f0', padding: '20px' }}>
        <h1 style={{ fontSize: '40px' }}>MARKET_DENSITY_LIVE</h1>
        <div style={{ marginTop: '20px' }}>[DATA_STREAM_INJECTION_ACTIVE]</div>
      </div>

      {/* نافذة أوامر جانبية */}
      <div style={{ gridColumn: 'span 4', gridRow: 'span 11', border: '2px solid #0f0', padding: '15px' }}>
        COMMAND_LOGS
        <div style={{ marginTop: '10px', fontSize: '10px' }}>
          > SYSTEM_INIT...<br/>
          > TURBINE_SYNC...<br/>
          > CRYPTO_FEED_UP...
        </div>
      </div>
    </div>
  );
}
