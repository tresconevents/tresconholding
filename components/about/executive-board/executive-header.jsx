"use client";

import { motion } from 'framer-motion';

export function ExecutiveHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-[#00A5A3] text-lg font-semibold pb-4 border-b border-[#00A5A3]">
        EXECUTIVE BOARD & LEADERSHIP TEAM
      </h2>
    </motion.div>
  );
}