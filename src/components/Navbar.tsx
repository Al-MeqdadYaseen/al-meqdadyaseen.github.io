import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, toggleLanguage, language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about', num: '01' },
    { name: t.nav.projects, href: '#projects', num: '02' },
    { name: t.nav.contact, href: '#contact', num: '03' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-border py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#" 
          className="font-display font-bold text-xl md:text-2xl text-white tracking-wider flex items-center gap-2 group"
        >
          <span className="text-neon-cyan font-mono transition-transform group-hover:scale-125">&gt;</span>
          <span className="group-hover:text-neon-cyan transition-colors">
            {t.nav.brand.toUpperCase()}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium hover:text-neon-cyan transition-colors flex items-center gap-1.5"
            >
              <span className="text-neon-purple font-mono text-xs">{link.num}.</span>
              <span>{link.name}</span>
            </a>
          ))}

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 border border-cyber-border hover:border-neon-cyan/70 bg-cyber-surface/60 hover:bg-cyber-surface text-xs font-mono tracking-wider text-gray-200 rounded transition-all cursor-pointer shadow-sm group"
            aria-label={language === 'en' ? 'Switch to Arabic' : 'التحويل إلى اللغة الإنجليزية'}
            title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
          >
            <Globe size={14} className="text-neon-cyan transition-transform group-hover:rotate-45" />
            <span className="font-semibold text-neon-cyan">{t.nav.langCode}</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300 group-hover:text-white">{t.nav.langSwitchLabel}</span>
          </button>

          <a 
            href="#contact" 
            className="px-5 py-2 border border-neon-cyan text-neon-cyan text-sm font-medium tracking-wider hover:bg-neon-cyan/10 transition-colors rounded-sm"
          >
            {t.nav.cta}
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 border border-cyber-border bg-cyber-surface text-xs font-mono text-neon-cyan rounded"
            aria-label="Toggle Language"
          >
            <Globe size={13} />
            <span>{t.nav.langCode}</span>
          </button>

          <button 
            className="text-gray-300 hover:text-neon-cyan transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-cyber-surface border-b border-cyber-border py-5 px-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-base font-medium py-2 hover:text-neon-cyan transition-colors border-b border-cyber-border/50 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-neon-purple font-mono text-sm">{link.num}.</span>
              <span>{link.name}</span>
            </a>
          ))}

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-cyber-border bg-cyber-bg text-sm font-mono text-neon-cyan rounded"
            >
              <Globe size={15} />
              <span>{t.nav.langSwitchLabel} ({t.nav.langCode})</span>
            </button>
            
            <a 
              href="#contact" 
              className="flex-1 text-center py-2 border border-neon-cyan text-neon-cyan text-sm font-medium tracking-wider hover:bg-neon-cyan/10 transition-colors rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
