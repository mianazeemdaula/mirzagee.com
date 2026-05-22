"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About / Licence", href: "#about" },
  { name: "Registrations", href: "#registrations" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo Brand Area */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="nav-brand group"
          >
            <div className="brand-logo">
              {/* Globe Icon held by hands (styled via SVG overlay) */}
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10 text-accent-gold transition-transform duration-700 group-hover:rotate-12"
              >
                {/* Globe lines */}
                <circle cx="50" cy="45" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,1" opacity="0.3" className="animate-spin-slow" />
                <circle cx="50" cy="45" r="22" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
                <path d="M50,23 A22,22 0 0,0 50,67 Z" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
                <path d="M50,23 A22,22 0 0,1 50,67 Z" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
                <line x1="28" y1="45" x2="72" y2="45" stroke="#4A90D9" strokeWidth="1.5" />
                <line x1="33.5" y1="30" x2="66.5" y2="30" stroke="#4A90D9" strokeWidth="1.2" opacity="0.7" />
                <line x1="33.5" y1="60" x2="66.5" y2="60" stroke="#4A90D9" strokeWidth="1.2" opacity="0.7" />
                
                {/* Hand cradles aligned with globe */}
                <path
                  d="M18,55 C25,58 35,63 45,66 C47,67 47,69 44,71 C36,75 26,75 18,70 C16,65 16,60 18,55 Z"
                  fill="currentColor"
                  opacity="0.85"
                />
                <path
                  d="M82,55 C75,58 65,63 55,66 C53,67 53,69 56,71 C64,75 74,75 82,70 C84,65 84,60 82,55 Z"
                  fill="currentColor"
                  opacity="0.85"
                />
              </svg>
            </div>

            <div className="brand-text">
              <span className="brand-name">MIRZA GEE</span>
              <span className="brand-subname">MANPOWER SERVICES</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu-desktop">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={activeSection === link.href.substring(1) ? "active" : ""}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        layoutId="activeTab"
                        className="nav-active-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleLinkClick("#contact")}
              className="btn-primary nav-cta"
            >
              <PhoneCall size={14} />
              GET IN TOUCH
            </button>
          </nav>

          {/* Mobile Menu Buttons */}
          <div className="nav-mobile-buttons">
            <button
              onClick={() => handleLinkClick("#contact")}
              className="nav-mobile-call"
              aria-label="Call Us"
            >
              <PhoneCall size={16} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-mobile-toggle"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="nav-drawer-overlay"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="nav-drawer-panel"
            >
              <div>
                <div className="nav-drawer-header">
                  <span>NAVIGATION</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="nav-drawer-close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <nav>
                  <ul className="nav-drawer-list">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(link.href);
                          }}
                          className={`nav-drawer-link ${
                            activeSection === link.href.substring(1) ? "active" : ""
                          }`}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="nav-drawer-footer">
                <p className="font-display" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
                  Licence No. MPD/2671/Lhr
                </p>
                <button
                  onClick={() => handleLinkClick("#contact")}
                  className="btn-primary"
                  style={{ fontSize: "0.9rem", padding: "10px 20px" }}
                >
                  <PhoneCall size={16} />
                  CONTACT US NOW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
