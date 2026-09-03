import { Directions } from '@/components/home/Directions';
import { Hero } from '@/components/home/Hero';
import {
  Approach,
  CasesSection,
  FinalCta,
  InsightsSection,
  LeadershipSection,
  SecuritySection,
  TeamSection,
  TrustStrip,
} from '@/components/home/HomeSections';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <TrustStrip />
      <Directions />
      <Approach />
      <CasesSection />
      <SecuritySection />
      <LeadershipSection />
      <TeamSection />
      <InsightsSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
