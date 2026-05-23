"use client";

import { motion, Variants } from "framer-motion";
import { Building2, CheckCircle } from "lucide-react";

export default function Clients() {
  const clients = [
    { id: 1, name: "King Fahd Armed Forces Hospital", city: "Jeddah", type: "Medical" },
    { id: 2, name: "Armed Forces Hospitals Southern Region", city: "Khamis Mushayt", type: "Medical" },
    { id: 3, name: "King Fahd Military Medical Complex", city: "Dhahran", type: "Medical" },
    { id: 4, name: "Security Forces Hospital Program", city: "Riyadh", type: "Medical" },
    { id: 5, name: "King Fahd National Guard Hospital (NGHA)", city: "Riyadh", type: "Medical" },
    { id: 6, name: "Prince Sultan Cardiac Center", city: "Riyadh", type: "Medical" },
    { id: 7, name: "Dallah Health Care Company", city: "Riyadh", type: "Corporate" },
    { id: 8, name: "Dallah Namar Hospital", city: "Riyadh", type: "Medical" },
    { id: 9, name: "Al Dukheil Financial Group", city: "Riyadh", type: "Corporate" },
    { id: 10, name: "Al Abeer International Medical Group", city: "Jeddah", type: "Medical" },
    { id: 11, name: "Dr. Abdur Rehman Al Mashari Hospital", city: "Riyadh", type: "Medical" },
    { id: 12, name: "Al Jarir Medical Center", city: "Riyadh", type: "Medical" },
    { id: 13, name: "National Medical Care Co", city: "Riyadh", type: "Medical" },
    { id: 14, name: "Shefa Specialized Hospital", city: "Najran", type: "Medical" },
    { id: 15, name: "Delta Modern Food Factory", city: "Dammam", type: "Corporate" },
    { id: 16, name: "Al Garni Eye Center", city: "Bisha", type: "Medical" },
    { id: 17, name: "Eye Specialist Center", city: "Medina", type: "Medical" },
    { id: 18, name: "Saudi National Hospital", city: "Makkah", type: "Medical" },
    { id: 19, name: "Al Wafa Hospital", city: "Omaizah", type: "Medical" },
    { id: 20, name: "Al Qaseem National Hospital", city: "Buridah", type: "Medical" },
    { id: 21, name: "Saad Specialist Hospital", city: "Al Khobar", type: "Medical" },
    { id: 22, name: "Dr. Hamid S. Al Ahmad Hospital", city: "Madiah", type: "Medical" },
    { id: 23, name: "Dr. Sulaiman Al Habib Medical Group", city: "Riyadh", type: "Medical" },
    { id: 24, name: "Jeddah National Hospital", city: "Jeddah", type: "Medical" },
    { id: 25, name: "National Tri Generation CHP Co (NTCC)", city: "Riyadh", type: "Corporate" },
  ];

  const referencedClients = [
    "National Guard Health Affairs (NGHA)",
    "Ministry of Defense (MOD)",
    "Ministry of Health (MOH)",
    "King Abdul Aziz University Jeddah",
    "King Saud University",
    "Royal Commission Hospital Jubail",
    "Dr. Suleiman Al Habib Hospitals",
    "Almana General Hospitals Group",
    "Al-Fakhry Hospital Al-Khobar",
    "Bashrahil Hospital, Makkah",
    "Samama Operations & Management Co. Riyadh",
    "Nespak Riyadh Saudi Arabia",
    "Meridean Hotel Jeddah",
    "Inter Continental Hotel, Jeddah",
    "Arj Engineering Company Dubai",
    "Civil Co Construction Company Dubai",
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
  };

  return (
    <section id="clients" className="relative w-full bg-[#07123A] py-20 md:py-28 overflow-hidden">
      {/* Background world grid */}
      <div className="grid-overlay" style={{ opacity: 0.05, position: "absolute" }} />
      <div 
        style={{
          position: "absolute",
          top: "30%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(91, 159, 212, 0.08)",
          filter: "blur(120px)",
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
            className="text-gradient-gold font-display text-4xl md:text-5xl font-black uppercase tracking-wider"
          >
            OUR VALUED CLIENTS
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
          >
            <span>Trusted Across KSA & Gulf Markets</span>
          </motion.div>
          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto mt-4 font-light" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            Partnering with premium military, public, and private institutions to recruit state-of-the-art professionals from Pakistan.
          </p>
        </div>

        {/* 25-Client Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "rgba(245, 197, 24, 0.4)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
              }}
              className="glass-panel group relative p-6 text-left border border-white/5 bg-white/[0.02] flex items-center justify-between gap-4 cursor-pointer overflow-hidden rounded-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Index badge */}
                <div className="w-8 h-8 rounded-lg bg-white/5 text-accent-gold flex items-center justify-center font-display font-black text-xs group-hover:bg-accent-gold group-hover:text-[#07123A] transition-colors duration-300">
                  {client.id}
                </div>

                <div className="flex flex-col">
                  {/* Organization Name */}
                  <span className="text-white font-bold text-sm md:text-base leading-snug tracking-wide uppercase font-display group-hover:text-accent-gold transition-colors duration-200">
                    {client.name}
                  </span>
                  
                  {/* City Badge and Type */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      {client.city}
                    </span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest font-normal">
                      {client.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative side building line */}
              <Building2 className="text-white/5 group-hover:text-accent-gold/10 transition-colors flex-shrink-0" size={32} />

              {/* Left Gold Border indicator */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* References Divider */}
        <div className="relative flex items-center justify-center my-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative bg-[#07123A] px-6 text-xs uppercase tracking-[0.25em] text-accent-gold font-bold font-display">
            Historically Affiliated & Prestigious Clients
          </div>
        </div>

        {/* Referenced Client Cloud Tag Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {referencedClients.map((ref, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, backgroundColor: "rgba(245,197,24,0.08)", borderColor: "rgba(245,197,24,0.25)", color: "#FFF" }}
              className="px-4 py-2 bg-white/[0.01] border border-white/5 rounded-xl text-white/50 text-xs md:text-sm font-semibold tracking-wide uppercase flex items-center gap-2 cursor-pointer transition-all"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              <CheckCircle size={10} className="text-light-blue" />
              {ref}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
