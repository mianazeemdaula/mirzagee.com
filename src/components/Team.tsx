"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Mr. Ihsan ul Haq Mirza",
      degree: "MBA",
      role: "Manager Human Resource",
      email: "mirzaihsan@yahoo.com",
      phone: "00923009427436",
      phoneDisplay: "0092 300 9427436",
      initials: "IHM",
    },
    {
      name: "Mr. Muhammad Azeem Mirza",
      degree: "M.Sc Pol. Sciences",
      role: "Coordinator Human Resource",
      email: "mirzaazeem85@yahoo.com",
      phone: "00923336967078",
      phoneDisplay: "0092 333 6967078",
      initials: "MAM",
    },
    {
      name: "Mr. Muhammad Kamran Mirza",
      degree: "Master of Commerce",
      role: "Manager Accounts & Finance",
      email: "mirzagee79@yahoo.co.uk",
      phone: "00923336979363",
      phoneDisplay: "0092 333 6979363",
      initials: "MKM",
    },
    {
      name: "Mr. Ahmad Raza Chishti",
      degree: "Master of Commerce",
      role: "Manager Administrative Affairs",
      email: "razachishti80@yahoo.com",
      phone: "00923334318739",
      phoneDisplay: "0092 333 4318739",
      initials: "ARC",
    },
    {
      name: "Mr. Ahmad Shujah Chishti",
      degree: "MBA Finance",
      role: "Public Relation Officer",
      email: "Shujah_fareed@yahoo.com",
      phone: "00923454309309",
      phoneDisplay: "0092 345 4309309",
      initials: "ASC",
    },
    {
      name: "Mr. Muhmmad Ahmad Masood",
      degree: "BBA",
      role: "Manager Visa Processing",
      email: "ahmad_masood2004@yahoo.com",
      phone: "00923347446685",
      phoneDisplay: "0092 334 7446685",
      initials: "MAM",
    },
  ];

  const branchManager = {
    name: "Mr. Tariq Saeed",
    degree: "MA Arabic",
    role: "Branch Manager (Islamabad)",
    email: "trq_saeed@hotmail.com",
    phone: "00923215232253",
    phoneDisplay: "0092 321 5232253",
    initials: "TS",
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="team" className="relative w-full bg-[#07123A] py-20 md:py-28 overflow-hidden">
      {/* Light sky blue background accents */}
      <div 
        style={{
          position: "absolute",
          top: "40%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(85, 153, 226, 0.08)",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-width px-6 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
          >
            OUR MANAGEMENT TEAM
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
          >
            <span className="text-light-blue">Executive Leadership Panel</span>
          </motion.div>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mt-4 font-normal" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            A dedicated division of highly certified and seasoned recruitment managers facilitating secure talent placement.
          </p>
        </div>

        {/* 6-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(6, 14, 58, 0.5)",
                borderColor: "rgba(245, 197, 24, 0.3)",
              }}
              className="relative p-8 bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl text-center group flex flex-col justify-between items-center overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Avatar Initials Placeholder styled beautifully */}
                <div className="w-20 h-24 rounded-2xl bg-gradient-to-br from-[#07123A] to-[#162870] text-accent-gold flex items-center justify-center font-display font-black text-2xl shadow-inner relative z-10 transition-transform duration-500 group-hover:scale-105">
                  {member.initials}
                  {/* Subtle inner shield lines */}
                  <div className="absolute inset-2 border border-white/5 rounded-xl pointer-events-none" />
                </div>

                {/* Info Text */}
                <h3 className="font-display text-white font-bold text-xl tracking-wide mt-6 group-hover:text-light-blue transition-colors duration-200">
                  {member.name}
                </h3>
                <span className="text-[10px] bg-accent-gold/10 border border-accent-gold/20 text-accent-gold px-3 py-0.5 rounded-full font-bold uppercase tracking-widest mt-1.5 inline-block">
                  {member.degree}
                </span>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mt-3" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  {member.role}
                </p>
              </div>

              {/* Action Contact Triggers */}
              <div className="w-full flex gap-3 mt-8 pt-6 border-t border-white/5 relative z-10">
                <a
                  href={`mailto:${member.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-gold/20 text-gray-300 hover:text-accent-gold transition-all text-xs font-bold uppercase tracking-wide"
                  style={{ textDecoration: "none" }}
                  title="Send Email"
                >
                  <Mail size={14} className="text-accent-gold" />
                  Email
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-light-blue hover:bg-white text-dark-navy hover:text-dark-navy transition-all text-xs font-bold uppercase tracking-wide"
                  style={{ textDecoration: "none" }}
                  title="Call Manager"
                >
                  <Phone size={14} />
                  Call
                </a>
              </div>

              {/* Side badge accent decorative */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent-gold/5 rounded-bl-full pointer-events-none -z-0" />
            </motion.div>
          ))}
        </motion.div>

        {/* Branch Manager Showcase (Separate Card Below) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative p-8 bg-gradient-to-r from-[#07123A] to-[#162870] border border-accent-gold/25 rounded-3xl text-left shadow-xl overflow-hidden group flex flex-col sm:flex-row items-center gap-8 hover:border-accent-gold/50 transition-colors duration-300">
            {/* Left side initials */}
            <div className="w-20 h-24 rounded-2xl bg-white/5 border-2 border-accent-gold text-accent-gold flex items-center justify-center font-display font-black text-2xl shadow-md relative z-10">
              {branchManager.initials}
              <div className="absolute inset-1 border border-accent-gold/15 rounded-xl pointer-events-none" />
            </div>

            {/* Middle Content */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
                <h3 className="font-display text-white font-bold text-2xl tracking-wide">
                  {branchManager.name}
                </h3>
                <span className="text-[10px] bg-accent-gold/15 border border-accent-gold/35 text-accent-gold px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                  {branchManager.degree}
                </span>
              </div>
              <p className="text-[#87BDEF] text-sm font-semibold uppercase tracking-wider mt-1.5 flex items-center justify-center sm:justify-start gap-1.5" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                <Award size={14} className="text-accent-gold" />
                {branchManager.role}
              </p>
              <span className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-1 flex items-center justify-center sm:justify-start gap-1">
                <MapPin size={12} className="text-accent-gold" />
                Islamabad Branch
              </span>
            </div>

            {/* Right Action buttons */}
            <div className="w-full sm:w-auto flex sm:flex-col gap-3 relative z-10">
              <a
                href={`mailto:${branchManager.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-accent-gold transition-all text-xs font-bold uppercase tracking-wide"
                style={{ textDecoration: "none" }}
              >
                <Mail size={14} />
                Email
              </a>
              <a
                href={`tel:${branchManager.phone}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-accent-gold hover:bg-white text-dark-navy hover:text-[#0B1F5C] transition-all text-xs font-bold uppercase tracking-wide"
                style={{ textDecoration: "none" }}
              >
                <Phone size={14} />
                Call
              </a>
            </div>

            {/* Background globe illustration */}
            <div className="absolute right-0 bottom-0 top-0 w-32 bg-white/[0.01] rounded-l-full flex items-center justify-center opacity-30 pointer-events-none -z-0">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-dashed border-white/10" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
