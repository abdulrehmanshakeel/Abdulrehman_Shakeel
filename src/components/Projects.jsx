import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import watcherImg from '../assets/projects/the_watcher.jpg';
import watcherWelcome from '../assets/projects/watcher_welcome.png';
import watcherBrowsing from '../assets/projects/watcher_browsing.png';
import watcherChat from '../assets/projects/watcher_chat.png';
import watcherYoutube from '../assets/projects/watcher_youtube.png';
import watcherAlerts from '../assets/projects/watcher_alerts.png';
import ahImpexImg from '../assets/projects/ah_impex.png';
import brixelabsImg from '../assets/projects/brixelabs.png';
import sentimentImg from '../assets/projects/sentiment_analysis.jpg';
import rainfallImg from '../assets/projects/rainfall_prediction.jpg';
import mnistImg from '../assets/projects/mnist_classification.svg';

const projects = [
  {
    id: 1,
    name: 'A&H IMPEX',
    tagline: 'Export & Manufacturing Business Website',
    description:
      'A modern business website for A&H IMPEX, a textile manufacturing and export company. The website presents the company’s products, export markets, certifications, business profile, and contact/quotation functionality through a premium responsive interface.',
    image: ahImpexImg,
    screenshots: [ahImpexImg],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Responsive Web',
      'Modern UI/UX',
      'Lead Generation',
      'SEO Optimization',
    ],
    features: [
      'Global Export Showcase: Interactive export reach across 35+ international markets',
      'Product Catalog: Structured displays for luxury bedding, hotel linen, and air-jet fabrics',
      'Certification & Compliance: Detailed ISO 9001 and OEKO-TEX 100 quality standards section',
      'Interactive Quotation System: Direct inquiry and bulk RFQ submission forms',
      'High-Performance Responsive Design: Fast-loading, mobile-first interface optimized for international buyers',
    ],
    problemSolved:
      'Provided an international textile manufacturer with a commanding, modern web presence to present their vertical capabilities and capture high-value export inquiries globally.',
    challenges:
      'Structuring large product catalogs and textile manufacturing data into an elegant, fast-loading, visually rich commercial web experience.',
    role: 'Frontend & UI Developer — Implemented the modern layout, product showcases, responsive navigation, and quotation interface.',
    github: 'https://github.com/abdulrehmanshakeel',
    live: 'https://www.ahimpex.net/',
    status: 'Live',
    featured: true,
    grade: null,
    highlight: 'Commercial Production Website',
  },
  {
    id: 2,
    name: 'Brixelabs',
    tagline: 'Digital Solutions & Technology Platform',
    description:
      'A professional technology-focused web presence showcasing digital solutions, development capabilities, and technology services across custom AI models, web apps, and enterprise workflow automation.',
    image: brixelabsImg,
    screenshots: [brixelabsImg],
    technologies: [
      'React.js',
      'Framer Motion',
      'Tailwind CSS',
      'AI Solutions Showcase',
      'Modern Dark Theme',
    ],
    features: [
      'Service Architecture: Clear breakdowns of custom AI, full-stack apps, and automation workflows',
      'Dynamic Dark UI: High-contrast cyberpunk-inspired dark design with smooth micro-interactions',
      'Interactive Case Studies: Highlighting client metrics, optimizations, and delivery benchmarks',
      'Lead Funnel: Streamlined project consultation inquiry system',
    ],
    problemSolved:
      'Created a distinctive, high-credibility digital brand for a technology platform that effectively communicates sophisticated software and AI engineering capabilities.',
    challenges:
      'Crafting fluid Framer Motion animations and neon visual accents without compromising loading performance or mobile usability.',
    role: 'Full-Stack Developer — Built interactive components, layout system, and responsive animations.',
    github: 'https://github.com/abdulrehmanshakeel',
    live: 'https://www.brixellabs.com/',
    status: 'Live',
    featured: true,
    grade: null,
    highlight: 'Tech Platform Live Website',
  },
  {
    id: 3,
    name: 'Sentiment Analysis',
    tagline: 'NLP & Machine Learning Text Classifier',
    description:
      'A machine learning NLP project that uses TF-IDF vectorization and Logistic Regression to classify text sentiment into positive, negative, and neutral categories.',
    image: sentimentImg,
    screenshots: [sentimentImg],
    technologies: [
      'Python',
      'NLTK',
      'Scikit-learn',
      'TF-IDF',
      'Logistic Regression',
      'NLP',
    ],
    features: [
      'Text Preprocessing: Tokenization, stop-word removal, and lemmatization using NLTK',
      'Feature Extraction: Term Frequency-Inverse Document Frequency (TF-IDF) vectorizer',
      'Classifier Model: Logistic Regression model trained for multi-class sentiment predictions',
      'Model Validation: In-depth confusion matrix evaluation, precision/recall metrics, and ROC-AUC analysis',
    ],
    problemSolved:
      'Enables automated customer review classification, feedback triaging, and sentiment tracking across large corpora of unstructured textual data.',
    challenges:
      'Handling class imbalance in sentiment datasets and tuning TF-IDF n-gram ranges to capture subtle nuances like negations and domain idioms.',
    role: 'ML Developer — Conducted data preprocessing, feature engineering, model training, and performance evaluation.',
    github: 'https://github.com/abdulrehmanshakeel',
    live: null,
    status: 'Completed',
    featured: false,
    grade: null,
    highlight: 'Natural Language Processing',
  },
  {
    id: 4,
    name: 'The Watcher',
    tagline: 'AI Child Monitoring & Agentic Mobile System',
    description:
      'A comprehensive child safety monitoring system combining Machine Learning, LangGraph AI agents, Django backend, and a Flutter mobile application with real-time dashboards for chat surveillance, web activity, YouTube analytics, and behavioral alerts.',
    image: watcherImg,
    screenshots: [
      { src: watcherImg, title: 'Multi-Device App Showcase' },
      { src: watcherChat, title: 'Chat Monitoring & Risk Flagging' },
      { src: watcherYoutube, title: 'YouTube Activity & Screen Analytics' },
      { src: watcherBrowsing, title: 'Browsing Safety & Block Controls' },
      { src: watcherAlerts, title: 'Real-time Alert Pipeline' },
      { src: watcherWelcome, title: 'App Welcome & Authentication' },
    ],
    technologies: [
      'Flutter',
      'Firebase',
      'Python',
      'LangGraph',
      'Scikit-learn',
      'Django',
      'Machine Learning',
      'AI Agents',
    ],
    features: [
      'Chat Surveillance & Risk Classification: Real-time flagged chats (High Risk, Moderate, Safe) with instant violence and cyberbullying detection',
      'YouTube Analytics & Watch Breakdown: Tracking watch duration, searches, and category distribution (Gaming, Entertainment, Horror, Comedy)',
      'Browsing Monitor & Access Control: Monitoring website visits with category tags (Violence, Gaming, Educational) and 1-tap blocking',
      'Agentic AI Decision Pipeline: LangGraph agents analyzing behavioral patterns, late-night bedtime activity, and signs of anxiety/mood',
      'Actionable Alert Pipeline: Instant notifications enabling parents to Block Source, Lock Screen, or Extend Limits',
      'Full-Stack Architecture: Flutter client connected to Firebase telemetry & Django ML inference backend',
    ],
    problemSolved:
      'Parents need proactive, respectful digital safety oversight. The Watcher combines on-device monitoring with autonomous multi-agent reasoning to highlight only real safety risks rather than overwhelming parents with raw data.',
    challenges:
      'Processing diverse mobile activity streams (chat text, video metadata, URL categories) with sub-second ML classification and low-latency notification delivery.',
    role: 'Lead Architect & ML/Mobile Developer — Designed the multi-agent decision architecture, trained classification models, and integrated the Django backend with Flutter mobile client.',
    github: 'https://github.com/abdulrehmanshakeel',
    live: null,
    status: 'Completed',
    featured: true,
    grade: 'Final Year Project',
    highlight: 'Flutter + Agentic AI + ML Integration',
  },

  {
    id: 6,
    name: 'Real-Time Rainfall Prediction',
    tagline: 'Meteorological ML Forecasting System',
    description:
      'An ML-based rainfall prediction system using historical weather data, feature engineering, preprocessing, and regression techniques to forecast precipitation probabilities in real time.',
    image: rainfallImg,
    screenshots: [rainfallImg],
    technologies: [
      'Python',
      'Flask',
      'Scikit-learn',
      'Streamlit',
      'Matplotlib',
      'Pandas',
    ],
    features: [
      'Feature Engineering: Preprocessed atmospheric pressure, humidity, dew point, and temperature trends',
      'Regression & Classification: Comparative evaluation of Random Forest and Linear Regression models',
      'Interactive Dashboard: Streamlit & Flask interface with real-time prediction sliders and gauges',
      'Historical Trend Analysis: Visual plots of weather anomalies and precipitation probability curves',
    ],
    problemSolved:
      'Accurate localized rainfall prediction assists agricultural planning and daily weather preparedness by replacing complex manual simulations with fast ML inference.',
    challenges:
      'Handling multicollinearity among weather metrics and engineering time-lagged variables for higher forecasting accuracy.',
    role: 'Data Scientist & ML Developer — Cleaned raw weather records, trained regression pipelines, and deployed the interactive web interface.',
    github: 'https://github.com/abdulrehmanshakeel',
    live: null,
    status: 'Completed',
    featured: false,
    grade: null,
    highlight: 'Machine Learning & Web App',
  },
  {
    id: 7,
    name: 'Handwritten Digit Classification',
    tagline: 'Deep Learning ANN on MNIST Dataset',
    description:
      'A deep learning application built with TensorFlow and Keras to accurately classify handwritten digits (0–9) using an Artificial Neural Network trained on the MNIST benchmark dataset.',
    image: mnistImg,
    screenshots: [mnistImg],
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Deep Learning',
      'ANN',
      'MNIST',
    ],
    features: [
      'Neural Architecture: Multi-layer perceptron (Dense layers, Dropout regularization, Softmax output)',
      'High Accuracy: Achieved over 98% validation accuracy on the 70,000-image MNIST test suite',
      'Interactive Canvas: Allows users to draw any single digit and receive instant probabilistic predictions',
      'Layer Visualizer: Displays intermediate activations and softmax confidence distribution across all 10 digits',
    ],
    problemSolved:
      'Demonstrates foundational deep learning concepts and serves as a functional demonstration of optical character recognition (OCR) and pattern recognition.',
    challenges:
      'Optimizing hyperparameters, learning rates, and dropout rates to eliminate overfitting on clean digit strokes.',
    role: 'Deep Learning Developer — Built model architecture in Keras, tuned weights, and developed the interactive digit evaluation tool.',
    github: 'https://github.com/abdulrehmanshakeel',
    live: null,
    status: 'Completed',
    featured: false,
    grade: null,
    highlight: 'Deep Learning & Neural Networks',
  },
];

const statusColors = {
  Live: 'bg-emerald-900/40 text-emerald-400 border-emerald-500/30',
  Completed: 'bg-blue-900/40 text-blue-400 border-blue-500/30',
  'In Progress': 'bg-amber-900/40 text-amber-400 border-amber-500/30',
};

const TechBadge = ({ tech }) => (
  <span className="px-2.5 py-1 text-[10px] font-semibold bg-white/5 border border-white/10 rounded-full text-[#D1D5DB] hover:bg-[#2563EB]/20 hover:border-[#2563EB]/40 hover:text-white transition-all duration-200 cursor-default">
    {tech}
  </span>
);

const ExpandedView = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Normalize screenshots array to handle both strings and objects
  const rawScreenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [{ src: project.image, title: project.name }];

  const normalizedScreenshots = rawScreenshots.map((item, idx) => {
    if (typeof item === 'string') {
      return { src: item, title: `Screenshot ${idx + 1}` };
    }
    return item;
  });

  const currentImg = normalizedScreenshots[activeImageIndex] || normalizedScreenshots[0];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Support browser back button to close modal
  useEffect(() => {
    window.history.pushState({ modalOpen: true }, '');
    const handlePopState = () => {
      onClose();
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative bg-[#111827] border border-white/10 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col z-[1000000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar - Always visible when scrolling */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 bg-[#111827]/95 backdrop-blur-md border-b border-white/10 rounded-t-3xl">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-md ${statusColors[project.status]}`}>
              {project.status}
            </span>
            {project.highlight && (
              <span className="hidden sm:inline-block px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-lg">
                {project.highlight}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-300 border border-white/15 transition-all text-white text-xs font-bold shadow-lg cursor-pointer"
            aria-label="Close project details"
          >
            <span>Close (Esc)</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Media Preview & Gallery Switcher */}
        <div className="relative bg-[#0b0f19] border-b border-white/10 overflow-hidden flex flex-col items-center">
          <div className="w-full h-64 sm:h-80 md:h-96 flex items-center justify-center p-3 relative group bg-gradient-to-b from-[#0f172a] to-[#0b0f19]">
            <img
              src={currentImg.src}
              alt={currentImg.title || `${project.name} preview`}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
              loading="lazy"
            />

            {normalizedScreenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : normalizedScreenshots.length - 1));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#2563EB] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl cursor-pointer"
                  aria-label="Previous screenshot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev < normalizedScreenshots.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#2563EB] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl cursor-pointer"
                  aria-label="Next screenshot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span>{currentImg.title}</span>
                  <span className="text-white/50">({activeImageIndex + 1}/{normalizedScreenshots.length})</span>
                </div>
              </>
            )}
          </div>

          {/* Screenshot Thumbnails Strip */}
          {normalizedScreenshots.length > 1 && (
            <div className="w-full px-4 py-3 bg-[#0a0e1a] flex items-center gap-2.5 overflow-x-auto border-t border-white/5 scrollbar-thin">
              {normalizedScreenshots.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'bg-[#2563EB]/30 border-[#3B82F6] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] ring-1 ring-[#3B82F6]'
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <img src={item.src} alt="" className="w-5 h-5 object-cover rounded shadow" />
                  <span className="text-[11px] font-semibold">{item.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{project.name}</h3>
          <p className="text-[#3B82F6] font-bold text-sm mb-4">{project.tagline}</p>
          <p className="text-[#D1D5DB]/85 text-sm leading-relaxed mb-6">{project.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/3 p-4 rounded-2xl border border-white/5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#93C5FD] mb-2">Problem Solved</h4>
              <p className="text-xs sm:text-sm text-[#D1D5DB]/75 leading-relaxed">{project.problemSolved}</p>
            </div>
            <div className="bg-white/3 p-4 rounded-2xl border border-white/5">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#93C5FD] mb-2">Engineering Challenges</h4>
              <p className="text-xs sm:text-sm text-[#D1D5DB]/75 leading-relaxed">{project.challenges}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/50 mb-2">My Contribution</h4>
            <p className="text-xs sm:text-sm text-[#D1D5DB]/80 leading-relaxed">{project.role}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/50 mb-3">Key Highlights &amp; Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D1D5DB]/80">
                  <span className="w-4 h-4 rounded-full bg-[#2563EB]/20 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <svg className="w-2.5 h-2.5 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#D1D5DB]/50 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => <TechBadge key={t} tech={t} />)}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/8">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer"
            >
              <span>← Back to Projects</span>
            </button>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-xs sm:text-sm font-black hover:shadow-[0_8px_25px_rgba(37,99,235,0.5)] transition-all duration-200"
              >
                <span>LIVE DEMO</span>
                <span className="text-base">→</span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F2937] border border-white/10 text-white text-xs sm:text-sm font-bold hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative bg-[#111827] border border-white/8 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
    >
      <div className="relative overflow-hidden bg-[#0f172a] h-48 sm:h-52">
        <img
          src={project.image || (typeof project.screenshots[0] === 'string' ? project.screenshots[0] : project.screenshots[0]?.src)}
          alt={`${project.name} project screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-black/30 pointer-events-none" aria-hidden="true" />
        
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.featured && (
            <span className="px-2.5 py-0.5 text-[10px] font-black rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-lg">
              Featured
            </span>
          )}
          {project.grade && (
            <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
              {project.grade}
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full border backdrop-blur-md ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-black text-white mb-1 group-hover:text-[#60A5FA] transition-colors">
          {project.name}
        </h3>
        <p className="text-[#3B82F6] text-xs font-bold mb-3">{project.tagline}</p>
        <p className="text-[#D1D5DB]/70 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((t) => <TechBadge key={t} tech={t} />)}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-semibold text-[#D1D5DB]/50 bg-white/3 rounded-full border border-white/8">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
          <button
            onClick={onOpen}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1F2937] hover:bg-[#2563EB] text-white text-xs font-bold transition-all duration-200 cursor-pointer"
            aria-label={`View details for ${project.name}`}
          >
            <span>Details</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-xs font-black hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)] transition-all duration-200 ml-auto"
              aria-label={`View ${project.name} live demo`}
            >
              <span>LIVE DEMO</span>
              <span className="font-bold">→</span>
            </a>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 text-[#D1D5DB] text-xs font-bold hover:border-white/30 hover:text-white transition-all duration-200 ml-auto"
              aria-label={`View ${project.name} on GitHub`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative w-full bg-[#0B0B0B] py-20 md:py-28 overflow-hidden" aria-labelledby="projects-heading">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          <h2 id="projects-heading" className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-sm md:text-base text-[#D1D5DB]/70 max-w-xl leading-relaxed">
            Production web applications, agentic AI workflows, machine learning models, and deep learning systems built with modern engineering rigor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/abdulrehmanshakeel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-[#D1D5DB] font-bold text-xs sm:text-sm hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All Repositories on GitHub (abdulrehmanshakeel)
          </a>
        </motion.div>
      </div>

      {/* Render modal directly in body portal on top of everything */}
      <AnimatePresence>
        {activeProject && (
          <ExpandedView
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
