import { useEffect, useRef } from 'react';

const Scanlines = () => {
  const scanlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add subtle flicker effect
    const interval = setInterval(() => {
      if (scanlineRef.current) {
        scanlineRef.current.style.opacity = String(0.1 + Math.random() * 0.1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Static scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 2px)',
          opacity: 0.3,
        }}
      />
      
      {/* Moving scanline */}
      <div 
        ref={scanlineRef}
        className="fixed left-0 right-0 h-px pointer-events-none z-50 animate-scan"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.3), transparent)',
          boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)',
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </>
  );
};

export default Scanlines;
