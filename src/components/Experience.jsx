import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI Instructor',
    company: 'Sahil Tech (NAVTTC)',
    location: 'Faisalabad, Pakistan',
    period: '03/2025 – 05/2026',
    badge: 'Teaching & Mentorship',
    accent: '#2563EB',
    points: [
      'Delivered rigorous AI/ML training to NAVTTC-enrolled students, covering core AI theory, Python programming, and model architectures.',
      'Mentored students through end-to-end Python programming, data analysis pipelines, and machine learning model building.',
      'Guided students through practical, hands-on AI/ML projects simulating real-world industry tasks.',
      'Evaluated practical assignments, model performance benchmarks, and student technical capstone projects.',
    ],
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn', 'Model Building'],
  },
  {
    role: 'Python Programming Intern',
    company: 'Cosmicode',
    location: 'Remote',
    period: '07/2025 – 10/2025',
    badge: 'Data Science & Python',
    accent: '#7c3aed',
    points: [
      'Performed data cleaning, imputation, and feature preprocessing using NumPy and Pandas across real-world datasets.',
      'Conducted in-depth exploratory data analysis (EDA) to uncover trends, anomalies, and feature correlations.',
      'Built automated data visualization scripts and interactive figures using Matplotlib and Seaborn to communicate insights.',
      'Debugged, refactored, and optimized existing Python codebases for improved performance and modularity.',
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
  },
  {
    role: 'Python Teaching Assistant',
    company: 'National Textile University',
    location: 'Faisalabad, Pakistan',
    period: '02/2025 – 06/2025',
    badge: 'Academic Teaching',
    accent: '#059669',
    points: [
      'Taught foundational Python programming, algorithmic thinking, and problem-solving techniques to undergraduate students.',
      'Guided students through weekly hands-on coding labs, algorithm implementations, and real-time debugging sessions.',
      'Supported student-led data analysis and visualization coursework using Pandas, Matplotlib, and Seaborn.',
    ],
    tech: ['Python', 'Data Structures', 'Problem Solving', 'Data Analysis', 'Teaching'],
  },
];

const leadership = [
  {
    role: 'President',
    organization: 'Computer Science Society — National Textile University',
    period: '2025 – 2026',
    accent: '#2563EB',
    description:
      "Led the university's premier Computer Science Society, formulating strategic vision for tech conferences, hackathons, coding workshops, and student mentorship initiatives. Represented the student body in coordination with faculty and university administration to organize national-level competitions.",
  },
  {
    role: 'General Secretary',
    organization: 'Computer Science Society — National Textile University',
    period: '2023 – 2024',
    accent: '#0891b2',
    description:
      'Managed end-to-end administrative and logistical operations of the society, overseeing member communications, guest speaker coordination, technical seminars, and official records.',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white py-20 md:py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:80px_80px]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-18"
        >
          <h2 id="experience-heading" className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
            Practical industry experience in AI/ML training, hands-on Python development, data engineering, and institutional leadership.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 mb-20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div 
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-white group-hover:scale-125 transition-transform duration-300 shadow-md"
                style={{ backgroundColor: exp.accent }}
              />

              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">{exp.role}</h3>
                    <p className="text-[#2563EB] font-bold text-sm sm:text-base mt-0.5">
                      {exp.company} <span className="text-slate-400 font-normal">· {exp.location}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 my-5">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-slate-50 border border-slate-200 text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Highlights & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Leadership Highlights (2 cols) */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                Leadership Highlights
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">Community &amp; Society Impact</h3>
            </div>

            <div className="space-y-4">
              {leadership.map((item, idx) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <span className="text-base">🏛️</span> {item.role}
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mb-2">{item.organization}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Card (1 col) */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                Academic Background
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">Education</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-blue-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between h-[calc(100%-48px)] shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-xl mb-4">
                  🎓
                </div>
                <h4 className="text-lg font-black text-slate-900 leading-snug">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-sm font-bold text-[#2563EB] mt-1">
                  National Textile University, Faisalabad
                </p>
                <p className="text-xs text-slate-400 font-mono mt-2">
                  2022 – 2026
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">Cumulative GPA</span>
                  <span className="text-base font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    3.1 / 4.00
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
