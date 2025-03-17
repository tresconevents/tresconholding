

import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { ventures } from "./ventures-data";
import {
 
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
const VentureSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const [active, setActive] = useState(0);
  const handlePrevious = useCallback(() => {
    swiperRef?.slideNext();
   
  }, [swiperRef]);
  const handlePrevious_1 = useCallback(() => {
    swiperRef?.slidePrev();
    
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden ">
      {/* <AnimatedText text="We are a team of entrepreneurs and entrepreneurs" /> */}
      <div className=" flex flex-col lg:flex-row  gap-2">
        <div className=" xl:w-[600px] lg:w-[600px] bg-trapransparent flex flex-col justify-center    xl:text-left  xl:mx-0">
          <h3 className="font-anek text-[#fff] text-[30px] leading-[42px] !text-left font-[600] lg:text-[42px] lg:leading-[42px] xl:mb-[28px] md:mb-[28px]">
            {ventures[active]?.title}
          </h3>

          <p className="font-manrope text-[#fff] text-[18px] leading-[30px] !text-left font-[400] lg:text-[20px] lg:leading-[30px] xl:mb-[28px]">{ventures[active]?.description}</p>
          <Link
            href="#"
            className="inline-flex items-center text-[20px] line-[30px] gap-4 text-[#FFFFFF] hover:text-[#FFFFFF]/80 transition-colors font-manrope text-base font-semibold mt-6 group"
          >
            View Website
            <button className=" p-3 rounded-full rounded-full bg-[#00A5A3] text-[#fff]">
              <ArrowUpRight className="align-[center] w-5 h-5" />
            </button>
          </Link>
          <div className="flex !gap-4 mt-[100px] ">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
              aria-label="Previous venture"
            >
              <ArrowLeft className="w-6 h-6 text-[#1E2124]" />
            </button>
            <button
              onClick={handlePrevious_1}
              className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
              aria-label="Next venture"
            >
              <ArrowRight className="w-6 h-6 text-[#1E2124]" />
            </button>
        
          </div>
        </div>

        <Swiper
          ref={setSwiperRef}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
            // modules={[Autoplay]}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          onSwiper={setSwiperRef}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
          }}
          className="w-full h-[400px]  xl:w-full xl:h-[524px]  "
        >
          {ventures.map((venture, index) => (
            <SwiperSlide
              key={index}
              className={`${
                active === index
                  ? "lg:!h-[521px] !h-[521px] lg:!w-[516px] md:!h-full md:!w-full" 
                  : ""
              } transition-all duration-500 `}
            >
              <div className=" h-full flex items-start justify-end ">
                <div
                  className={`${
                    active === index
                      ? "lg:!h-[521px] h-[350px] sm:w-[100%] sm:h-[100%]"
                      : " lg:!h-[371px] lg:!w-[299px]"
                  } transition-all duration-300 flex items-end overflow-hidden  relative w-full`}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover !border-0"
                  >
                    <source src={venture.video} type="video/mp4" />
                  </video>
                  {venture.image && (
                    <Image
                      src={venture.image}
                      alt={venture.name}
                      quality={100}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VentureSlider;
