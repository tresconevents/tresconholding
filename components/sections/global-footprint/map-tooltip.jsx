"use client";

import { motion } from 'framer-motion';

export function MapTooltip({ location }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-72 bg-[#003B3D] rounded-lg p-4 pointer-events-none"
    >
      <div className="font-manrope text-white space-y-2">
        <p className="font-semibold">{location.address.country}</p>
        <p>{location.address.office}</p>
        <p>{location.address.area}</p>
      </div>
      <div className="absolute left-1/2 bottom-0 -mb-2 -ml-2 border-8 border-transparent border-t-[#003B3D]" />
    </motion.div>
  );
}