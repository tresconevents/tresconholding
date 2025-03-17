import Image from "next/image";
import React from "react";

const OurStoryRight = () => {
  return (
    <div className="relative ">
      {/* <div className=" w-[100%] h-[20rem] min-h-fit relative sm:h-[30rem] sm:w-[30rem]">
        <div className="absolute  inset-0">
          <Image src="/color_dot.png" fill />   
          <div className=" !flex gap-1 items-center justify-center w-[300px]   absolute sm:right-[1rem] sm:top-[3rem] right-[-5rem] top-[1rem]">
            <Image
              className="!w-[6rem] !h-[6rem] sm:!w-[8rem] sm:!h-[8rem] "
              src="/group_28.png"
              fill
            />
             <div className="z-[1] ml-[2rem] sm:ml-[6rem]">
              <h4 className="text-[#464D53] font-anek-devanagari text-[1rem] sm:text-[1.5rem] leading-[10px]">Identify </h4>
              <span className="text-[#00A5A3] font-[500] font-anek-devanagari text-[1rem] sm:text-[1.5rem] ">opportunities  </span>
            </div>
          </div>
          <div className=" !flex gap-1 items-center justify-center w-[300px]   absolute sm:right-[10rem]  sm:top-[12rem] right-[3rem] top-[8rem]">
            <Image
              className="sm:!w-[8rem] sm:!h-[8rem] !w-[6rem] !h-[6rem]"
              src="/Group_24.png" alt="Group_24.png" 
              fill
            />
            <div className="z-[1] sm:ml-[6rem] ml-[0rem]">
              <h4 className="text-[#464D53] font-anek-devanagari items-center sm:text-[1.5rem] text-[1rem] sm:leading-[25px] leading-[10px]">Foster  </h4>
              <span className="text-[#00A5A3] font-[500] font-anek-devanagari sm:text-[1.5rem] text-[1rem] ">innovation </span>
            </div>
          </div>
          <div className=" !flex gap-1 items-center justify-center w-[300px]   absolute right-[-6.5rem] top-[13rem] sm:right-[.9rem] sm:top-[20rem]">
            <Image
              className="!w-[6rem] !h-[6rem] sm:!w-[8rem] sm:!h-[8rem] "
              src="/group_29.png" alt="group_29.png"
              fill
            />
            <div className="z-[1] ml-[0rem] sm:ml-[6rem]">
              <h4 className="text-[#464D53] font-anek-devanagari text-[1rem] sm:text-[1.5rem] leading-[10px] sm:leading-[25px]">Scale </h4>
              <span className="text-[#00A5A3] font-[500] font-anek-devanagari text-[1rem] sm:text-[1.5rem] ">businesses </span>
            </div>
          </div>
        </div>

      </div> */}

      <Image src="/Our_Story.png" alt="Our Story" fill  className="w-[100%] h-[100%]  "/>
    </div>
  );
};

export default OurStoryRight;
