"use client";

import { motion, AnimatePresence } from 'framer-motion';

export function VentureItem({ venture, isActive, onClick }) {
  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={venture.id}
        onClick={onClick}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className={`w-full text-left text-xl font-semibold transition-colors ${
          isActive ? 'text-[#C0F43C]' : 'text-white/60'
        } hover:text-[#C0F43C]`}
      >
        {venture.title}
      </motion.button>
    </AnimatePresence>
  );
}