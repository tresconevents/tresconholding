"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ImpactImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-square max-w-[500px] mx-auto">
        {/* Dotted border effect */}
        
        {/* Main image */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/full_image.png"
            alt="Our Impact Visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Decorative dot */}
        
      </div>
    </motion.div>
  );
}