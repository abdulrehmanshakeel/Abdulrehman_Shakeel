import { motion } from 'framer-motion';

const automationCards = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    tagline: 'Autonomous Reasoning & Action',
    accent: '#3B82F6',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    description:
      'Design autonomous AI agents capable of reasoning through complex multi-step tasks, processing unstructured information, and triggering external actions with precision.',
    capabilities: ['LangGraph Agents', 'Tool Calling', 'State Persistence', 'Context Reasoning'],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    tagline: 'End-to-End Process Streamlining',
    accent: '#8B5CF6',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    description:
      'Automate repetitive business operations using intelligent workflows, event-driven pipelines, and seamless API integrations that eliminate human error.',
    capabilities: ['Process Mapping', 'Scheduled Triggers', 'Data Synchronization', 'Error Handling'],
  },
  {
    id: 'ai-apis',
    title: 'AI + APIs',
    tagline: 'Ecosystem & Data Connectivity',
    accent: '#06B6D4',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    description:
      'Connect cutting-edge AI models with external applications, relational and vector databases, enterprise APIs, and existing software systems to unlock practical intelligence.',
    capabilities: ['RESTful Webhooks', 'Database Pipelines', 'Third-Party SaaS', 'Custom Wrappers'],
  },
  {
    id: 'business-solutions',
    title: 'Intelligent Business Solutions',
    tagline: 'Direct Commercial ROI',
    accent: '#10B981',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    description:
      'Build custom automation systems for lead management, customer support triage, automated data extraction, document processing, and executive reporting.',
    capabilities: ['Lead Qualification', 'Document Parsing', 'Automated Reporting', 'CRM Sync'],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    tagline: 'Multi-Step Autonomous Decision Logic',
    accent: '#EC4899',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description:
      'Develop multi-step AI systems that can independently analyze real-time streaming data, evaluate context, make deterministic decisions, and execute predefined business rules.',
    capabilities: ['Conditional Branching', 'Human-in-the-Loop', 'Multi-Agent Teams', 'Audit Logging'],
  },
];

const AIAutomation = () => {
  return (
    <section
      id="automation"
      className="relative w-full bg-[#f8fafc] py-20 md:py-28 overflow-hidden font-sans"
      aria-labelledby="automation-heading"
    >
      {/* Background visual effects */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />

      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#2563EB] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-[#8B5CF6] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 md:mb-18"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
              Intelligent Workflows &amp; AI Agents
            </span>
          </div>
          <h2 id="automation-heading" className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            AI Automation &amp; Intelligent Systems
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
            Turning repetitive business processes into intelligent automated workflows.
          </p>
        </motion.div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative bg-white border border-slate-200 rounded-3xl p-7 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Subtle hover gradient glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${card.accent}12, transparent 65%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${card.accent}18`, color: card.accent }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    style={{ color: card.accent, borderColor: `${card.accent}30`, backgroundColor: `${card.accent}08` }}
                  >
                    {card.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#2563EB] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                  {card.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Capabilities
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-slate-50 border border-slate-200 text-slate-600"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(37,99,235,0.25)] border border-blue-400/20"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-1.5">
              Ready to automate your business operations?
            </h3>
            <p className="text-blue-100/90 text-sm max-w-xl font-medium">
              Let&apos;s build an autonomous AI agent or connected API pipeline tailored to eliminate your operational bottlenecks.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-7 py-3.5 rounded-full bg-white text-[#1D4ED8] font-black text-xs sm:text-sm hover:bg-blue-50 transition-all duration-300 shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule Automation Consult
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default AIAutomation;
