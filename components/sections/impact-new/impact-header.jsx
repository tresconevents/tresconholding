"use client";

import { motion } from 'framer-motion';

export function ImpactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 
        className="font-manrope text-[18px] md:text-[24px] font-bold leading-[32.78px] text-[#00A5A3] text-left pb-4 mb-20 border-b border-[#00A5A3]"
      >
        OUR IMPACT
      </h2>
    </motion.div>
  );
}