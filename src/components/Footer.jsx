import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const email = 'abdulrehmanshakeel003@gmail.com';
  const emailSubject = encodeURIComponent('Project Inquiry - Abdul Rehman Portfolio');
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${emailSubject}`;
  const whatsappUrl = 'https://wa.me/923048547030?text=Hi%20Abdul%20Rehman,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.';

  const socialLinks = [
    { label: 'WhatsApp', href: whatsappUrl },
    { label: 'GitHub', href: 'https://github.com/abdulrehmanshakeel' },
    { label: 'Email', href: gmailComposeUrl },
    { label: 'Phone', href: whatsappUrl },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[48vh] border-t border-slate-800" aria-label="Site footer">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold">M. Abdul Rehman Shakeel</p>
          <p className="text-slate-500">Full-Stack Developer · Web Scraping Specialist</p>
          <p className="text-slate-500">AI/ML Engineer · AI Agents · Mobile Developer</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-white font-bold">BS Computer Science · NTU Faisalabad</p>
          <a 
            href="https://github.com/abdulrehmanshakeel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-[#60A5FA] transition-colors mt-1 underline-offset-4 decoration-1 text-[#60A5FA]"
          >
            github.com/abdulrehmanshakeel
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-white font-bold">Faisalabad, Pakistan</p>
          <p className="text-slate-500">Available for Remote Roles Worldwide</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden" aria-hidden="true">
        <h2 className="text-[14vw] md:text-[13vw] leading-none font-sans font-black tracking-tighter uppercase select-none text-white/[0.04] w-full text-center whitespace-nowrap">
          ABDUL REHMAN
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <a href="#home" className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1">Home</a>
            <a href="#about" className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1">About</a>
            <a href="#projects" className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1">Projects</a>
            <a href="#contact" className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1">Contact</a>
          </div>
          <p className="text-slate-600 font-mono text-[9px] md:text-[10px]">
            &copy; {currentYear} M. Abdul Rehman Shakeel · All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <a 
            href={gmailComposeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1 text-slate-300"
            title="Compose Email in Gmail"
          >
            abdulrehmanshakeel003@gmail.com
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1 text-slate-300 inline-flex items-center gap-1.5"
            title="Chat on WhatsApp"
          >
            <span>+92 3048547030</span>
          </a>
          <div className="flex flex-wrap gap-4 mt-1" aria-label="Social links">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1 text-[#93C5FD]"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-slate-600 text-[9px]">Full Stack · Web Scraping · AI &amp; ML · LangGraph · Flutter &amp; Firebase</p>
          <a href="#contact" className="underline hover:text-[#60A5FA] transition-colors underline-offset-4 decoration-1 text-[#60A5FA]">
            Available for Projects &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
