"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapMarker } from './map-marker';
import { MapTooltip } from './map-tooltip';
import { locations } from '../globalFootprint_custom/locations-data';

export function WorldMap({ activeLocationId }) {
  const activeLocation = locations.find(loc => loc.id === activeLocationId);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-[16/9]">
        {/* Base map */}
        <Image
          src="/location.png"
          alt="World map showing Trescon Holdings global locations"
          fill
          className="object-contain"
          priority
        />
        
        {/* Highlight overlay for active region */}
        <AnimatePresence mode="wait">
          {activeLocation && (
            <>
              <motion.div
                key={`highlight-${activeLocation.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(
                    circle at ${activeLocation.position.left} ${activeLocation.position.top},
                    rgba(192, 244, 60, 0.2) 0%,
                    rgba(192, 244, 60, 0) 30%
                  )`
                }}
              />
              <motion.div
                key={`marker-${activeLocation.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <MapMarker location={activeLocation} />
                <MapTooltip location={activeLocation} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}