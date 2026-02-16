import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube, Video, Phone, Mail, MapPin } from 'lucide-react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { Button } from './components/ui';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/** Reliable media query hook — avoids dependence on Tailwind CDN JIT for responsive logic */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, isDesktop]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop && isOpen) setIsOpen(false);
  }, [isDesktop]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
  ];

  return (
    <>
      {/* Mobile Full-Screen Overlay — rendered as a portal-like sibling for correct positioning */}
      {!isDesktop && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9998,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 28,
            background: '#000000',
            transition: 'opacity 0.4s ease, visibility 0.4s ease',
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' as const : 'hidden' as const,
            pointerEvents: isOpen ? 'auto' as const : 'none' as const,
          }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-display font-bold"
              style={{
                fontSize: 32,
                color: location.pathname === link.path ? '#eab308' : '#ffffff',
                transition: `all 0.4s ease ${index * 80}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
                opacity: isOpen ? 1 : 0,
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Contact button */}
          <div
            style={{
              transition: 'all 0.5s ease 400ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
              opacity: isOpen ? 1 : 0,
              marginTop: 24,
            }}
          >
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400 border-none"
                style={{
                  borderRadius: 9999,
                  padding: '18px 48px',
                  fontSize: 18,
                  fontWeight: 700,
                  boxShadow: '0 0 30px rgba(234,179,8,0.3)',
                }}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Social icons */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginTop: 20,
              transition: 'all 0.5s ease 600ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
              opacity: isOpen ? 1 : 0,
            }}
          >
            <a href="#" style={{ color: '#71717a', transition: 'color 0.3s' }}><Instagram /></a>
            <a href="#" style={{ color: '#71717a', transition: 'color 0.3s' }}><Facebook /></a>
            <a href="#" style={{ color: '#71717a', transition: 'color 0.3s' }}><Youtube /></a>
          </div>
        </div>
      )}

      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled || isOpen ? 'glass-nav' : 'bg-transparent'}`}
        style={{ padding: scrolled || isOpen ? '12px 0' : '24px 0', zIndex: 9999 }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" style={{ position: 'relative' }}>
            <div className="bg-yellow-500 p-1.5 rounded-lg text-black group-hover:bg-white transition-colors">
              <Video className="w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight uppercase" style={{ whiteSpace: 'nowrap' }}>MYCUT FILM</span>
          </Link>

          {/* Desktop Navigation */}
          {isDesktop && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-yellow-500 transition-colors"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: '0.025em',
                    color: location.pathname === link.path ? '#eab308' : '#a1a1aa',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button size="sm" className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">
                  Contact Us
                </Button>
              </Link>
            </nav>
          )}

          {/* Mobile Hamburger Button */}
          {!isDesktop && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-yellow-500 transition-colors"
              style={{
                position: 'relative',
                background: 'none',
                border: 'none',
                color: isOpen ? '#eab308' : '#fff',
                cursor: 'pointer',
                padding: 8,
              }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X style={{ width: 32, height: 32 }} /> : <Menu style={{ width: 32, height: 32 }} />}
            </button>
          )}
        </div>
      </header>
    </>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                  <div className="bg-yellow-500 p-1 rounded text-black">
                      <Video className="w-5 h-5" />
                  </div>
                  <span className="font-display text-xl font-bold uppercase">MYCUT FILM Co., Ltd.</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-6">
                  Over 10 years of experience providing creative solutions in media, advertising, and event management.
              </p>
              <div className="flex gap-4">
                  <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-800 transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
          </div>
          <div>
              <h4 className="font-bold mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4 text-zinc-500">
                  <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-yellow-500 shrink-0" /> Phnom Penh, Cambodia</li>
                  <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-yellow-500 shrink-0" /> 012 871 809 / 070 26 36 36</li>
                  <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-yellow-500 shrink-0" /> mycutfilm.info@gmail.com</li>
              </ul>
          </div>
          <div>
              <h4 className="font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-zinc-500">
                  <li><Link to="/portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</Link></li>
                  <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link></li>
                  <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link></li>
              </ul>
          </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          © {new Date().getFullYear()} MYCUT FILM Co., Ltd. All Rights Reserved.
      </div>
  </footer>
);

export default function App() {
  return (
    <Router>
        <ScrollToTop />
        <div className="bg-zinc-950 text-foreground font-sans selection:bg-yellow-500 selection:text-black">
            <Header />
            <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </main>
            <Footer />
        </div>
    </Router>
  );
}