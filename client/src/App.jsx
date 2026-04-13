import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Database, 
  Server, 
  Menu,
  X,
  Layout,
  ArrowRight,
  FileText,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Award,
  Calendar,
  GitBranch
} from 'lucide-react';
import GithubIcon from './assets/GithubIcon';
import LinkedinIcon from './assets/LinkedinIcon';
import { education, skills, projects, certifications } from './assets/portfolio-data';

// --- Global Styles for custom animations ---
const globalStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .bg-grid-pattern {
    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 32px 32px;
  }
`;

// --- Advanced Feature 1: Scroll Reveal Animation Component ---
const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 }); 
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: 'translate-y-0'
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 scale-100 translate-y-0 translate-x-0' : `opacity-0 scale-95 ${directionClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Advanced Feature 2: Linear-style Spotlight Card ---
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm transition-all duration-300 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-indigo-500/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Map skill data with icon components
  const skillsWithIcons = skills.map((skill) => {
    const iconMap = {
      "Languages": Code2,
      "Frameworks & Stacks": Layout,
      "Databases": Database,
      "Tools & Libraries": Server
    };
    return { ...skill, icon: iconMap[skill.title] };
  });

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      <style>{globalStyles}</style>

      {/* Advanced Ambient Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900/10 blur-[150px] pointer-events-none z-0" />
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-slate-800/50 py-4 shadow-lg shadow-black/20' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer group flex items-center gap-3" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-slate-500 transition-colors">
                <span className="text-sm font-bold text-slate-200 font-mono tracking-wider">
                  GE
                </span>
              </div>
              <span className="font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors hidden sm:block">
                Eshwarnath.
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {['About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-200 text-sm font-medium tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors focus:outline-none z-50 relative border border-slate-700/50">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-[#030712]/98 backdrop-blur-xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex items-center justify-center z-40`}>
          <div className="flex flex-col space-y-6 text-center w-full px-8">
            {['About', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`text-2xl font-bold text-slate-300 hover:text-white transition-all duration-300 p-4 border-b border-slate-800/50 w-full ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 w-full py-12">
            
            {/* Left Column: Text */}
            <div className="flex-1 max-w-3xl relative z-10">
              <FadeInSection delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                  <Sparkles size={16} className="text-indigo-400" />
                  <span>Available for Internships</span>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <p className="text-indigo-400 font-medium tracking-wide mb-3 text-lg md:text-xl">Hi, my name is</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-100 mb-6 tracking-tighter leading-[1.1]">
                  Gajula <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                    Eshwarnath.
                  </span>
                </h1>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light max-w-2xl">
                  I'm a Full-Stack & Mobile Developer specializing in high-performance applications. Currently building digital experiences that matter while studying CS at Amrita Vishwa Vidyapeetham.
                </p>
              </FadeInSection>
              
              <FadeInSection delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="group px-8 py-4 rounded-xl bg-slate-100 hover:bg-white text-slate-900 font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
                  >
                    View My Work 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-500 text-slate-200 font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    <FileText size={18} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    Resume
                  </a>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column: Profile Image */}
            <div className="flex-1 flex justify-center md:justify-end w-full relative">
              <FadeInSection delay={500} direction="left">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] animate-float">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-[2rem] rotate-6 opacity-20 blur-xl"></div>
                  <div className="absolute inset-0 rounded-[2rem] border border-slate-700/50 translate-x-4 translate-y-4"></div>
                  
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-700 bg-slate-800/50 group z-10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800&q=80" 
                      alt="Gajula Eshwarnath" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80"></div>
                  </div>
                </div>
              </FadeInSection>
            </div>

          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12"></div>

        {/* Experience / Education Timeline */}
        <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-indigo-400 font-mono text-sm tracking-wider">01.</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">Education</h2>
              <div className="h-px bg-slate-800 flex-1 ml-4"></div>
            </div>
          </FadeInSection>

          <div className="relative border-l-2 border-slate-800/80 ml-4 space-y-12">
            {education.map((edu, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="relative pl-10 group">
                  <div className="absolute w-4 h-4 bg-[#030712] border-2 border-indigo-500 rounded-full -left-[9px] top-1.5 group-hover:bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)] transition-colors duration-300"></div>
                  
                  <SpotlightCard className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                        <GraduationCap size={24} className="text-indigo-400" />
                        {edu.institution}
                      </h3>
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono rounded-full w-fit">
                        <Calendar size={14} />
                        {edu.duration}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <h4 className="text-lg text-slate-300 font-medium">
                        {edu.degree}
                      </h4>
                      <span className="text-emerald-400 font-mono font-semibold bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                        {edu.score}
                      </span>
                    </div>
                  </SpotlightCard>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Skills Section - Bento Grid Style */}
        <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-indigo-400 font-mono text-sm tracking-wider">02.</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">Technical Arsenal</h2>
              <div className="h-px bg-slate-800 flex-1 ml-4"></div>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsWithIcons.map((category, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <SpotlightCard className="h-full group bg-[#0a0e17] border-slate-800/80">
                  {/* Subtle dot grid pattern specific to the cards (Blueprint aesthetic) */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
                  
                  <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`p-4 rounded-2xl bg-[#0f1524] border border-slate-800 ${category.color} shadow-sm group-hover:border-slate-700 transition-colors`}>
                        <category.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-100 tracking-tight">{category.title}</h3>
                    </div>
                    {/* FIXED: Removed mt-auto so the tags flow naturally right under the title */}
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-[#0a0e17] border border-slate-800 rounded-lg text-sm text-slate-300 font-medium group-hover:border-slate-600 group-hover:text-white transition-colors shadow-sm cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Projects Section - REDESIGNED for neat, large format */}
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-indigo-400 font-mono text-sm tracking-wider">03.</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">Featured Work</h2>
              <div className="h-px bg-slate-800 flex-1 ml-4"></div>
            </div>
          </FadeInSection>

          <div className="flex flex-col gap-12">
            {projects.map((project, idx) => (
              <FadeInSection key={idx} delay={idx * 150}>
                <SpotlightCard className="h-full flex flex-col p-6 md:p-8">
                  
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full items-start">
                    
                    {/* Left: Real-time Live Preview (IFrame) or Image Fallback - ONLY if image or liveUrl exists */}
                    {(project.liveUrl || project.image) && (
                      <div className="w-full lg:w-[50%] flex-shrink-0">
                        <div className="w-full aspect-[4/3] lg:aspect-[16/10] rounded-xl bg-[#000] border border-slate-800/80 relative overflow-hidden flex flex-col group/preview shadow-inner">
                          
                          {/* Mock Browser Header */}
                          <div className="w-full h-8 bg-[#0a0a0a] border-b border-slate-800 flex items-center px-3 gap-1.5 shrink-0 z-20">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-700/80"></div>
                            {project.liveUrl && (
                              <div className="ml-2 px-3 py-0.5 rounded-md bg-[#111] border border-slate-800/50 text-[10px] text-slate-500 font-mono truncate max-w-[200px] sm:max-w-[300px]">
                                {project.liveUrl.replace('https://', '').replace(/\/$/, '')}
                              </div>
                            )}
                          </div>
                          
                          {/* Interactive Content Area */}
                          <div className="w-full flex-1 relative bg-slate-900 overflow-hidden">
                             <a 
                               href={project.liveUrl || project.githubUrl} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="absolute inset-0 z-10 bg-black/10 group-hover/preview:bg-transparent transition-colors cursor-pointer"
                               aria-label="View Project"
                             ></a>
                             
                             {project.liveUrl ? (
                               // IFRAME: Loads the actual website inside the card
                               <div className="w-[125%] h-[125%] absolute top-0 left-0 origin-top-left scale-[0.8]">
                                   <iframe 
                                     src={project.liveUrl} 
                                     title={`${project.title} Live Preview`}
                                     className="w-full h-full border-none bg-white opacity-80 group-hover/preview:opacity-100 transition-opacity duration-500 pointer-events-none"
                                     loading="lazy"
                                     scrolling="no"
                                     tabIndex={-1}
                                   />
                               </div>
                             ) : (
                               // FALLBACK: Image for projects without a live vercel URL
                               <img 
                                 src={project.image} 
                                 alt={`${project.title} Preview`} 
                                 className="w-full h-full object-cover object-top opacity-50 group-hover/preview:opacity-90 transition-all duration-500 ease-out group-hover/preview:scale-105" 
                               />
                             )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Right (or Full Width): Description matched to your screenshot */}
                    <div className={`w-full flex flex-col ${(project.liveUrl || project.image) ? 'lg:w-[50%]' : ''}`}>
                      
                      {/* Top Row: Duration & Links */}
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-mono text-sm text-indigo-400">{project.duration}</span>
                        <div className="flex gap-4">
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="GitHub">
                              <GithubIcon size={22} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200" aria-label="Live Demo">
                              <ExternalLink size={22} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 tracking-tight">
                        {project.title}
                      </h3>

                      {/* Bullet Points with subtle Chevron */}
                      <ul className="flex-1 space-y-5 mb-10">
                        {project.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <ChevronRight size={18} className="shrink-0 mt-1 text-indigo-500 opacity-80" />
                            <span className="text-slate-300 leading-relaxed md:text-lg">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Pill Tags */}
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 rounded-lg bg-[#0f172a] border border-slate-700/80 text-slate-300 font-mono text-xs md:text-sm shadow-inner transition-colors hover:border-slate-500">
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </SpotlightCard>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 px-4 max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-indigo-400 font-mono text-sm tracking-wider">04.</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">Certifications</h2>
              <div className="h-px bg-slate-800 flex-1 ml-4"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <FadeInSection key={idx} delay={idx * 150}>
                 <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    <SpotlightCard className="p-0 h-full flex flex-col cursor-pointer hover:border-indigo-500/50 overflow-hidden bg-[#0a0e17]">
                      
                      {/* Scaled Iframe Preview */}
                      <div className="w-full aspect-[4/3] bg-[#030712] border-b border-slate-800/80 relative overflow-hidden flex items-center justify-center">
                        {/* Overlay to intercept clicks and prevent scroll hijacking */}
                        <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        
                        {/* CSS Scaling Trick to fit the full document */}
                        <div className="w-[150%] h-[150%] absolute top-0 left-0 origin-top-left scale-[0.666]">
                           <iframe 
                             // We replace 'view' with 'preview' so Google Drive allows it to be embedded
                             src={cert.url.replace('/view?usp=sharing', '/preview')}
                             title={cert.name}
                             className="w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                             loading="lazy"
                             scrolling="no"
                             tabIndex={-1}
                           />
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-[#0f1524] border border-slate-800 text-indigo-400 group-hover:border-indigo-500/30 transition-colors shrink-0 shadow-sm">
                             <Award size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-slate-200 mb-1 group-hover:text-indigo-300 transition-colors leading-tight">{cert.name}</h3>
                            <span className="font-mono text-slate-500 text-xs">{cert.date}</span>
                          </div>
                        </div>
                        <ExternalLink size={20} className="text-slate-600 group-hover:text-indigo-400 transition-colors shrink-0 ml-4" />
                      </div>
                      
                    </SpotlightCard>
                 </a>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 max-w-3xl mx-auto text-center relative">
          <FadeInSection>
            <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
            <div className="relative z-10">
              <span className="text-indigo-400 font-mono text-sm mb-4 block tracking-wider">05. What's Next?</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-100 mb-8 tracking-tight">Get In Touch</h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                I'm actively looking for internship opportunities where I can contribute to meaningful projects. Whether you have an open role or just want to chat about tech, my inbox is open!
              </p>
              <a 
                href="mailto:gajulaeshwarnath24@gmail.com" 
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-100 hover:bg-white text-slate-900 font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1"
              >
                <Mail size={20} />
                Say Hello
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform opacity-50" />
              </a>
            </div>
          </FadeInSection>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center border-t border-slate-800/50 relative z-10 bg-[#030712]/50 backdrop-blur-sm">
          <div className="flex justify-center gap-8 mb-6">
            <a href="https://github.com/Eshwarnath24" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"><GithubIcon className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/eshwarnath-gajula-0193752b1" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"><LinkedinIcon size={20} /></a>
            <a href="https://leetcode.com/u/Eshwarnath/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"><Code2 size={20} /></a>
            <a href="mailto:gajulaeshwarnath24@gmail.com" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"><Mail size={20} /></a>
          </div>
          <p className="text-slate-500 text-sm font-mono">
            Designed & Built with <Sparkles size={12} className="inline text-indigo-500 mb-1" /> by Gajula Eshwarnath
          </p>
        </footer>
      </main>
    </div>
  );
}