'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function WhyTrust() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 bg-matte-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative h-[600px] md:h-[800px] w-full group">
            <div className="absolute inset-0 bg-atp-blue opacity-20 mix-blend-color-burn z-10"></div>
            
            <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-3/4 h-[60%] z-20">
              <Image 
                src="/jacobo-philosophy-2.jpg"
                alt="Intensive Mentorship"
                fill
                className="object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/20"></div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-2/3 h-[50%] z-30">
              <Image 
                src="/jacobo-philosophy-1.jpg"
                alt="Tactical Intelligence"
                fill
                className="object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-4 border-r-2 border-b-2 border-neon-accent/50 hidden md:block"></div>
            </motion.div>
          </div>

          {/* Copy Side */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-perf-white/50"></div>
              <span className="font-sans uppercase text-xs tracking-[0.2em] text-perf-white/50">The Philosophy</span>
            </div>
            
            <h2 className="font-sans font-black italic uppercase tracking-tighter text-4xl md:text-6xl text-perf-white mb-8 leading-[0.85]">
              Championing the <br/><span className="text-neon-accent text-5xl md:text-7xl">Human Behind The Athlete.</span>
            </h2>

            <div className="space-y-6 font-sans text-perf-white/70 text-lg font-light leading-relaxed">
              <p>
                True elite performance requires more than just forehands and backhands. It requires a resilient mind, tactical clarity, and unwavering character.
              </p>
              <p>
                Through years on the professional tour and developing top junior athletes globally, Jacobo Hernandez has engineered a methodology that builds unstoppable competitors on the court—and remarkable leaders off it.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-12">
              <div>
                <h4 className="font-sans font-black italic text-xl uppercase tracking-widest text-perf-white mb-2">Tactical Supremacy</h4>
                <p className="text-[10px] text-perf-white/50 font-bold uppercase tracking-widest">Advanced court geometry. Strategic recognition.</p>
              </div>
              <div>
                <h4 className="font-sans font-black italic text-xl uppercase tracking-widest text-perf-white mb-2">Mental Armor</h4>
                <p className="text-[10px] text-perf-white/50 font-bold uppercase tracking-widest">Pressure nullification. Elite-level conditioning.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
