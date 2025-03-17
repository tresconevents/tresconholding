"use client";

import { motion } from 'framer-motion';

export function NewsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 mt-12"
    >
      <h2 
        className="font-manrope text-[24px] font-[700] leading-[32.78px] text-left text-[#00A5A3] pb-4 border-b border-[#00A5A3]"
      >
        NEWS
      </h2>
    </motion.div>
  );
}