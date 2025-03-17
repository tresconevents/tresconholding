'use client';

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ventures } from './ventures-data';

export function VenturesNavigation({ currentIndex, setCurrentIndex }) {
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ventures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ventures.length) % ventures.length);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={prevSlide}
        className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
        aria-label="Previous venture"
      >
        <ArrowLeft className="w-6 h-6 text-[#1E2124]" />
      </button>
      <button
        onClick={nextSlide}
        className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
        aria-label="Next venture"
      >
        <ArrowRight className="w-6 h-6 text-[#1E2124]" />
      </button>
    </div>
  );
}
