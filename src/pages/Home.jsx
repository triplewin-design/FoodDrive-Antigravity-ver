import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, PackageSearch, Truck, Map } from 'lucide-react';

export default function Home({ theme }) {
  const navigate = useNavigate();
  
  return (
    <div className="flex-col gap-8">
      <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '2rem' }}>
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          <h1 className="title-xl">
            {theme === 'human' ? '見えない「もったいない」を、「ありがとう」に。' : '地域猫と保護猫に、あたたかいごはんを。'}
          </h1>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
            {theme === 'human' 
              ? '家庭で余っている食品を、必要としている子ども食堂や福祉施設へ。少しの行動が、誰かの明日の笑顔に繋がります。'
              : '未開封のキャットフードを、地域猫活動や保護ボランティアへ。小さな命を地域で守りましょう。'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => navigate('/donate')} style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
              <Heart fill="currentColor" /> 今すぐ寄付する
            </button>
          </div>
        </motion.div>
      </div>

      <div className="cards-grid">
        <div className="glass-panel feature-card" onClick={() => navigate('/needs')} style={{ cursor: 'pointer' }}>
          <div className="icon-box"><PackageSearch /></div>
          <div>
            <h3 className="title-md">何が必要とされている？</h3>
            <p className="text-muted">子ども食堂や福祉施設で、今まさに不足している食品を確認できます。</p>
          </div>
        </div>

        <div className="glass-panel feature-card" onClick={() => navigate('/pickup')} style={{ cursor: 'pointer' }}>
          <div className="icon-box"><Truck /></div>
          <div>
            <h3 className="title-md">自宅まで回収に伺います</h3>
            <p className="text-muted">重いお米や大量の寄付でも安心。ご自宅や近隣までスタッフが回収に伺います。</p>
          </div>
        </div>

        <div className="glass-panel feature-card" onClick={() => navigate('/map')} style={{ cursor: 'pointer' }}>
          <div className="icon-box"><Map /></div>
          <div>
            <h3 className="title-md">近くの持ち込み場所</h3>
            <p className="text-muted">市内の回収ボックスや提携団体など、近くで持ち込み可能な場所を探せます。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
