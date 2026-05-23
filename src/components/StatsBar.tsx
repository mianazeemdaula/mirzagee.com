"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const start = 0;
      const end = value;
      const duration = 2000; // ms
      const startTime = performance.now();

      const updateCounter = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        
        const current = Math.floor(easeProgress * (end - start) + start);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-6xl font-extrabold text-accent-gold tracking-tight">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    { value: 16, suffix: "+", label: "Years of Experience" },
    { value: 25, suffix: "+", label: "Satisfied Clients" },
    { value: 1000, suffix: "+", label: "Professionals Placed" },
    { value: 5, suffix: "+", label: "Countries Served" },
  ];

  return (
    <section id="stats" className="relative w-full bg-[#050D2D] py-12 md:py-16 border-b border-white/5 z-10">
      {/* Background radial highlight for premium aura */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "rgba(74, 144, 217, 0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-width px-6 relative z-10 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, delay: idx * 0.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="relative">
                <Counter value={stat.value} suffix={stat.suffix} />
                {/* Subtle soft gold underline that expands on hover */}
                <div className="w-12 h-[2px] bg-accent-gold/40 mx-auto mt-2 rounded-full group-hover:w-20 group-hover:bg-accent-gold transition-all duration-300" />
              </div>
              <span className="text-white/60 text-xs md:text-sm font-semibold tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
