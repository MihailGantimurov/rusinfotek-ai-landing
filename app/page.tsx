import { Cases } from '@/components/home/Cases';
import { Contact } from '@/components/home/Contact';
import { Hero } from '@/components/home/Hero';
import { Metrics } from '@/components/home/Metrics';
import { Process } from '@/components/home/Process';
import { Products } from '@/components/home/Products';
import { Security } from '@/components/home/Security';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] opacity-[.035] mix-blend-screen [background-image:radial-gradient(circle_at_center,white_.55px,transparent_.75px)] [background-size:5px_5px]" />
      <ScrollProgress />
      <Header />
      <Hero />
      <Metrics />
      <Products />
      <Cases />
      <Security />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
