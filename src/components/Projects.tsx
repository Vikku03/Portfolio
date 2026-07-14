import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, CheckCircle2, ChevronDown, ChevronUp, Cpu, LineChart, Compass, MessageSquare } from "lucide-react";
import { PROJECTS } from "../data";

interface ProjectsProps {
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
}

export default function Projects({ selectedProjectId, setSelectedProjectId }: ProjectsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Sync expanded state if selected from Matchmaker
  useEffect(() => {
    if (selectedProjectId) {
      setExpandedId(selectedProjectId);
      // Reset after opening to avoid trapping state
      setSelectedProjectId(null);
    }
  }, [selectedProjectId]);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "samastha":
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case "edubot-lms":
        return <LineChart className="w-6 h-6 text-violet-600" />;
      case "career-xcelerator":
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case "interview-prep":
        return <MessageSquare className="w-6 h-6 text-amber-600" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-600" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white relative border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            Proof of Engineering
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-2">
            AI & Machine Learning Projects
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto font-normal">
            Explore active deployments and engineering systems. Click any card to expand architectural details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => {
            const isExpanded = expandedId === proj.id;
            return (
              <motion.div
                key={proj.id}
                id={`project-card-${proj.id}`}
                layout="position"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`bg-slate-50 border rounded-2xl p-6 flex flex-col justify-between transition-all relative overflow-hidden ${
                  isExpanded
                    ? "border-indigo-500 shadow-md col-span-1 md:col-span-2 bg-white"
                    : "border-slate-200 hover:border-indigo-400 hover:bg-slate-50/50 hover:shadow-sm"
                }`}
              >
                {/* Visual Top Highlight Bar */}
                <div className={`absolute top-0 left-0 w-full h-[3px] transition-all ${
                  isExpanded ? "bg-gradient-to-r from-indigo-600 to-violet-600" : "bg-transparent"
                }`} />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                        {getProjectIcon(proj.id)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-950 text-lg leading-tight">{proj.name}</h3>
                        <div className="text-xs font-bold text-indigo-600 mt-1">{proj.subtitle}</div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    {proj.description}
                  </p>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6 border-t border-slate-100 pt-6"
                      >
                        <h4 className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wider mb-4">
                          Key Deliverables & Core Scope
                        </h4>
                        <div className="space-y-3.5">
                          {proj.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 leading-relaxed font-normal">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Controls */}
                <div className="border-t border-slate-100 pt-4 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded bg-white border border-slate-200 text-slate-600 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleExpand(proj.id)}
                    className="self-end sm:self-auto text-xs font-mono text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Collapse Specs" : "View Full Specs"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
