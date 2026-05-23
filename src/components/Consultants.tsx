"use client";

import { motion } from "framer-motion";
import { Scale, Users, ShieldCheck, Landmark } from "lucide-react";

export default function Consultants() {
  const consultants = [
    { name: "Dr. Suleman Zahid", title: "FRCS", specialization: "Medical Panel Consultant" },
    { name: "Dr. Ilyas Rafi", title: "FRCS", specialization: "Medical Panel Consultant" },
    { name: "Mrs. Zubaida Nawaz Malik", title: "Ex. Director Nursing, Sheikh Zayed Hospital", specialization: "Staff Nurses Selection Expert" },
    { name: "Mr. Iftikhar Ahmed", title: "M. Phil (London)", specialization: "Teaching & Academic Panel" },
    { name: "Mr. Nadeem Ayub Bhutta", title: "B.Sc., MBA", specialization: "Engineering & Technical Staff Evaluator" },
    { name: "Mr. Imran Shahzad", title: "CA, M. Phil, M.A Economics, AP", specialization: "Financial & Commerce Selection Advisor" },
    { name: "Mr. Farooq Malik", title: "M.Com., ACCA", specialization: "Administrative & Business Management Expert" },
    { name: "Mr. Muhammad Akram", title: "MS E-Commerce, CCNA, CCSP", specialization: "Information Technology & Cybersecurity Advisor" },
  ];

  const legalAdvisors = [
    {
      name: "Mr. Mirza Muhammad Aziz Ur Rehman",
      title: "Member American Bar Association",
      detail: "Advocate Supreme Court of Pakistan",
    },
    {
      name: "Mr. ZeeShan Rauf Mirza",
      title: "Advocate High Court",
      detail: "Corporate Legal Advisor",
    },
    {
      name: "Mr. Hafiz Omar Abdullah",
      title: "LLB, M.Sc Criminal Justice System",
      detail: "Advocate High Court",
    },
  ];

  return (
    <section id="consultants" className="relative w-full bg-[#060E3A] py-20 md:py-28 overflow-hidden border-b border-white/5">
      {/* Background soft lighting blobs */}
      <div 
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(85, 153, 226, 0.08)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-width px-6 relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* LEFT COLUMN: Panel of Consultants */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center">
                <Users size={20} />
              </div>
              <h2 className="font-display text-white text-3xl font-black uppercase tracking-wider">
                Panel of Consultants
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-normal" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              Our recruitment vetting and pre-screening panels are strictly supported by certified industry experts, board directors, and senior clinicians ensuring premium candidate evaluations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultants.map((con, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 6, borderColor: "rgba(245, 197, 24, 0.2)", backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                  className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl flex flex-col justify-between transition-all duration-200"
                >
                  <div>
                    <h4 className="font-display text-white font-bold text-lg leading-snug">
                      {con.name}
                    </h4>
                    <span className="text-[10px] bg-accent-gold/10 border border-accent-gold/20 text-accent-gold px-2 py-0.5 rounded-md font-bold uppercase mt-1.5 inline-block">
                      {con.title}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-3" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {con.specialization}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Legal Advisor Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-left"
          >
            <div className="relative p-8 md:p-10 bg-gradient-to-br from-[#07123A] to-[#162870] border border-accent-gold/25 rounded-3xl text-left shadow-2xl overflow-hidden">
              {/* Background decorative Scale of Justice */}
              <Scale 
                size={220} 
                className="absolute -right-16 -bottom-16 text-white/[0.02] pointer-events-none" 
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/15 text-accent-gold flex items-center justify-center">
                    <Scale size={20} />
                  </div>
                  <span className="font-display text-white font-black text-2xl tracking-wider uppercase">
                    Legal Advisor
                  </span>
                </div>
                
                <h3 className="font-display text-accent-gold text-lg font-bold tracking-wide uppercase mb-6 flex items-center gap-2">
                  <Landmark size={16} />
                  Mirza Law Associates International
                </h3>

                <p className="text-white/60 text-xs md:text-sm mb-8 leading-relaxed font-light" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  Guaranteeing full regulatory compliance, contract auditing, international legal representation, and absolute candidate protection under the federal laws of Pakistan and destination Gulf countries.
                </p>

                <div className="flex flex-col gap-6">
                  {legalAdvisors.map((lawyer, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 bg-white/[0.02] border border-white/5 hover:border-accent-gold/25 rounded-2xl flex flex-col gap-1 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <h4 className="font-display text-white font-bold text-base md:text-lg">
                        {lawyer.name}
                      </h4>
                      <p className="text-accent-gold text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                        {lawyer.title}
                      </p>
                      <span className="text-white/40 text-xs mt-1 font-medium flex items-center gap-1.5" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                        <ShieldCheck size={12} className="text-light-blue" />
                        {lawyer.detail}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
              
              {/* Gold border bar */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-accent-gold" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
