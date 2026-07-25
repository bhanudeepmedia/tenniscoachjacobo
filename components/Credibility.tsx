'use client';
import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 border-r border-white/10 last:border-r-0 relative group overflow-hidden">
      <div className="absolute inset-0 bg-atp-blue/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-5xl md:text-7xl font-oswald font-bold text-perf-white tabular-nums tracking-tighter mb-2">
          {count}{suffix}
        </div>
        <div className="text-sm font-sans uppercase tracking-[0.2em] text-perf-white/60 text-center">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Credibility() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section id="mentorship" ref={containerRef} className="bg-matte-black relative py-24 sm:py-32 overflow-hidden border-b border-white/5">
      {/* Background Court Texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tennis-green via-matte-black to-matte-black pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="bg-matte-black/40 backdrop-blur-xl border-l-4 border-neon-accent p-8 flex flex-col gap-2 mb-8">
            <span className="text-[10px] text-perf-white/50 uppercase tracking-[0.3em]">Career Stat</span>
            <span className="text-5xl md:text-6xl font-black tracking-tighter italic uppercase text-perf-white">20+ Years</span>
            <p className="text-xs text-perf-white/70 uppercase tracking-widest mt-2">Elite International Experience</p>
          </div>
          
          <p className="font-sans text-perf-white/50 text-sm max-w-md leading-relaxed pl-4 border-l border-white/10">
            Bringing professional tour experience and elite academy methodologies to committed athletes worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-center">
              <span className="text-[10px] text-neon-accent uppercase font-bold tracking-widest">Junior Status</span>
              <div className="text-2xl md:text-3xl font-black mt-2 uppercase italic">Top 35 ITF</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-center">
              <span className="text-[10px] text-neon-accent uppercase font-bold tracking-widest">Network</span>
              <div className="text-2xl md:text-3xl font-black mt-2 uppercase italic">Top 100 ATP</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 bg-atp-blue/40 border border-white/10 p-6">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0">
               <div className="w-3 h-3 bg-neon-accent animate-pulse rounded-full"></div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-perf-white">Active Coaching</div>
              <div className="text-[10px] text-perf-white/50 tracking-widest mt-1">GLOBAL REACH | HIGH PERFORMANCE TENNIS</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
