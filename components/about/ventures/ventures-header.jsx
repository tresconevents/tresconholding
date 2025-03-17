"use client";

import { motion } from 'framer-motion';

export function VenturesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:mb-0"
    >
      <h2 className="text-[#00A5A3] text-lg font-semibold text-[18px]  md:text-[24px] pb-4 font-[400] border-b border-[#00A5A3]">
        VENTURES & PORTFOLIO COMPANIES
      </h2>
    </motion.div>
  );
}