"use client";

import { motion, AnimatePresence } from 'framer-motion';

export function VentureDescription({ description }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={description}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="text-white/80 text-base leading-relaxed"
      >
        {description}
      </motion.div>
    </AnimatePresence>
  );
}