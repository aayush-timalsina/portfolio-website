import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - Kali Linux style with some Unicode
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');

    // Column settings
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Drops array - one per column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random heights above screen
    }

    // Drawing
    let animationId: number;
    let frameCount = 0;

    const draw = () => {
      frameCount++;
      
      // Only draw every 2nd frame for performance (30fps instead of 60)
      if (frameCount % 2 !== 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(13, 13, 13, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Color - gradient from bright green to darker
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = '#FFFFFF'; // Bright white occasionally
        } else if (brightness > 0.8) {
          ctx.fillStyle = '#00FF41'; // Bright Kali green
        } else if (brightness > 0.5) {
          ctx.fillStyle = '#00CC33'; // Medium green
        } else {
          ctx.fillStyle = '#006622'; // Dark green
        }

        ctx.fillText(char, x, y);

        // Move drop down
        drops[i]++;

        // Reset drop to top with random delay when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default MatrixRain;
