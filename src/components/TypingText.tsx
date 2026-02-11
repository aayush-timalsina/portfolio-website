import { useEffect, useState, useRef } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

const TypingText = ({ 
  text, 
  className = '', 
  speed = 50, 
  delay = 0,
  showCursor = true,
  onComplete
}: TypingTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isTyping, text, speed, onComplete]);

  return (
    <span ref={containerRef} className={className}>
      {displayText}
      {showCursor && (
        <span className="inline-block w-2 h-5 bg-[#00FF41] ml-1 animate-pulse" />
      )}
    </span>
  );
};

// Batch typing for multiple lines
interface TypingLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  speed?: number;
  lineDelay?: number;
  onComplete?: () => void;
}

export const TypingLines = ({ 
  lines, 
  className = '', 
  lineClassName = '',
  speed = 30, 
  lineDelay = 500,
  onComplete
}: TypingLinesProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLine >= lines.length) {
      onComplete?.();
      return;
    }

    const text = lines[currentLine];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        const partial = text.slice(0, currentIndex);
        setCompletedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = partial;
          return newLines;
        });
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
        }, lineDelay);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [currentLine, lines, speed, lineDelay, onComplete]);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((_line, index) => (
        <div 
          key={index} 
          className={`${lineClassName} ${index > currentLine ? 'opacity-0' : ''}`}
        >
          <span className="text-[#00FF41] mr-2">{'>'}</span>
          <span>
            {completedLines[index] || ''}
            {index === currentLine && currentLine < lines.length && (
              <span className="inline-block w-2 h-4 bg-[#00FF41] ml-1 animate-pulse" />
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TypingText;
