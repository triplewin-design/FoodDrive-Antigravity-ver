import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackNav() {
  return (
    <Link to="/" className="back-nav" style={{ textDecoration: 'none' }}>
      <ArrowLeft size={16} style={{ marginRight: '0.25rem' }} />
      トップへ戻る
    </Link>
  );
}
