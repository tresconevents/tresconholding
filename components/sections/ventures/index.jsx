"use client";

import { useState } from 'react';
import { VenturesContainer } from './ventures-container';
import { VenturesHeader } from './ventures-header';
import { VenturesHeaderContent } from './ventures-header-content';
import { VenturesSlider } from './ventures-slider';
import { VenturesList } from './ventures-list';
import { VenturesNavigation } from './ventures-navigation';

export function VenturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVentureClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="ventures" className="relative py-24 bg-[#1E2124]">
      <VenturesContainer>
        <VenturesHeader />
        <div className="mt-16 space-y-16">
          <VenturesHeaderContent />
          
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5 space-y-8">
              <VenturesList 
                currentIndex={currentIndex} 
                onVentureClick={handleVentureClick}
              />
              <VenturesNavigation 
                currentIndex={currentIndex} 
                setCurrentIndex={setCurrentIndex} 
              />
            </div>
            
            <div className="lg:col-span-7">
              <VenturesSlider currentIndex={currentIndex} />
            </div>
          </div>
        </div>
      </VenturesContainer>
    </section>
  );
}