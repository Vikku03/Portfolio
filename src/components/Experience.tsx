import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Cpu, Award } from "lucide-react";
import { EXPERIENCES, PERSONAL_INFO } from "../data";

export default function Experience() {
  const exp = EXPERIENCES[0]; // Edubot

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background soft ambient decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-indigo-100/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey & Background
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-2">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto font-normal">
            A track record of shipping end-to-end ML pipelines, high-availability APIs, and automated DevOps workflows.
          </p>
        </div>

        {/* Major Quantifiable Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {exp.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-5 rounded-xl text-center relative overflow-hidden shadow-sm group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600" />
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 tracking-tight mb-1 font-mono">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="space-y-12">
          {/* Work Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-6 mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 leading-snug">{exp.role}</h3>
                  <div className="text-sm font-bold text-indigo-600 mt-0.5">{exp.company}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:items-end gap-x-4 gap-y-1 text-xs font-mono font-medium text-slate-600">
                <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-4 mb-8">
              {exp.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">{detail}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="border-t border-slate-100 pt-6">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Stack Applied
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skillsUsed.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-slate-50 border border-slate-200 text-slate-700 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center shrink-0 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950">Education History</h3>
                <p className="text-xs text-slate-600 font-normal">Academic credentials and foundational studies</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-950 text-base">
                  {PERSONAL_INFO.education.degree}
                </h4>
                <div className="text-sm font-semibold text-indigo-600 mt-1">
                  {PERSONAL_INFO.education.school}
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-2 text-xs font-mono font-medium text-slate-600 shrink-0">
                <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  {PERSONAL_INFO.education.period}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100 font-bold text-emerald-700">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  {PERSONAL_INFO.education.gpa}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
