'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function FinalCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section id="apply" ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-matte-black">
      
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
          alt="Stadium Lights"
          fill
          className="object-cover opacity-30 mix-blend-luminosity grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-transparent to-transparent"></div>
        {/* Tennis Tape Graphic */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neon-accent/10 transform -rotate-1"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neon-accent/20 transform -rotate-1 mt-1"></div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-white/30"></div>
          <span className="font-sans uppercase text-sm tracking-[0.3em] text-perf-white/60">The Next Step</span>
          <div className="h-[1px] w-12 bg-white/30"></div>
        </div>

        <h2 className="font-sans font-black italic lowercase text-5xl md:text-8xl uppercase tracking-tighter text-perf-white mb-12 text-shadow-lg leading-[0.85]">
          Elite Development Starts With The <br/><span className="text-neon-accent">Right Environment.</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
          <button className="flex-1 bg-neon-accent text-matte-black font-black uppercase tracking-widest text-xs px-10 py-5 hover:bg-perf-white transition-colors duration-300">
            Apply For Coaching
          </button>
          
          <a 
            href="https://tacticaltennissystem.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/5 border border-white/10 text-perf-white font-black uppercase tracking-widest text-xs px-10 py-5 backdrop-blur-md hover:bg-perf-white hover:text-matte-black transition-colors duration-300 text-center"
          >
            Start Online Training
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center gap-3">
          <span className="font-oswald uppercase text-xs tracking-widest text-perf-white/30">Jacobo Hernandez Tennis</span>
          <div className="flex gap-6">
             <a 
               href="https://www.instagram.com/tenniscoachjacob/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-perf-white/40 hover:text-neon-accent transition-colors flex items-center gap-2 text-xs font-sans tracking-widest uppercase"
             >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               <span>@tenniscoachjacob</span>
             </a>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 text-[10px] uppercase font-sans tracking-[0.2em] text-perf-white/30">
            Designed &amp; Developed by{' '}
            <a 
              href="https://framenflowmedia.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neon-accent/80 hover:text-neon-accent transition-colors font-bold underline decoration-neon-accent/30 underline-offset-4"
            >
              Frame &amp; Flow Media
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
