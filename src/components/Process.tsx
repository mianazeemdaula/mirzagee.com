"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Receipt of Demand",
      desc: "Client sends their detailed manpower and job requirements to our expert recruitment team.",
    },
    {
      num: "02",
      title: "Database Screening",
      desc: "We screen our extensive, pre-verified candidate database for immediate matches.",
    },
    {
      num: "03",
      title: "OEP Permission",
      desc: "Securing formal advertisement and recruitment approval from the Protector of Emigrants.",
    },
    {
      num: "04",
      title: "Targeted Advertising",
      desc: "Deploying high-impact targeted advertisements across national print and digital platforms.",
    },
    {
      num: "05",
      title: "Employer Updates",
      desc: "Keeping our international employers regularly updated with shortlisted profile pools.",
    },
    {
      num: "06",
      title: "Interview Schedules",
      desc: "Announcing dates, venues, and coordinating travel for scheduled technical evaluation panels.",
    },
    {
      num: "07",
      title: "Final Selection",
      desc: "Interviews, aptitude tests, and practical work samples conducted per employer criteria.",
    },
  ];

  return (
    <section id="process" className="relative w-full bg-[#07123A] py-20 md:py-28 overflow-hidden border-t border-white/5">
      {/* Subtle world map accent */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px"
        }}
      />

      <div className="container-width px-6 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
          >
            RECRUITMENT PROCEDURE
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
          >
            <span className="text-light-blue">Systematic & Transparent Path</span>
          </motion.div>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mt-4" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            A comprehensive, legally-audited recruitment journey ensuring rapid delivery and ideal talent compliance from demand to deployment.
          </p>
        </div>

        {/* Timeline (Horizontal on desktop, vertical on mobile) */}
        <div className="relative mt-20">
          
          {/* Horizontal dotted line on Desktop */}
          <div className="hidden lg:block absolute top-[25px] left-10 right-10 h-0.5 border-t-2 border-dashed border-[#F5C518]/30 -z-0" />

          {/* Vertical dotted line on Mobile */}
          <div className="block lg:hidden absolute top-10 bottom-10 left-[23px] w-0.5 border-l-2 border-dashed border-[#F5C518]/30 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 80, delay: idx * 0.1 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 group"
              >
                
                {/* Number Circle Badge */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0B1F5C] border-2 border-accent-gold text-accent-gold flex items-center justify-center font-display font-extrabold text-base shadow-lg group-hover:scale-110 group-hover:bg-[#F5C518] group-hover:text-[#0B1F5C] transition-all duration-300">
                    {step.num}
                  </div>
                  {/* Glowing aura ring */}
                  <div className="absolute -inset-1 rounded-full border border-accent-gold/20 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="font-display text-white text-lg font-bold tracking-wide uppercase transition-colors duration-300 group-hover:text-light-blue">
                    {step.title}
                  </h3>
                  <p 
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    className="text-gray-400 text-xs md:text-sm leading-relaxed mt-2 max-w-sm lg:max-w-none font-normal"
                  >
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTTOM: Highlight Banner (Gold Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#F5C518] to-[#D4A400] text-[#07123A] shadow-xl flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left border border-[#D4A400]/40"
        >
          <div className="p-3 bg-[#07123A] text-[#F5C518] rounded-full flex-shrink-0 animate-bounce" style={{ animationDuration: "3s" }}>
            <CheckCircle size={28} />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-black uppercase tracking-wider">
              Selecting the Suitable Candidates
            </span>
            <p className="text-[#07123A]/80 font-semibold text-sm md:text-base mt-1" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              Our ultimate filtration parameters ensure we consistently place the <strong>Right Person for the Right Job at the Right Time</strong>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
