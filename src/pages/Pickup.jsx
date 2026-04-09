import React from 'react';
import { Truck } from 'lucide-react';
import BackNav from '../components/BackNav';

export default function Pickup({ theme }) {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <BackNav />
        <h2 className="title-xl" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>回収依頼</h2>
        <p className="text-muted mb-8">
          重いものや量が多い場合、ご自宅や指定の場所まで回収に伺います。<br />
          ※回収エリアは市内全域に対応しています。
        </p>

        <form>
          <div className="form-group">
            <label className="form-label">回収希望日時（第1希望）</label>
            <input type="datetime-local" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">回収希望日時（第2希望）</label>
            <input type="datetime-local" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">お名前</label>
            <input type="text" className="form-input" placeholder="例: 山田 太郎" />
          </div>

          <div className="form-group">
            <label className="form-label">回収先住所</label>
            <input type="text" className="form-input" placeholder="例: ○○市△△町 1-2-3" />
          </div>

          <div className="form-group mb-8">
            <label className="form-label">ご連絡先（電話番号またはメール）</label>
            <input type="text" className="form-input" placeholder="090-XXXX-XXXX" />
          </div>

          <button className="btn btn-primary" type="button" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }} onClick={() => alert('モックアップ: 回収依頼を送信しました')}>
            <Truck size={20} /> 回収を依頼する
          </button>
        </form>
      </div>
    </div>
  );
}
