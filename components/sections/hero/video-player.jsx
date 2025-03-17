'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div 
        className="relative w-[60%] h-[60%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Color circle overlay */}
        <motion.div 
          className="absolute sm:top-[19px] sm:right-[64px] md:top-[38px] md:right-[39px] lg:top-[17px] lg:right-[29px] top-[5px] right-[18px] w-10 h-10 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/color_circle.png"
            alt="Decorative circle"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Video */}
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full rounded-[20rem] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <source src="/banner_video_wbs.webm" type="video/webm" />
        </motion.video>
      </motion.div>
    </div>
  );
}
