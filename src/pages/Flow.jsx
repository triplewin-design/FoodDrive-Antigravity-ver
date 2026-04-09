import React from 'react';
import { motion } from 'framer-motion';
import { Home, Truck, Building2, HeartHandshake } from 'lucide-react';

export default function Flow({ theme }) {
  const steps = [
    { icon: <Home size={40} />, title: '1. 寄付の受付', desc: 'アプリから寄付を登録。"持込"か"回収"を選択します。' },
    { icon: <Truck size={40} />, title: '2. 回収・集約', desc: 'ボランティアまたはスタッフが回収し、社協の拠点へ集めます。' },
    { icon: <Building2 size={40} />, title: '3. 仕分け・保管', desc: '社会福祉協議会で賞味期限やカテゴリ（人用/猫用）ごとに分類・保管されます。' },
    { icon: <HeartHandshake size={40} />, title: '4. 必要な方へ', desc: '子ども食堂、福祉施設、地域猫団体など、リクエストのあった団体へお渡しします。' },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="title-xl" style={{ fontSize: '2.5rem' }}>寄付の流れ</h2>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          あなたの寄付が、どのようにして必要な人・団体へ届くのかをご紹介します。
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="glass-panel"
            style={{ 
              padding: '2rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2rem',
              position: 'relative'
            }}
          >
            {index !== steps.length - 1 && (
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '4rem',
                width: '4px',
                height: '2rem',
                background: 'var(--c-primary-light)',
                opacity: 0.5,
                zIndex: -1
              }} />
            )}
            
            <div style={{
              minWidth: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--c-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--c-primary)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
              {step.icon}
            </div>
            
            <div>
              <h3 className="title-md">{step.title}</h3>
              <p className="text-muted">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
