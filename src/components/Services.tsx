"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Briefcase, FileCheck, Award } from "lucide-react";

const services = [
  {
    id: "01",
    title: "RECRUITMENT",
    description: "End-to-end recruitment process matching skilled and non-skilled workforce from Pakistan to top-tier international employers in the Middle East, Europe, and beyond.",
    icon: <Briefcase className="text-accent-gold" size={22} />,
  },
  {
    id: "02",
    title: "VISA PROCESSING",
    description: "Comprehensive visa submission, document curation, and fast-track processing services through international embassies and consulates, ensuring 100% compliance.",
    icon: <FileCheck className="text-accent-gold" size={22} />,
  },
  {
    id: "03",
    title: "DATAFLOW & LICENCING EXAM PROCESS",
    description: "Expert guidance and credential verification services (DataFlow) for healthcare professionals, engineers, and technical staff to clear licensing examinations globally.",
    icon: <Award className="text-accent-gold" size={22} />,
  },
  {
    id: "04",
    title: "DOCUMENTS ATTESTATION",
    description: "Official legal authentication and attestation services for degree certificates, diplomas, marriage, and birth certificates from MOFA, HEC, and embassies.",
    icon: <ShieldCheck className="text-accent-gold" size={22} />,
  },
  {
    id: "05",
    title: "QVP PROFESSIONAL ACCREDITATION",
    description: "Accredited verification, testing, and certificate endorsement under the Quality Verification Program (QVP) for highly technical skilled personnel.",
    icon: <CheckCircle2 className="text-accent-gold" size={22} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ backgroundColor: "rgba(10, 31, 107, 0.95)" }}>
      {/* Background world grid */}
      <div className="grid-overlay" style={{ opacity: 0.1, position: "absolute" }} />
      <div className="absolute inset-0" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(6, 14, 58, 0.45)", mixBlendMode: "multiply" }} />

      <div className="container-width px-6 relative z-10">
        
        {/* Centered Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gradient-gold"
          >
            OUR SERVICES
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
          >
            <span>WHAT WE DO</span>
          </motion.div>
        </div>

        <div className="services-grid">
          
          {/* LEFT: Numbered Services Cards Stack */}
          <div className="services-left-panel">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="services-stack-card"
            >
              <h3 className="services-stack-title">
                <span className="text-accent-gold">•</span> Primary Agencies & Facilitations
              </h3>
              
              <div className="services-list-container">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01, x: 6 }}
                    className="service-item-card group"
                  >
                    {/* Gold Number Badge */}
                    <div className="service-badge">
                      {service.id}
                    </div>

                    {/* Service Content */}
                    <div className="service-content">
                      <div className="service-title-row">
                        <span className="service-title-text">
                          {service.title}
                        </span>
                        <div className="service-icon-container">
                          {service.icon}
                        </div>
                      </div>
                      <p className="service-desc-text">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: High-End Decorative SVG Vector Parallax Illustration */}
          <div className="services-right-panel">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: "relative",
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* Layer 1: Rotating Globe (Base layer) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  width: "288px",
                  height: "288px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg viewBox="0 0 100 100" style={{ width: "256px", height: "256px", color: "rgba(74, 144, 217, 0.2)" }}>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M5,50 Q50,10 95,50 Q50,90 5,50" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M5,50 Q50,30 95,50 Q50,70 5,50" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M50,5 A45,45 0 0,0 50,95" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M50,5 A30,45 0 0,0 50,95" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M50,5 A15,45 0 0,0 50,95" fill="none" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </motion.div>

              {/* Layer 2: Glowing Core Sphere */}
              <div
                className="animate-pulse-gold"
                style={{
                  position: "absolute",
                  width: "176px",
                  height: "176px",
                  borderRadius: "50%",
                  backgroundImage: "linear-gradient(to top right, var(--primary-dark-blue), rgba(74, 144, 217, 0.3))",
                  filter: "blur(40px)",
                  opacity: 0.6,
                }}
              />

              {/* Layer 3: Floating Passport (Top-Left overlay) */}
              <motion.div
                animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: "-16px",
                  left: "-16px",
                  width: "160px",
                  height: "192px",
                  backgroundColor: "#0D2C54",
                  border: "1px solid rgba(245, 197, 24, 0.4)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="font-display" style={{ fontSize: "0.6rem", fontWeight: "bold", color: "var(--accent-gold)", letterSpacing: "0.15em" }}>PASSPORT</span>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.4rem", color: "#FFF" }}>PK</span>
                  </div>
                </div>
                {/* Gold Coat of Arms Crest placeholder on passport */}
                <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
                  <svg viewBox="0 0 100 100" style={{ width: "56px", height: "56px", color: "var(--accent-gold)" }}>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,1" />
                    <path d="M40,50 C40,40 50,35 60,50 C50,65 40,50 40,50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <polygon points="50,38 52,43 57,43 53,46 55,51 50,48 45,51 47,46 43,43 48,43" fill="currentColor" />
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ height: "4px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "2px", width: "64px" }} />
                  <div style={{ height: "4px", backgroundColor: "rgba(255, 255, 255, 0.15)", borderRadius: "2px", width: "40px" }} />
                </div>
              </motion.div>

              {/* Layer 4: Floating Suitcase (Bottom-Right overlay) */}
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "8px",
                  width: "192px",
                  height: "160px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(245, 197, 24, 0.4)",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Suitcase Handle */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -100%)", width: "56px", height: "24px", borderTop: "4px solid rgba(10, 31, 107, 0.8)", borderLeft: "4px solid rgba(10, 31, 107, 0.8)", borderRight: "4px solid rgba(10, 31, 107, 0.8)", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", borderBottom: "1px solid rgba(10, 31, 107, 0.1)" }}>
                  <span className="font-display" style={{ fontSize: "12px", fontWeight: "900", color: "#0A1F6B", letterSpacing: "0.05em" }}>LUGGAGE</span>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent-gold)" }} />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(10, 31, 107, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                    ✈️
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "0.6rem", fontWeight: "bold", color: "#060E3A" }}>DESTINATION</span>
                    <span style={{ fontSize: "0.55rem", fontWeight: "bold", color: "var(--accent-gold)", letterSpacing: "0.05em", lineHeight: 1 }}>LAHORE → GLOBAL</span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "8px", borderTop: "1px solid rgba(10, 31, 107, 0.1)" }}>
                  <div style={{ height: "8px", width: "64px", backgroundColor: "rgba(10, 31, 107, 0.1)", borderRadius: "4px" }} />
                  <span style={{ fontSize: "0.5rem", fontWeight: "bold", color: "rgba(10, 31, 107, 0.5)" }}>SECURED</span>
                </div>
              </motion.div>

              {/* Layer 5: Glowing Flight Jet (Gliding top right) */}
              <motion.div
                animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "16px",
                  width: "112px",
                  height: "96px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", color: "var(--accent-gold)", filter: "drop-shadow(0 8px 15px rgba(245, 197, 24, 0.3))" }}>
                  {/* High Quality Airplane vector */}
                  <path d="M50,10 L54,38 L84,38 L56,48 L64,78 L50,62 L36,78 L44,48 L16,38 L46,38 Z" fill="currentColor" transform="rotate(45, 50, 50)" />
                  <path d="M50,62 L50,75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </svg>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
