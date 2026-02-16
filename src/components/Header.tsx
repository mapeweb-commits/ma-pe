import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'Top', jaLabel: 'トップ', path: '/' },
    { label: 'Service', jaLabel: 'サービス', path: '/service' },
    { label: 'Sample', jaLabel: '制作例', path: '/sample' },
    { label: 'Contact', jaLabel: 'お問い合わせ', path: '/contact' },
  ];

  return (
    <>
      <aside className="sidebar">
        <div>
          <Link to="/" className="logo">
            <img
              src={`${import.meta.env.BASE_URL}images/ma-pe_logo_final.png`}
              alt="まーぺ"
              width="120"
              style={{ display: 'block', marginBottom: '8px' }}
            />
            <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 400 }}>
              まちのお店のためのホームページ制作
            </span>
          </Link>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}
            >
              <span style={{ fontSize: '1.2rem', fontFamily: "'Zen Kaku Gothic New', sans-serif", letterSpacing: '0.2em', fontWeight: 300 }}>{item.label}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)', marginTop: '4px' }}>{item.jaLabel}</span>
            </Link>
          ))}
        </nav>

        <div className="desktop-only">
          <Link to="/contact" className="cta-btn">
            無料で相談する
          </Link>
          <div style={{ marginTop: '20px', fontSize: '0.75rem', color: '#888' }}>
            © ma-pe
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-btn md:hidden" onClick={toggleMenu} style={{ position: 'absolute', right: '20px', top: '24px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </aside>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: '#FFFFFF', zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <button onClick={toggleMenu} style={{ position: 'absolute', top: '24px', right: '24px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
            <X size={32} />
          </button>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <span style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif", fontSize: '1.5rem', letterSpacing: '0.2em', fontWeight: 300 }}>{item.label}</span>
                <span style={{ fontSize: '0.9rem', color: '#666', marginTop: '4px' }}>{item.jaLabel}</span>
              </Link>
            ))}
            <Link to="/contact" onClick={toggleMenu} className="cta-btn" style={{ marginTop: '20px', padding: '16px 40px' }}>
              無料で相談する
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
