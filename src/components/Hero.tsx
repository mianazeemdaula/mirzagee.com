"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Plane, Award, ShieldCheck, Calendar, Building2, Globe, Shield } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const leftItemVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const rightItemVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const cardVariants = (delay: number): Variants => ({
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
      },
    },
  });

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const backgroundStars = [
    { top: "12%", left: "15%", size: 16, delay: 0 },
    { top: "28%", left: "82%", size: 24, delay: 1.5 },
    { top: "68%", left: "10%", size: 20, delay: 3 },
    { top: "52%", left: "88%", size: 18, delay: 0.8 },
    { top: "78%", left: "75%", size: 22, delay: 2.2 },
    { top: "10%", left: "55%", size: 14, delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="hero radial-gradient-bg relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pb-0"
    >
      {/* Background World Dot-Grid Overlay */}
      <div className="grid-overlay" />

      {/* Twinkling Background Modern Stars */}
      {backgroundStars.map((star, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            pointerEvents: "none",
            zIndex: 2,
            color: "var(--accent-gold)",
            opacity: 0.6,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 4 + (idx % 3),
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor" style={{ width: "100%", height: "100%" }}>
            <path d="M50,0 Q50,50 10,50 Q50,50 50,100 Q50,50 90,50 Q50,50 50,0 Z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating Animated Abstract Orbs for Depth */}
      <div
        className="animate-float-slow"
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          backgroundColor: "rgba(91, 159, 212, 0.12)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-float-medium"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "20%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          backgroundColor: "rgba(245, 197, 24, 0.06)",
          filter: "blur(120px)",
          animationDelay: "2.5s",
          pointerEvents: "none",
        }}
      />

      {/* Looping Animated SVG Airplane */}
      <div className="animate-airplane" style={{ width: "120px", height: "120px" }}>
        <svg
          viewBox="0 0 100 100"
          className="text-accent-gold"
          style={{
            width: "100%",
            height: "100%",
            filter: "drop-shadow(0 0 15px rgba(245, 197, 24, 0.4))",
          }}
        >
          {/* Sleek Jet SVG Shape */}
          <path
            d="M50,10 C53,25 58,40 75,55 L75,60 L56,52 L53,75 L62,85 L62,90 L50,85 L38,90 L38,85 L47,75 L44,52 L25,60 L25,55 C42,40 47,25 50,10 Z"
            fill="currentColor"
            transform="rotate(45, 50, 50)"
          />
          {/* Engine Glow Dot */}
          <circle cx="50" cy="78" r="4" fill="#FFF" className="animate-ping" />
          <circle cx="50" cy="78" r="2.5" fill="#FFF" />
          {/* Vapor Trails */}
          <path
            d="M30,95 L15,110 M40,98 L25,115 M60,98 L75,115 M70,95 L85,110"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container-width px-6 lg:px-8 z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column - Typography and Licensing */}
          <motion.div className="lg:col-span-7 flex flex-col items-start text-left" variants={leftItemVariants}>
            {/* Small Gold Pill Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[rgba(245,197,24,0.3)] bg-[rgba(255,255,255,0.04)] backdrop-blur-md">
              <Award className="text-accent-gold" size={18} style={{ animation: "bounce 2s infinite" }} />
              <span className="text-accent-gold font-display text-sm font-bold tracking-wider uppercase">
                ✦ Working as Leading Employment Promoters
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="hero-title text-5xl lg:text-7xl font-extrabold text-white leading-none font-display mb-1 flex flex-col">
              <span>MIRZA GEE</span>
              <span className="text-gradient-blue text-4xl lg:text-6xl font-black mt-2 tracking-wide text-light-blue">
                MANPOWER SERVICES
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-300 font-body text-lg lg:text-xl mt-4 mb-6 max-w-2xl leading-relaxed">
              Connecting Pakistan&apos;s finest talent with Saudi Arabia &amp; the Middle East since 2008. Trusted by premium clinics, industrial giants, and hospitality leaders.
            </p>

            {/* Gold Horizontal Divider */}
            <div className="w-24 h-1 bg-accent-gold rounded-full mb-6" />

            {/* Government Licence Badge Box */}
            <div className="w-full max-w-xl bg-gradient-to-r from-[rgba(10,31,107,0.4)] to-[rgba(6,14,58,0.4)] border border-[rgba(245,197,24,0.25)] rounded-2xl p-5 mb-8 flex gap-4 items-start shadow-xl backdrop-blur-sm hover:border-[rgba(245,197,24,0.5)] transition-all">
              <div className="bg-[rgba(245,197,24,0.1)] p-3 rounded-xl border border-[rgba(245,197,24,0.2)] text-accent-gold">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-lg tracking-wide flex items-center gap-2">
                  🏛 Government of Pakistan Official Licence
                </h3>
                <p className="text-accent-gold font-display font-semibold text-base mt-0.5">
                  OEP Licence No. MPD/2671/LHR
                </p>
                <p className="text-gray-400 text-xs mt-1 font-body leading-relaxed">
                  Ministry of Overseas Pakistanis & Human Resource Development (HRD)<br />
                  Bureau of Emigration & Overseas Employment
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("services")}
                className="btn-primary"
              >
                Our Services
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="btn-secondary"
              >
                <Plane size={18} style={{ transform: "rotate(45deg)" }} />
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Column - Spinning Globe & Floating Cards */}
          <motion.div className="lg:col-span-5 relative flex items-center justify-center h-[500px]" variants={rightItemVariants}>
            {/* Spinning Globe Container */}
            <div className="relative w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(74,144,217,0.15)] to-[rgba(245,197,24,0.05)] rounded-full blur-3xl" />

              {/* Animated Rotating Globe SVG */}
              <svg
                viewBox="0 0 200 200"
                className="animate-spin-slow w-full h-full text-light-blue opacity-85"
                style={{
                  filter: "drop-shadow(0 0 25px rgba(74, 144, 217, 0.35))",
                }}
              >
                {/* Outer Ring */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" className="opacity-40" />
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
                
                {/* Globe Sphere grid */}
                {/* Latitudes */}
                <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-30" />
                <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-30" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1.5" className="opacity-50" />
                
                {/* Longitudes */}
                <ellipse cx="100" cy="100" rx="30" ry="90" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-30" />
                <ellipse cx="100" cy="100" rx="60" ry="90" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-30" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1.5" className="opacity-50" />

                {/* Map Silhouette nodes (Little glowing stars/dots representing main target cities) */}
                {/* Middle East Nodes */}
                <circle cx="85" cy="92" r="3.5" fill="var(--accent-gold)" className="animate-ping" style={{ animationDuration: "3s" }} />
                <circle cx="85" cy="92" r="2.5" fill="var(--accent-gold)" />
                
                {/* Pakistan Nodes */}
                <circle cx="120" cy="78" r="3.5" fill="var(--accent-gold)" className="animate-ping" style={{ animationDuration: "2.5s" }} />
                <circle cx="120" cy="78" r="2.5" fill="var(--accent-gold)" />

                {/* Gulf Nodes */}
                <circle cx="70" cy="105" r="2" fill="#FFF" />
                <circle cx="105" cy="115" r="2" fill="#FFF" />
                <circle cx="140" cy="110" r="2.5" fill="#FFF" />
                <circle cx="60" cy="70" r="1.5" fill="#FFF" />
                <circle cx="150" cy="65" r="2" fill="#FFF" />
                <circle cx="115" cy="135" r="1.5" fill="#FFF" />
              </svg>

              {/* Inner core branding element */}
              <div className="absolute w-24 h-24 bg-dark-navy border-2 border-accent-gold rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(245,197,24,0.25)] z-20">
                <span className="font-display font-black text-xs text-white tracking-widest leading-none">MIRZA</span>
                <span className="font-display font-black text-xs text-accent-gold tracking-widest mt-0.5 leading-none">GEE</span>
                <span className="font-body text-[8px] text-gray-400 uppercase tracking-widest mt-1">EST. 2008</span>
              </div>
            </div>

            {/* 4 Floating Absolute Cards Around Globe */}
            {/* Card 1: Est. 2008 (Top-Left) */}
            <motion.div
              variants={cardVariants(0.4)}
              className="absolute top-4 left-0 bg-[rgba(6,14,58,0.7)] hover:bg-[rgba(6,14,58,0.95)] border border-[rgba(255,255,255,0.1)] hover:border-accent-gold rounded-2xl p-3 flex items-center gap-3 shadow-lg backdrop-blur-md z-30 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ minWidth: "140px" }}
            >
              <div className="bg-[rgba(245,197,24,0.1)] p-2 rounded-xl text-accent-gold">
                <Calendar size={18} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none">Established</div>
                <div className="text-sm font-display font-bold text-white mt-1 leading-none">Year 2008</div>
              </div>
            </motion.div>

            {/* Card 2: 25+ Major Clients (Top-Right) */}
            <motion.div
              variants={cardVariants(0.6)}
              className="absolute top-12 right-0 bg-[rgba(6,14,58,0.7)] hover:bg-[rgba(6,14,58,0.95)] border border-[rgba(255,255,255,0.1)] hover:border-accent-gold rounded-2xl p-3 flex items-center gap-3 shadow-lg backdrop-blur-md z-30 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ minWidth: "165px" }}
            >
              <div className="bg-[rgba(74,144,217,0.1)] p-2 rounded-xl text-light-blue">
                <Building2 size={18} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none">Corporates</div>
                <div className="text-sm font-display font-bold text-white mt-1 leading-none">25+ Major Clients</div>
              </div>
            </motion.div>

            {/* Card 3: KSA & Gulf (Bottom-Left) */}
            <motion.div
              variants={cardVariants(0.8)}
              className="absolute bottom-12 left-2 bg-[rgba(6,14,58,0.7)] hover:bg-[rgba(6,14,58,0.95)] border border-[rgba(255,255,255,0.1)] hover:border-accent-gold rounded-2xl p-3 flex items-center gap-3 shadow-lg backdrop-blur-md z-30 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ minWidth: "145px" }}
            >
              <div className="bg-[rgba(74,144,217,0.1)] p-2 rounded-xl text-light-blue">
                <Globe size={18} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none">Core Markets</div>
                <div className="text-sm font-display font-bold text-white mt-1 leading-none">KSA & GCC Gulf</div>
              </div>
            </motion.div>

            {/* Card 4: Govt. Licensed (Bottom-Right) */}
            <motion.div
              variants={cardVariants(1.0)}
              className="absolute bottom-6 right-2 bg-[rgba(6,14,58,0.7)] hover:bg-[rgba(6,14,58,0.95)] border border-[rgba(255,255,255,0.1)] hover:border-accent-gold rounded-2xl p-3 flex items-center gap-3 shadow-lg backdrop-blur-md z-30 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ minWidth: "155px" }}
            >
              <div className="bg-[rgba(245,197,24,0.1)] p-2 rounded-xl text-accent-gold">
                <Shield size={18} />
              </div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none">Credential</div>
                <div className="text-sm font-display font-bold text-white mt-1 leading-none">Govt. Licensed</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Bottom Section Transition */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "96px",
          backgroundImage: "linear-gradient(to top, var(--dark-navy), transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
