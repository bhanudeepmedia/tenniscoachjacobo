'use client';
import { motion } from 'motion/react';
import { Target, Zap, Shield, Brain, Heart, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const pillars = [
  {
    id: "01",
    title: "Technique",
    desc: "Biomechanical optimization and stroke efficiency designed to hold up under ultimate tour-level pressure.",
    icon: Target,
    stats: ["Bio-Analysis", "Stroke Kinetics", "Footwork Pathways"]
  },
  {
    id: "02",
    title: "Tactics",
    desc: "Court geometry, anticipation, and analytical pattern recognition to conceptually dismantle opponents.",
    icon: Zap,
    stats: ["Court Geometry", "Anticipation", "Pattern Execution"]
  },
  {
    id: "03",
    title: "Physical",
    desc: "Tennis-specific explosive endurance, agility, and injury prevention frameworks.",
    icon: Shield,
    stats: ["Explosive Power", "Recovery", "Endurance Base"]
  },
  {
    id: "04",
    title: "Mental",
    desc: "Emotional regulation, breathing protocols, and cultivating a bulletproof competitive psyche.",
    icon: Brain,
    stats: ["Resilience", "Focus Tiers", "Pressure Tolerance"]
  },
  {
    id: "05",
    title: "Character",
    desc: "Discipline, leadership, and personal responsibility. Building the human first, athlete second.",
    icon: Heart,
    stats: ["Discipline", "Leadership", "Accountability"]
  }
];

export default function TrainingSystem() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="training" className="py-32 bg-[#02050A] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#050b14_1px,transparent_1px),linear-gradient(to_bottom,#050b14_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="font-oswald text-5xl md:text-7xl uppercase tracking-tighter text-perf-white">
            The <span className="text-neon-accent">Pillars</span>
          </h2>
          <div className="flex items-center gap-4 mt-6 border-b border-white/10 pb-6">
            <span className="font-sans uppercase text-xs tracking-widest text-perf-white/50">System Architecture</span>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-5 border-t border-white/10">
              {pillars.map((pillar, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-8 border-b md:border-b-0 md:border-r border-white/10 transition-colors group cursor-pointer text-left focus:outline-none ${
                      isActive ? 'bg-neon-accent text-matte-black' : 'hover:bg-neon-accent hover:text-matte-black bg-transparent'
                    } ${idx === pillars.length - 1 ? 'md:border-r-0' : ''}`}
                  >
                    <span className={`text-[10px] font-bold block mb-2 transition-opacity ${isActive ? 'opacity-80' : 'opacity-50 group-hover:opacity-80'}`}>
                      {pillar.id}
                    </span>
                    <span className={`text-sm font-black uppercase tracking-widest italic transition-colors ${
                      isActive ? 'text-matte-black' : 'text-neon-accent group-hover:text-matte-black'
                    }`}>
                      {pillar.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Dashboard Display */}
            <div className="lg:col-span-12 mt-8">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#050B14] border border-white/10 h-full p-8 md:p-12 relative overflow-hidden"
            >
              {/* Decorative Tech Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-atp-blue/30 blur-3xl rounded-full"></div>
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="p-4 bg-white/5 border border-white/10 text-neon-accent rounded-sm">
                  {(() => {
                    const Icon = pillars[activeTab].icon;
                    return <Icon size={32} strokeWidth={1.5} />;
                  })()}
                </div>
                <div className="font-sans text-[10px] uppercase tracking-[0.3em] text-perf-white/30 text-right">
                  System Parameter<br/>
                  <span className="text-perf-white/60">Module {pillars[activeTab].id}</span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-sans text-4xl md:text-5xl uppercase italic font-black tracking-tighter text-perf-white mb-6">
                  {pillars[activeTab].title} Integration
                </h3>
                <p className="font-sans text-perf-white/70 text-lg md:text-xl font-light mb-12 max-w-xl">
                  {pillars[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {pillars[activeTab].stats.map((stat, i) => (
                    <div key={i} className="border-t border-white/10 pt-4">
                      <div className="font-oswald text-sm text-perf-white/40 uppercase tracking-widest mb-1">Vector {i+1}</div>
                      <div className="font-sans font-medium text-perf-white text-sm tracking-wide">{stat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
