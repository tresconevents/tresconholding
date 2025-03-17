"use client";

import Image from 'next/image';

export function DecorativeElements() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Bottom left decorative elements */}
      <div className="absolute bottom-0 left-0">
        {/* Ellipse background */}
        <div className="relative w-[600.753px] h-[600.753px] sm:w-[750px]  sm:h-[750px] md:w-[780px] rotate-90 md:h-[750px] ">
          <Image
            src="/Group_45.png"
            alt="Decorative ellipse"
            fill
            className="object-contain !w-[100%]  h-[100%] absolute !top-[28%] !left-[30%] sm:!top-[25%] sm:!left-[21%]"
            priority
          />
        </div>
        
        {/* Dot pattern overlay */}
        <div className="absolute bottom-[-123px] left-[-19%]">
          <Image
            src="/Ellipse_1.png"
            alt="Decorative dots"
           width={100}
            height={100}
            className="md:w-[600.753px] md:h-[600.753px] sm:w-[550.753px] sm:h-[550.753px]  w-[450.753px] h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}