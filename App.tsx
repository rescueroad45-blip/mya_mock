import React, { useState, useEffect } from 'react';
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50 group">
          <div className="bg-yellow-500 p-1.5 rounded-lg text-black group-hover:bg-white transition-colors">
            <Video className="w-6 h-6" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight uppercase">MYCUT FILM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium tracking-wide hover:text-yellow-500 transition-colors ${location.pathname === link.path ? 'text-yellow-500' : 'text-zinc-400'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm" className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-white hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
           {navLinks.map((link, index) => (
            <Link 
                key={link.path} 
                to={link.path} 
                className={`text-3xl font-display font-bold transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} hover:text-yellow-500 hover:scale-105 ${location.pathname === link.path ? 'text-yellow-500' : 'text-white'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className={`transition-all duration-500 delay-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link to="/contact" className="mt-8 block">
                <Button size="lg" className="rounded-full px-10 py-6 text-xl bg-yellow-500 text-black hover:bg-yellow-400 border-none shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                    Contact Us
                </Button>
            </Link>
          </div>
          
          <div className={`flex gap-6 mt-8 transition-all duration-500 delay-700 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
             <a href="#" className="text-zinc-500 hover:text-yellow-500"><Instagram /></a>
             <a href="#" className="text-zinc-500 hover:text-yellow-500"><Facebook /></a>
             <a href="#" className="text-zinc-500 hover:text-yellow-500"><Youtube /></a>
          </div>
        </div>
      </div>
    </header>
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