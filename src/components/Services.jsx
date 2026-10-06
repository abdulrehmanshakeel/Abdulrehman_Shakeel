import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Web & Full-Stack Development',
    description: 'Modern, performant, and responsive websites and full-stack web applications built with React, Django, Node.js, and clean architectural principles.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    accent: '#2563EB',
    deliverables: ['Responsive Frontends', 'Django/Node Backends', 'RESTful APIs', 'Database Architecture'],
  },
  {
    number: '02',
    title: 'Web Scraping & Data Extraction',
    description: 'Automated data extraction pipelines, web scraping crawlers (Playwright, Selenium, Beautiful Soup), and clean structured data preprocessing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    accent: '#0891b2',
    deliverables: ['Automated Web Crawlers', 'Playwright & Selenium', 'Beautiful Soup Extraction', 'Data Cleaning Pipelines'],
  },
  {
    number: '03',
    title: 'AI & Machine Learning',
    description: 'Custom machine learning models, NLP pipelines, text sentiment classifiers, predictive analytics, and deep learning solutions tailored to data-driven problems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    accent: '#3B82F6',
    deliverables: ['Scikit-learn / TensorFlow', 'NLP & Sentiment Analysis', 'Classification & Regression', 'Model Evaluation'],
  },
  {
    number: '04',
    title: 'AI Automation & Agents',
    description: 'Autonomous AI agents with LangGraph and intelligent business workflows that automate multi-step decision processes and eliminate manual operational overhead.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" />
      </svg>
    ),
    accent: '#8B5CF6',
    deliverables: ['LangGraph Agents', 'Multi-Agent Workflows', 'Business Automation', 'Tool Calling & Memory'],
  },
  {
    number: '05',
    title: 'Mobile & Android Development',
    description: 'High-performance native Android apps built with Flutter, Dart, and Google Firebase. Feature-rich applications with real-time sync, secure authentication, modern Material UI, and smooth 60fps performance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    accent: '#0284C7',
    deliverables: ['Flutter & Dart Apps', 'Firebase Auth & Firestore', 'Responsive Mobile UI', 'State Management (Provider/Bloc)'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 14 } },
};

const ServiceCard = ({ service }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    className="group relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 flex flex-col justify-between"
  >
    <div
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `linear-gradient(135deg, ${service.accent}12, transparent 65%)` }}
      aria-hidden="true"
    />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-black tracking-widest font-mono" style={{ color: service.accent }}>
          {service.number}
        </span>
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${service.accent}18`, color: service.accent }}
        >
          {service.icon}
        </div>
      </div>
      <h3 className="text-lg font-black text-slate-900 mb-2.5 tracking-tight">{service.title}</h3>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5">{service.description}</p>
    </div>

    <div className="relative z-10 pt-3 border-t border-slate-100">
      <div className="flex flex-wrap gap-1.5">
        {service.deliverables.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-50 border border-slate-200 text-slate-500"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="services" className="relative w-full bg-[#f8fafc] py-20 md:py-28 overflow-hidden font-sans" aria-labelledby="services-heading">
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" aria-hidden="true" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 md:mb-16"
      >
        <h2 id="services-heading" className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
          Professional Services
        </h2>
        <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
          Comprehensive development, AI engineering, and automation solutions engineered to turn technical requirements into high-value results.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {services.map((service) => <ServiceCard key={service.number} service={service} />)}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-14 bg-gradient-to-r from-[#1d4ed8] to-[#2563EB] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(37,99,235,0.25)] border border-blue-400/20"
      >
        <div>
          <h3 className="text-xl md:text-2xl font-black text-white mb-1">Have a project in mind?</h3>
          <p className="text-blue-100/90 text-sm font-medium">Let&apos;s discuss your technical goals and how I can help bring your solution to life.</p>
        </div>
        <a
          href="#contact"
          className="shrink-0 px-7 py-3.5 rounded-full bg-white text-[#2563EB] font-black text-xs sm:text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
        >
          Start a Conversation
        </a>
      </motion.div>
    </div>
  </section>
);

export default Services;
