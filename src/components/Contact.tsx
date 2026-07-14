import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Copy, Check, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Pre-filled WhatsApp recruiter-friendly message
  const whatsappNumber = "918309234351";
  const whatsappMessage = encodeURIComponent(
    "Hi Vikranth, I visited your AI/ML Engineer portfolio and would like to discuss some open opportunities with you!"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 relative overflow-hidden">
      {/* Soft Ambient Light Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-2">
            Get In Touch Instantly
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto font-normal">
            No long contact forms or waiting. Connect with Vikranth directly via WhatsApp, Email, or traditional channels.
          </p>
        </div>

        {/* Action-Oriented Connect Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Primary CTA: WhatsApp Direct Connect */}
          <div className="bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-500" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6 fill-emerald-600/10" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">WhatsApp Connect</h3>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 tracking-wider">Fastest Response</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Clicking the button below opens a pre-composed chat session directly with Vikranth. Ideal for quick inquiries, interview requests, and scheduling.
              </p>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Pre-composed Message:</div>
                <p className="text-xs text-slate-600 leading-relaxed italic font-normal">
                  "Hi Vikranth, I visited your AI/ML Engineer portfolio and would like to discuss some open opportunities with you!"
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Secondary CTA: Email & Direct Details */}
          <div className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-indigo-600" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">Direct Contacts</h3>
                  <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 tracking-wider">Traditional Channels</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Prefer email or phone? Use the convenient copy buttons to quickly paste Vikranth's verified details directly into your workspace.
              </p>

              {/* Email Copier */}
              <div className="flex items-center justify-between p-3.5 mb-3 bg-slate-50 border border-slate-200/60 rounded-xl group/item">
                <div className="overflow-hidden mr-3">
                  <div className="text-[9px] font-mono font-bold uppercase text-slate-400 tracking-wider">Email Address</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 truncate">{PERSONAL_INFO.email}</div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-indigo-600 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer flex items-center gap-1.5 text-xs font-mono font-semibold"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Copier */}
              <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/60 rounded-xl group/item">
                <div className="overflow-hidden mr-3">
                  <div className="text-[9px] font-mono font-bold uppercase text-slate-400 tracking-wider">Phone / WhatsApp</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 truncate">{PERSONAL_INFO.phone}</div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-indigo-600 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer flex items-center gap-1.5 text-xs font-mono font-semibold"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="border-t border-slate-100 pt-6 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-700 hover:text-indigo-600 hover:border-indigo-200 transition-all text-xs font-mono font-semibold cursor-pointer shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-indigo-600" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-700 hover:text-indigo-600 hover:border-indigo-200 transition-all text-xs font-mono font-semibold cursor-pointer shadow-sm"
                >
                  <Github className="w-4 h-4 text-indigo-600" />
                  GitHub
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Location Banner */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm shrink-0">
              <MapPin className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Work Base</div>
              <div className="text-sm font-semibold text-slate-800">{PERSONAL_INFO.location}</div>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full">
            Open to Remote & Onsite Opportunities
          </span>
        </div>

      </div>
    </section>
  );
}
