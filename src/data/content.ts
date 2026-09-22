export interface PillarItem {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    about: string;
    projects: string;
    contact: string;
    cta: string;
    langSwitchLabel: string;
    langCode: string;
  };
  hero: {
    kicker: string;
    nameFirst: string;
    nameLast: string;
    roleTitle: string;
    subtitle: string;
    exploreBtn: string;
    contactBtn: string;
    scroll: string;
  };
  about: {
    sectionNum: string;
    sectionTitle: string;
    headline: string;
    intro: string;
    coreWorkflowsLead: string;
    pillars: PillarItem[];
    conclusion: string;
    statusLabel: string;
    statusText: string;
    focusLabel: string;
    focusText: string;
    audienceLabel: string;
    audienceText: string;
  };
  projects: {
    sectionNum: string;
    sectionTitle: string;
    sectionSubtitle: string;
    caseStudyTag: string;
    items: ProjectItem[];
    ctaTitle: string;
    ctaButton: string;
  };
  contact: {
    sectionNum: string;
    sectionTitle: string;
    headline: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    responseTime: string;
    successTitle: string;
    successMessage: string;
    sendAnotherBtn: string;
  };
  footer: {
    credit: string;
    tagline: string;
    rights: string;
  };
}

export const contentEn: PortfolioContent = {
  meta: {
    title: "AlMeqdad Yaseen | AI Agents & Automation",
    description: "I build AI workflows and agents that take over repetitive manual work, making AI simple and practical.",
  },
  nav: {
    brand: "AlMeqdad Yaseen",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    cta: "Get in Touch",
    langSwitchLabel: "العربية",
    langCode: "AR",
  },
  hero: {
    kicker: "AI AGENTS & AUTOMATION",
    nameFirst: "ALMEQDAD",
    nameLast: "YASEEN",
    roleTitle: "AI Agents & Automation",
    subtitle: "I am passionate about AI and I believe it is going to change the way we live. I build AI workflows and agents that take over repetitive manual work — from handling customer questions to managing stock, finances, and admin tasks.",
    exploreBtn: "Explore Projects",
    contactBtn: "Let's Talk",
    scroll: "SCROLL",
  },
  about: {
    sectionNum: "01.",
    sectionTitle: "ABOUT & VISION",
    headline: "Transforming Workflows with Intelligent Automation",
    intro: "I am passionate about AI and I believe it is going to change the way we live. I build AI workflows and agents that take over repetitive manual work — from handling customer questions to managing stock, finances, and admin tasks.",
    coreWorkflowsLead: "I build AI-powered workflows that:",
    pillars: [
      {
        id: "p1",
        num: "01",
        title: "Organize Data & Reduce Tool Chaos",
        desc: "Connect disconnected software and centralize your business records into a unified, clutter-free flow.",
      },
      {
        id: "p2",
        num: "02",
        title: "Automate Daily Operations & Reporting",
        desc: "Hand off recurring spreadsheets, inventory updates, and daily operational reports to reliable autonomous agents.",
      },
      {
        id: "p3",
        num: "03",
        title: "Automate Customer Support",
        desc: "Answer common customer inquiries instantly with context-aware responses, 24/7 without manual lag.",
      },
      {
        id: "p4",
        num: "04",
        title: "Clear Time & Money Saved Dashboard",
        desc: "A crystal-clear dashboard showing the exact hours and money you're saving every single week.",
      },
    ],
    conclusion: "I make AI simple, practical, and human-friendly for people with a non-technical background.",
    statusLabel: "STATUS:",
    statusText: "Available for AI workflows & custom agent development",
    focusLabel: "MISSION:",
    focusText: "Making AI simple, practical, and human-friendly",
    audienceLabel: "TARGET:",
    audienceText: "Businesses and non-technical teams seeking high-impact automation",
  },
  projects: {
    sectionNum: "02.",
    sectionTitle: "FEATURED PROJECTS",
    sectionSubtitle: "Real-world AI systems built for measurable impact and effortless user experience",
    caseStudyTag: "Featured AI Solution",
    items: [
      {
        id: "outreach-optimizer",
        title: "Outreach Optimizer",
        badge: "B2B Sales Automation",
        description: "An AI-powered B2B sales tool that generates highly customized cold outreach emails by extracting pain points from a prospect's website and merging them with your value proposition.",
        tags: ["AI B2B Sales", "Pain Point Extraction", "Personalized Copy", "Lead Engagement"],
        liveUrl: "#contact",
        githubUrl: "https://github.com",
      },
      {
        id: "everything-calculator",
        title: "The Everything Calculator",
        badge: "Natural Language AI App",
        description: "A playful, AI-powered web app where you describe any calculator in plain English and get an instantly usable, interactive calculator — no coding required.",
        tags: ["Prompt-to-Tool", "Natural Language", "Instant Calculations", "Zero-Code"],
        liveUrl: "#contact",
        githubUrl: "https://github.com",
      },
    ],
    ctaTitle: "Have a specific process you'd like to automate?",
    ctaButton: "Discuss Your AI Agent",
  },
  contact: {
    sectionNum: "03.",
    sectionTitle: "GET IN TOUCH",
    headline: "Let's Automate Your Workflow",
    subtitle: "Ready to save hours every week, eliminate tool chaos, and build your custom AI agents? Reach out and let's make AI work for you.",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. AlMeqdad Yaseen",
    emailLabel: "Your Email Address",
    emailPlaceholder: "e.g. you@company.com",
    messageLabel: "What would you like to automate?",
    messagePlaceholder: "Tell me about your repetitive manual tasks, customer support bottlenecks, or the AI agent you envision...",
    submitBtn: "Send Message",
    responseTime: "I will respond with actionable steps within 24 hours.",
    successTitle: "Message Received!",
    successMessage: "Thank you for reaching out! I have received your message and will respond shortly with ideas on how to automate your workflow.",
    sendAnotherBtn: "Send Another Message",
  },
  footer: {
    credit: "AlMeqdad Yaseen",
    tagline: "AI Agents & Automation • Making AI simple, practical, and human-friendly",
    rights: "All rights reserved",
  },
};

export const contentAr: PortfolioContent = {
  meta: {
    title: "المقداد ياسين | وكلاء وأتمتة الذكاء الاصطناعي",
    description: "أعمل على بناء مسارات عمل ووكلاء ذكاء اصطناعي لتولي المهام اليدوية المتكررة وجعل الذكاء الاصطناعي بسيطاً وعملياً.",
  },
  nav: {
    brand: "المقداد ياسين",
    about: "نبذة عني",
    projects: "المشاريع",
    contact: "تواصل معي",
    cta: "تواصل معي",
    langSwitchLabel: "English",
    langCode: "EN",
  },
  hero: {
    kicker: "وكلاء وأتمتة الذكاء الاصطناعي",
    nameFirst: "المقداد",
    nameLast: "ياسين",
    roleTitle: "وكلاء وأتمتة الذكاء الاصطناعي",
    subtitle: "شغوف بالذكاء الاصطناعي ومؤمن بقدرته على تغيير طريقة عيشنا. أعمل على بناء مسارات عمل ووكلاء ذكاء اصطناعي لتولي المهام اليدوية المتكررة؛ من الرد على استفسارات العملاء إلى إدارة المخزون، الشؤون المالية، والمهام الإدارية.",
    exploreBtn: "استكشف المشاريع",
    contactBtn: "لنتحدث معاً",
    scroll: "تمرير",
  },
  about: {
    sectionNum: "٠١.",
    sectionTitle: "نبذة ورؤية",
    headline: "تطوير مسارات العمل بواسطة الأتمتة الذكية",
    intro: "شغوف بالذكاء الاصطناعي ومؤمن بقدرته على تغيير طريقة عيشنا. أعمل على بناء مسارات عمل ووكلاء ذكاء اصطناعي لتولي المهام اليدوية المتكررة؛ من الرد على استفسارات العملاء إلى إدارة المخزون، الشؤون المالية، والمهام الإدارية.",
    coreWorkflowsLead: "أبني أنظمة تعمل على:",
    pillars: [
      {
        id: "p1",
        num: "٠١",
        title: "تنظيم البيانات وتقليل الفوضى",
        desc: "ربط البرامج والأدوات المشتتة لجمع بياناتك في مسار عمل مركزي واحد وأكثر كفاءة.",
      },
      {
        id: "p2",
        num: "٠٢",
        title: "أتمتة العمليات اليومية وإعداد التقارير",
        desc: "إسناد مهام الجداول المكررة، تتبع المخزون، وتوليد التقارير الروتينية إلى وكلاء مستقلين وموثوقين.",
      },
      {
        id: "p3",
        num: "٠٣",
        title: "أتمتة دعم العملاء",
        desc: "الإجابة الفورية والشاملة على استفسارات العملاء الشائعة على مدار الساعة دون تأخير يدوي.",
      },
      {
        id: "p4",
        num: "٠٤",
        title: "لوحة تحكم توضح حجم الوقت والمال الموفر",
        desc: "لوحة واضحة تبيّن لك بدقة حجم الساعات والمبالغ المالية التي توفرها كل أسبوع بفضل الأتمتة.",
      },
    ],
    conclusion: "أجعل الذكاء الاصطناعي بسيطاً وعملياً ومناسباً للأشخاص غير التقنيين.",
    statusLabel: "الحالة:",
    statusText: "متاح لمشاريع بناء وكلاء الذكاء الاصطناعي والأتمتة الذكية",
    focusLabel: "الهدف:",
    focusText: "جعل الذكاء الاصطناعي بسيطاً، عملياً ومناسباً للجميع",
    audienceLabel: "الفئة المستهدفة:",
    audienceText: "الشركات والأفراد وفرق العمل الباحثة عن أتمتة ذات أثر ملموس",
  },
  projects: {
    sectionNum: "٠٢.",
    sectionTitle: "المشاريع",
    sectionSubtitle: "أدوات وأنظمة ذكاء اصطناعي مصممة لتوفير الجهد وتحقيق نتائج فورية",
    caseStudyTag: "مشروع مميز",
    items: [
      {
        id: "outreach-optimizer",
        title: "Outreach Optimizer",
        badge: "أتمتة مبيعات الشركات (B2B)",
        description: "أداة مبيعات B2B مدعومة بالذكاء الاصطناعي لتوليد رسائل تواصل مخصصة عبر استخراج نقاط الألم من موقع العميل ودمجها مع القيمة المقدمة.",
        tags: ["مبيعات B2B", "استخراج نقاط الألم", "رسائل تواصل ذكية", "أتمتة المراسلات"],
        liveUrl: "#contact",
        githubUrl: "https://github.com",
      },
      {
        id: "everything-calculator",
        title: "The Everything Calculator",
        badge: "تطبيق ذكاء اصطناعي تفاعلي",
        description: "تطبيق ويب تفاعلي يتيح لك وصف أي آلة حاسبة بلغتك اليومية، لتحصل فوراً على أداة جاهزة للاستخدام دون كتابة كود.",
        tags: ["وصف طبيعي", "توليد فوري", "حاسبة بدون كود", "تفاعلية بالذكاء الاصطناعي"],
        liveUrl: "#contact",
        githubUrl: "https://github.com",
      },
    ],
    ctaTitle: "هل لديك مسار عمل محدد ترغب في أتمتته؟",
    ctaButton: "ناقش مشروعك للذكاء الاصطناعي",
  },
  contact: {
    sectionNum: "٠٣.",
    sectionTitle: "تواصل معي",
    headline: "لنبدأ في أتمتة مسارات عملك",
    subtitle: "هل أنت مستعد لتوفير ساعات ثمينة أسبوعياً والتخلص من فوضى الأدوات؟ تواصل معي وسنناقش خطة الأتمتة المثالية لاحتياجك.",
    nameLabel: "الاسم الكريم",
    namePlaceholder: "مثال: المقداد ياسين",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "مثال: you@company.com",
    messageLabel: "ما هي المهام أو الأنظمة التي ترغب في أتمتتها؟",
    messagePlaceholder: "صف سير عملك الحالي، التحديات الروتينية، أو الوكيل الذكي الذي ترغب في بنائه...",
    submitBtn: "إرسال الرسالة",
    responseTime: "الرد المعتاد خلال ٢٤ ساعة بخطوات عملية مقترحة.",
    successTitle: "تم استلام رسالتك بنجاح!",
    successMessage: "شكراً لتواصلك! لقد استلمت رسالتك وسأتواصل معك قريباً بأفكار عملية ومقترحات تناسب أهدافك.",
    sendAnotherBtn: "إرسال رسالة أخرى",
  },
  footer: {
    credit: "المقداد ياسين",
    tagline: "وكلاء وأتمتة الذكاء الاصطناعي • جعل الذكاء الاصطناعي بسيطاً وعملياً ومناسباً للأشخاص غير التقنيين",
    rights: "جميع الحقوق محفوظة",
  },
};
