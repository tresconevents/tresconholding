"use client";

import { motion } from 'framer-motion';

export function MapMarker({ location }) {
  return (
    <div className="absolute group" style={{ top: location.position.top, left: location.position.left }}>
      {/* Animated highlight circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute -inset-4 bg-[#C0F43C]/20 rounded-full"
      />
      
      {/* Main marker dot */}
      <div className="relative w-4 h-4 bg-[#C0F43C] rounded-full" />
      
      {/* Location name label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap"
      >
        <span className="font-manrope text-sm text-white bg-[#003B3D] px-3 py-1 rounded-full">
          {location.name}
        </span>
      </motion.div>
    </div>
  );
}