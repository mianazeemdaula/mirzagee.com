"use client";

import { motion, Variants } from "framer-motion";
import { User, Award, Flame, Target } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative w-full bg-[#060E3A] py-20 md:py-28 overflow-hidden">
      {/* Light sky-pale background glow */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "rgba(135, 189, 239, 0.15)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(214, 234, 251, 0.2)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-width px-6 relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* LEFT: Angled Image Frame with initials "IA" */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] group">
              {/* Decorative Frame */}
              <div 
                className="absolute inset-0 bg-[#0B1F5C] border-2 border-accent-gold shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                }}
              >
                {/* Silhouette Placeholder Content */}
                <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-[#07123A] to-[#162870] p-8">
                  {/* Subtle vector lines inside frame */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)",
                    backgroundSize: "15px 15px"
                  }} />

                  <div className="w-24 h-24 rounded-full border-2 border-accent-gold/40 flex items-center justify-center mb-6 bg-white/5 relative z-10 group-hover:border-accent-gold transition-colors duration-300">
                    <User className="text-accent-gold animate-pulse" size={48} />
                  </div>

                  <span className="font-display text-7xl font-extrabold text-accent-gold/15 tracking-widest relative z-10 select-none">
                    IA
                  </span>

                  {/* Stamp Seal Indicator overlay */}
                  <div className="absolute bottom-6 right-6 border border-accent-gold/25 rounded-full p-2 rotate-12 scale-90 group-hover:scale-100 transition-transform duration-300">
                    <span className="font-display text-[8px] font-bold text-accent-gold uppercase tracking-widest">
                      OEP Managing Director
                    </span>
                  </div>
                </div>
              </div>

              {/* Shadow Background Behind the Frame */}
              <div 
                className="absolute -inset-4 bg-accent-gold/5 -z-10 transition-all duration-500 group-hover:scale-105"
                style={{
                  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                  filter: "blur(8px)"
                }}
              />
            </div>

            {/* Gold Nameplate below */}
            <div className="w-full max-w-[360px] text-center mt-6 p-4 bg-gradient-to-r from-[#07123A] to-[#0B1F5C] border-b-2 border-accent-gold rounded-xl shadow-lg">
              <h3 className="font-display text-white font-bold text-lg tracking-wide">
                Iftikhar Ahmad Mirza
              </h3>
              <p className="text-accent-gold text-xs font-semibold uppercase tracking-widest mt-1">
                Managing Director
              </p>
              {/* Signature in Amiri italic */}
              <span 
                style={{ fontFamily: "Amiri, serif", fontStyle: "italic" }}
                className="block text-accent-gold/80 text-xl mt-3 select-none"
              >
                اِفتخار احمد مرزا
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Message Content from the MD */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Message Pill Badge */}
            <motion.div variants={itemVariants} className="self-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold font-display text-xs font-bold uppercase tracking-wider mb-4">
                <Award size={14} className="text-[#D4A400]" />
                Message from the Managing Director
              </span>
            </motion.div>

            {/* Bismillah Calligraphy (Unicode: ﷽) */}
            <motion.div 
              variants={itemVariants} 
              style={{ fontFamily: "Amiri, serif", fontStyle: "italic" }}
              className="text-accent-gold text-4xl mb-4 leading-none select-none"
            >
              ﷽
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl font-black text-white leading-none uppercase mb-6"
            >
              Building Bridges Between<br />
              <span className="text-light-blue">Talent & Opportunity</span>
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
              className="text-gray-300 text-sm md:text-base leading-relaxed flex flex-col gap-4 font-normal"
            >
              <p>
                Mirza Gee Manpower Services was established in 2008 to make a mark in the field of manpower services. 
                Our organization specializes in Human Resources recruitment and selection services for the KSA & Middle East markets. 
                The entire operation is fully approved and regulated under license number <strong>MPD/2671/LHR</strong>.
              </p>
              <p>
                At Mirza Gee, we are determined to build close, robust, and permanent relationships with our corporate partners. 
                By deeply understanding their human resource needs, we satisfy their unique criteria by delivering highly competent, 
                qualified, and skilled human resources. At the same time, we have successfully won the unwavering trust of potential 
                job candidates by championing their career goals and professional growth.
              </p>
            </motion.div>

            {/* Gold Blockquote */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 border-l-4 border-accent-gold pl-6 py-2"
            >
              <p 
                style={{ fontFamily: "Amiri, serif", fontStyle: "italic" }} 
                className="text-white text-lg md:text-xl font-bold leading-relaxed"
              >
                &ldquo;Right Person for the Right Job at the Right Time.&rdquo;
              </p>
              <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">
                — Mirza Gee Philosophical Core
              </span>
            </motion.div>

          </motion.div>

        </div>

        {/* BOTTOM: Three-Card Panel (About Us, Mission, Vision) in sky-pale container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 p-8 md:p-12 bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1: About Us */}
            <div className="flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F5C] flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform duration-300">
                <User size={22} />
              </div>
              <h4 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                About Us
              </h4>
              <p 
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                A team of highly educated and experienced professionals, believing in and offering exceptional human resource services in the light of diversified requirements from our international clients.
              </p>
            </div>

            {/* Card 2: Our Mission */}
            <div className="flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Target size={22} />
              </div>
              <h4 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                Our Mission
              </h4>
              <p 
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                To become the preferred choice of global clients as a devoted & dedicated manpower services provider through innovative, creative channels, bringing the best and unique employment opportunities to Pakistani youth.
              </p>
            </div>

            {/* Card 3: Our Vision */}
            <div className="flex flex-col gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent-gold flex items-center justify-center text-dark-navy group-hover:scale-110 transition-transform duration-300">
                <Flame size={22} />
              </div>
              <h4 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                Our Vision
              </h4>
              <p 
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                To be the most trusted and recognized overseas employment promoter connecting Pakistan&apos;s workforce with top-tier employers across Saudi Arabia and the GCC region, maximizing integrity and efficiency.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
