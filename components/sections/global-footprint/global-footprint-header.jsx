"use client";

import { motion } from 'framer-motion';

export function GlobalFootprintHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h3 className="font-manrope text-[24px] font-[700] leading-6 py-4 border-b border-[#FFFFFF1A] pt-[10rem] text-left text-[#00A5A3]"
      style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Our Locations
      </h3>
      <h2 className="font-manrope text-4xl font-bold leading-[48px] text-white">
        Our Global Footprint
      </h2>
    </motion.div>
  );
}