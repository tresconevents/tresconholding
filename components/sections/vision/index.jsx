"use client";

import { VisionContainer } from "./vision-container";
import { VisionHeading } from "./vision-heading";
import { VisionText } from "./vision-text";

export function VisionSection() {
  return (
    <section className="relative py-6 md:py-14 bg-[#1E2124] shadow-0 !border-0">
      
      <VisionContainer>
      <VisionHeading />
        <div className="space-y-9 md:space-y-18 md:w-[52rem] sm:w-[30rem] sm:mx-auto md:mx-auto">
          <VisionText />
        </div>
      </VisionContainer>
    </section>
  );
}
