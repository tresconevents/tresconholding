"use client";

import { motion } from 'framer-motion';

export function VenturesContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8"
    >
      <p 
        className="font-['Manrope'] text-[20px] font-[400] leading-[32px] text-white"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Trescon Holdings propels a diverse portfolio of ventures across industries, 
        fostering innovation, collaboration, and sustainable growth globally.
      </p>
    </motion.div>
  );
}