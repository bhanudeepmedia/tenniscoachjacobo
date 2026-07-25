'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-matte-black flex items-center justify-center">
      {/* Cinematic Background */}
      <motion.div style={{ scale: scaleImg }} className="absolute inset-0 w-full h-full">
        <Image
          src="/jacobo-hero-new.png"
          alt="Jacobo Hernandez - Elite Tennis Coach"
          fill
          className="object-cover object-[88%_center] md:object-[78%_center]"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Navy/Green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-atp-blue/85 via-atp-blue/25 to-[#006633]/65 md:from-atp-blue/70 md:via-transparent md:to-[#006633]/55"></div>
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-matte-black/30 via-transparent to-transparent md:hidden"></div>
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/10 hidden md:block"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] border border-white/5 rounded-full hidden md:block"></div>
        
        {/* Dynamic target blur element */}
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#006633]/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        {/* Tape graphics and grain */}
        <div className="grain opacity-30 mix-blend-overlay"></div>
        
        {/* Tennis court lines overlay */}
        <div className="absolute bottom-0 right-10 w-[400px] h-[300px] border-l-2 border-t-2 border-white/10 transform skew-x-[-40deg]"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 flex flex-col justify-center h-full pt-20 pb-16">
        <motion.div style={{ y: yText, opacity: opacityText }} className="max-w-[15.5rem] sm:max-w-md md:max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="bg-neon-accent text-matte-black px-3 py-1 inline-block text-[10px] font-black uppercase tracking-tighter">
              International High Performance
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans uppercase text-[3.35rem] md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter italic font-black mb-8"
          >
            Develop <span className="text-transparent stroke-white">The Athlete.</span><br/>
            Build <span className="text-neon-accent">The Person.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden sm:block font-sans text-sm text-perf-white/60 max-w-md mb-10 font-light leading-relaxed"
          >
            Elite high-performance tennis coaching focused on technical mastery, tactical intelligence, mental resilience, and complete player development.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <a href="#apply" className="px-10 py-5 bg-neon-accent text-matte-black font-black uppercase text-xs tracking-widest text-center hover:bg-perf-white transition-colors duration-300">
              Apply For Coaching
            </a>
            
            <a 
              href="https://tacticaltennissystem.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 border border-white/10 text-perf-white font-black uppercase text-xs tracking-widest backdrop-blur-md text-center hover:bg-perf-white hover:text-matte-black transition-colors duration-300"
            >
              Online Training
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Footer */}
      <div className="absolute bottom-0 w-full flex items-center justify-between border-t border-white/10 bg-matte-black/50 backdrop-blur-md px-6 md:px-12 pointer-events-none z-20 overflow-hidden">
        {/* Text Overlay */}
        <div className="absolute left-0 bottom-0 select-none opacity-5 tracking-tight font-black uppercase text-8xl whitespace-nowrap z-0">
          CHAMPION MINDSET ELITE
        </div>
        
        <div className="relative z-10 flex w-full pointer-events-auto">
          {[
            { num: "01", label: "Technique" },
            { num: "02", label: "Tactics" },
            { num: "03", label: "Mental" },
            { num: "04", label: "Physical" }
          ].map((item, i) => (
            <div key={item.num} className="flex-1 py-4 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors cursor-pointer group px-4">
              <div className="flex gap-2 items-baseline">
                <span className="text-xs font-bold text-neon-accent opacity-50 group-hover:opacity-100 transition-opacity">{item.num}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-perf-white/50 group-hover:text-perf-white transition-colors">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 right-12 hidden md:flex flex-col items-center gap-2 z-20"
      >
        <span className="font-oswald text-[10px] tracking-[0.3em] uppercase text-perf-white/50" style={{ writingMode: 'vertical-rl' }}>Scroll To Explore</span>
        <div className="h-12 w-[1px] bg-white/20 overflow-hidden mt-2">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-neon-accent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
