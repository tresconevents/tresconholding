"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { executiveMembers } from './executive-data';

export function ExecutiveSlider({ currentIndex, setCurrentIndex }) {
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % executiveMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + executiveMembers.length) % executiveMembers.length);
  };

  const member = executiveMembers[currentIndex];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Main Image */}
        <motion.div
          key={`main-${currentIndex}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[3/4]  overflow-hidden "
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            priority
          />
          
          {/* Decorative dots pattern */}
          <div className="absolute inset-0 bg-[url('/dots-pattern.png')] opacity-10" />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-semibold text-black">{member.name}</h3>
            <p className="text-[#3B3B3B] text-xl">{member.title}</p>
            <p className="text-black/80 text-lg leading-relaxed">"{member.quote}"</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex space-x-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Previous member"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Next member"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-8 gap-4 mt-8">
        {executiveMembers.map((member, index) => (
          <button
            key={member.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative aspect-[3/4]  overflow-hidden transition-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
            }`}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}