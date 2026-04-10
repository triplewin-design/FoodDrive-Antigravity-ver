import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, PackageSearch, Truck, Map as MapIcon, ArrowRightLeft, Menu, X } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Donate from './pages/Donate';
import Needs from './pages/Needs';
import Pickup from './pages/Pickup';
import LocationsMap from './pages/LocationsMap';
import Flow from './pages/Flow';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 寄付する, 回収を頼む are main
  const mainLinks = [
    { name: '寄付する', path: '/donate', icon: <Heart size={18} /> },
    { name: '回収を頼む', path: '/pickup', icon: <Truck size={18} /> }
  ];

  // Others in hamburger
  const subLinks = [
    { name: '必要なもの', path: '/needs', icon: <PackageSearch size={18} /> },
    { name: 'マップ', path: '/map', icon: <MapIcon size={18} /> },
    { name: '寄付の流れ', path: '/flow', icon: <ArrowRightLeft size={18} /> },
  ];

  return (
    <>
      <header className="header">
        <Link to="/" className="header-logo">
          <Heart fill="var(--color-primary)" color="var(--color-primary)" size={24} />
          <span>FoodDrive</span>
        </Link>
        
        <div className="nav-container">
          <div className="desktop-nav">
            {mainLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-menu"
            >
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--color-text)' }}
              >
                <X size={24} />
              </button>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 'bold' }}>メインメニュー</div>
                {mainLinks.map(link => (
                  <Link key={link.path} to={link.path} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {link.icon} {link.name}
                  </Link>
                ))}
                
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 'bold', marginTop: '1rem' }}>情報を見る</div>
                {subLinks.map(link => (
                  <Link key={link.path} to={link.path} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {link.icon} {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="main-content"
    >
      {children}
    </motion.div>
  );
};

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'human');
  }, []);

  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/donate" element={<PageWrapper><Donate /></PageWrapper>} />
            <Route path="/needs" element={<PageWrapper><Needs /></PageWrapper>} />
            <Route path="/pickup" element={<PageWrapper><Pickup /></PageWrapper>} />
            <Route path="/map" element={<PageWrapper><LocationsMap /></PageWrapper>} />
            <Route path="/flow" element={<PageWrapper><Flow /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </HashRouter>
  );
}

export default App;
