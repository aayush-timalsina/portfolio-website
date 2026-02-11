import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github,
  Linkedin,
  Instagram,
  CheckCircle,
  Loader2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/t_y_p_e_c' },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.fromTo(
          content.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
        );
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[var(--accent-blue)] text-sm font-medium mb-2 uppercase tracking-wide">Contact</p>
          <h2 className="mac-section-title">Get in Touch</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            Interested in working together or just want to say hello? Feel free to reach out.
          </p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Direct Contact */}
            <div className="mac-card p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-5">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:9864213641"
                  className="mac-elevated p-4 flex items-center gap-4 hover:border-[var(--accent-blue)]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[var(--accent-blue)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-tertiary)]">Phone</p>
                    <p className="text-[var(--text-primary)] font-medium">9864213641</p>
                  </div>
                </a>

                <a 
                  href="mailto:aayushtimalsina789@gmail.com"
                  className="mac-elevated p-4 flex items-center gap-4 hover:border-[var(--accent-blue)]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[var(--accent-blue)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-tertiary)]">Email</p>
                    <p className="text-[var(--text-primary)] font-medium text-sm">aayushtimalsina789@gmail.com</p>
                  </div>
                </a>

                <div className="mac-elevated p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--accent-blue)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-tertiary)]">Location</p>
                    <p className="text-[var(--text-primary)] font-medium">Chitwan, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mac-card p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Social Links
              </h3>
              
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center hover:bg-[var(--accent-blue)]/10 hover:text-[var(--accent-blue)] transition-colors"
                      title={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="mac-card p-6">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-green)]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[var(--accent-green)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your name"
                        required
                        className="mac-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="mac-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="mac-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mac-btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
