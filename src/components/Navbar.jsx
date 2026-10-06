import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-white py-4 shadow-lg'
          : isScrolled
            ? 'bg-white/95 backdrop-blur-xl py-3 border-b border-slate-200 shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white/80 backdrop-blur-md py-5 border-b border-slate-100'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        <a
          href="#home"
          className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 hover:text-[#2563EB]"
          aria-label="M. Abdul Rehman Shakeel home"
        >
          Abdul Rehman <span className="text-[#2563EB]">.</span>
        </a>

        <div className="hidden lg:flex space-x-6 xl:space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-semibold text-xs xl:text-sm tracking-wide relative group text-slate-600 hover:text-slate-900 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs xl:text-sm font-black bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2 text-slate-700 transition-colors duration-300"
            aria-label="Toggle navigation drawer menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[520px] py-6 opacity-100 bg-white border-b border-slate-200 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 hover:text-[#2563EB] font-extrabold text-sm border-b border-slate-100 pb-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-black hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] transition-all duration-300 w-full text-center shadow-xl text-xs"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
