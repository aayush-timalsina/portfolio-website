import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Eye, 
  Network, 
  FileSearch, 
  Bug, 
  Code2,
  Terminal,
  Lock,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: 'Penetration Testing',
    level: 85,
    icon: Shield,
    description: 'Identifying and exploiting vulnerabilities',
    tools: ['Metasploit', 'Burp Suite', 'OWASP ZAP'],
  },
  {
    name: 'Threat Detection',
    level: 80,
    icon: Eye,
    description: 'Monitoring systems for security threats',
    tools: ['SIEM', 'IDS/IPS', 'Splunk'],
  },
  {
    name: 'NMAP',
    level: 90,
    icon: Network,
    description: 'Network mapping and reconnaissance',
    tools: ['Port Scanning', 'OS Detection', 'Scripting'],
  },
  {
    name: 'Wireshark',
    level: 75,
    icon: FileSearch,
    description: 'Network traffic analysis',
    tools: ['Packet Analysis', 'Protocol Debugging'],
  },
  {
    name: 'Web App Security',
    level: 70,
    icon: Bug,
    description: 'Web application vulnerability assessment',
    tools: ['SQL Injection', 'XSS', 'OWASP Top 10'],
  },
  {
    name: 'Scripting',
    level: 65,
    icon: Code2,
    description: 'Automation and tool development',
    tools: ['Python', 'Bash', 'PowerShell'],
  },
];

const additionalSkills = [
  { name: 'Linux', icon: Terminal },
  { name: 'Kali Linux', icon: Zap },
  { name: 'Encryption', icon: Lock },
  { name: 'Vulnerability Assessment', icon: Shield },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    // Cards entrance animation
    const cardElements = cards.querySelectorAll('.skill-card');
    
    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.fromTo(
          cardElements,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
        );
      },
      once: true,
    });

    // Progress bars animation
    progressRefs.current.forEach((progressBar, index) => {
      if (!progressBar) return;
      const skill = skills[index];
      
      gsap.fromTo(
        progressBar,
        { width: '0%' },
        {
          width: `${skill.level}%`,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: progressBar,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[var(--accent-blue)] text-sm font-medium mb-2 uppercase tracking-wide">Skills</p>
          <h2 className="mac-section-title">What I Do</h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
            Here are the key skills I&apos;ve developed through my cybersecurity studies and hands-on practice.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="skill-card mac-card p-5 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--accent-blue)]/10 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--accent-blue)]" />
                  </div>
                  <span className="text-2xl font-bold text-[var(--text-primary)]">
                    {skill.level}%
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="mac-progress mb-4">
                  <div 
                    ref={el => { progressRefs.current[index] = el; }}
                    className="mac-progress-fill"
                    style={{ width: '0%' }}
                  />
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span key={tool} className="mac-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-10 mac-card p-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Additional Capabilities
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {additionalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="mac-elevated p-4 flex items-center gap-3 hover:border-[var(--accent-blue)]/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[var(--accent-blue)]" />
                  <span className="text-sm text-[var(--text-primary)]">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-5">
          <div className="mac-elevated p-5 text-center">
            <p className="text-3xl font-bold text-[var(--text-primary)]">{skills.length}</p>
            <p className="text-sm text-[var(--text-secondary)]">Core Skills</p>
          </div>
          <div className="mac-elevated p-5 text-center">
            <p className="text-3xl font-bold text-[var(--text-primary)]">
              {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
            </p>
            <p className="text-sm text-[var(--text-secondary)]">Avg. Proficiency</p>
          </div>
          <div className="mac-elevated p-5 text-center">
            <p className="text-3xl font-bold text-[var(--accent-green)]">100%</p>
            <p className="text-sm text-[var(--text-secondary)]">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
