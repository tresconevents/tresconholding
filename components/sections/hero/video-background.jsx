'use client';

import Image from 'next/image';

export function VideoBackground() {
  return (
    <div className="absolute inset-0 top-[0] right-[0]  flex items-center justify-center">
      
        <Image
          src="/big_dot_image.png"
          alt="Circle background"
          fill
          className="object-cover"
          priority
        />
      
    </div>
  );
}
