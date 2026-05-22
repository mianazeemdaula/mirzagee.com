"use client";

import { motion } from "framer-motion";
import { ArrowUp, Star, Award } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040A2C] border-t-2 border-accent-gold/20 py-16 overflow-hidden">
      {/* Subtle world-grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(var(--light-blue) 1.2px, transparent 1px)`,
        backgroundSize: "24px 24px"
      }} />

      <div className="container-width px-6 relative z-10 footer-container">
        
        {/* Mottos Block with Golden Stars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="footer-mottos"
        >
          {/* Motto 1 */}
          <div className="footer-motto-row">
            <Star className="text-accent-gold fill-accent-gold" size={14} />
            <h4 className="footer-motto-text">
              RIGHT PERSON FOR THE RIGHT JOB AT THE RIGHT TIME
            </h4>
            <Star className="text-accent-gold fill-accent-gold" size={14} />
          </div>

          {/* Urdu Translation of Motto 1 - highly typeset in custom typography */}
          <div className="text-accent-gold/85 text-base md:text-lg font-medium leading-relaxed my-1 tracking-wide" style={{ fontFamily: "cursive, serif" }}>
            "درست وقت پر، درست کام کے لیے، درست انسان کا انتخاب۔"
          </div>

          {/* Golden Star Dividers */}
          <div className="footer-divider">
            <div style={{ height: "1px", backgroundColor: "rgba(245, 197, 24, 0.3)", flex: 1 }} />
            <Star className="text-accent-gold fill-accent-gold animate-pulse" size={10} />
            <div style={{ height: "1px", backgroundColor: "rgba(245, 197, 24, 0.3)", flex: 1 }} />
          </div>

          {/* Motto 2 */}
          <span className="font-display text-sm md:text-base font-extrabold tracking-[0.25em] text-light-blue uppercase">
            YOUR SUCCESS IS OUR MISSION
          </span>
        </motion.div>

        {/* License & Corporate Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-3.5 mb-10"
        >
          <div className="footer-license-badge">
            <Award className="text-accent-gold" size={18} />
            <span className="font-display font-bold text-xs tracking-wider text-accent-gold uppercase leading-none">
              Licence No. MPD/2671/Lhr
            </span>
          </div>
          <p className="text-white/40 text-[0.7rem] md:text-xs max-w-md uppercase tracking-wider leading-relaxed">
            Approved under Bureau of Emigration & Overseas Employment,<br />
            Ministry of Overseas Pakistanis & Human Resource Development, Government of Pakistan.
          </p>
        </motion.div>

        {/* Bottom copyright and scrolling anchor */}
        <div className="footer-bottom-row">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.025em" }}>
            © 2025 Mirza Gee Manpower Services. All rights reserved.
          </p>

          <p className="uppercase font-light" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.65rem", letterSpacing: "0.05em" }}>
            Designed to ensure Premium Overseas Agency Authority
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-accent-gold hover:text-dark-navy border border-white/10 text-white transition-all shadow-lg flex items-center justify-center group"
            title="Scroll back to Top"
            style={{ cursor: "pointer" }}
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
