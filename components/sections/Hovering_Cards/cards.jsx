"use client";

import React, { useState } from "react";
import Image from "next/image";
import { impactCards } from "./impact-data";

const Cards = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {impactCards.map((card, index) => (
   <div
   key={index}
   className={`relative bg-[#00A5A3] overflow-hidden w-full h-[61vh] md:w-120 md:h-56 xl:w-140 xl:h-60`}
   onMouseEnter={() => setHoveredCardIndex(index)}
   onMouseLeave={() => setHoveredCardIndex(null)}
 >
          <div className="p-2">
            <h4 className="text-[#F6FAFA] font-[600] font-anek pl-[1.5rem] pt-[1.5rem] text-[1.75rem] leading-[2.28rem] z-50">
              {card.title}
            </h4>
            <p
              className={`text-[#f6fafA] font-[400] font-anek pl-[1.5rem] pt-[1.5rem] transition-all ease-in-out duration-600 opacity-100 ${
                window.innerWidth < 768
                  ? "block"
                  : hoveredCardIndex === index
                  ? "block"
                  : "hidden"
              }`}
            >
              {card.description}
            </p>
            <div
              className={`absolute right-0 transition-all ease-out duration-500`}
            >
              <Image
                src={card.image}
                alt={card.title}
                className={`object-cover object-fit w-full h-full z-30`}
                width={200}
                height={200}
                id="image_size"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;
