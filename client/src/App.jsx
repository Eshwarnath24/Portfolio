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
  GitBranch,
  Home,
  RefreshCw,
  Sun,
  Moon
} from 'lucide-react';
import profileImage from './assets/Eshwar.jpg';
import resumePdf from './assets/Eshwarnath.pdf';
import CustomCursor from './assets/CustomCursor';
import { EDUCATION, SKILLS, PROJECTS, CERTIFICATIONS, NAV_ITEMS } from './assets/portfolioData';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const SKILL_ICON_MAP = {
  Code2,
  Layout,
  Database,
  GitBranch,
  Server,
};

const globalStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .bg-grid-pattern-dark {
    background-image: radial-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px);
    background-size: 32px 32px;
  }
  .bg-grid-pattern-light {
    background-image: radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px);
    background-size: 32px 32px;
  }
  .preview-window-fixed {
    transform-origin: top left;
    position: absolute;
    top: 0;
    left: 0;
    border: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
`;

const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
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
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

const SpotlightCard = ({ children, className = "", isDark = false, showLightDots = false }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-md ${
        isDark 
        ? "bg-slate-900/40 border-slate-800/60 hover:border-slate-600/50 hover:shadow-indigo-500/10" 
        : "bg-white/65 border-indigo-100/80 hover:border-indigo-300/70 hover:shadow-xl hover:shadow-indigo-200/40 shadow-slate-200/50"
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: !isDark && showLightDots ? 0.50 : 0,
          backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.18) 0.9px, transparent 0.9px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-[1]"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.16)'}, transparent 40%)`,
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
  const [isDark, setIsDark] = useState(true);
  const [scales, setScales] = useState({});
  const containerRefs = useRef({});
  
  // Contact form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldLoadExternalPreviews = import.meta.env.PROD;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateScales = () => {
      const newScales = {};
      Object.keys(containerRefs.current).forEach(key => {
        if (containerRefs.current[key]) {
          const width = containerRefs.current[key].offsetWidth;
          const project = PROJECTS.find(p => p.id === key);
          const virtualWidth = project?.isMobile ? 375 : 1440; 
          newScales[key] = width / virtualWidth;
        }
      });
      setScales(prev => {
        if (JSON.stringify(prev) === JSON.stringify(newScales)) return prev;
        return newScales;
      });
    };

    window.addEventListener('resize', updateScales);
    const timer = setTimeout(updateScales, 100);
    return () => {
      window.removeEventListener('resize', updateScales);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Sending email using Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Message from Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error("Error submitting form", result);
        alert("Something went wrong! Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong! Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const themeClasses = isDark 
    ? "bg-[#030712] text-slate-50 selection:bg-indigo-500/30" 
    : "bg-slate-50 text-slate-900 selection:bg-indigo-100";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden relative ${themeClasses}`}>
      <CustomCursor isDark={isDark} />
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* Ambient Background */}
      <div className={`fixed inset-0 pointer-events-none z-0 ${isDark ? 'bg-grid-pattern-dark opacity-30' : 'bg-grid-pattern-light opacity-25'}`} />
      <div className={`fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] pointer-events-none z-0 transition-all duration-700 ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-100/50'}`} />
      <div className={`fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] pointer-events-none z-0 transition-all duration-700 ${isDark ? 'bg-fuchsia-900/10' : 'bg-indigo-50/50'}`} />

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? (isDark ? 'bg-[#030712]/80 backdrop-blur-xl border-slate-800/50 shadow-lg' : 'bg-white/90 backdrop-blur-xl border-slate-200 shadow-sm') 
          : 'bg-transparent border-transparent py-2'
      } py-4`}>
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer group flex items-center gap-3" onClick={() => scrollToSection('home')}>
              <div className={`w-8 h-8 rounded border flex items-center justify-center transition-colors ${
                isDark ? 'bg-slate-800 border-slate-700 group-hover:border-slate-500' : 'bg-white border-slate-300 group-hover:border-indigo-500'
              }`}>
                <span className={`text-sm font-bold font-mono tracking-wider ${isDark ? 'text-slate-200' : 'text-indigo-600'}`}>GE</span>
              </div>
              <span className={`font-semibold tracking-tight hidden sm:block transition-colors ${isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-indigo-600'}`}>Eshwarnath.</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium tracking-wide ${
                  isDark ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50' : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}>
                  {item}
                </button>
              ))}
              <button 
                onClick={() => setIsDark(!isDark)} 
                className={`ml-2 p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-white hover:shadow-sm'}`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsDark(!isDark)} 
                className={`p-2 rounded-full transition-all ${isDark ? 'bg-slate-800 text-amber-400' : 'bg-slate-100 border border-slate-200 text-slate-600'}`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg transition-colors z-50 relative border ${
                isDark ? 'bg-slate-800/50 text-slate-300 hover:text-white border-slate-700/50' : 'bg-white text-slate-600 hover:text-indigo-600 border-slate-200 shadow-sm'
              }`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 backdrop-blur-xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex items-center justify-center z-40 ${
          isDark ? 'bg-[#030712]/98' : 'bg-white/98'
        }`}>
          <div className="flex flex-col space-y-6 text-center w-full px-8">
            {NAV_ITEMS.map((item, idx) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} style={{ transitionDelay: `${idx * 100}ms` }} className={`text-2xl font-bold transition-all duration-300 p-4 border-b w-full ${
                isDark ? 'text-slate-300 hover:text-white border-slate-800/50' : 'text-slate-800 hover:text-indigo-600 border-slate-100'
              }`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20 px-4 max-w-[85rem] mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 w-full py-12">
            <div className="flex-1 max-w-3xl relative z-10">
              <FadeInSection delay={100}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-8 backdrop-blur-md transition-colors ${
                  isDark ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' : 'bg-indigo-100/50 border-indigo-200 text-indigo-700 shadow-sm'
                }`}>
                  <Sparkles size={16} className={isDark ? "text-indigo-400" : "text-indigo-600"} />
                  <span>Available for Internships</span>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={200}>
                <p className={`font-medium tracking-wide mb-3 text-lg md:text-xl transition-colors ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Hi, my name is</p>
                <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.1] transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Gajula <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700 bg-clip-text text-transparent">Eshwarnath.</span>
                </h1>
              </FadeInSection>
              
              <FadeInSection delay={300}>
                <p className={`text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  I am a Full-Stack and Mobile Developer currently pursuing my B.Tech in Computer Science at Amrita Vishwa Vidyapeetham. I work primarily with the MERN stack and Flutter, and I take my projects seriously — whether that means integrating a genetic algorithm to reduce scheduling conflicts or building secure, role-based platforms from scratch.
                </p>
              </FadeInSection>
              
              <FadeInSection delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => scrollToSection('projects')} className={`group px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    isDark ? 'bg-slate-100 hover:bg-white text-slate-900 shadow-white/5' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                  }`}>
                    View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a href={resumePdf} target="_blank" rel="noreferrer" className={`group px-8 py-4 rounded-xl border font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                    isDark ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-200' : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
                  }`}>
                    <FileText size={18} className={isDark ? "text-slate-400" : "text-slate-500"} /> Resume
                  </a>
                </div>
              </FadeInSection>
            </div>

            <div className="flex-1 flex justify-center md:justify-end w-full relative">
              <FadeInSection delay={500} direction="left">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] animate-float">
                  <div className={`absolute inset-0 rounded-[2rem] rotate-6 opacity-20 blur-xl transition-all duration-700 ${isDark ? 'bg-indigo-500' : 'bg-indigo-400'}`}></div>
                  <div className={`absolute inset-0 rounded-[2rem] border translate-x-4 translate-y-4 transition-colors ${isDark ? 'border-slate-700/50' : 'border-slate-300/60'}`}></div>
                  <div className={`relative w-full h-full rounded-[2rem] overflow-hidden border group z-10 shadow-2xl transition-all duration-700 ${isDark ? 'border-slate-700 bg-slate-800/50' : 'border-white bg-white'}`}>
                    <img src={profileImage} alt="Gajula Eshwarnath" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 transition-colors ${isDark ? 'from-[#030712]' : 'from-indigo-50/20'}`}></div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className={`font-mono text-sm tracking-wider transition-colors ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>01.</span>
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Education</h2>
              <div className={`h-px flex-1 ml-4 transition-colors ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
            </div>
          </FadeInSection>

          <div className={`relative border-l-2 ml-4 space-y-12 transition-colors ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
            {EDUCATION.map((edu, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="relative pl-10 group">
                  <div className={`absolute w-4 h-4 rounded-full -left-[9px] top-1.5 border-2 transition-all duration-300 ${
                    isDark ? 'bg-[#030712] border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]' : 'bg-white border-indigo-600 shadow-sm'
                  }`}></div>
                  <SpotlightCard className="p-8" isDark={isDark}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className={`text-2xl font-bold flex items-center gap-3 transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        <GraduationCap size={24} className={isDark ? "text-indigo-400" : "text-indigo-600"} /> {edu.institution}
                      </h3>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-mono rounded-full border transition-all ${
                        isDark ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-600 shadow-sm'
                      }`}>
                        <Calendar size={14} /> {edu.duration}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <h4 className={`text-lg font-medium transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{edu.degree}</h4>
                      <span className={`font-mono font-semibold px-3 py-1 rounded-md border transition-all ${
                        isDark ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-emerald-700 bg-emerald-100 border-emerald-200 shadow-sm'
                      }`}>{edu.score}</span>
                    </div>
                  </SpotlightCard>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Technical Arsenal */}
        <section id="about" className="py-24 px-4 max-w-[85rem] mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className={`font-mono text-sm tracking-wider transition-colors ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>02.</span>
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Technical Arsenal</h2>
              <div className={`h-px flex-1 ml-4 transition-colors ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((category, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <SpotlightCard className="h-full" isDark={isDark} showLightDots>
                  <div className={`absolute inset-0 bg-[radial-gradient(#888888_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none transition-opacity ${isDark ? 'opacity-20' : 'opacity-10'}`}></div>
                  <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`p-4 rounded-2xl border shadow-sm transition-colors ${
                        isDark ? 'bg-[#0f1524] border-slate-800 ' + category.color : 'bg-slate-50 border-slate-200 ' + category.color.replace('400', '600')
                      }`}>
                        {(() => {
                          const SkillIcon = SKILL_ICON_MAP[category.iconKey] || Code2;
                          return <SkillIcon size={28} strokeWidth={1.5} />;
                        })()}
                      </div>
                      <h3 className={`text-2xl font-bold tracking-tight transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((skill) => (
                        <span key={skill} className={`px-4 py-2 border rounded-lg text-sm font-medium shadow-sm transition-all ${
                          isDark ? 'bg-[#0a0e17] border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600'
                        }`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Featured Work */}
        <section id="projects" className="py-24 px-4 max-w-[85rem] mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className={`font-mono text-sm tracking-wider transition-colors ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>03.</span>
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Featured Work</h2>
              <div className={`h-px flex-1 ml-4 transition-colors ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
            </div>
          </FadeInSection>

          <div className="flex flex-col gap-12">
            {PROJECTS.map((project, idx) => (
              <FadeInSection key={idx} delay={idx * 150}>
                <SpotlightCard className="p-6 md:p-8" isDark={isDark}>
                  <div className="flex flex-col md:flex-row gap-8 lg:gap-12 h-full items-center md:items-start">
                    {project.liveUrl ? (
                      <div className={`w-full ${project.isMobile ? 'max-w-[300px] sm:max-w-[340px] mx-auto' : 'md:w-[45%] lg:w-[50%]'} flex-shrink-0`}>
                        <div className={`w-full transition-all duration-700 ${
                          project.isMobile 
                            ? `rounded-[2.5rem] border-[8px] p-1 ${isDark ? 'border-slate-700 bg-black' : 'border-slate-300 bg-slate-200 shadow-2xl'}` 
                            : `rounded-xl border-[6px] overflow-hidden ${isDark ? 'border-slate-800 bg-[#09090b]' : 'border-slate-300 bg-slate-100 shadow-2xl'}`
                        } relative flex flex-col shadow-2xl`}>
                          
                          {!project.isMobile && (
                            <div className={`w-full h-11 border-b flex items-center px-4 gap-4 shrink-0 z-20 relative transition-colors ${
                              isDark ? 'bg-[#09090b] border-[#27272a]' : 'bg-slate-200 border-slate-300'
                            }`}>
                              <div className={`flex items-center gap-3 shrink-0 transition-colors ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                                <Home size={14} className="hover:text-indigo-600 cursor-pointer transition-colors" />
                                <RefreshCw size={14} className="hover:text-indigo-600 cursor-pointer transition-colors" />
                              </div>

                              <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`transition-all rounded-md text-[12px] px-3 py-1 font-mono truncate border flex-1 max-w-[400px] flex items-center cursor-pointer ml-1 ${
                                isDark 
                                  ? 'bg-[#18181b] border-[#27272a] text-slate-400 hover:text-slate-200 hover:bg-[#27272a]' 
                                  : 'bg-white border-slate-300 text-slate-600 hover:text-indigo-600 hover:border-indigo-400 shadow-sm'
                              }`}>
                                {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                              </a>
                            </div>
                          )}

                          <div 
                            ref={el => containerRefs.current[project.id] = el} 
                            className={`w-full relative overflow-hidden transition-colors ${
                              project.isMobile ? 'aspect-[375/812] rounded-[1.75rem]' : 'aspect-[16/10]'
                            } ${isDark ? 'bg-[#030712]' : 'bg-white'}`}
                            style={{ transform: 'translateZ(0)' }}
                          >
                             {project.isMobile && (
                                <div className={`absolute top-0 left-0 w-full h-[104px] border-b z-30 flex flex-col items-center pt-3 transition-colors ${
                                  isDark ? 'bg-[#09090b] border-[#27272a]' : 'bg-slate-200 border-slate-300'
                                }`}>
                                    <div className="w-[32%] h-7 bg-black rounded-full flex items-center justify-end px-2.5 ring-1 ring-white/10">
                                       <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10 shadow-inner mr-1"></div>
                                    </div>
                                    
                                    <div className="w-[90%] mt-4">
                                       <div className={`w-full h-9 border rounded-lg flex items-center px-2 shadow-inner transition-colors ${
                                         isDark ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-slate-300 shadow-slate-200'
                                       }`}>
                                          <Home size={14} className={`shrink-0 mr-1.5 transition-colors ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-indigo-600'}`} />
                                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 flex justify-center group cursor-pointer truncate px-2">
                                             <span className={`text-[12px] font-mono truncate transition-colors ${isDark ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                                                {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                             </span>
                                          </a>
                                          <RefreshCw size={14} className={`shrink-0 ml-1.5 transition-colors ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-indigo-600'}`} />
                                       </div>
                                    </div>
                                </div>
                             )}

                             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                               <div className="w-8 h-8 rounded-full border-2 border-indigo-500/30 border-t-indigo-600 animate-spin"></div>
                             </div>

                             <a href={project.liveUrl} target="_blank" rel="noreferrer" className="absolute inset-0 z-30 cursor-pointer hover:bg-indigo-500/5 transition-colors duration-300"></a>
                             
                             {shouldLoadExternalPreviews ? (
                                <iframe 
                                  title={project.title}
                                  src={project.liveUrl} 
                                  className="preview-window-fixed pointer-events-none z-10 bg-white"
                                  style={{ 
                                    width: project.isMobile ? '375px' : '1440px',
                                    height: project.isMobile ? '708px' : '900px', 
                                    top: project.isMobile ? '104px' : '0px', 
                                    transform: `scale(${scales[project.id] || 0.5})` 
                                  }}
                                  loading="lazy" 
                                  scrolling="no" 
                                  tabIndex={-1} 
                                />
                              ) : (
                                <div className={`absolute inset-0 z-10 flex items-center justify-center px-6 text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                  <p className="text-sm font-medium">Preview disabled in development. Open the live link to view the project.</p>
                                </div>
                              )}

                             {project.isMobile && (
                                <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-1 rounded-full z-30 pointer-events-none transition-colors ${
                                  isDark ? 'bg-white/20' : 'bg-slate-300'
                                }`}></div>
                             )}
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className={`w-full flex flex-col ${project.liveUrl ? (project.isMobile ? 'flex-1' : 'md:w-[55%] lg:w-[50%]') : ''}`}>
                      <div className="flex justify-between items-start mb-4">
                        <span className={`font-mono text-sm transition-colors ${isDark ? 'text-indigo-400' : 'text-indigo-600 font-semibold'}`}>{project.duration}</span>
                        <div className="flex gap-4">
                          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-indigo-600'}`}><GithubIcon size={22} /></a>}
                          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-indigo-600'}`}><ExternalLink size={22} /></a>}
                        </div>
                      </div>
                      <h3 className={`text-3xl md:text-4xl font-bold mb-8 tracking-tight transition-colors ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>{project.title}</h3>
                      <ul className="flex-1 space-y-5 mb-10">
                        {project.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <ChevronRight size={18} className={`shrink-0 mt-1 transition-colors ${isDark ? 'text-indigo-500 opacity-80' : 'text-indigo-600'}`} />
                            <span className={`leading-relaxed md:text-lg transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600 font-medium'}`}>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {project.tags.map(tag => (
                          <span key={tag} className={`px-4 py-2 rounded-lg border font-mono text-xs md:text-sm transition-all ${
                            isDark ? 'bg-[#0f172a] border-slate-700/80 text-slate-300' : 'bg-white border-slate-200 text-slate-600 shadow-sm hover:border-indigo-200'
                          }`}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-24 px-4 max-w-[85rem] mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <span className={`font-mono text-sm tracking-wider transition-colors ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>04.</span>
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Certifications</h2>
              <div className={`h-px flex-1 ml-4 transition-colors ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`}></div>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <FadeInSection key={idx} delay={idx * 150}>
                 <a href={cert.url} target="_blank" rel="noreferrer" className="block h-full group">
                    <SpotlightCard className="p-0 h-full flex flex-col" isDark={isDark}>
                      <div className={`aspect-[4/3] border-b relative overflow-hidden transition-colors ${isDark ? 'bg-[#030712] border-slate-800/80' : 'bg-slate-200 border-slate-300 shadow-inner'}`}>
                        <div className="absolute inset-0 z-30 bg-black/0"></div>
                        {shouldLoadExternalPreviews ? (
                          <iframe 
                            title={`${cert.name} preview`}
                            src={cert.url.replace('/view?usp=sharing', '/preview')} 
                            className="absolute w-[150%] h-[150%] top-0 left-0 border-none opacity-80 pointer-events-none" 
                            style={{ transform: 'scale(0.666)', transformOrigin: 'top left' }}
                            loading="lazy" scrolling="no" tabIndex={-1} 
                          />
                        ) : (
                          <div className={`absolute inset-0 z-10 flex items-center justify-center px-6 text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            <p className="text-sm font-medium">Preview disabled in development. Open the certificate link to view.</p>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl border shadow-sm transition-colors ${
                            isDark ? 'bg-[#0f1524] border-slate-800 text-indigo-400' : 'bg-white border-slate-200 text-indigo-600 shadow-indigo-50'
                          }`}><Award size={24} /></div>
                          <div>
                            <h3 className={`text-lg font-bold mb-1 transition-colors leading-tight ${
                              isDark ? 'text-slate-200 group-hover:text-indigo-300' : 'text-slate-800 group-hover:text-indigo-600'
                            }`}>{cert.name}</h3>
                            <span className={`font-mono text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{cert.date}</span>
                          </div>
                        </div>
                        <ExternalLink size={20} className={`transition-colors ${isDark ? 'text-slate-600 group-hover:text-indigo-400' : 'text-slate-400 group-hover:text-indigo-600'}`} />
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
            <div className={`absolute inset-0 blur-[100px] rounded-full z-0 pointer-events-none transition-all duration-700 ${isDark ? 'bg-indigo-500/5' : 'bg-indigo-600/10'}`}></div>
            <div className="relative z-10">
              <span className={`font-mono text-sm mb-4 block tracking-wider transition-colors ${isDark ? 'text-indigo-400' : 'text-indigo-600 font-bold'}`}>05. What's Next?</span>
              <h2 className={`text-5xl md:text-7xl font-black mb-8 tracking-tight transition-colors ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Get In Touch</h2>
              <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                I'm actively looking for internship opportunities where I can contribute to meaningful projects. My inbox is always open!
              </p>

              {!showForm && !isSubmitted ? (
                <button type="button" onClick={() => setShowForm(true)} className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl ${
                  isDark ? 'bg-slate-100 hover:bg-white text-slate-900 shadow-white/10' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-300'
                }`}>
                  <Mail size={20} /> Say Hello <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform opacity-50" />
                </button>
              ) : isSubmitted ? (
                 <div className={`p-8 md:p-12 rounded-2xl border backdrop-blur-sm transition-all duration-500 shadow-xl ${isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'}`}>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className={`text-lg mb-8 ${isDark ? 'text-emerald-300/80' : 'text-emerald-600/80'}`}>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button onClick={() => {setShowForm(false); setIsSubmitted(false); setFormData({name: '', email: '', message: ''});}} className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity">Send another message</button>
                 </div>
              ) : (
                <form onSubmit={handleContactSubmit} className={`text-left p-6 md:p-8 mt-8 rounded-2xl border backdrop-blur-sm shadow-2xl transition-all duration-500 ${
                  isDark ? 'bg-[#0f1524]/60 border-slate-800' : 'bg-white/80 border-slate-200'
                }`}>
                  <div className="mb-6">
                    <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Name</label>
                    <input type="text" id="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
                      isDark ? 'bg-[#0a0e17] border-slate-700 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-400'
                    }`} placeholder="John Doe" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Email</label>
                    <input type="email" id="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
                      isDark ? 'bg-[#0a0e17] border-slate-700 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-400'
                    }`} placeholder="john@example.com" />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
                    <textarea id="message" required rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none ${
                      isDark ? 'bg-[#0a0e17] border-slate-700 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-400'
                    }`} placeholder="Hi Eshwarnath..."></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" disabled={isSubmitting} className={`flex-1 flex justify-center items-center gap-2 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-xl ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : '' 
                    } ${
                      isDark ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-300'
                    }`}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    <button type="button" onClick={() => setShowForm(false)} className={`sm:w-32 py-3.5 rounded-xl font-bold border transition-all duration-300 ${
                      isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeInSection>
        </section>

        <footer className={`py-10 text-center border-t relative z-10 transition-colors ${
          isDark ? 'bg-[#030712]/50 border-slate-800/50 backdrop-blur-sm' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex justify-center gap-8 mb-6">
            <a href="https://github.com/Eshwarnath24" target="_blank" rel="noreferrer" className={`p-3 rounded-full border transition-all duration-300 shadow-md ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-indigo-400' : 'bg-white border-slate-300 text-slate-500 hover:text-indigo-600 hover:border-indigo-400'
            }`}><GithubIcon size={20} /></a>
            <a href="https://linkedin.com/in/eshwarnath-gajula-0193752b1" target="_blank" rel="noreferrer" className={`p-3 rounded-full border transition-all duration-300 shadow-md ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-indigo-400' : 'bg-white border-slate-300 text-slate-500 hover:text-indigo-600 hover:border-indigo-400'
            }`}><LinkedinIcon size={20} /></a>
            <a href="mailto:gajulaeshwarnath24@gmail.com" className={`p-3 rounded-full border transition-all duration-300 shadow-md ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-indigo-400' : 'bg-white border-slate-300 text-slate-500 hover:text-indigo-600 hover:border-indigo-400'
            }`}><Mail size={20} /></a>
          </div>
          <p className={`text-sm font-mono transition-colors ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Designed & Built with <Sparkles size={12} className="inline text-indigo-500 mb-1" /> by Gajula Eshwarnath</p>
        </footer>
      </main>
    </div>
  );
}