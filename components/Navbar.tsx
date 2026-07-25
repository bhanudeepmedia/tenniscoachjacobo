'use client';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? 'bg-matte-black/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <div className="w-10 h-10 border-2 border-neon-accent flex items-center justify-center font-black italic text-xl text-perf-white">JH</div>
            <div className="text-xs tracking-[0.4em] font-bold uppercase hidden sm:block">
              <span className="text-perf-white">Jacobo Hernandez</span> <br/>
              <span className="text-neon-accent opacity-80">Elite Performance</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#mentorship">Mentorship</NavLink>
            <NavLink href="#training">Training</NavLink>
            <NavLink href="#online">Programs</NavLink>
            <NavLink href="#about">About</NavLink>
            <Link 
              href="#apply"
              className="px-6 py-2 border border-white/20 text-[10px] tracking-widest uppercase hover:bg-perf-white hover:text-matte-black transition-all text-perf-white font-semibold"
            >
              Apply Now
            </Link>
          </div>

          <button className="md:hidden text-perf-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-matte-black flex flex-col justify-center items-center">
          <button className="absolute top-6 right-6 text-perf-white" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8 text-2xl font-oswald uppercase tracking-wider">
            <MobileNavLink href="#mentorship" onClick={() => setMobileMenuOpen(false)}>Mentorship</MobileNavLink>
            <MobileNavLink href="#training" onClick={() => setMobileMenuOpen(false)}>Training System</MobileNavLink>
            <MobileNavLink href="#online" onClick={() => setMobileMenuOpen(false)}>Online Program</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <Link 
              href="#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-neon-accent text-matte-black px-8 py-3 rounded-sm"
            >
              Apply for Coaching
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[10px] font-sans tracking-widest uppercase font-semibold text-perf-white/50 hover:text-perf-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-accent transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="text-perf-white hover:text-neon-accent transition-colors">
      {children}
    </Link>
  );
}
