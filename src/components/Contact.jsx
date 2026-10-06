import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = 'abdulrehmanshakeel003@gmail.com';
  const emailSubject = encodeURIComponent('Project Inquiry - Abdul Rehman Portfolio');
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${emailSubject}`;
  const mailtoUrl = `mailto:${email}?subject=${emailSubject}`;
  const phone = '+92 3048547030';
  const phoneFormatted = '+92 304 8547030';
  const github = 'https://github.com/abdulrehmanshakeel';
  const whatsapp = 'https://wa.me/923048547030?text=Hi%20Abdul%20Rehman,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.';

  const handleCopyEmail = (e) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    try {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Email Address',
      value: email,
      actionText: 'Send via Gmail / Web',
      href: gmailComposeUrl,
      icon: (
        <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      accent: '#2563EB',
      badge: 'Preferred',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp & Phone',
      value: phoneFormatted,
      actionText: 'Chat on WhatsApp',
      href: whatsapp,
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      accent: '#10B981',
      badge: 'Instant',
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      value: 'github.com/abdulrehmanshakeel',
      actionText: 'View Repositories',
      href: github,
      icon: (
        <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      accent: '#0f172a',
      badge: 'Code',
    },
  ];

  return (
    <section id="contact" className="bg-[#f8fafc] w-full min-h-screen relative overflow-hidden flex items-end pt-24 pb-0 border-t border-slate-200 font-sans" aria-labelledby="contact-heading">
      
      {/* Background Watermark */}
      <div 
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
        aria-hidden="true"
      >
        <h1 
          id="contact-heading"
          className="text-[25vw] leading-[0.75] font-black text-slate-900 uppercase tracking-tighter select-none scale-y-[1.6] origin-top opacity-[0.03]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </div>

      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white border-t border-l border-slate-200 shadow-2xl w-full md:w-[90%] lg:w-[84%] p-8 sm:p-12 md:p-16 text-slate-900 flex flex-col justify-between"
        >
          {/* Header & Subtitle */}
          <div className="mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              Have an idea that needs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">Full-Stack, Web Scraping, AI</span>, or a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#2563EB]">Mobile App</span>?
            </h2>
            
            <p className="text-base sm:text-xl font-medium text-slate-600 max-w-3xl leading-relaxed">
              Reach out directly via email, phone, or WhatsApp. I am currently available for new projects, remote roles, and technical collaborations worldwide.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
            {contactMethods.map((method) => (
              <motion.div
                key={method.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                      style={{ color: method.accent, borderColor: `${method.accent}30`, backgroundColor: `${method.accent}10` }}
                    >
                      {method.badge}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {method.title}
                  </h3>
                  
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={method.id === 'email' ? handleEmailClick : undefined}
                    className={`font-black text-slate-900 mb-6 select-all hover:text-[#2563EB] transition-colors block ${
                      method.id === 'email' 
                        ? 'text-xs sm:text-sm md:text-[12.5px] lg:text-[13.5px] xl:text-[15px] 2xl:text-base tracking-tight' 
                        : 'text-base sm:text-lg'
                    }`}
                    title={method.value}
                  >
                    {method.value}
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={method.id === 'email' ? handleEmailClick : undefined}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#2563EB] group-hover:text-blue-700 transition-colors"
                  >
                    <span>{method.actionText}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  {method.id === 'email' && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 text-[11px] font-bold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0"
                      title="Copy Email Address"
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-gradient-to-br from-slate-900 to-[#111827] text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <h4 className="text-xl sm:text-2xl font-black">Ready to get started?</h4>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                Send a quick message with your project scope or questions. I usually respond within a few hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleEmailClick}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-extrabold text-xs sm:text-sm hover:shadow-[0_10px_30px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{copied ? '✓ Copied! Opening Gmail...' : 'Email Me Directly'}</span>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-lg"
              >
                <span>WhatsApp Message</span>
              </a>

              <a
                href={`tel:${phone}`}
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
              >
                Call: {phoneFormatted}
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
