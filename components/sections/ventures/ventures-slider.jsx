'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ventures } from './ventures-data';

export function VenturesSlider({ currentIndex }) {
  return (
    <div className="relative">
      {/* Mobile/Tablet View */}
      <div className="block lg:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src={ventures[currentIndex].image}
              alt={ventures[currentIndex].title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        <AnimatePresence mode="wait">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % ventures.length;
            return (
              <motion.div
                key={`${ventures[index].id}-${offset}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, delay: offset * 0.1 }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <Image
                  src={ventures[index].image}
                  alt={ventures[index].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white text-lg font-semibold">
                    {ventures[index].title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
