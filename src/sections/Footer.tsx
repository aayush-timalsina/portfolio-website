import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-lg font-semibold text-[var(--text-primary)]">
            Aayush Timalsina
          </div>

          {/* Center Text */}
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-[var(--accent-red)] fill-[var(--accent-red)]" />
            <span>in Nepal</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-[var(--text-tertiary)]">
            &copy; {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
