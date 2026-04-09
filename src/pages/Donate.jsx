import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Donate({ theme }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          <CheckCircle size={80} color="var(--c-success)" style={{ margin: '0 auto', marginBottom: '1.5rem' }} />
          <h2 className="title-xl" style={{ fontSize: '2rem' }}>寄付の登録が完了しました</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            あたたかいご支援をありがとうございます。<br />
            詳細については担当者よりメールにてご連絡いたします。
          </p>
          <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
            続けて寄付を登録する
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <h2 className="title-xl" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>寄付内容を登録する</h2>
        <p className="text-muted mb-8">
          寄付いただける食品の内容をお知らせください。
          <br /><strong style={{ color: 'var(--c-danger)' }}>※賞味期限が1ヶ月以上、常温保存可能なものが対象です。</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">食品カテゴリ</label>
            <select className="form-select" required>
              <option value="">選択してください</option>
              {theme === 'human' ? (
                <>
                  <option>お米（白米・パック・アルファ米）</option>
                  <option>パスタ・乾麺</option>
                  <option>缶詰・瓶詰</option>
                  <option>レトルト・インスタント食品</option>
                  <option>お菓子・飲料</option>
                  <option>その他（調味料など）</option>
                </>
              ) : (
                <>
                  <option>ドライフード（総合栄養食）</option>
                  <option>ウェットフード（パウチ・缶詰）</option>
                  <option>おやつ（ちゅ〜る等）</option>
                  <option>療法食（要相談）</option>
                </>
              )}
            </select>
          </div>

          <div className="flex-between gap-4 mb-4" style={{ alignItems: 'flex-start' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">数量・目安</label>
              <input type="text" className="form-input" placeholder="例: 5kg、ダンボール1箱" required />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">おおよその賞味期限</label>
              <input type="month" className="form-input" required />
            </div>
          </div>

          <div className="form-group mb-8">
            <label className="form-label">受け渡し方法</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="radio" name="delivery" defaultChecked /> 自分で持ち込む
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="radio" name="delivery" /> 回収に来てほしい
              </label>
            </div>
          </div>

          <button className="btn btn-primary" type="submit" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
            <Send size={20} /> 登録する
          </button>
        </form>
      </div>
    </div>
  );
}
