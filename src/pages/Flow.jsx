import React from 'react';
import { motion } from 'framer-motion';
import { Home, Truck, Building2, HeartHandshake } from 'lucide-react';
import BackNav from '../components/BackNav';

export default function Flow() {
  const steps = [
    { icon: <Home size={32} />, title: '1. 寄付の受付', desc: 'アプリから寄付を登録。"持込"か"回収"を選択します。' },
    { icon: <Truck size={32} />, title: '2. 回収・集約', desc: 'ボランティアまたはスタッフが回収し、社協の拠点へ集めます。' },
    { icon: <Building2 size={32} />, title: '3. 仕分け・保管', desc: '社会福祉協議会で賞味期限やカテゴリごとに分類・保管されます。' },
    { icon: <HeartHandshake size={32} />, title: '4. 必要な方へ', desc: '子ども食堂、福祉施設、地域猫団体など、リクエストのあった団体へお渡しします。' },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <BackNav />
        <h2 className="title-xl" style={{ fontSize: '2.5rem' }}>寄付の流れ</h2>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          あなたの寄付が、どのようにして必要な人・団体へ届くのかをご紹介します。
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel"
            style={{ 
              padding: '1.5rem 2rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {index !== steps.length - 1 && (
              <div style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '3.5rem',
                width: '2px',
                height: '1.5rem',
                background: 'var(--color-border)',
                zIndex: -1
              }} />
            )}
            
            <div style={{
              minWidth: '50px',
              height: '50px',
              borderRadius: '8px',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
            }}>
              {step.icon}
            </div>
            
            <div>
              <h3 className="title-md" style={{ fontSize: '1.2rem' }}>{step.title}</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
