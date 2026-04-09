import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, PackageSearch, Truck, Map as MapIcon, ArrowRightLeft, Menu, X } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Donate from './pages/Donate';
import Needs from './pages/Needs';
import Pickup from './pages/Pickup';
import LocationsMap from './pages/LocationsMap';
import Flow from './pages/Flow';

const Header = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'human' ? 'cat' : 'human';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navLinks = [
    { name: '寄付する', path: '/donate', icon: <Heart size={18} /> },
    { name: '必要なもの', path: '/needs', icon: <PackageSearch size={18} /> },
    { name: '回収依頼', path: '/pickup', icon: <Truck size={18} /> },
    { name: 'マップ', path: '/map', icon: <MapIcon size={18} /> },
    { name: '寄付の流れ', path: '/flow', icon: <ArrowRightLeft size={18} /> },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled glass-panel' : ''}`} style={{ borderRadius: scrolled ? '0 0 24px 24px' : '0' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: '800', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Heart fill="var(--c-primary)" color="var(--c-primary)" />
        <span>Tsunagu {theme === 'cat' ? 'Meow' : 'Food'}</span>
      </Link>
      
      <div className="nav-menu">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="theme-toggle" onClick={toggleTheme}>
          <div className="toggle-indicator"></div>
          <div className={`toggle-option ${theme === 'human' ? 'active' : ''}`}>人用</div>
          <div className={`toggle-option ${theme === 'cat' ? 'active' : ''}`}>猫用</div>
        </div>
      </div>
    </header>
  );
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="main-content"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [theme, setTheme] = useState('human');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        { /* Background animated blobs */ }
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        
        <Header theme={theme} setTheme={setTheme} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home theme={theme} /></PageWrapper>} />
            <Route path="/donate" element={<PageWrapper><Donate theme={theme} /></PageWrapper>} />
            <Route path="/needs" element={<PageWrapper><Needs theme={theme} /></PageWrapper>} />
            <Route path="/pickup" element={<PageWrapper><Pickup theme={theme} /></PageWrapper>} />
            <Route path="/map" element={<PageWrapper><LocationsMap theme={theme} /></PageWrapper>} />
            <Route path="/flow" element={<PageWrapper><Flow theme={theme} /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
