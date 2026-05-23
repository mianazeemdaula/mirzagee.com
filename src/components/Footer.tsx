"use client";

import { ArrowUp, Star, Award, Phone, Mail, MapPin, Shield } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#07123A] border-t border-[rgba(245,197,24,0.2)] pt-16 pb-8 overflow-hidden font-body text-gray-300">
      {/* Subtle world-grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(var(--light-blue) 1.2px, transparent 1px)`,
        backgroundSize: "24px 24px"
      }} />

      <div className="container-width px-6 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1 - Logo & Tagline (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 cursor-pointer mb-4" onClick={() => handleScrollTo("home")}>
              <div className="relative w-12 h-12 flex items-center justify-center bg-white border border-accent-gold rounded-full shadow-lg overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Mirza Gee Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-xl text-white tracking-wider leading-none">MIRZA GEE</span>
                <span className="font-display text-[9px] font-bold tracking-[0.2em] text-accent-gold uppercase mt-1 leading-none">MANPOWER SERVICES</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Connecting Pakistan&apos;s finest talent with Saudi Arabia &amp; the Middle East since 2008. Dedicated to international human resource standards and client satisfaction.
            </p>

            <div className="italic text-accent-gold font-arabic text-lg tracking-wide mb-6">
              &ldquo;درست وقت پر، درست کام کے لیے، درست انسان کا انتخاب۔&rdquo;
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-all duration-300 text-gray-300"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-all duration-300 text-gray-300"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <div
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold hover:text-accent-gold flex items-center justify-center transition-all duration-300 cursor-pointer"
                onClick={() => handleScrollTo("credentials")}
                title="Licensed Promoter"
              >
                <Shield size={16} />
              </div>
            </div>
          </div>

          {/* Col 2 - Quick Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-4 border-b border-white/5 pb-2 w-full">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button onClick={() => handleScrollTo("home")} className="hover:text-accent-gold transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("about")} className="hover:text-accent-gold transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-accent-gold transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("process")} className="hover:text-accent-gold transition-colors">
                  Recruitment Process
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("clients")} className="hover:text-accent-gold transition-colors">
                  Valued Clients
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("team")} className="hover:text-accent-gold transition-colors">
                  Leadership Team
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("contact")} className="hover:text-accent-gold transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 - Services (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-4 border-b border-white/5 pb-2 w-full">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-accent-gold transition-colors">
                  End-to-End Recruitment
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-accent-gold transition-colors">
                  Consulate Visa Processing
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-accent-gold transition-colors">
                  Dataflow Verification Support
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-accent-gold transition-colors">
                  HEC & MOFA Document Attestation
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-accent-gold transition-colors">
                  QVP Professional Accreditation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 - Contact Summary (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-4 border-b border-white/5 pb-2 w-full">
              Contact Desk
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="text-accent-gold mt-1 shrink-0" />
                <span className="leading-relaxed text-gray-400">
                  Suite #05, 1st Floor, Shan Arcade, Barkat Market, Garden Town, Lahore, Pakistan
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={14} className="text-accent-gold shrink-0" />
                <a href="tel:+924235941551" className="hover:text-accent-gold transition-colors">
                  +92 42 35941551
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={14} className="text-accent-gold shrink-0" />
                <a href="mailto:mirzagee79@yahoo.co.uk" className="hover:text-accent-gold transition-colors break-all">
                  mirzagee79@yahoo.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Double-Motto Bottom Section */}
        <div className="border-t border-white/5 pt-8 mb-6 flex flex-col items-center text-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-display font-black text-xs md:text-sm tracking-widest text-accent-gold uppercase">
            <Star size={10} className="fill-accent-gold" />
            <span>Right Person for the Right Job at the Right Time</span>
            <Star size={10} className="fill-accent-gold" />
            <span className="hidden sm:inline text-gray-600">|</span>
            <Star size={10} className="fill-accent-gold" />
            <span className="text-light-blue">Your Success is Our Mission</span>
            <Star size={10} className="fill-accent-gold" />
          </div>
        </div>

        {/* Bottom copyright & Licencing details */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <p>
              © 2026 Mirza Gee Manpower Services. All Rights Reserved.
            </p>
            <p className="text-[10px] uppercase tracking-wider text-gray-600">
              OEP License No. MPD/2671/LHR | NTN: 3168005-4
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="footer-license-badge inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/10 rounded-full">
              <Award className="text-accent-gold" size={12} />
              <span className="font-display font-bold text-[9px] tracking-wider text-accent-gold uppercase">
                Licence No. MPD/2671/Lhr
              </span>
            </div>

            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-accent-gold hover:text-dark-navy border border-white/10 text-white transition-all shadow-lg flex items-center justify-center group shrink-0"
              title="Scroll back to Top"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
