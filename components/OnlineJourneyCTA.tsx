'use client';
import { motion } from 'motion/react';

const courseHighlights = [
  'Build a match plan you can trust under pressure.',
  'Learn the tactical patterns elite juniors use to control points.',
  'Turn video feedback into weekly improvement you can actually feel.',
];

export default function OnlineJourneyCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-matte-black py-24 md:py-32">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-atp-blue/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-neon-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-6 h-[2px] w-14 bg-neon-accent" />
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-neon-accent/80">
            Continue The Journey
          </p>
          <h2 className="mb-6 font-oswald text-4xl uppercase tracking-tight text-perf-white md:text-6xl">
            Ready For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-[#99aa00]">Next Level</span> Of Your Tennis?
          </h2>
          <p className="font-sans text-lg font-light leading-relaxed text-perf-white/70">
            If Jacobo&apos;s philosophy speaks to you, the online journey is where that clarity becomes a repeatable system.
            Step inside the Tactical Tennis System and start training with structure, purpose, and real accountability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm md:p-10"
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-neon-accent/70 to-transparent" />
          <p className="mb-6 font-sans text-sm uppercase tracking-[0.3em] text-perf-white/45">
            Inside The Online Course
          </p>

          <div className="mb-8 space-y-4">
            {courseHighlights.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-neon-accent/30 bg-neon-accent/10">
                  <span className="h-2 w-2 rounded-full bg-neon-accent" />
                </div>
                <p className="font-sans text-base leading-relaxed text-perf-white/82">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="https://tacticaltennissystem.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-neon-accent px-8 py-4 font-sans text-xs font-black uppercase tracking-[0.25em] text-matte-black transition-colors duration-300 hover:bg-perf-white"
          >
            Join The Online Journey
          </a>

          <p className="mt-4 font-sans text-sm text-perf-white/45">
            Designed for players and families who want a smarter path to long-term improvement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
