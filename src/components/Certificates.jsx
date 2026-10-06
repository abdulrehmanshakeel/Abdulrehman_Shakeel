import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    name: 'Supervised Machine Learning: Regression and Classification',
    organization: 'Stanford University & DeepLearning.AI (Coursera)',
    date: 'May 2025',
    issuer: 'Stanford Online',
    accent: '#3B82F6',
    skills: ['Supervised Learning', 'Linear Regression', 'Logistic Regression', 'Gradient Descent', 'Overfitting Regularization'],
  },
  {
    id: 2,
    name: 'Data Science Fundamentals Specialization',
    organization: 'IBM (Coursera)',
    date: 'May 2025',
    issuer: 'IBM',
    accent: '#2563EB',
    skills: ['Data Science Tools', 'Data Analysis', 'Python for DS', 'Methodology'],
  },
  {
    id: 3,
    name: 'Databases and SQL for Data Science with Python',
    organization: 'IBM (Coursera)',
    date: 'January 2026',
    issuer: 'IBM',
    accent: '#06B6D4',
    skills: ['Relational Databases', 'SQL Queries', 'Python Database APIs', 'Data Analysis'],
  },
  {
    id: 4,
    name: 'Data Science Methodology',
    organization: 'IBM (Coursera)',
    date: 'January 2026',
    issuer: 'IBM',
    accent: '#8B5CF6',
    skills: ['Business Understanding', 'Data Preparation', 'Model Evaluation', 'Deployment Pipelines'],
  },
  {
    id: 5,
    name: 'Data Science Certification',
    organization: 'PFTP (Professional Freelancing Training Program)',
    date: 'November 2025',
    issuer: 'PFTP',
    accent: '#10B981',
    skills: ['Python', 'Pandas & NumPy', 'Data Visualization', 'Practical ML'],
  },
];

const AwardIcon = ({ color }) => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke={color} viewBox="0 0 24 24" aria-hidden="true" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

const Certificates = () => (
  <section id="certifications" className="relative w-full bg-[#0B0B0B] py-16 md:py-24 overflow-hidden font-sans" aria-labelledby="certs-heading">
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" aria-hidden="true" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10 md:mb-14"
      >
        <h2 id="certs-heading" className="text-3xl md:text-5xl font-black text-white mb-2.5 tracking-tight">
          Certifications
        </h2>
        <p className="text-xs sm:text-sm text-[#D1D5DB]/65 max-w-lg leading-relaxed">
          Specialized professional certifications from Stanford University, IBM, Coursera, and professional training institutes.
        </p>
      </motion.div>

      {/* Visually compact cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-[#111827] border border-white/8 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `linear-gradient(135deg, ${cert.accent}10, transparent 65%)` }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1F2937] border border-white/8 flex items-center justify-center">
                  <AwardIcon color={cert.accent} />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#94A3B8] bg-white/4 border border-white/8 px-2.5 py-0.5 rounded-full">
                  {cert.date}
                </span>
              </div>

              <h3 className="font-bold text-white text-sm sm:text-base mb-1 leading-snug group-hover:text-blue-200 transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-[#3B82F6] font-semibold mb-3">{cert.organization}</p>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/3 border border-white/8 text-[#94A3B8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}

        {/* Collaborate / Contact CTA card */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.45, ease: 'easeOut' }}
          className="relative bg-gradient-to-br from-[#1E3A8A]/30 to-[#111827] border border-[#2563EB]/30 rounded-2xl p-5 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-lg mb-3">
              🤝
            </div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-1">
              Let&apos;s Build Together
            </h3>
            <p className="text-xs text-[#D1D5DB]/70 leading-relaxed mb-4">
              Interested in collaborating on AI engineering, Flutter mobile apps, or web systems?
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-xs font-bold hover:shadow-lg hover:shadow-[#2563EB]/30 transition-all"
          >
            <span>Get In Touch</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.article>
      </div>
    </div>
  </section>
);

export default Certificates;
