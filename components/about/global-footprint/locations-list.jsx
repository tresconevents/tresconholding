"use client";

import { motion } from 'framer-motion';
import { locations } from './locations-data';

export function LocationsList({ activeLocationId, onLocationSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {locations.map((location, index) => (
        <motion.div
          key={location.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            onClick={() => onLocationSelect(location.id)}
            className={`font-manrope text-xl leading-8 ${
              location.id === activeLocationId ? 'text-[#00A5A3]' : 'text-white'
            } hover:text-[#00A5A3] transition-colors text-left w-full`}
          >
            {location.name}
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
}