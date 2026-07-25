import Hero from '@/components/Hero';
import Credibility from '@/components/Credibility';
import WhyTrust from '@/components/WhyTrust';
import Testimonials from '@/components/Testimonials';
import OnlineJourneyCTA from '@/components/OnlineJourneyCTA';
import TrainingSystem from '@/components/TrainingSystem';
import OnlineTraining from '@/components/OnlineTraining';
import SocialProof from '@/components/SocialProof';
import About from '@/components/About';
import ParentsTrust from '@/components/ParentsTrust';
import FinalCTA from '@/components/FinalCTA';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-matte-black text-perf-white min-h-screen selection:bg-neon-accent selection:text-matte-black">
      <Navbar />
      <Hero />
      <Credibility />
      <WhyTrust />
      <Testimonials />
      <OnlineJourneyCTA />
      <TrainingSystem />
      <OnlineTraining />
      <SocialProof />
      <About />
      <ParentsTrust />
      <FinalCTA />
    </main>
  );
}
