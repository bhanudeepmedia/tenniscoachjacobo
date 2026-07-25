'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-matte-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-white/30"></div>
              <span className="font-sans uppercase text-[10px] tracking-widest text-perf-white/50">The Architect</span>
            </div>
            <h2 className="font-sans font-black italic text-5xl md:text-8xl uppercase tracking-tighter text-perf-white leading-[0.85]">
              Jacobo <br/>
              <span className="text-transparent stroke-white">Hernandez</span>
            </h2>
          </div>
          <div className="font-sans text-right max-w-sm font-light text-perf-white/70 text-lg">
            From top 35 ITF junior to elite international coach. A lifetime dedicated to mastering the sport.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 relative h-[600px] md:h-[800px] border border-white/10">
            <motion.div style={{ y }} className="absolute inset-0">
               <Image 
                 src="/jacobo-profile-new.jpg"
                 alt="Jacobo Hernandez"
                 fill
                 className="object-cover object-top"
                 referrerPolicy="no-referrer"
               />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-12">
              <div className="border-l border-white/20 pl-8 relative">
                <div className="absolute top-0 -left-[5px] w-2 h-2 bg-neon-accent rounded-full"></div>
                <h4 className="font-sans font-black italic text-xl uppercase tracking-widest text-perf-white mb-2">The Player</h4>
                <p className="font-sans text-perf-white/60 font-light leading-relaxed">
                  Reached Top 35 in the world ITF Junior rankings. Competed in Junior Grand Slams and trained at the legendary Evert Tennis Academy, experiencing world-class development firsthand. Played Division 1 Men&apos;s Tennis at Tulane University, competing at the highest collegiate level.
                </p>
              </div>

              <div className="border-l border-white/20 pl-8 relative">
                <div className="absolute top-0 -left-[5px] w-2 h-2 bg-neon-accent rounded-full"></div>
                <h4 className="font-sans font-black italic text-xl uppercase tracking-widest text-perf-white mb-2">The Transition</h4>
                <p className="font-sans text-perf-white/60 font-light leading-relaxed">
                  Realizing his passion lay in analyzing the game rather than just playing it, Jacobo transitioned to coaching. He deconstructed the methodologies used by the world&apos;s best, blending biomechanics, tactical theory, and sports psychology into a unified system.
                </p>
              </div>

              <div className="border-l border-neon-accent pl-8 relative">
                <div className="absolute top-0 -left-[5px] w-2 h-2 bg-neon-accent rounded-full shadow-[0_0_10px_#CCFF00]"></div>
                <h4 className="font-sans font-black italic text-xl uppercase tracking-widest text-neon-accent mb-2">The Coach</h4>
                <p className="font-sans text-perf-white/80 font-light leading-relaxed">
                  Today, he develops elite athletes heading into D1 colleges, ITF professional circuits, and beyond. His coaching philosophy centers not just on creating exceptional tennis players, but on molding resilient, highly-intelligent individuals equipped for the ultimate pressures of the tour and life.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
