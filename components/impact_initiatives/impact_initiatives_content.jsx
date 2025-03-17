import Image from "next/image";
import React from "react";
// import { core_image } from "./core_image";
import { Impact_Initiatives_Image } from "./impact_initiatives_image";

const Impact_Initiatives_Content = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 ">
        {Impact_Initiatives_Image.map((item, index) => (
          <div
            key={index}
            className="bg-[#00A5A3] relative   w-[450px] h-[210px] md:w-[298px] md:h-[270px]  px-[0.9rem] py-[1.63rem]"
          >
            <p className="md:text-[28px] text-[18px] text-[#fff] font-[400] font-anek-devanagari leading-[2rem]">
              {item.heading}
            </p>
            <div className="absolute bottom-[24px] right-[26px] md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] md:px-[26px] px-[20px] md:py-[24px] py-[20px]">
              <Image src={item.CoreImage} alt={item.heading} fill />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Impact_Initiatives_Content;
