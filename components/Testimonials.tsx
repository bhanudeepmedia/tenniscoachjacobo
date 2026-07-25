'use client';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Jacobo completely changed how my son processes pressure. It wasn't just about tweaking his serve, it was about fundamentally restructuring his approach to competition.",
    author: "Elena R.",
    role: "Parent of D1 Athlete",
    reelId: "DVM-NiUDPWv"
  },
  {
    quote: "The tactical depth of Jacobo's coaching is unmatched. I learned more about court geometry in two months than I did in four years at my previous academy.",
    author: "Marcus T.",
    role: "ITF Junior Player",
    reelId: "DMbmHkBgk_2"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-matte-black relative overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-atp-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-oswald text-4xl md:text-6xl uppercase tracking-tighter text-perf-white mb-6">
            Words From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-[#99aa00]">Inner Circle</span>
          </h2>
          <p className="font-sans text-perf-white/60 max-w-2xl font-light">
            Real transformations from ambitious athletes and parents who demand excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <motion.a 
              key={i}
              href="https://www.instagram.com/tenniscoachjacob/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative h-[600px] overflow-hidden bg-white/5 border border-white/10 block cursor-pointer"
            >
              {/* Instagram Reel Embed */}
              <div className="absolute inset-0 w-full h-full transition-all duration-700 pointer-events-none">
                <iframe
                  src={`https://www.instagram.com/reel/${test.reelId}/embed`}
                  className="w-full h-full border-none pointer-events-none"
                  allowTransparency={true}
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent pointer-events-none group-hover:via-matte-black/40 transition-all duration-500"></div>
              
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10 pointer-events-none">
                <p className="font-playfair text-xl md:text-2xl text-perf-white italic leading-relaxed mb-8">
                  &quot;{test.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-oswald uppercase tracking-widest text-neon-accent text-lg">{test.author}</h5>
                    <span className="font-sans text-sm text-perf-white/50 uppercase tracking-widest">{test.role}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded text-[10px] uppercase tracking-widest text-perf-white flex items-center gap-1 group-hover:bg-neon-accent group-hover:text-matte-black transition-colors">
                    <span>Watch on IG</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

