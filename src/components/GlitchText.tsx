import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  glitchInterval?: number;
}

const GlitchText = ({ 
  text, 
  className = '', 
  as: Component = 'span',
  glitchInterval = 5000 
}: GlitchTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        triggerGlitch();
      }
    }, glitchInterval);

    // Initial glitch
    setTimeout(triggerGlitch, 1000);

    return () => clearInterval(interval);
  }, [glitchInterval]);

  useEffect(() => {
    if (!containerRef.current || !isGlitching) return;

    const tl = gsap.timeline();
    
    tl.to(containerRef.current, {
      x: () => gsap.utils.random(-5, 5),
      duration: 0.05,
      repeat: 3,
      yoyo: true,
      ease: 'steps(1)',
    })
    .to(containerRef.current, {
      x: 0,
      duration: 0.05,
    });
  }, [isGlitching]);

  return (
    <Component
      ref={containerRef as any}
      className={`relative inline-block ${className}`}
      data-text={text}
    >
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-[#00F0FF] z-0"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-3px, 0)',
            }}
            aria-hidden="true"
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 text-[#FF003C] z-0"
            style={{ 
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translate(3px, 0)',
            }}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </Component>
  );
};

export default GlitchText;
