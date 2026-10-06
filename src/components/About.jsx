import reactImage from '../assets/about/react.png';
import profileImage from '../assets/about/profile.jpg';

const About = () => {
  return (
    <section id="about" className="bg-white pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#2563EB]/20 transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-slate-100 rounded border border-slate-200 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.1)]"></div>

            <div className="bg-white w-full max-w-[290px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.12)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-200">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-white rounded-t-xl transform -translate-x-1/2 flex justify-center items-center border-x border-t border-slate-200">
                <div className="w-8 h-2 bg-slate-200 rounded-full shadow-inner"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 relative">
                <img
                  src={profileImage}
                  alt="M. Abdul Rehman Shakeel — AI/ML Engineer & AI Automation Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  width="290"
                  height="387"
                  onError={(e) => { e.currentTarget.src = '/profile-placeholder.svg'; }}
                />
              </div>
              <div className="pt-3 pb-1 text-center">
                <p className="text-slate-900 font-black text-sm tracking-tight">M. Abdul Rehman Shakeel</p>
                <p className="text-[#2563EB] text-xs font-semibold">Python Developer @ Quarksol</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-slate-900 mt-8 md:mt-0 relative z-20">
          <h2 id="about-heading" className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Hello, I&apos;m Abdul Rehman
          </h2>

          <p className="text-base md:text-lg font-bold mb-5 leading-relaxed max-w-3xl text-slate-800">
            A Computer Science graduate and <span className="text-[#2563EB]">Python Developer at Quarksol</span> with specialized expertise in <span className="text-[#2563EB]">Web Scraping &amp; API Development</span>, <span className="text-[#2563EB]">Artificial Intelligence &amp; Machine Learning</span>, and mobile systems.
          </p>

          <p className="text-sm md:text-base font-normal mb-5 leading-relaxed max-w-3xl text-slate-600">
            At Quarksol, I develop automated web scraping crawlers and scalable REST APIs using <strong className="text-slate-800">Python, Scrapy, Playwright, Selenium, and Beautiful Soup</strong>. In parallel, I engineer intelligent applications and mobile solutions integrating <strong className="text-slate-800">Django, React, Flutter, Firebase, LangGraph, and Scikit-learn</strong>.
          </p>

          <p className="text-sm md:text-base font-normal mb-6 leading-relaxed max-w-3xl text-slate-600">
            Whether designing an agentic child safety mobile platform, building reactive mobile interfaces backed by Firebase, or translating enterprise processes into automated AI workflows, my goal is always crafting scalable, high-impact digital solutions.
          </p>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 mb-8 max-w-2xl">
            <p className="text-xs md:text-sm font-semibold text-[#1d4ed8] leading-relaxed">
              🎓 BS Computer Science · National Textile University, Faisalabad (2022–2026) · CGPA: 3.1 / 4.00
            </p>
            <p className="text-xs text-slate-500 mt-1">
              🏛️ President, Computer Science Society (2025–2026) · Former General Secretary (2023–2024)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6" role="list" aria-label="Highlighted technologies">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <img src={reactImage} alt="React.js" className="w-6 h-6 object-contain" />
              <div>
                <p className="text-xs font-bold text-slate-800 leading-none">Full-Stack</p>
                <p className="text-[10px] text-slate-500">React · Django · REST</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-[#0891b2] text-xl font-bold">🕸️</span>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-none">Web Scraping</p>
                <p className="text-[10px] text-slate-500">Selenium · Playwright · BS4</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-[#0284c7] text-xl font-bold">Py</span>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-none">AI &amp; ML</p>
                <p className="text-[10px] text-slate-500">Scikit · TF · Keras</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-[#2563EB] text-xl font-bold">🤖</span>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-none">Agentic AI</p>
                <p className="text-[10px] text-slate-500">LangGraph · Workflows</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-[#0284c7] text-xl font-bold">📱</span>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-none">Android &amp; Flutter</p>
                <p className="text-[10px] text-slate-500">Flutter · Firebase · Dart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#f8fafc]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-10 right-10 md:right-20 text-[#2563EB] opacity-8 animate-pulse" aria-hidden="true">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#3B82F6] opacity-6 animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true">
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
