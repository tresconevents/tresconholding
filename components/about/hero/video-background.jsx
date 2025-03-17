'use client';

import { useRef, useEffect } from 'react';

export function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/About_hero_vd.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r " />
    </div>
  );
}
