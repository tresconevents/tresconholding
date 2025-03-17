"use client";

import { motion } from 'framer-motion';

export function VenturesHeaderContent() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-['Anek_Devanagari'] text-[34px] text-[35px] md:text-[60px] font-[500] sm:leading-[78px] text-white order-1 lg:order-1 lg:max-w-[50%]"
      >
        Driving Innovation, Empowering Industries
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-['Manrope'] text-[20px] font-[400] leading-[32px] text-white order-2 lg:order-2 lg:max-w-[40%]"
      >
        Trescon Holdings propels a diverse portfolio of ventures across industries, 
        fostering innovation, collaboration, and sustainable growth globally.
      </motion.p>
    </div>
  );
}