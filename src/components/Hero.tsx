import { motion } from 'motion/react';
import { Terminal, ArrowRight, ArrowLeft, Bot, Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 pt-28 pb-16 overflow-hidden" id="hero">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a24_1px,transparent_1px),linear-gradient(to_bottom,#1a1a24_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-neon-cyan/30 bg-cyber-surface/80 text-neon-cyan mb-8 font-mono text-xs md:text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(0,243,255,0.15)]">
            <Bot size={16} className="text-neon-cyan animate-pulse" />
            <span>{t.hero.kicker}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
          </div>
          
          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white leading-tight mb-6">
            <span className="block glitch-text" data-text={t.hero.nameFirst}>
              {t.hero.nameFirst}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-purple-300 to-neon-purple">
              {t.hero.nameLast}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-neon-purple font-display font-semibold text-lg md:text-2xl mb-6 tracking-wide">
            <Sparkles size={20} className="text-neon-cyan" />
            <span>{t.hero.roleTitle}</span>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-300 mb-10 leading-relaxed font-light">
            {t.hero.subtitle}
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-5 mb-14"
        >
          <a 
            href="#projects" 
            className="group flex items-center gap-3 px-8 py-4 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan hover:bg-neon-cyan hover:text-cyber-bg transition-all duration-300 font-display font-bold tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(0,243,255,0.2)]"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowIcon size={18} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 text-gray-300 border border-cyber-border hover:border-neon-purple hover:text-white hover:bg-neon-purple/10 transition-all duration-300 font-display font-bold tracking-widest uppercase rounded-sm"
          >
            {t.hero.contactBtn}
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-cyber-border/60 text-xs md:text-sm font-mono text-gray-400"
        >
          {t.about.pillars.map((pillar) => (
            <div key={pillar.id} className="flex items-start gap-2">
              <CheckCircle size={15} className="text-neon-cyan shrink-0 mt-0.5" />
              <span className="line-clamp-2">{pillar.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs font-mono tracking-[0.2em] text-gray-500">
          {t.hero.scroll}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-neon-cyan/60 to-transparent" />
      </motion.div>
    </section>
  );
}
