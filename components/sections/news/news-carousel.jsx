"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { NewsCard } from './news-card';
import { useWindowSize } from '../../../hooks/useWindowSize';

export function NewsCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();
  
  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    if (width >= 1024) return 3; // desktop
    if (width >= 768) return 2;  // tablet
    return items.length; // mobile - show all items
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = items.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="space-y-8 relative">
      {/* {totalPages > 1 && (
        <div className={`flex ${width < 770 ? 'justify-center bottom-[-20%] left-1/2 transform -translate-x-1/2' : 'justify-end top-[-16.5%] right-0'} space-x-4 mb-6 absolute`}>
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border bg-[#C0F43C] border-[#C0F43C] text-[#1E2124] hover:bg-[#C0F43C]/90 hover:text-[#000] transition-transform transform hover:scale-105"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border bg-[#C0F43C] border-[#C0F43C] text-[#1E2124] hover:bg-[#C0F43C] hover:text-[#000] transition-transform transform hover:scale-105"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )} */}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentItems.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}