import { Github, Twitter, Linkedin, Terminal, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 border-t border-cyber-border bg-cyber-bg relative overflow-hidden">
      {/* Decorative scanline */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 border border-cyber-border rounded text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/60 hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 border border-cyber-border rounded text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/60 hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 border border-cyber-border rounded text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/60 hover:-translate-y-1 transition-all duration-300"
            aria-label="Twitter / X Profile"
          >
            <Twitter size={18} />
          </a>
        </div>
        
        <div className="flex flex-col items-center gap-2 text-center text-sm text-gray-400">
          <p className="flex items-center gap-2 font-display">
            <Bot size={15} className="text-neon-cyan" />
            <span>
              {t.footer.designedBy}{' '}
              <span className="text-white font-semibold">{t.footer.author}</span>
            </span>
          </p>
          <p className="text-xs font-mono text-neon-purple">
            {t.footer.role}
          </p>
          <p className="text-xs text-gray-500 font-mono mt-1">
            © {new Date().getFullYear()} {t.footer.author} • {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
