"use client";

import { motion, Variants } from "framer-motion";

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
        <path d="M32,45 C38,40 44,45 50,40 C56,45 62,40 68,45" fill="none" stroke="#4A90D9" strokeWidth="2" />
        <path d="M32,52 C38,47 44,52 50,47 C56,52 62,47 68,52" fill="none" stroke="#4A90D9" strokeWidth="2" />
        
        {/* Star Crescent */}
        <path d="M46,65 A6,6 0 1,1 54,65 A5,5 0 1,0 46,65 Z" fill="currentColor" />
        
        <text x="50" y="21" fontSize="8" fontWeight="black" textAnchor="middle" fill="currentColor" letterSpacing="0.5">PUNJAB</text>
        <text x="50" y="78" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="1">PRA</text>
      </svg>
    ),
  },
  {
    abbreviation: "LCCI",
    fullName: "Lahore Chamber of Commerce",
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
    fullName: "Pak Overseas Promoters Assoc.",
    logo: (
      <svg viewBox="0 0 100 100" className="card-logo-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="44" r="20" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
        
        {/* Globe Grid inside Association Logo */}
        <path d="M30,44 A20,20 0 0,0 70,44 Z" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
        <path d="M30,44 A20,20 0 0,1 70,44 Z" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
        <line x1="50" y1="24" x2="50" y2="64" stroke="#4A90D9" strokeWidth="1.5" />
        
        {/* Helping hands holding globe */}
        <path d="M22,65 Q35,55 45,63 C48,65 52,65 55,63 Q65,55 78,65 L70,78 Q50,70 30,78 Z" fill="currentColor" />
        
        <text x="50" y="87" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor" letterSpacing="1">POEPA</text>
      </svg>
    ),
  },
  {
    abbreviation: "LEI Worldwide",
    fullName: "Legal Entity Identifier",
    logo: (
      <svg viewBox="0 0 100 100" className="card-logo-svg">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Tech Code Bars & Global Node network */}
        <line x1="30" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="42" x2="65" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="49" x2="72" y2="49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="56" x2="60" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Tech verification checkmark */}
        <circle cx="50" cy="65" r="9" fill="none" stroke="#4A90D9" strokeWidth="2" />
        <path d="M47,65 L49,68 L53,62" fill="none" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
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
  return (
    <section id="registrations" className="section-padding" style={{ backgroundColor: "var(--dark-navy)" }}>
      <div className="container-width">
        
        {/* Centered Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-gradient-gold"
          >
            REGISTERED FROM
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
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
        
        {/* Verification Alert Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/40 text-xs md:text-sm tracking-wide mt-12 uppercase"
        >
          ✅ All registrations are live, active, and audit-checked by the federal and provincial bodies of Pakistan.
        </motion.p>

      </div>
    </section>
  );
}
