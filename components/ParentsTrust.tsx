'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function ParentsTrust() {
  return (
    <section className="py-32 bg-atp-blue relative overflow-hidden">
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A1930_100%)] z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 mix-blend-luminosity grayscale">
        <Image 
          src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070&auto=format&fit=crop"
          alt="Mentorship"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-perf-white/20 flex items-center justify-center mb-8">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        
        <h2 className="font-sans font-black italic uppercase tracking-tighter text-4xl md:text-6xl text-perf-white mb-8 leading-[0.85]">
          &quot;More Than <br/><span className="text-transparent stroke-white text-5xl md:text-7xl">Tennis Coaching.</span>&quot;
        </h2>

        <p className="font-sans text-xl md:text-2xl text-perf-white/80 font-light leading-relaxed max-w-3xl mb-16">
          To parents entrusting me with their athlete&apos;s development: My commitment goes beyond producing a technically flawless forehand. I am committed to developing leaders, instilling unwavering discipline, building unshakeable confidence, and fostering an environment where character and responsibility are paramount. 
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/10 pt-12">
          {["Character", "Discipline", "Leadership", "Confidence"].map((trait, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-1 h-8 bg-neon-accent/50 mb-4"></div>
              <span className="font-oswald uppercase tracking-widest text-perf-white text-sm">{trait}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
