import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { websiteConfig } from '../config/websiteConfig';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the header should use "Dark Mode" (White text) or "Light Mode" (Stone text)
  // Logic: On home page and NOT scrolled, use white. Otherwise, stone.
  const isHomePage = location.pathname === "/";
  const useWhiteText = isHomePage && !scrolled && !mobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 w-full z-[60] transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg py-4 border-b border-stone-100' 
          : 'bg-transparent py-8'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with Serif Accent */}
          <Link to="/" className="group flex flex-col">
            <h1 className={`text-lg tracking-[0.3em] font-light uppercase transition-colors duration-500 ${
              useWhiteText ? 'text-white' : 'text-stone-900'
            }`}>
              {websiteConfig.company.name}
            </h1>
            <span className={`text-[8px] uppercase tracking-[0.5em] mt-1 transition-colors duration-500 ${
              useWhiteText ? 'text-white/60' : 'text-stone-400'
            }`}>
              Travel Curators
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {websiteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-500 hover:opacity-50 ${
                  useWhiteText ? 'text-white' : 'text-stone-600'
                } ${location.pathname === item.href ? 'opacity-100 font-medium' : 'opacity-80'}`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className={`text-[10px] uppercase tracking-[0.3em] px-8 py-3 transition-all duration-500 ${
                useWhiteText 
                  ? 'border border-white/30 text-white hover:bg-white hover:text-stone-900' 
                  : 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
              }`}
            >
              Inquiry
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors duration-500 ${useWhiteText ? 'text-white' : 'text-stone-900'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>

        {/* Full-screen Mobile Navigation Overlay */}
        <div className={`fixed inset-0 h-screen bg-stone-50 transition-transform duration-700 ease-in-out z-[-1] flex flex-col items-center justify-center space-y-12 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {websiteConfig.navigation.map((item, i) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-3xl font-serif italic tracking-tight text-stone-900 transition-all duration-500 delay-${i * 100}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
            
          ))}
          <Link
            to="/contact"
            className="text-[10px] uppercase tracking-[0.4em] text-stone-400 border-b border-stone-200 pb-2 pt-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Your Journey
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;