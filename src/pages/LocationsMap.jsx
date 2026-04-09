import { MapPin, Building, Store } from 'lucide-react';
import BackNav from '../components/BackNav';

export default function LocationsMap({ theme }) {
  // 実際の拠点情報を反映
  const publicFacilities = [
    { name: 'にっしんマスプロ市民会館（日進市民会館）', time: '午前9時から午後9時まで受付' },
    { name: '生涯学習プラザ', time: '午前8時30分から午後5時まで受付' },
    { name: '総合運動公園', time: '午前8時30分から午後5時まで受付' }
  ];

  const storeFacilities = [
    { name: 'バロー日進岩崎店' },
    { name: 'V・ドラッグ米野木店' },
    { name: 'V・ドラッグ日進栄店' }
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <BackNav />
        <h2 className="title-xl" style={{ fontSize: '2.5rem' }}>持ち込み・回収拠点マップ</h2>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          お近くの公共施設や、提携スーパーの専用ポストへ直接お持ち込みいただくことが可能です。
        </p>
      </div>

      {/* Googleマップの埋め込み */}
      <div className="glass-panel" style={{ padding: '0.5rem', marginBottom: '2rem' }}>
        <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
          <iframe 
            src="https://maps.google.com/maps?q=日進市&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="日進市近辺のマップ"
          ></iframe>
        </div>
      </div>

      <div className="cards-grid">
        {/* 公共施設カード */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="title-md" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '4px solid var(--color-primary)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            <Building color="var(--color-primary)" /> 実施場所（公共施設）
          </h3>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text)' }}>
            {publicFacilities.map((facility, idx) => (
              <li key={`pub-${idx}`}>
                <strong>{facility.name}</strong>
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>{facility.time}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* バローグループカード */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 className="title-md" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '4px solid var(--color-primary)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            <Store color="var(--color-primary)" /> 実施場所（バローグループ）
          </h3>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text)' }}>
            {storeFacilities.map((facility, idx) => (
              <li key={`store-${idx}`}>
                <strong>{facility.name}</strong>
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>営業時間内にお持ち込みください</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
