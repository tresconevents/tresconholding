"use client";

import { motion, AnimatePresence } from 'framer-motion';

export function VentureTitle({ title }) {
  return (
    <AnimatePresence mode="wait">
      <motion.h3
        key={title}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-semibold text-[#C0F43C] mb-4"
      >
        {title}
      </motion.h3>
    </AnimatePresence>
  );
}