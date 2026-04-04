'use client';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import ResultsSection from '@/components/sections/ResultsSection';
import WhoSection from '@/components/sections/WhoSection';
import HowSection from '@/components/sections/HowSection';
import CasesSection from '@/components/sections/CasesSection';
import PricingSection from '@/components/sections/PricingSection';
import StagesSection from '@/components/sections/StagesSection';
import CTASection from '@/components/sections/CTASection';
import CallWidget from '@/components/widgets/CallWidget';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <ResultsSection />
      <WhoSection />
      <HowSection />
      <CasesSection />
      <PricingSection />
      <StagesSection />
      <CTASection />
      <CallWidget />
      <ScrollToTop />
    </>
  );
}
