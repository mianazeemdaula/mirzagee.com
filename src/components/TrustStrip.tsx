"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function TrustStrip() {
  return (
    <section
      id="about"
      className="trust-section"
    >
      {/* Background overlay pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.05,
          backgroundImage: `radial-gradient(var(--accent-gold) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          position: "absolute",
        }}
      />

      <div className="trust-container">
        {/* Government of Pakistan Custom SVG Emblem on Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="trust-left"
        >
          {/* Highly customized Vector Government Seal */}
          <div className="pakistan-seal">
            <svg
              viewBox="0 0 100 100"
              style={{
                width: "80px",
                height: "80px",
                color: "var(--accent-gold)",
              }}
            >
              {/* Outer Ring */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
              
              {/* Wreath branches (laurel) */}
              <path d="M18,50 C18,70 30,85 50,85 C70,85 82,70 82,50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Left leaves */}
              <circle cx="21" cy="68" r="2" fill="currentColor" />
              <circle cx="27" cy="76" r="2" fill="currentColor" />
              <circle cx="37" cy="81" r="2" fill="currentColor" />
              <circle cx="47" cy="83" r="2" fill="currentColor" />
              
              {/* Right leaves */}
              <circle cx="79" cy="68" r="2" fill="currentColor" />
              <circle cx="73" cy="76" r="2" fill="currentColor" />
              <circle cx="63" cy="81" r="2" fill="currentColor" />
              <circle cx="53" cy="83" r="2" fill="currentColor" />

              {/* Inner Shield (divided in 4 parts representing crops) */}
              <rect x="36" y="32" width="28" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="50" y1="32" x2="50" y2="64" stroke="currentColor" strokeWidth="1" />
              <line x1="36" y1="48" x2="64" y2="48" stroke="currentColor" strokeWidth="1" />
              
              {/* Agricultural crops markers */}
              <path d="M41,38 Q43,35 45,38 Q43,41 41,38 Z" fill="currentColor" opacity="0.8" /> {/* Cotton */}
              <path d="M55,38 Q57,35 59,38 Q57,41 55,38 Z" fill="currentColor" opacity="0.8" /> {/* Jute */}
              <path d="M41,54 Q43,51 45,54 Q43,57 41,54 Z" fill="currentColor" opacity="0.8" /> {/* Tea */}
              <path d="M55,54 Q57,51 59,54 Q57,57 55,54 Z" fill="currentColor" opacity="0.8" /> {/* Wheat */}

              {/* Crescent & Star (at the top center) */}
              <path d="M44,20 A10,10 0 1,1 56,20 A8,8 0 1,0 44,20 Z" fill="currentColor" />
              <polygon points="53,13 54,16 57,16 55,18 56,21 53,19 50,21 51,18 49,16 52,16" fill="currentColor" />
              
              {/* Scroll Banner at bottom */}
              <path d="M26,88 Q50,83 74,88" fill="none" stroke="currentColor" strokeWidth="2.5" />
              
              {/* Tiny texts indicating State emblem */}
              <text x="50" y="93" fill="currentColor" fontSize="3.5" textAnchor="middle" fontWeight="bold" letterSpacing="0.5">PAKISTAN</text>
            </svg>
            <div className="absolute inset-0 border-2 border-accent-gold/20 rounded-full animate-border-glow" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: "50%" }} />
          </div>

          <div className="seal-text">
            <span className="seal-title">
              TRUSTWORTHY
            </span>
            <span className="seal-subtitle">
              OVERSEAS EMPLOYMENT PROMOTERS
            </span>
            <p className="seal-desc">
              Licensed overseas facilitators offering government-verified candidate matchmaking. Authenticated under the Ministry of Overseas Pakistanis and Bureau of Emigration.
            </p>
          </div>
        </motion.div>

        {/* Licenses details in Middle & Right */}
        <div className="trust-right-info">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="licensed-by-text"
          >
            <span className="licensed-title">
              Licensed By
            </span>
            <span className="licensed-mop">
              Ministry of Overseas Pakistanis & Human Resource Development
            </span>
            <span className="licensed-boe">
              Bureau of Emigration & Overseas Employment
            </span>
          </motion.div>

          {/* Glowing License Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
            className="license-box animate-pulse-gold"
          >
            <Award style={{ color: "var(--accent-gold)", flexShrink: 0 }} size={28} />
            <div className="license-box-text">
              <span className="license-box-label">
                REGISTRATION ID
              </span>
              <span className="license-box-number">
                MPD/2671/Lhr
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(245, 197, 24, 0.05)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
