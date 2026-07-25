'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function OnlineTraining() {
  return (
    <section id="online" className="py-32 bg-matte-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="h-[2px] w-12 bg-neon-accent mb-6"></div>
            <h2 className="font-sans font-black italic text-5xl md:text-7xl uppercase tracking-tighter text-perf-white mb-6 leading-[0.85]">
              Train Smarter <br/>
              <span className="text-transparent stroke-white">From Anywhere.</span>
            </h2>
            <p className="font-sans text-perf-white/70 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Personalized tactical education, match analytics, mental performance systems, and elite player development for ambitious athletes worldwide. Access the Hernandez Methodology directly on your device.
            </p>
            
            <ul className="space-y-4 mb-12">
              {["1-on-1 Strategic Video Diagnostics", "Opponent Scouting & Match Analysis", "Custom Physical & Mental Protocols", "Direct Accountability Check-ins"].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-neon-accent/20 p-1 rounded-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E1FF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-sans font-light text-perf-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://tacticaltennissystem.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="self-start font-sans font-black uppercase tracking-widest text-xs text-matte-black bg-neon-accent px-10 py-5 transition-colors duration-300 hover:bg-perf-white"
            >
              Access Online Training
            </a>
          </div>

          <div className="order-1 lg:order-2 relative h-[500px] md:h-[700px] w-full perspective-1000">
            {/* Simulated UI Glass Card */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }}
              whileInView={{ opacity: 1, rotateY: -5, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 flex flex-col z-20 shadow-[-20px_20px_60px_-15px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="font-oswald uppercase tracking-widest text-perf-white/50 text-xs">Player Dashboard</div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-neon-accent shadow-[0_0_8px_rgba(225,255,0,0.8)]"></div>
                </div>
              </div>

              <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden mb-6 border border-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop"
                  alt="Analysis"
                  fill
                  className="object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                {/* Mock UI Overlays */}
                <div className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-widest text-white bg-black/50 px-2 py-1">Set 1 / Game 4 / 30-15</div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                   <div className="w-8 h-8 rounded-full bg-neon-accent flex items-center justify-center">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                   </div>
                </div>
                {/* Mock Court diagram lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="20" y1="80" x2="80" y2="20" stroke="#E1FF00" strokeWidth="0.5" strokeDasharray="2,2"/>
                  <circle cx="80" cy="20" r="2" fill="#E1FF00"/>
                  <circle cx="20" cy="80" r="1.5" fill="white"/>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="bg-white/5 p-4 border border-white/5 flex flex-col justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-perf-white/50">Serve Win %</span>
                  <span className="font-oswald text-4xl text-perf-white">78<span className="text-xl text-neon-accent">%</span></span>
                </div>
                <div className="bg-white/5 p-4 border border-white/5 flex flex-col justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-perf-white/50">Forehand Errors</span>
                  <span className="font-oswald text-4xl text-perf-white">3<span className="text-xl text-perf-white/50">UE</span></span>
                </div>
              </div>
            </motion.div>
            
            {/* Background glowing shape */}
            <div className="absolute inset-x-10 inset-y-20 bg-atp-blue/50 blur-[60px] -z-10 rotate-12"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
