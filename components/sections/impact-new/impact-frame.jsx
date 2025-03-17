"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export function ImpactFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full  mx-auto"
    >
      {/* Video frame */}
      <div className="relative">
        <Image
          src="/full_image.png"
          alt="Video frame"
          width={100}
          height={281}
          className="w-full h-auto"
        />
        
        {/* Centered image inside frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[80%] h-[80%]">
            <Image
              src="/Girls_image.png"
              alt="Impact visualization"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}