import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/herovideo.mp4';

const techBadges = [
  'Python Developer @ Quarksol',
  'Web Scraping & APIs',
  'Full Stack',
  'AI & ML',
  'AI Agents',
  'Android & Flutter',
  'FastAPI & Django',
  'React',
  'Firebase',
  'LangGraph',
];

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black flex items-center" aria-label="Hero section">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 md:opacity-50"
        aria-label="Background showcase video"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90 z-10 pointer-events-none" />

      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-left w-full pt-28 pb-16 md:py-32">
        
        <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-3xl w-full">
          
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-3xl sm:text-5xl md:text-6xl font-black mb-3 tracking-tight leading-[1.08]"
          >
            Hi, I&apos;m <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#60A5FA] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              M. Abdul Rehman Shakeel
            </span>
          </h1>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-[#60A5FA] text-base sm:text-lg md:text-xl font-bold mb-4 tracking-tight"
          >
            Python Developer at Quarksol · Web Scraping &amp; APIs · AI &amp; Full-Stack
          </h2>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/85 text-sm sm:text-base md:text-lg font-normal mb-6 max-w-xl leading-relaxed drop-shadow-sm"
          >
            Python Developer at Quarksol specializing in automated web scraping crawlers, REST API development, AI/ML pipelines, and high-performance digital systems.
          </p>

          {/* Technology Badges */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-2 mb-8 max-w-xl"
            aria-label="Core technologies"
          >
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/12 text-[#E2E8F0] backdrop-blur-md hover:border-[#3B82F6] hover:bg-[#2563EB]/20 hover:text-white transition-all duration-300"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 text-xs md:text-sm rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-extrabold hover:shadow-[0_10px_30px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
              aria-label="View My Work"
            >
              <span>View My Work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a 
              href="#contact" 
              className="px-6 py-3 text-xs md:text-sm rounded-full bg-white/10 border border-white/30 text-white font-extrabold hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Let&apos;s Build Something
            </a>

            <a 
              href="https://github.com/abdulrehmanshakeel" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-xs md:text-sm rounded-full bg-black/40 border border-white/20 text-[#D1D5DB] font-bold hover:text-white hover:border-white transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              aria-label="Abdul Rehman GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Video sound controller */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-12 md:mt-0 flex flex-col items-center justify-center gap-2 cursor-pointer group self-start md:self-auto shrink-0"
          onClick={toggleMute}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMute(e)}
          aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:border-[#3B82F6] transition-all duration-300 shadow-xl">
            {isMuted ? (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity mt-1">
            {isMuted ? "Unmute Reel" : "Mute Sound"}
          </span>
        </div>
      </div>

      {/* Down indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white/60" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
