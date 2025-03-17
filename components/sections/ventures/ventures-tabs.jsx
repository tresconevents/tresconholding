'use client';

import { motion } from 'framer-motion';
import { ventures } from './ventures-data';

export function VenturesTabs({ activeVenture }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap gap-4 mb-8"
    >
      {ventures.map((venture) => (
        <div
          key={venture.id}
          className={`text-lg font-semibold ${
            activeVenture === venture.id ? 'text-[blue]' : 'text-white/80'
          }`}
        >
          {venture.title}
        </div>
      ))}
    </motion.div>
  );
}
