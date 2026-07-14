import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Menu, X, Briefcase, Cpu, Layers, Mail, Award, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  // Auto-scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (pageId: string) => {
    setMobileMenuOpen(false);
    setCurrentPage(pageId);
  };

  const handleSelectProjectFromMatchmaker = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage("projects");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500/10 selection:text-indigo-900">
      {/* Premium Multi-Page Header */}
      <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-200/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo Brand / Navigate back to Home */}
          <button 
            onClick={() => handleNavigate("home")} 
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center font-bold text-white text-sm shadow-md transition-all">
              VY
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm tracking-wide">Vikranth Yerraboyina</span>
              <span className="text-[10px] block font-mono text-indigo-600 -mt-0.5 uppercase tracking-wider font-semibold">AI/ML Engineer</span>
            </div>
          </button>

          {/* Tab Pages Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200/60">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide transition-all cursor-pointer ${
                  currentPage === item.id
                    ? "bg-white text-indigo-600 shadow-sm border border-slate-200/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Hand Page CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavigate("contact")}
              className="px-4.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-mono font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Hire Me
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-mono rounded-lg transition-colors cursor-pointer"
            >
              Email Direct
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-mono flex items-center justify-between ${
                  currentPage === item.id
                    ? "bg-indigo-50/70 text-indigo-600 border border-indigo-100 font-bold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleNavigate("contact")}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-600 text-white text-xs font-mono rounded-xl font-semibold shadow-sm hover:bg-indigo-700"
              >
                <Briefcase className="w-3.5 h-3.5" />
                Contact
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-center px-4 py-2.5 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-xl font-medium"
              >
                Email Direct
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Multi-Page Container with Animated Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Hero 
                onScrollToChat={() => handleNavigate("contact")} 
                onScrollToProjects={() => handleNavigate("projects")} 
              />
              
              {/* Quick Summary Preview section in the Home Page */}
              <section className="py-16 px-6 bg-white border-t border-slate-100 relative">
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Feature 1 */}
                    <div className="bg-slate-50 p-6.5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-950 text-base mb-2">Expert Skillset</h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                          Deep background in Python ML pipelines, NLP models, Generative AI engineering, and high-performance REST APIs.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleNavigate("skills")} 
                        className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800 text-left flex items-center gap-1 cursor-pointer"
                      >
                        Explore Skills <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-slate-50 p-6.5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center mb-4">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-950 text-base mb-2">Professional Career</h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                          Delivered 20+ production features as an AI/ML Engineer at Edubot. Optimized database retrieval latency by 35%.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleNavigate("experience")} 
                        className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800 text-left flex items-center gap-1 cursor-pointer"
                      >
                        View Experience <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-slate-50 p-6.5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                          <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-950 text-base mb-2">Production Projects</h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                          Samastha Edge AI recommendation workflows, automated predictive learning reports, and mock interviewer modules.
                        </p>
                      </div>
                      <button 
                        onClick={() => handleNavigate("projects")} 
                        className="text-xs font-mono font-bold text-indigo-600 hover:text-indigo-800 text-left flex items-center gap-1 cursor-pointer"
                      >
                        Browse Projects <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Skills onSelectProject={handleSelectProjectFromMatchmaker} />
            </motion.div>
          )}

          {currentPage === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Experience />
            </motion.div>
          )}

          {currentPage === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Projects 
                selectedProjectId={selectedProjectId} 
                setSelectedProjectId={setSelectedProjectId} 
              />
            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-mono text-slate-500 font-medium">
              © {new Date().getFullYear()} Vikranth Yerraboyina. Structured for recruiters and managers.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-500">
            <button onClick={() => handleNavigate("home")} className="hover:text-indigo-600 transition-colors cursor-pointer font-bold">
              Home
            </button>
            <span className="text-slate-300">&bull;</span>
            <button onClick={() => handleNavigate("skills")} className="hover:text-indigo-600 transition-colors cursor-pointer font-bold">
              Skills
            </button>
            <span className="text-slate-300">&bull;</span>
            <button onClick={() => handleNavigate("experience")} className="hover:text-indigo-600 transition-colors cursor-pointer font-bold">
              Experience
            </button>
            <span className="text-slate-300">&bull;</span>
            <button onClick={() => handleNavigate("projects")} className="hover:text-indigo-600 transition-colors cursor-pointer font-bold">
              Projects
            </button>
            <span className="text-slate-300">&bull;</span>
            <button onClick={() => handleNavigate("contact")} className="hover:text-indigo-600 transition-colors cursor-pointer font-bold">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
