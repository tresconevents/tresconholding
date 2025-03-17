"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative rounded-2xl overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full rounded-2xl"
      >
        <source src="/About_hero_vd.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}