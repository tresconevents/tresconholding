"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useCallback, useState } from "react";
import { advisoryMembers } from "./advisory-data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const AdvisorySlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className=" py-12 overflow-hidden">
      <div className="flex flex-col flex-1 lg:flex-row justify-center lg:items-center items-start gap-[2rem]">
        <div className="w-max xl:w-[800px] bg-trapransparent flex flex-col justify-center  xl:text-left  xl:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="xl:pl-[5rem] "
          >
            <h3
              className="lg:text-[60px] text-[44px] leading-[44px] font-[500] font-anek lg:leading-[60px] text-[#1E1E1E]"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Guided by <br /> Visionaries
            </h3>

            <p
              className="font-manrope text-[13px] lg:text-[20px] font-[400] leading-[30px] text-[#1E1E1E]"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Our advisory board consists of industry <br /> leaders and experts
              who provide invaluable <br /> guidance and insights.
            </p>
            <div className="flex !gap-4 mt-[100px] mb-9 ">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
                aria-label="Previous venture"
              >
                <ArrowLeft className="w-6 h-6 text-[#1E2124]" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
                aria-label="Next venture"
              >
                <ArrowRight className="w-6 h-6 text-[#1E2124]" />
              </button>
            </div>
          </motion.div>
        </div>
        <Swiper
          slidesPerView={1}
          onSwiper={setSwiperRef}
          breakpoints={{
            340: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 2.56,
            },
          }}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // modules={[Autoplay]}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
          }}
          className="w-full h-[400px] xl:h-[500px]"
        >
          {advisoryMembers.map((slider, index) => {
            return (
              <SwiperSlide key={index} className=" h-full  select-none">
                <div className="w-full  h-full  flex items-end ">
                  <div
                    className={`${
                      activeSlide === index ? "h-[600px]" : "h-[200px]"
                    }flex  items-end overflow-hidden transition-all duration-500 relative w-full h-full shadow-lg`}
                  >
                    <Image
                      src={slider.image}
                      alt={slider.name}
                      width={300}
                      height={436}
                      className="object-center object-cover lg:w-[322px] lg:h-[500px] w-full h-full"
                      quality={100}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[39%] bg-gradient-to-t from-black to-transparent opacity-90" />
                    <div className="absolute lg:bottom-5 bottom-5 left-[12px] p-4 flex flex-col justify-center items-start bg-opacity-50 text-white">
                      <h4 className="text-[20px] font-[600] lg:text-[22px] lg:font-[600] font-anek" id="title_heading">
                        {slider.name}
                      </h4>
                      <p className="text-sm">{slider.organization}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AdvisorySlider;
