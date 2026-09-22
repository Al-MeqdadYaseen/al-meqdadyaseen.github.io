/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function PortfolioApp() {
  const { isRTL, language } = useLanguage();

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'} 
      className={`min-h-screen bg-cyber-bg text-gray-300 selection:bg-neon-cyan/30 selection:text-white transition-colors duration-200 ${
        isRTL ? 'font-arabic' : ''
      }`}
    >
      {/* Global abstract grid background overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-border/20 via-cyber-bg to-cyber-bg -z-10 pointer-events-none" />
      
      <Navbar />
      
      <main>
        <Hero key={`hero-${language}`} />
        <About key={`about-${language}`} />
        <Projects key={`projects-${language}`} />
        <Contact key={`contact-${language}`} />
      </main>
      
      <Footer key={`footer-${language}`} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}

