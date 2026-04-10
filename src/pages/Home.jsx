import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, PackageSearch, Truck, Map as MapIcon, Package, ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="flex-col gap-8">
      {/* Hero Section */}
      <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '1rem', background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
          <h1 className="title-xl">
            見えない「もったいない」を、「ありがとう」に。
          </h1>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
            家庭で余っている食品を、必要としている子ども食堂や福祉施設へ。少しの行動が、誰かの明日の笑顔に繋がります。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => navigate('/donate')} style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
              <Heart fill="currentColor" /> 今すぐ寄付する
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3 Step Flow (Task 4) */}
      <div className="flow-container">
        <div className="flow-step">
          <span className="step-label">STEP 1</span>
          <Package size={40} className="step-icon" />
          <span className="step-title">食品を選ぶ</span>
        </div>
        
        <ArrowRight size={24} className="flow-arrow" />
        
        <div className="flow-step">
          <span className="step-label">STEP 2</span>
          <Truck size={40} className="step-icon" />
          <span className="step-title">持込 or 回収依頼</span>
        </div>

        <ArrowRight size={24} className="flow-arrow" />

        <div className="flow-step">
          <span className="step-label">STEP 3</span>
          <Heart size={40} className="step-icon" />
          <span className="step-title">施設へ届く</span>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '3rem', marginTop: '-1rem' }}>
        3ステップで完了します
      </p>

      {/* 3 Cards */}
      <div className="cards-grid">
        <div className="glass-panel feature-card" onClick={() => navigate('/needs')}>
          <div className="icon-box"><PackageSearch /></div>
          <div>
            <h3 className="title-md">何が必要とされている？</h3>
            <p className="text-muted">子ども食堂や福祉施設で、今まさに不足している食品を確認できます。</p>
          </div>
          <div className="card-action">確認する <ArrowRight size={16} /></div>
        </div>

        <div className="glass-panel feature-card" onClick={() => navigate('/pickup')}>
          <div className="icon-box"><Truck /></div>
          <div>
            <h3 className="title-md">自宅まで回収に伺います</h3>
            <p className="text-muted">重いお米や大量の寄付でも安心。ご自宅や近隣までスタッフが回収に伺います。</p>
          </div>
          <div className="card-action">確認する <ArrowRight size={16} /></div>
        </div>

        <div className="glass-panel feature-card" onClick={() => navigate('/map')}>
          <div className="icon-box"><MapIcon /></div>
          <div>
            <h3 className="title-md">近くの持ち込み場所</h3>
            <p className="text-muted">市内の回収ボックスや提携団体など、近くで持ち込み可能な場所を探せます。</p>
          </div>
          <div className="card-action">確認する <ArrowRight size={16} /></div>
        </div>
      </div>
    </div>
  );
}
