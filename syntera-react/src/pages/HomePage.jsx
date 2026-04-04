import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Ticker from '../components/sections/Ticker';
import ResultsSection from '../components/sections/ResultsSection';
import WhoSection from '../components/sections/WhoSection';
import HowSection from '../components/sections/HowSection';
import CasesSection from '../components/sections/CasesSection';
import PricingSection from '../components/sections/PricingSection';
import StagesSection from '../components/sections/StagesSection';
import CTASection from '../components/sections/CTASection';
import CallWidget from '../components/widgets/CallWidget';
import ScrollToTop from '../components/ui/ScrollToTop';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Syntera — ИИ-система записи клиентов</title>
        <meta name="description" content="Загрузка клиники до 80% за 3 месяца. ИИ-менеджер записывает клиентов 24/7, отвечает за 30 секунд, интегрируется с CRM." />
      </Helmet>
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
