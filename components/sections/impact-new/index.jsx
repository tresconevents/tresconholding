"use client";

import { ImpactHeader } from './impact-header';
import { ImpactContent } from './impact-content';
import { ImpactFrame } from './impact-frame';
import { ImpactCards } from './impact-cards';

export function ImpactNewSection() {
  return (
    <section id="our-impact" className="bg-white py-24" style={{marginBottom:"-84px"}}>
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-0">
          <div className="space-y-8 text-center lg:text-left">
            <ImpactHeader />
            <ImpactContent />
          </div>
          <ImpactFrame />
        </div>
        {/* <ImpactCards /> */}
      </div>
    </section>
  );
}