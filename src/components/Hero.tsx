import { motion } from "motion/react";
import { ArrowDown, Mail, Phone, MapPin, Github, Linkedin, Cpu, Sparkles, Database, Code, Send } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onScrollToChat: () => void;
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToChat, onScrollToProjects }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-indigo-50/60 via-slate-50 to-white overflow-hidden px-6 pt-16 border-b border-slate-200">
      {/* Decorative subtle ambient soft lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-200/40 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-violet-200/30 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating interactive tech bubbles - styled elegantly for light theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] bg-white/95 border border-slate-200/80 backdrop-blur-md px-4.5 py-2.5 rounded-2xl shadow-md flex items-center gap-2.5 text-xs font-mono font-semibold text-slate-700"
        >
          <Cpu className="w-4 h-4 text-indigo-600 animate-spin-slow" />
          <span>TensorFlow & PyTorch</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] left-[6%] bg-white/95 border border-slate-200/80 backdrop-blur-md px-4.5 py-2.5 rounded-2xl shadow-md flex items-center gap-2.5 text-xs font-mono font-semibold text-slate-700"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Generative AI & LLMs</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[20%] right-[8%] bg-white/95 border border-slate-200/80 backdrop-blur-md px-4.5 py-2.5 rounded-2xl shadow-md flex items-center gap-2.5 text-xs font-mono font-semibold text-slate-700"
        >
          <Database className="w-4 h-4 text-emerald-600" />
          <span>FastAPI & PostgreSQL</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[55%] right-[10%] bg-white/95 border border-slate-200/80 backdrop-blur-md px-4.5 py-2.5 rounded-2xl shadow-md flex items-center gap-2.5 text-xs font-mono font-semibold text-slate-700"
        >
          <Code className="w-4 h-4 text-amber-600" />
          <span>Python & SQL Pipelines</span>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Available for Hires Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-semibold mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          Available for New Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-950 mb-4"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-700 max-w-2xl leading-relaxed mb-6"
        >
          {PERSONAL_INFO.title}
        </motion.h2>

        {/* Brief Contact Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-slate-600 mb-8 font-mono font-medium"
        >
          <span className="flex items-center gap-1.5 bg-slate-100/80 border border-slate-200/50 px-2.5 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            {PERSONAL_INFO.location}
          </span>
          <span className="flex items-center gap-1.5 bg-slate-100/80 border border-slate-200/50 px-2.5 py-1 rounded-md">
            <Mail className="w-3.5 h-3.5 text-indigo-600" />
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-600 transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </span>
          <span className="flex items-center gap-1.5 bg-slate-100/80 border border-slate-200/50 px-2.5 py-1 rounded-md">
            <Phone className="w-3.5 h-3.5 text-indigo-600" />
            <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-indigo-600 transition-colors">
              {PERSONAL_INFO.phone}
            </a>
          </span>
        </motion.div>

        {/* Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-10 text-center font-normal"
        >
          {PERSONAL_INFO.summary}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
        >
          <button
            onClick={onScrollToChat}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md shadow-indigo-600/10 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Send className="w-5 h-5 text-white" />
            Get In Touch
          </button>
          <button
            onClick={onScrollToProjects}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-250 hover:bg-slate-50 text-slate-800 font-medium transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
          >
            Explore Projects & Experience
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-6 text-slate-500"
        >
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-all transform hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-5.5 h-5.5" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-all transform hover:scale-110"
            title="GitHub"
          >
            <Github className="w-5.5 h-5.5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-indigo-600 transition-all transform hover:scale-110"
            title="Email Direct"
          >
            <Mail className="w-5.5 h-5.5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-16 flex flex-col items-center text-slate-400 text-xs font-mono gap-1.5"
        >
          <span className="font-semibold text-[10px] tracking-wider uppercase">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-indigo-600/60" />
        </motion.div>
      </div>
    </section>
  );
}
