import Image from "next/image";
import React from "react";
import { core_image } from "./core_image";

const Core_content = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 ">
        {core_image.map((item, index) => (
          <div
            key={index}
            className="bg-[#00A5A3] relative   w-[450px] h-[210px] md:w-[298px] md:h-[270px]  px-[0.9rem] py-[1.63rem]"
          >
            <p className="text-[28px] text-[#fff] font-[400] font-anek-devanagari leading-[2rem]">
              {item.heading}
            </p>
            <div className="absolute bottom-[24px] right-[26px] w-[5rem] h-[5rem] px-[26px] py-[24px]">
              <Image src={item.CoreImage} alt={item.heading} fill />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Core_content;
