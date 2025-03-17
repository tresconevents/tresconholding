"use client";

import Image from 'next/image';

export function VisionImage({ src, alt, className }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}