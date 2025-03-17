"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { NewsCard } from './news-card';
import { newsItems } from './news-data';

export function NewsSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <NewsCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex space-x-4">
          <button
            onClick={prevPage}
            className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label="Previous page"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextPage}
            className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label="Next page"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}