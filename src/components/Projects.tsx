import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, Send, Calculator, ArrowRight, ArrowLeft, Check, Layers, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { t, isRTL, language } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Interactive state for The Everything Calculator mini-demo
  const [calcInputA, setCalcInputA] = useState(25);
  const [calcInputB, setCalcInputB] = useState(40);
  const hoursSavedPerMonth = calcInputA * 4;
  const moneySavedPerMonth = hoursSavedPerMonth * calcInputB;

  return (
    <section className="py-24 px-6 md:px-12 relative border-t border-cyber-border" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider flex items-center">
            <span className="text-neon-cyan text-2xl md:text-4xl ltr:mr-4 rtl:ml-4 font-normal">
              {t.projects.sectionNum}
            </span>
            <span>{t.projects.sectionTitle}</span>
          </h2>
          <div className="flex-1 h-px bg-cyber-border hidden md:block"></div>
        </div>

        <p className="text-gray-400 font-mono text-sm mb-16 max-w-2xl">
          {t.projects.sectionSubtitle}
        </p>

        {/* Featured Projects Grid */}
        <div className="space-y-24 mb-20">
          {/* Project 1: Outreach Optimizer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col lg:flex-row items-center gap-10"
          >
            {/* Visual Interactive Preview */}
            <div className="w-full lg:w-7/12 bg-cyber-surface border border-cyber-border rounded-sm overflow-hidden p-5 shadow-2xl relative group">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyber-border text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ltr:ml-2 rtl:mr-2 text-gray-500">outreach-optimizer.ai</span>
                </div>
                <span className="text-neon-cyan flex items-center gap-1">
                  <Sparkles size={12} /> AI AGENT ACTIVE
                </span>
              </div>

              {/* Mockup Body */}
              <div className="space-y-4 font-mono text-xs">
                <div className="bg-cyber-bg p-3 border border-cyber-border rounded">
                  <span className="text-gray-500 block text-[11px] mb-1">
                    {language === 'ar' ? 'رابط موقع العميل المحتمل:' : 'Target Prospect URL:'}
                  </span>
                  <div className="text-neon-cyan flex items-center justify-between">
                    <span>https://acme-logistics.com</span>
                    <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      {language === 'ar' ? 'تم استخراج نقاط الألم' : 'Pain Points Extracted'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-neon-purple/5 border border-neon-purple/30 rounded text-gray-300 space-y-1.5">
                  <span className="text-neon-purple font-semibold block text-[11px]">
                    {language === 'ar' ? 'رسالة تواصل مولدة ومخصصة:' : 'Generated Personalized Hook:'}
                  </span>
                  <p className="text-gray-200 leading-relaxed font-sans text-xs sm:text-sm">
                    {language === 'ar'
                      ? '«مرحباً سارة، لاحظت في صفحة الخدمات لديكم أن فريقكم يعتمد على التحديث اليدوي لبيانات الشحنات... نظامنا المؤتمت يوفر لفرق اللوجستيات ما يقارب ١٥ ساعة أسبوعياً بربط الفواتير بالمخزون تلقائياً.»'
                      : '"Hi Sarah, noticed Acme’s recent expansion in fleet distribution — tracking multi-hub inventory manually usually costs operators 15+ hours weekly. Our AI agent connects your dispatch logs directly to automated client updates..."'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-neon-cyan" />
                    {language === 'ar' ? 'معدل استجابة أعلى بـ 3.8 أضعاف' : '3.8x Higher Reply Rate'}
                  </span>
                  <span className="text-neon-purple font-medium">B2B Sales Pipeline</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-5/12 flex flex-col items-start relative z-10">
              <span className="text-neon-cyan font-mono text-xs mb-2 uppercase tracking-widest px-2.5 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-sm">
                {t.projects.items[0].badge}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-wide">
                {t.projects.items[0].title}
              </h3>
              
              <div className="bg-cyber-surface p-6 border border-cyber-border text-gray-200 text-sm md:text-base mb-6 shadow-xl relative leading-relaxed rounded-sm">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-70" />
                <p>{t.projects.items[0].description}</p>
              </div>

              <ul className="flex flex-wrap gap-2 text-xs font-mono text-gray-400 mb-8">
                {t.projects.items[0].tags.map(tag => (
                  <li key={tag} className="px-2.5 py-1 bg-cyber-bg border border-cyber-border rounded">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-bg transition-all text-xs font-mono uppercase tracking-wider rounded-sm"
                >
                  <span>{language === 'ar' ? 'طلب عرض النظام' : 'Request Workflow'}</span>
                  <ArrowIcon size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2: The Everything Calculator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col lg:flex-row-reverse items-center gap-10"
          >
            {/* Visual Interactive Preview */}
            <div className="w-full lg:w-7/12 bg-cyber-surface border border-cyber-border rounded-sm overflow-hidden p-5 shadow-2xl relative group">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyber-border text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ltr:ml-2 rtl:mr-2 text-gray-500">everything-calc.app</span>
                </div>
                <span className="text-neon-purple flex items-center gap-1">
                  <Calculator size={13} /> {language === 'ar' ? 'توليد فوري' : 'Instant Calculator'}
                </span>
              </div>

              {/* Natural Language Prompt & Interactive controls */}
              <div className="space-y-4 font-mono text-xs">
                <div className="bg-cyber-bg p-3 border border-cyber-border rounded">
                  <span className="text-gray-500 block text-[11px] mb-1">
                    {language === 'ar' ? 'الوصف باللغة اليومية:' : 'User Prompt in Plain Language:'}
                  </span>
                  <p className="text-neon-cyan font-sans text-xs sm:text-sm">
                    {language === 'ar'
                      ? '«احسب لي ساعات العمل والأموال التي يوفرها الموظف أسبوعياً بالأتمتة»'
                      : '"Build me a tool to calculate team hours saved vs hourly wage after automating tasks."'}
                  </p>
                </div>

                {/* Live Interactive Sliders */}
                <div className="p-4 bg-cyber-bg/90 border border-cyber-border rounded space-y-3 font-sans">
                  <div>
                    <div className="flex justify-between text-xs text-gray-300 mb-1">
                      <span>{language === 'ar' ? 'ساعات العمل اليدوي أسبوعياً:' : 'Manual Hours / Week:'}</span>
                      <span className="text-neon-cyan font-mono font-bold">{calcInputA} hrs</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="80" 
                      value={calcInputA} 
                      onChange={(e) => setCalcInputA(Number(e.target.value))}
                      className="w-full accent-neon-cyan h-1.5 bg-cyber-surface rounded cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-gray-300 mb-1">
                      <span>{language === 'ar' ? 'متوسط تكلفة الساعة ($):' : 'Hourly Rate / Value ($):'}</span>
                      <span className="text-neon-purple font-mono font-bold">${calcInputB}/hr</span>
                    </div>
                    <input 
                      type="range" 
                      min="15" 
                      max="150" 
                      value={calcInputB} 
                      onChange={(e) => setCalcInputB(Number(e.target.value))}
                      className="w-full accent-neon-purple h-1.5 bg-cyber-surface rounded cursor-pointer"
                    />
                  </div>

                  <div className="pt-2 border-t border-cyber-border/80 flex items-center justify-between text-xs">
                    <span className="text-gray-400">
                      {language === 'ar' ? 'الوفر الشهري المتوقع:' : 'Est. Monthly Savings:'}
                    </span>
                    <span className="text-base font-bold font-mono text-emerald-400">
                      ${moneySavedPerMonth.toLocaleString()} <span className="text-xs text-gray-400">({hoursSavedPerMonth} hrs)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-5/12 flex flex-col items-start relative z-10">
              <span className="text-neon-purple font-mono text-xs mb-2 uppercase tracking-widest px-2.5 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded-sm">
                {t.projects.items[1].badge}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 tracking-wide">
                {t.projects.items[1].title}
              </h3>
              
              <div className="bg-cyber-surface p-6 border border-cyber-border text-gray-200 text-sm md:text-base mb-6 shadow-xl relative leading-relaxed rounded-sm">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-70" />
                <p>{t.projects.items[1].description}</p>
              </div>

              <ul className="flex flex-wrap gap-2 text-xs font-mono text-gray-400 mb-8">
                {t.projects.items[1].tags.map(tag => (
                  <li key={tag} className="px-2.5 py-1 bg-cyber-bg border border-cyber-border rounded">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white transition-all text-xs font-mono uppercase tracking-wider rounded-sm"
                >
                  <span>{language === 'ar' ? 'جرّب الفكرة' : 'Build Custom Calc'}</span>
                  <ArrowIcon size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Section Bottom Banner */}
        <div className="p-8 border border-cyber-border bg-cyber-surface/60 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
          <div className="space-y-1">
            <h4 className="text-lg md:text-xl font-display font-bold text-white">
              {t.projects.ctaTitle}
            </h4>
            <p className="text-sm text-gray-400">
              {language === 'ar' 
                ? 'نستمع لاحتياجك ونصمم وكيل ذكاء اصطناعي يحل المشكلة دون أي تعقيد تقني.' 
                : 'Turn your repetitive manual bottlenecks into reliable, automated background workflows.'}
            </p>
          </div>

          <a 
            href="#contact" 
            className="px-6 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-bg transition-all font-mono text-xs uppercase tracking-widest whitespace-nowrap rounded-sm"
          >
            {t.projects.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
