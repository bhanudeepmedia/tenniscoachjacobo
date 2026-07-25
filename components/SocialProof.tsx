'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const achievements = [
  "Top 100 ITF Competitors", "NCAA D1 Recruits", "National Champions", "Junior Grand Slam Entrants", "ATP / WTA Ranked Players", "Top 100 ITF Competitors", "NCAA D1 Recruits", "National Champions", "Junior Grand Slam Entrants", "ATP / WTA Ranked Players"
];

const images = [
  "/athlete-1.jpg",
  "/athlete-2.jpg",
  "/athlete-3.jpg",
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-perf-white text-matte-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      {/* Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden mb-16 border-y border-matte-black/10 py-6">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center gap-16 font-sans font-black italic uppercase text-4xl md:text-5xl tracking-tighter"
        >
          {achievements.map((item, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>{item}</span>
              <span className="text-neon-accent/50 text-3xl">/</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Photo Wall */}
      <div className="max-w-[100vw] overflow-hidden rotate-[-2deg] scale-110">
        <motion.div 
          animate={{ x: ["-10%", "-40%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex gap-4"
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative w-[300px] h-[500px] md:w-[350px] md:h-[600px] flex-shrink-0 transition-all duration-500">
              <Image 
                src={img}
                alt="Athlete"
                fill
                className="object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
