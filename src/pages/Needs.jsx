import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import BackNav from '../components/BackNav';

export default function Needs() {
  const needsList = [
    { title: '認定NPO法人 みなみ子ども食堂', need: 'レトルトカレー / お米', urgency: 'high', desc: '毎月第3土曜日の開催に向けて、特にレトルトカレーと白米が不足しています。' },
    { title: '地域福祉センター', need: '缶詰 / 瓶詰', urgency: 'medium', desc: '長期保存が可能な缶詰（ツナ、サバ缶など）を探しています。' },
    { title: '困窮世帯支援プロジェクト', need: 'インスタント食品', urgency: 'high', desc: 'すぐ調理できるインスタント食品の需要が急増しています。' },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <BackNav />
        <h2 className="title-xl" style={{ fontSize: '2.5rem' }}>今、必要とされている食品</h2>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          各団体や施設が、現在特に求めている食品のリストです。
        </p>
      </div>

      <div className="cards-grid">
        {needsList.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel"
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div className="flex-between">
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: item.urgency === 'high' ? 'var(--color-primary)' : 'var(--color-primary-dark)' }}>
                {item.urgency === 'high' ? '緊急・不足' : '募集強化中'}
              </span>
              <AlertCircle size={18} color={item.urgency === 'high' ? 'var(--color-primary)' : 'var(--color-primary-dark)'} />
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem', color: 'var(--color-text)' }}>{item.title}</h3>
              <p style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--color-primary)' }}>求: {item.need}</p>
            </div>
            
            <p className="text-muted" style={{ flex: 1 }}>{item.desc}</p>
            
            <button className="btn btn-outline" style={{ width: '100%' }}>
              寄付を申し出る
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
