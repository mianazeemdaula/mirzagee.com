"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ShieldCheck, X, FileText, CheckCircle } from "lucide-react";

const registrations = [
  {
    abbreviation: "FBR",
    fullName: "Federal Board of Revenue",
    logo: (
      <svg viewBox="0 0 100 100" className="card-logo-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,2" />
        
        {/* Scale of Justice */}
        <line x1="50" y1="28" x2="50" y2="72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="38" x2="68" y2="38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        {/* Left Pan */}
        <line x1="35" y1="38" x2="28" y2="58" stroke="currentColor" strokeWidth="1.5" />
        <line x1="35" y1="38" x2="42" y2="58" stroke="currentColor" strokeWidth="1.5" />
        <path d="M25,58 L45,58 Q35,63 25,58 Z" fill="currentColor" />
        {/* Right Pan */}
        <line x1="65" y1="38" x2="58" y2="58" stroke="currentColor" strokeWidth="1.5" />
        <line x1="65" y1="38" x2="72" y2="58" stroke="currentColor" strokeWidth="1.5" />
        <path d="M55,58 L75,58 Q65,63 55,58 Z" fill="currentColor" />
        
        {/* Balance Base */}
        <path d="M40,72 L60,72" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        {/* Star */}
        <polygon points="50,18 51.5,21.5 55,21.5 52,23.5 53.5,27 50,25 46.5,27 48,23.5 45,21.5 48.5,21.5" fill="currentColor" />
        
        <text x="50" y="83" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="1">FBR</text>
      </svg>
    ),
  },
  {
    abbreviation: "PRA",
    fullName: "Punjab Revenue Authority",
    logo: (
      <svg viewBox="0 0 100 100" className="card-logo-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M22,35 C30,30 40,25 50,28 C60,25 70,30 78,35 C74,55 64,75 50,82 C36,75 26,55 22,35 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        
        {/* Five Rivers Wave / Crown */}
        <path d="M32,45 C38,40 44,45 50,40 C56,45 62,40 68,45" fill="none" stroke="var(--light-blue)" strokeWidth="2" />
        <path d="M32,52 C38,47 44,52 50,47 C56,52 62,47 68,52" fill="none" stroke="var(--light-blue)" strokeWidth="2" />
        
        {/* Star Crescent */}
        <path d="M46,65 A6,6 0 1,1 54,65 A5,5 0 1,0 46,65 Z" fill="currentColor" />
        
        <text x="50" y="21" fontSize="8" fontWeight="black" textAnchor="middle" fill="currentColor" letterSpacing="0.5">PUNJAB</text>
        <text x="50" y="78" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="1">PRA</text>
      </svg>
    ),
  },
  {
    abbreviation: "LCCI",
    fullName: "Lahore Chamber of Commerce & Industry (Since 20/03/2012)",
    logo: (
      <svg viewBox="0 0 100 100" className="card-logo-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Chamber Gear Cog */}
        <circle cx="50" cy="46" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M50,24 L50,28 M50,64 L50,68 M28,46 L32,46 M68,46 L72,46 M34,30 L37,33 M63,59 L66,62 M34,62 L37,59 M63,30 L66,33" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Historical Fort Minaret Emblem */}
        <path d="M44,46 L46,35 L54,35 L56,46" fill="currentColor" opacity="0.6" />
        <rect x="42" y="46" width="16" height="12" rx="1" fill="currentColor" />
        <line x1="38" y1="58" x2="62" y2="58" stroke="currentColor" strokeWidth="2" />
        
        <text x="50" y="79" fontSize="8" fontWeight="black" textAnchor="middle" fill="currentColor" letterSpacing="1.5">LCCI</text>
      </svg>
    ),
  },
  {
    abbreviation: "POEPA",
    fullName: "Pakistan Overseas Employment Promoters Association (LHR-144)",
    logo: (
      <svg viewBox="0 0 100 100" className="card-logo-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="44" r="20" fill="none" stroke="var(--light-blue)" strokeWidth="1.5" />
        
        {/* Globe Grid inside Association Logo */}
        <path d="M30,44 A20,20 0 0,0 70,44 Z" fill="none" stroke="var(--light-blue)" strokeWidth="1.5" />
        <path d="M30,44 A20,20 0 0,1 70,44 Z" fill="none" stroke="var(--light-blue)" strokeWidth="1.5" />
        <line x1="50" y1="24" x2="50" y2="64" stroke="var(--light-blue)" strokeWidth="1.5" />
        
        {/* Helping hands holding globe */}
        <path d="M22,65 Q35,55 45,63 C48,65 52,65 55,63 Q65,55 78,65 L70,78 Q50,70 30,78 Z" fill="currentColor" />
        
        <text x="50" y="87" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="1">POEPA</text>
      </svg>
    ),
  },
  {
    abbreviation: "LEI Worldwide",
    fullName: "LEI Worldwide — Legal Entity Identifier",
    logo: (
      <svg viewBox="0 0 100 100" className="card-logo-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Tech Code Bars & Global Node network */}
        <line x1="30" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="42" x2="65" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="49" x2="72" y2="49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="56" x2="60" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Tech verification checkmark */}
        <circle cx="50" cy="65" r="9" fill="none" stroke="var(--light-blue)" strokeWidth="2" />
        <path d="M47,65 L49,68 L53,62" fill="none" stroke="var(--light-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        <text x="50" y="24" fontSize="8" fontWeight="black" textAnchor="middle" fill="currentColor" letterSpacing="1.2">LEI</text>
        <text x="50" y="82" fontSize="5.5" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="0.8">WORLDWIDE</text>
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Registrations() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="credentials" className="section-padding" style={{ backgroundColor: "var(--dark-navy)" }}>
      <div className="container-width">
        
        {/* Centered Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-gradient-gold text-center"
          >
            REGISTERED & CERTIFIED FROM
          </motion.h2>
          <p className="text-gray-400 font-body text-base mt-2 text-center max-w-2xl mx-auto">
            Verified and licensed by the highest regulatory authorities in Pakistan
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="divider-lines justify-center"
          >
            <span>REGULATORY AUTHORITIES</span>
          </motion.div>
        </div>

        {/* Horizontal Scroll Grid of Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="registration-grid"
        >
          {registrations.map((reg) => (
            <motion.div
              key={reg.abbreviation}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(245, 197, 24, 0.15)",
              }}
              className="registration-card"
            >
              {/* Subtle shining background accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "96px",
                  height: "96px",
                  backgroundColor: "rgba(245, 197, 24, 0.05)",
                  borderRadius: "50%",
                  filter: "blur(24px)",
                  marginRight: "-24px",
                  marginTop: "-24px",
                  pointerEvents: "none",
                }}
              />

              {/* Logo Area */}
              <div className="card-logo-container">
                {reg.logo}
              </div>

              {/* Text Areas */}
              <span className="card-abbrev">
                {reg.abbreviation}
              </span>
              
              <span className="card-fullname">
                {reg.fullName}
              </span>

              {/* Left Accent Bar on Hover */}
              <div className="card-hover-border" />
            </motion.div>
          ))}
        </motion.div>

        {/* Official Licence Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="mt-16 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative"
          style={{
            background: "linear-gradient(135deg, rgba(11,31,92,0.85) 0%, rgba(6,14,58,0.95) 100%)",
            border: "1px solid rgba(245,197,24,0.35)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4), 0 0 15px rgba(245,197,24,0.08)",
          }}
        >
          {/* Subtle gold aura background */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-[rgba(245,197,24,0.05)] to-transparent rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between relative z-10">
            <div className="flex gap-4 items-start text-left">
              <div className="bg-[rgba(245,197,24,0.1)] p-4 rounded-2xl border border-[rgba(245,197,24,0.2)] text-accent-gold mt-1 shrink-0">
                <ShieldCheck size={32} style={{ filter: "drop-shadow(0 0 8px rgba(245,197,24,0.4))" }} />
              </div>
              <div>
                <h3 className="text-white font-display font-black text-xl lg:text-2xl tracking-wide flex items-center gap-2">
                  🏛 Government of Pakistan — Official Licence
                </h3>
                <p className="text-accent-gold font-display font-bold text-base lg:text-lg mt-0.5 tracking-wider">
                  Overseas Employment Promoter&apos;s Licence No. 2671 / LHR
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-400 font-body text-xs lg:text-sm mt-2">
                  <span><strong>Issued:</strong> 22/01/2009</span>
                  <span className="hidden sm:inline">•</span>
                  <span><strong>Authorizing:</strong> Iftikhar Ahmed</span>
                  <span className="hidden sm:inline">•</span>
                  <span><strong>Agency:</strong> Mirza Gee Manpower Services</span>
                </div>
              </div>
            </div>

            {/* View Licence Certificate Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg"
              style={{
                fontSize: "1rem",
                padding: "10px 24px",
              }}
            >
              <FileText size={18} />
              View Licence Certificate
            </button>
          </div>
        </motion.div>

        {/* NTN Info Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto mt-6 bg-[rgba(6,14,58,0.4)] border border-[rgba(255,255,255,0.05)] rounded-2xl py-3 px-6 flex flex-wrap gap-x-6 gap-y-2 justify-center items-center text-xs lg:text-sm font-body text-gray-400"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <strong>NTN No:</strong> 3168005-4
          </span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-light-blue" />
            <strong>LCCI Membership No:</strong> 76647-A
          </span>
          <span className="hidden md:inline text-gray-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <strong>POEPA Membership No:</strong> LHR-144
          </span>
        </motion.div>

        {/* Bottom live check text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/30 text-xs tracking-wide mt-10 uppercase"
        >
          ✅ All credentials are live, active, and fully compliant with the Ministry of Overseas Pakistanis & HRD.
        </motion.p>
      </div>

      {/* Modern Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#fdfaf2] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-neutral-800 p-6 md:p-8"
              style={{
                border: "12px double #D4A400",
                boxShadow: "0 0 0 4px #0B1F5C, 0 10px 50px rgba(0,0,0,0.8)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 transition-colors p-1.5 rounded-full hover:bg-neutral-200"
              >
                <X size={20} />
              </button>

              {/* Certificate Inner Design */}
              <div className="flex flex-col items-center text-center font-display border-4 border-double border-[#0B1F5C]/20 p-6 rounded-xl">
                
                {/* Crest Header */}
                <div className="flex flex-col items-center mb-4">
                  {/* Government Crest representation in SVG */}
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#0B1F5C] mb-2" fill="currentColor">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <ellipse cx="50" cy="45" rx="20" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M50,15 L50,22 M50,68 L50,82" stroke="currentColor" strokeWidth="2" />
                    {/* Crescent & Star */}
                    <path d="M46,45 A8,8 0 1,1 55,42 A7,7 0 1,0 46,45 Z" fill="currentColor" />
                    <text x="50" y="81" fontSize="6.5" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="0.5">O.E.P.</text>
                  </svg>
                  <h2 className="text-xl md:text-2xl font-black text-[#0B1F5C] uppercase tracking-wider leading-none">
                    Government of Pakistan
                  </h2>
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                    Ministry of Overseas Pakistanis & Human Resource Development
                  </p>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-none mt-0.5">
                    Bureau of Emigration & Overseas Employment
                  </p>
                </div>

                <div className="w-32 h-[1px] bg-[#D4A400] my-2" />

                {/* Certificate Title */}
                <h4 className="text-lg md:text-xl font-bold italic text-[#D4A400] font-arabic my-1">
                  Overseas Employment Promoter&apos;s Licence
                </h4>
                
                {/* Certificate Main Text */}
                <p className="text-[11px] md:text-xs text-neutral-600 font-body leading-relaxed max-w-md mt-4">
                  This is to officially certify that the regulatory authorities of the Government of Pakistan have granted, approved and issued this license under the Emigration Ordinance, 1979, to:
                </p>

                {/* Licensee Company name */}
                <h3 className="text-2xl md:text-3xl font-black text-[#0B1F5C] font-display uppercase tracking-wide mt-4">
                  Mirza Gee Manpower Services
                </h3>

                {/* License Details Block */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 w-full max-w-sm bg-[#faf6ed] border border-[#eaddc4] rounded-2xl p-4 mt-5 text-left font-body text-xs text-neutral-700">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400">Licence Number</span>
                    <div className="font-display font-bold text-sm text-[#0B1F5C] mt-0.5">MPD/2671/LHR</div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400">Official Status</span>
                    <div className="font-display font-bold text-sm text-[#0B1F5C] mt-0.5 flex items-center gap-1">
                      <CheckCircle size={14} className="text-green-600" />
                      Active / Verified
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400">Authorised Promoter</span>
                    <div className="font-display font-bold text-sm text-neutral-800 mt-0.5">Iftikhar Ahmed Mirza</div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400">Date of Issue</span>
                    <div className="font-display font-bold text-sm text-neutral-800 mt-0.5">22nd January, 2009</div>
                  </div>
                </div>

                {/* Footer seal & signature */}
                <div className="flex justify-between items-end w-full mt-10 font-body">
                  <div className="flex flex-col items-center">
                    {/* Signed seal placeholder */}
                    <div className="w-16 h-8 border-b-2 border-neutral-400" />
                    <span className="text-[9px] text-neutral-500 uppercase mt-1 tracking-wider">Director General</span>
                  </div>
                  
                  {/* Decorative Golden Circular Badge Seal */}
                  <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                    {/* Spiky Seal Outer */}
                    <svg viewBox="0 0 100 100" className="absolute w-full h-full text-[#D4A400] animate-spin-slow">
                      <polygon points="50,5 54,16 63,10 64,22 74,18 72,30 81,28 77,39 85,41 78,50 85,59 77,61 81,72 72,70 74,82 64,78 63,90 54,84 50,95 46,84 37,90 36,78 26,82 28,70 19,72 23,61 15,59 22,50 15,41 23,39 19,28 28,30 26,18 36,22 37,10 46,16" fill="currentColor" className="opacity-80" />
                      <circle cx="50" cy="50" r="30" fill="#fdfaf2" />
                    </svg>
                    {/* Seal Inner Info */}
                    <div className="absolute flex flex-col items-center justify-center text-center text-[#0B1F5C] z-10">
                      <span className="text-[7px] font-black leading-none">APPROVED</span>
                      <span className="text-[9px] font-black tracking-wider leading-none mt-0.5">★ PAK ★</span>
                      <span className="text-[7px] font-black leading-none mt-0.5">2671/LHR</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
