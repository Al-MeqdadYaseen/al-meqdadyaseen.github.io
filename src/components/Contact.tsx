import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, User, CheckCircle2, Bot, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t, isRTL, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 relative border-t border-cyber-border bg-cyber-surface/30 min-h-screen flex items-center" id="contact">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-neon-purple font-mono text-sm mb-4 flex justify-center items-center gap-2 tracking-widest uppercase">
            <span className="text-neon-purple">{t.contact.sectionNum}</span>
            <span>{t.contact.sectionTitle}</span>
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-wide">
            {t.contact.headline}
          </h2>
          <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-cyber-bg border border-neon-cyan/40 p-8 rounded-sm shadow-2xl text-center space-y-4"
          >
            <CheckCircle2 className="mx-auto text-neon-cyan" size={48} />
            <h3 className="text-2xl font-display font-bold text-white tracking-wide">
              {t.contact.successTitle}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {language === 'ar' ? (
                <>
                  شكراً لتواصلك يا <span className="text-neon-cyan font-medium">{formData.name}</span>! لقد استلمت تفاصيل طلبك وسأتواصل معك على البريد <span className="text-white font-medium">{formData.email}</span> بخطة عمل واضحة.
                </>
              ) : (
                <>
                  Thanks for reaching out, <span className="text-neon-cyan font-medium">{formData.name}</span>! Your inquiry has been received. I'll get back to <span className="text-white font-medium">{formData.email}</span> with actionable ideas shortly.
                </>
              )}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
              className="mt-4 px-6 py-2.5 border border-cyber-border text-gray-400 hover:text-white hover:border-neon-purple transition-all font-mono text-xs uppercase tracking-widest rounded-sm cursor-pointer"
            >
              {t.contact.sendAnotherBtn}
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto space-y-6 text-start relative"
            onSubmit={handleSubmit}
          >
            {/* Form decorative frame */}
            <div className="absolute -inset-4 border border-cyber-border bg-cyber-bg/50 -z-10 hidden md:block">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-cyan -translate-x-[1px] -translate-y-[1px]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-cyan translate-x-[1px] -translate-y-[1px]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-cyan -translate-x-[1px] translate-y-[1px]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-cyan translate-x-[1px] translate-y-[1px]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-display text-gray-200 tracking-wider flex items-center gap-2">
                  <User size={16} className="text-neon-cyan" /> {t.contact.nameLabel}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-cyber-bg border border-cyber-border p-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all font-body rounded-sm"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-display text-gray-200 tracking-wider flex items-center gap-2">
                  <Mail size={16} className="text-neon-cyan" /> {t.contact.emailLabel}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-cyber-bg border border-cyber-border p-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all font-body rounded-sm"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-display text-gray-200 tracking-wider flex items-center gap-2">
                <MessageSquare size={16} className="text-neon-cyan" /> {t.contact.messageLabel}
              </label>
              <textarea 
                id="message" 
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-cyber-bg border border-cyber-border p-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all font-body resize-none rounded-sm leading-relaxed"
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>
            
            <div className="pt-4 flex flex-col items-center gap-3">
              <button 
                type="submit"
                className="group relative px-10 py-4 bg-transparent border border-neon-cyan text-neon-cyan font-display font-bold uppercase tracking-widest overflow-hidden hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all cursor-pointer rounded-sm"
              >
                <div className="absolute inset-0 bg-neon-cyan translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 group-hover:text-cyber-bg transition-colors duration-300 flex items-center gap-2">
                  <Send size={16} />
                  <span>{t.contact.submitBtn}</span>
                </span>
              </button>
              <p className="text-xs text-gray-500 font-mono text-center">
                {t.contact.responseTime}
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
