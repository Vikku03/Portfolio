import { useState } from "react";
import { motion } from "motion/react";
import { Check, Cpu, Hammer, Search, Filter, HelpCircle, Code, Database, Globe, Brain } from "lucide-react";
import { SKILLS, PROJECTS } from "../data";

interface SkillsProps {
  onSelectProject: (projectId: string) => void;
}

export default function Skills({ onSelectProject }: SkillsProps) {
  const [selectedMatchSkill, setSelectedMatchSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Programming",
    "AI/ML",
    "Data Science",
    "Backend",
    "Databases",
    "Cloud & DevOps",
  ];

  // Map categories to visual icon indicators - optimized for light theme high-contrast colors
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Code className="w-4 h-4 text-indigo-600" />;
      case "AI/ML":
        return <Brain className="w-4 h-4 text-violet-600" />;
      case "Data Science":
        return <Cpu className="w-4 h-4 text-emerald-600" />;
      case "Backend":
        return <Globe className="w-4 h-4 text-amber-600" />;
      case "Databases":
        return <Database className="w-4 h-4 text-rose-600" />;
      default:
        return <Hammer className="w-4 h-4 text-indigo-500" />;
    }
  };

  const filteredSkills = activeCategory === "All" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  // Core Matchmaker options (high value recruiters search for)
  const matchmakerOptions = [
    "Python", "FastAPI", "TensorFlow", "Scikit-learn", "Docker", "AWS", "SQL", "Generative AI", "Pandas", "NLP"
  ];

  // Finding projects that match the selected skill
  const matchingProjects = selectedMatchSkill
    ? PROJECTS.filter(p => p.tags.some(t => t.toLowerCase().includes(selectedMatchSkill.toLowerCase())))
    : [];

  return (
    <section id="skills" className="py-20 px-6 bg-white border-y border-slate-200 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              Expertise & Competence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-2">
              Technical Skillset
            </h2>
            <p className="text-slate-600 text-sm max-w-lg font-normal">
              Explore organized technical competencies, or use our recruiter tool below to match requirements.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200/60 self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer font-semibold ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill progress bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
              className="bg-slate-50 border border-slate-200/80 p-4.5 rounded-xl flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center shadow-sm">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className="text-slate-900 font-semibold text-sm">{skill.name}</span>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-600">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden mt-3.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-600 to-indigo-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Recruiter Matchmaker Panel */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6 border-b border-slate-200 pb-4">
            <Filter className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-950">Recruiter's Skill Matchmaker</h3>
              <p className="text-xs text-slate-600">Click a technology to instantly isolate projects showcasing that core competency.</p>
            </div>
          </div>

          {/* Toggle Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {matchmakerOptions.map((skillOpt) => (
              <button
                key={skillOpt}
                onClick={() => setSelectedMatchSkill(selectedMatchSkill === skillOpt ? null : skillOpt)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono border transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedMatchSkill === skillOpt
                    ? "bg-indigo-600 border-indigo-700 text-white font-semibold shadow-sm scale-[1.03]"
                    : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm"
                }`}
              >
                {selectedMatchSkill === skillOpt && <Check className="w-3.5 h-3.5 text-white" />}
                {skillOpt}
              </button>
            ))}
          </div>

          {/* Results Area */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-6 min-h-[120px] flex flex-col justify-center shadow-inner">
            {!selectedMatchSkill ? (
              <div className="text-center py-4 flex flex-col items-center">
                <HelpCircle className="w-8 h-8 text-slate-400 mb-2" />
                <p className="text-sm text-slate-500 font-medium">Select a technology pill above to find direct proof of experience.</p>
              </div>
            ) : matchingProjects.length > 0 ? (
              <div>
                <div className="mb-4 text-xs font-mono text-indigo-600 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  Found {matchingProjects.length} Project{matchingProjects.length > 1 ? "s" : ""} leveraging <strong className="text-slate-950 font-bold">{selectedMatchSkill}</strong>:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchingProjects.map((proj) => (
                    <div 
                      key={proj.id} 
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-400 hover:shadow-sm transition-all"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-950 mb-1">{proj.name}</h4>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3 font-normal">{proj.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex flex-wrap gap-1">
                          {proj.tags.slice(0, 3).map(t => (
                            <span key={t} className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                              {t}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            onSelectProject(proj.id);
                            const target = document.getElementById("projects");
                            target?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="text-[10px] font-mono text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer"
                        >
                          View Details &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Vikranth used <strong className="text-slate-950 font-semibold">{selectedMatchSkill}</strong> extensively in his day-to-day work at <strong className="text-slate-950 font-semibold">Edubot</strong> to build ML pipelines, serving APIs, and process complex analytical workloads.
                </p>
                <a href="#experience" className="inline-block mt-3.5 text-xs font-mono font-bold text-indigo-600 hover:underline">
                  Explore Edubot Experience &rarr;
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
