'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ventures } from './ventures-data';
import { VentureButton } from './components/venture-button';
import { VentureTitle } from './components/venture-title';

export function VenturesList({ currentIndex, onVentureClick }) {
  return (
    <div className="space-y-6">
      {/* <div className="space-y-4">
        {ventures.map((venture, index) => (
          <button
            key={venture.id}
            onClick={() => onVentureClick(index)}
            className={`w-full text-left text-xl font-semibold transition-colors ${
              index === currentIndex ? 'text-[#C0F43C]' : 'text-white/60'
            } hover:text-[#C0F43C]`}
          >
            {venture.title}
          </button>
        ))}
      </div> */}

      <div className="space-y-4">
        <VentureTitle title={ventures[currentIndex].title} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-white/80 text-base leading-relaxed">
              {ventures[currentIndex].description}
            </p>
            <VentureButton />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
