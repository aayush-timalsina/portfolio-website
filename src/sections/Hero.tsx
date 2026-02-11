import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      contentRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      {/* Main Content */}
      <div 
        ref={contentRef}
        className="relative w-full max-w-4xl text-center"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mac-elevated mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
          <span className="text-sm text-[var(--text-secondary)]">Available for opportunities</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-[var(--text-primary)]">Aayush</span>{' '}
          <span className="text-[var(--text-primary)]">Timalsina</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[var(--accent-blue)] mb-4 font-medium">
          Cybersecurity Student
        </p>
        
        <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
          Passionate about penetration testing, threat detection, and ethical hacking. 
          Building skills to protect digital assets and create secure systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={scrollToContact}
            className="mac-btn-primary flex items-center justify-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={scrollToAbout}
            className="mac-btn-secondary flex items-center justify-center gap-2"
          >
            <span>Learn More</span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="mac-elevated px-6 py-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">17</p>
            <p className="text-sm text-[var(--text-secondary)]">Years Old</p>
          </div>
          <div className="mac-elevated px-6 py-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">4+</p>
            <p className="text-sm text-[var(--text-secondary)]">Projects</p>
          </div>
          <div className="mac-elevated px-6 py-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">Class 12</p>
            <p className="text-sm text-[var(--text-secondary)]">Student</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
