import React from 'react';
import { MapPin } from 'lucide-react';

export default function LocationsMap({ theme }) {
  const pins = [
    { top: '30%', left: '40%', name: '市役所 回収ボックス', type: 'box' },
    { top: '50%', left: '60%', name: '社会福祉協議会', type: 'hubs' },
    { top: '70%', left: '30%', name: 'スーパーXX 提携店', type: 'box' },
    { top: '40%', left: '75%', name: '地域交流センター', type: 'hubs' },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="title-xl" style={{ fontSize: '2.5rem' }}>持ち込み・回収拠点マップ</h2>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          お近くの窓口や専用ポストへ直接お持ち込みいただくことも可能です。
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '1rem', marginBottom: '2rem' }}>
        <div className="mock-map-container">
          <div className="mock-map-bg"></div>
          {pins.map((pin, i) => (
            <div key={i} className="map-pin" style={{ top: pin.top, left: pin.left }} title={pin.name}>
              <MapPin size={32} color={pin.type === 'box' ? 'var(--c-secondary)' : 'var(--c-primary)'} fill="white" />
              <div style={{ background: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginTop: '0.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
                {pin.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cards-grid">
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="title-md" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin color="var(--c-primary)" /> 総合窓口
          </h3>
          <p className="text-muted">営業時間内であればいつでも持ち込み可能です。大量の寄付の場合は事前にご連絡ください。</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="title-md" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin color="var(--c-secondary)" /> 回収ボックス
          </h3>
          <p className="text-muted">スーパーや公民館に設置されています。お買い物のついでにお気軽にご利用ください。</p>
        </div>
      </div>
    </div>
  );
}
