import { motion } from 'motion/react';
import { Database, Workflow, Headphones, BarChart3, Bot, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t, isRTL } = useLanguage();

  const pillarIcons = [Database, Workflow, Headphones, BarChart3];

  return (
    <section className="py-24 px-6 md:px-12 relative border-t border-cyber-border bg-cyber-surface/40" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider flex items-center">
            <span className="text-neon-purple text-2xl md:text-4xl ltr:mr-4 rtl:ml-4 font-normal">
              {t.about.sectionNum}
            </span>
            <span>{t.about.sectionTitle}</span>
          </h2>
          <div className="flex-1 h-px bg-cyber-border hidden md:block"></div>
        </div>

        {/* Narrative & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-snug">
              {t.about.headline}
            </h3>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              {t.about.intro}
            </p>

            {/* Core philosophy callout card */}
            <div className="p-6 border border-neon-cyan/30 bg-cyber-bg/80 relative rounded-sm shadow-[0_0_20px_rgba(0,243,255,0.06)]">
              <div className="absolute top-0 ltr:left-0 rtl:right-0 w-2 h-2 border-t-2 border-neon-cyan"></div>
              <div className="flex items-start gap-4">
                <Sparkles className="text-neon-cyan shrink-0 mt-1" size={24} />
                <p className="text-white font-medium text-lg leading-relaxed">
                  "{t.about.conclusion}"
                </p>
              </div>
            </div>
          </div>

          {/* Quick HUD Metrics / Status Board */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="p-6 border border-cyber-border bg-cyber-bg/60 rounded-sm relative space-y-4">
              <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs uppercase tracking-widest pb-3 border-b border-cyber-border">
                <Bot size={15} />
                <span>EXECUTIVE SUMMARY</span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div>
                  <span className="text-gray-500 block text-xs">{t.about.statusLabel}</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {t.about.statusText}
                  </span>
                </div>

                <div>
                  <span className="text-gray-500 block text-xs">{t.about.focusLabel}</span>
                  <span className="text-gray-200">{t.about.focusText}</span>
                </div>

                <div>
                  <span className="text-gray-500 block text-xs">{t.about.audienceLabel}</span>
                  <span className="text-gray-200">{t.about.audienceText}</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-cyber-border/70 bg-neon-purple/5 text-gray-300 text-sm flex items-center gap-3">
              <ShieldCheck size={20} className="text-neon-purple shrink-0" />
              <span>Zero-code barrier for you: tailored systems delivered turn-key with clear training and ongoing support.</span>
            </div>
          </div>
        </div>

        {/* 4 Core Workflows Grid */}
        <div className="pt-6">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-wide flex items-center gap-2.5">
              <span className="text-neon-cyan font-mono text-lg">&gt;</span>
              <span>{t.about.coreWorkflowsLead}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 md:p-8 bg-cyber-bg border border-cyber-border hover:border-neon-cyan/60 transition-all duration-300 rounded-sm relative group overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Corner cyber ticks */}
                  <div className="absolute top-0 ltr:right-0 rtl:left-0 w-8 h-8 font-mono text-xs text-gray-700 flex items-center justify-center border-b border-l border-cyber-border">
                    {pillar.num}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded bg-cyber-surface border border-cyber-border text-neon-cyan group-hover:border-neon-cyan/50 group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-neon-purple text-xs font-semibold tracking-wider">
                      STEP {pillar.num}
                    </span>
                  </div>

                  <h4 className="text-lg md:text-xl font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
