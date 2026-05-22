"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Plane, Star, Award, ShieldCheck } from "lucide-react";

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

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

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
      className="hero radial-gradient-bg"
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
          top: "25%",
          left: "25%",
          width: "384px",
          height: "384px",
          borderRadius: "50%",
          backgroundColor: "rgba(74, 144, 217, 0.1)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-float-medium"
        style={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          backgroundColor: "rgba(245, 197, 24, 0.05)",
          filter: "blur(120px)",
          animationDelay: "2s",
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

      <div className="hero-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          {/* Hero Badge */}
          <motion.div
            variants={itemVariants}
            className="hero-badge"
          >
            <Award className="text-accent-gold" size={20} style={{ animation: "bounce 2s infinite" }} />
            <span>
              Working as LEADING Overseas Employment Promoters
            </span>
          </motion.div>

          {/* Main Typography Header */}
          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            MIRZA GEE
          </motion.h1>

          {/* Sub-name */}
          <motion.div
            variants={itemVariants}
            className="hero-subtitle"
          >
            MANPOWER SERVICES
          </motion.div>

          {/* Mottos Block */}
          <motion.div variants={itemVariants} className="hero-mottos">
            <div className="motto-item">
              <ShieldCheck className="text-accent-gold" size={18} />
              <span>
                Right Person for the Right Job at the Right Time
              </span>
            </div>
            <div className="hero-dot" />
            <div className="motto-item">
              <Star className="text-accent-gold" style={{ fill: "var(--accent-gold)" }} size={14} />
              <span>
                Your Success is Our Mission
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-buttons"
          >
            <button
              onClick={() => handleScrollTo("contact")}
              className="btn-primary"
            >
              Contact Us Now
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleScrollTo("services")}
              className="btn-secondary"
            >
              <Plane size={18} style={{ transform: "rotate(45deg)" }} />
              Our Services
            </button>
          </motion.div>

          {/* Government License Stamp Indicator */}
          <motion.div
            variants={itemVariants}
            className="hero-license-strip"
          >
            <span>Approved & Licensed by Government of Pakistan</span>
            <span style={{ color: "var(--accent-gold)", fontWeight: "bold" }}>•</span>
            <span style={{ color: "var(--accent-gold)", fontWeight: "bold" }}>Licence No. MPD/2671/Lhr</span>
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
