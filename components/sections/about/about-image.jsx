"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-square  mx-auto">
        <Image
          src="/Driving_Global_Innovation.jpg"
          alt="About Trescon Holdings"
          fill
          className=" !h-[auto] !w-[auto] !sm:w-[500] !sm:h-[100%]  object-cover rounded-2xl"
          
          priority
        />

      
      </div>
    </motion.div>
  );
}