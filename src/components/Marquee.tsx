"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const marqueeText = "⭐ RIGHT PERSON FOR THE RIGHT JOB AT THE RIGHT TIME  •  YOUR SUCCESS IS OUR MISSION  •  OEP LICENCE NO. MPD/2671/LHR  •  ";
  
  // We can repeat the text multiple times to ensure full coverage
  const repeatedText = Array(12).fill(marqueeText).join(" ");

  return (
    <div className="relative w-full overflow-hidden bg-accent-gold py-4 select-none z-20 border-y border-[#D4A400]/40">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="inline-flex gap-4 text-dark-navy font-display text-sm md:text-base font-extrabold tracking-widest uppercase"
        >
          <span>{repeatedText}</span>
        </motion.div>
      </div>
    </div>
  );
}
