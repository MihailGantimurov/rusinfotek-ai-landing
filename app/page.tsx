import { Directions } from '@/components/home/Directions';
import { FlagshipCase } from '@/components/home/FlagshipCase';
import { Hero } from '@/components/home/Hero';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <Directions />
      <FlagshipCase />
      <Footer />
    </main>
  );
}
