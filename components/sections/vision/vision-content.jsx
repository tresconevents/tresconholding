"use client";

import { motion } from 'framer-motion';
import { VisionText } from './vision-text';

export function VisionContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <VisionText />
    </motion.div>
  );
}