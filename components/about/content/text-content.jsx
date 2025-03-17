"use client";

import { motion } from 'framer-motion';

export function TextContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h2 className="text-[#00A5A3] text-lg font-semibold pb-4 border-b border-[#00A5A3]">
        ABOUT US
      </h2>
      <div className="space-y-6">
        <h3 className="text-4xl md:text-5xl font-semibold text-[#1E2124]">
          Building Tomorrow&apos;s Business Ecosystem
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Trescon Holdings stands at the forefront of technological advancement and business 
          transformation. Through our portfolio of innovative ventures, we&apos;re creating 
          meaningful impact across global markets.
        </p>
      </div>
    </motion.div>
  );
}