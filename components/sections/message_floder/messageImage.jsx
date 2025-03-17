import Image from "next/image";
import React from "react";

const MessageImage = () => {
  return (
    <div className="relative    ">
      <div className=" bg-gradient-to-tr  from-[#464D53]  to-[#1E2124]">
        <Image
          src="/saleem.png"
          alt="Mohammed Saleem - Founder & CEO"
          className="object-cover object-center"
          priority
          fill
        />
      </div>
      <div className="absolute bottom-[65px] right-[-95px] w-[300px] z-50  ">
        <h4 className="text-white  text-[63px] font-anek-devanagari leading-[63px]">
          Mohammed Saleem
        </h4>
      </div>
    </div>
  );
};

export default MessageImage;
