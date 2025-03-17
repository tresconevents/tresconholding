"use client";

import { AboutHero } from "@/components/about/hero";
import Ourpurpose from "@/components/about/ourpurpose";
import Ourstory from "@/components/about/ourstory";
import Coral_Values from "@/components/about/core_values";
import Strategic_focus from "@/components/about/strategic_focus";
import { ExecutiveBoardSection } from "@/components/about/executive-board";
import { GlobalFootprintSection } from "@/components/about/global-footprint";
// import { VenturesSection } from "@/components/about/ventures";
import Ventures_custom from "@/components/about/ventures_custom";
import Impact_Initiatives_Values from "@/components/impact_initiatives";
// import Executive_Board from "@/components/about/executive_board";

export default function AboutPage() {
  return (
    <main className="min-h-screen mx-auto">
      <AboutHero />
      <Ourstory />
      <Ourpurpose />
      <Coral_Values />
      <Strategic_focus />
      {/* <Executive_Board /> */}
      <ExecutiveBoardSection />
      <Ventures_custom />
      {/* <VenturesSection /> */}
      <Impact_Initiatives_Values />
      <GlobalFootprintSection />
    </main>
  );
}
