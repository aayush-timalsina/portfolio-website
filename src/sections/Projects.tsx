import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, 
  Shield, 
  Lock, 
  Eye, 
  Search,
  Github,
  ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Network Security Lab',
    description: 'Configured firewalls and intrusion detection systems in a simulated environment to learn about network protection and threat detection.',
    skills: ['Firewall Configuration', 'IDS/IPS Setup', 'Vulnerability Scanning'],
    icon: Shield,
    image: '/images/project-network-security.jpg',
  },
  {
    id: 2,
    title: 'Web Application Penetration Testing',
    description: 'Conducted security assessments on web applications to identify vulnerabilities such as SQL injection, XSS, and CSRF.',
    skills: ['OWASP Testing', 'Burp Suite', 'Vulnerability Reporting'],
    icon: Lock,
    image: '/images/project-web-pentest.jpg',
  },
  {
    id: 3,
    title: 'Network Traffic Analysis',
    description: 'Analyzed network traffic to detect suspicious activities and potential security threats using Wireshark.',
    skills: ['Wireshark Analysis', 'Intrusion Detection', 'Threat Hunting'],
    icon: Eye,
    image: '/images/project-traffic-analysis.jpg',
  },
  {
    id: 4,
    title: 'Price Tampering Vulnerability',
    description: 'Identified and exploited price tampering vulnerabilities in e-commerce platforms through penetration testing.',
    skills: ['Vulnerability Assessment', 'Penetration Testing', 'Security Implementation'],
    icon: Search,
    image: '/images/project-price-tampering.jpg',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll('.project-card');

    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.fromTo(
          cardElements,
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
      id="projects" 
      className="relative py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[var(--accent-blue)] text-sm font-medium mb-2 uppercase tracking-wide">Projects</p>
          <h2 className="mac-section-title">My Work</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            Here are some projects I&apos;ve worked on during my cybersecurity studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            const isHovered = hoveredCard === project.id;

            return (
              <div
                key={project.id}
                className="project-card mac-card overflow-hidden group"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-secondary)]/90 backdrop-blur flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--accent-blue)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span key={skill} className="mac-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button className="mac-btn-primary flex-1 flex items-center justify-center gap-2 text-sm py-2">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    <button className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] hover:bg-[var(--border-light)] transition-colors">
                      <Github className="w-4 h-4 text-[var(--text-secondary)]" />
                    </button>
                    
                    <button className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] hover:bg-[var(--border-light)] transition-colors">
                      <ExternalLink className="w-4 h-4 text-[var(--text-secondary)]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-10 mac-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-[var(--text-primary)]">{projects.length}</p>
                <p className="text-sm text-[var(--text-secondary)]">Total Projects</p>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div>
                <p className="text-3xl font-bold text-[var(--text-primary)]">4</p>
                <p className="text-sm text-[var(--text-secondary)]">Security Domains</p>
              </div>
            </div>
            
            <p className="text-sm text-[var(--text-tertiary)]">
              Last updated: February 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
