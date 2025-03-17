"use client";

import { useState } from 'react';
import { ExecutiveContainer } from './executive-container';
import { ExecutiveHeader } from './executive-header';
import { ExecutiveSlider } from './executive-slider';

export function ExecutiveBoardSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-[#fff] py-24">
      <ExecutiveContainer>
        <ExecutiveHeader />
        <ExecutiveSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </ExecutiveContainer>
    </section>
  );
}