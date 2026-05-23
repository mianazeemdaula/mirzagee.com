"use client";

import { motion, Variants } from "framer-motion";
import { Landmark } from "lucide-react";

const features = [
  {
    title: "Government Licensed & Verified",
    description: "Mirza Gee is fully authenticated, licensed (No. MPD/2671/Lhr) and regulated by the Ministry of Overseas Pakistanis & Bureau of Emigration.",
    icon: (
      <svg viewBox="0 0 100 100" style={{ width: "48px", height: "48px" }}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M30,48 L44,62 L70,36" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,1" opacity="0.3" />
      </svg>
    ),
    badge: "Official & Authorized",
  },
  {
    title: "Global Reach & Placement",
    description: "A wide international network spanning the Kingdom of Saudi Arabia (KSA), UAE, Qatar, Oman, Bahrain, plus expanding channels into European markets.",
    icon: (
      <svg viewBox="0 0 100 100" style={{ width: "48px", height: "48px" }}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M15,50 A35,35 0 0,0 85,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22,32 Q50,42 78,32" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22,68 Q50,58 78,68" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50,5 A35,45 0 0,0 50,95" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M45,15 Q55,20 60,15 L50,8 Z" fill="currentColor" />
        <path d="M30,55 Q35,65 40,65 L32,73 Z" fill="currentColor" />
      </svg>
    ),
    badge: "International Networks",
  },
  {
    title: "Deep Candidate Trust",
    description: "Built on rigorous integrity, our 'Right Person for the Right Job' philosophy has earned the trust of hundreds of candidates and top international companies.",
    icon: (
      <svg viewBox="0 0 100 100" style={{ width: "48px", height: "48px" }}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20,55 Q35,45 45,55 L75,55 C78,55 80,58 78,61 L70,72 Q50,68 30,72 Z" fill="currentColor" opacity="0.8" />
        <path d="M80,45 Q65,55 55,45 L25,45 C22,45 20,42 22,39 L30,28 Q50,32 70,28 Z" fill="currentColor" />
        <polygon points="50,14 52,18 57,18 53,21 55,25 50,23 45,25 47,21 43,18 48,18" fill="currentColor" />
      </svg>
    ),
    badge: "100% Reliable Delivery",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "#040A2E" }}>
      {/* Background radial highlight */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "rgba(10, 31, 107, 0.3)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

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
            WHY CHOOSE US
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
          >
            <span>WHAT SETS US APART</span>
          </motion.div>
        </div>

        {/* Features Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="features-grid"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(6, 14, 58, 0.6)",
              }}
              className="glass-panel group"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px",
                textAlign: "left",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                height: "100%"
              }}
            >
              {/* Internal layout */}
              <div>
                {/* Feature Badge */}
                <span
                  className="font-display"
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: "bold",
                    letterSpacing: "0.2em",
                    color: "var(--accent-gold)",
                    backgroundColor: "rgba(245, 197, 24, 0.1)",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: "24px",
                    border: "1px solid rgba(245, 197, 24, 0.2)"
                  }}
                >
                  {feat.badge}
                </span>

                {/* Circular Logo Icon */}
                <div className="feature-icon-container" style={{ color: "var(--accent-gold)" }}>
                  {feat.icon}
                </div>

                {/* Typography Header */}
                <h3 className="feature-title">
                  {feat.title}
                </h3>

                {/* Description Body */}
                <p className="feature-desc">
                  {feat.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-gold to-light-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Trust Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="why-cta-banner"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Landmark className="text-accent-gold" style={{ flexShrink: 0, animation: "pulse 2s infinite" }} size={26} />
            <p style={{ margin: 0 }}>
              Looking for a secure global future? Our government auditing ensures your records are 100% safeguarded.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "0.9rem" }}
          >
            LET&apos;S CONVERSATE
          </button>
        </motion.div>

      </div>
    </section>
  );
}
