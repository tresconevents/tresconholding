import { HeroSection } from '@/components/sections/hero';
import { VisionSection } from '@/components/sections/vision';
import { AboutSection } from '@/components/sections/about';
import { StrengthSection } from '@/components/sections/strength';
// import { VenturesSection } from '@/components/sections/ventures';
import { ImpactNewSection } from '@/components/sections/impact-new';
// import { MessageSection } from '@/components/sections/message';
import { GlobalFootprintSection } from '@/components/sections/global-footprint';

// import { AdvisorySection } from '@/components/sections/advisory';
import { NewsSection } from '@/components/sections/news';

import MessageSection from '@/components/sections/message_floder';
import Ventures_custom from '@/components/sections/ventures_custom';
import Advisory_custom from '@/components/sections/advisory_custom';
import HoveringCard from '@/components/sections/hovering_cards';
// import GlobalFootprint from '@/components/sections/globalFootprint_custom';




export default function Home() {
  return (
    <main className="min-h-[100vh] bg-[#fff] text-white">
      <HeroSection />
    
      <VisionSection />
      <AboutSection />
      <StrengthSection />
      <Ventures_custom />
      {/* <VenturesSection /> */}
      <ImpactNewSection />
       
<HoveringCard />
{/* <GlobalFootprint /> */}
      <GlobalFootprintSection />

      {/* <MessageSection />     */}
      
      <MessageSection />
      <Advisory_custom />
      {/* <AdvisorySection /> */}
      <NewsSection />
    </main>
  );
}