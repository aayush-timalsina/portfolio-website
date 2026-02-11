import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, GraduationCap, Shield, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const infoItems = [
  { label: 'Name', value: 'Aayush Timalsina', icon: Shield },
  { label: 'Education', value: 'Class 12 - Skyrider College', icon: GraduationCap },
  { label: 'Location', value: 'Chitwan, Nepal', icon: MapPin },
  { label: 'Focus', value: 'Cybersecurity', icon: Target },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[var(--accent-blue)] text-sm font-medium mb-2 uppercase tracking-wide">About</p>
          <h2 className="mac-section-title">Who I Am</h2>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Bio Card */}
            <div className="mac-card p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                About Me
              </h3>
              
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Hi! I&apos;m <span className="text-[var(--text-primary)] font-medium">Aayush Timalsina</span>, 
                currently studying in class 12 at Skyrider College, Nepal (Chitwan, Tandi, Ratnanagar-13).
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I am passionate about <span className="text-[var(--accent-blue)]">cybersecurity</span>, especially 
                penetration testing, threat detection and monitoring, and scripting and automation.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I enjoy learning new ways to protect digital assets and help organizations stay secure 
                in an ever-evolving cyber landscape.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="mac-elevated p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[var(--accent-blue)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-tertiary)]">{item.label}</p>
                      <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex items-center justify-center">
            <div className="mac-card p-8 w-full max-w-sm">
              {/* Profile */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] p-[2px]">
                  <div className="w-full h-full rounded-[var(--radius-xl)] bg-[var(--bg-secondary)] flex items-center justify-center">
                    <Shield className="w-12 h-12 text-[var(--accent-blue)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">Aayush Timalsina</h3>
                <p className="text-[var(--accent-blue)]">Cybersecurity Student</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {['Penetration Testing', 'NMAP', 'Wireshark', 'Threat Detection'].map((skill) => (
                  <span key={skill} className="mac-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <a 
                  href="tel:9864213641"
                  className="mac-btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>9864213641</span>
                </a>
                <a 
                  href="mailto:aayushtimalsina789@gmail.com"
                  className="mac-btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
