import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: 'Full Stack Web Development',
      badge: 'Web & Systems',
      accent: '#059669',
      skills: [
        'React',
        'Django',
        'JavaScript',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'REST APIs',
        'SQL Databases',
        'Backend Architecture',
      ],
    },
    {
      category: 'Web Scraping & Data Mining',
      badge: 'Extraction & Crawling',
      accent: '#0891b2',
      skills: [
        'Web Scraping',
        'Beautiful Soup',
        'Selenium',
        'Playwright',
        'Scrapy',
        'Headless Browsers',
        'Dynamic Content Scraping',
        'Automated Crawlers',
        'HTML & XPath Parsing',
        'Anti-Bot & Proxy Handling',
        'Data Pipeline Extraction',
      ],
    },
    {
      category: 'AI & Machine Learning',
      badge: 'Core Intelligence',
      accent: '#2563EB',
      skills: [
        'Python',
        'Scikit-learn',
        'TensorFlow',
        'Keras',
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Sentiment Analysis',
        'Feature Engineering',
        'Data Preprocessing',
        'EDA',
      ],
    },
    {
      category: 'AI Automation & Agents',
      badge: 'Agentic Workflows',
      accent: '#7c3aed',
      skills: [
        'AI Agents',
        'LangGraph',
        'AI Workflow Automation',
        'API Integrations',
        'Intelligent Workflows',
        'LLM Applications',
        'Agentic AI',
        'Business Process Automation',
      ],
    },
    {
      category: 'Mobile & Android Development',
      badge: 'Flutter & Firebase',
      accent: '#0284c7',
      skills: [
        'Flutter',
        'Dart',
        'Android Architecture',
        'Firebase Auth',
        'Cloud Firestore',
        'Realtime Database',
        'Firebase Storage',
        'State Management (Provider/Bloc)',
        'REST APIs Integration',
        'Material Design 3',
        'Responsive Mobile UI',
        'Interactive UI Animations',
      ],
    },
    {
      category: 'Data Science & Visualization',
      badge: 'Analytics & Insights',
      accent: '#d97706',
      skills: [
        'NumPy',
        'Pandas',
        'Data Cleaning & Imputation',
        'Matplotlib',
        'Seaborn',
        'Power BI',
        'Microsoft Excel',
        'Exploratory Data Analysis',
        'Git & GitHub',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };

  const skillPillVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.06, transition: { type: 'spring', stiffness: 400, damping: 10 } },
  };

  const SkillCard = ({ category, badge, accent, skills }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="group relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 flex flex-col justify-between"
    >
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${accent}08, transparent 60%)` }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-black text-slate-900 tracking-tight">{category}</h3>
          <span 
            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
            style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}10` }}
          >
            {badge}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              variants={skillPillVariants}
              initial="initial"
              whileHover="hover"
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-full transition-all duration-300 cursor-default select-none hover:text-[#2563EB]"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative w-full bg-[#f8fafc] py-20 md:py-28 overflow-hidden" aria-labelledby="skills-heading">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          <h2 id="skills-heading" className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            Technologies &amp; Expertise
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-normal max-w-xl leading-relaxed">
            A comprehensive, battle-tested skillset bridging Machine Learning models, autonomous AI agents, enterprise workflow automation, and production full-stack systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {skillsData.map((item, idx) => (
            <SkillCard key={idx} category={item.category} badge={item.badge} accent={item.accent} skills={item.skills} />
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-44 h-44 bg-blue-400 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-5 w-52 h-52 bg-violet-400 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default Skills;
