"use client";

import { motion } from 'framer-motion';
import { VisionWord } from './vision-word';
import { VisionImage } from './vision-image';
import Image from 'next/image';
export function VisionText() {
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-1 md:space-y-4 text-left "
          >
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-[#fff] text-[20px] md:text-[47px] font-[400] leading-[1.2] md:leading-[1.2]">
                We Bring together
              </span>
              <div className="flex items-center text-[#fff] gap-2 md:gap-4">
                <VisionImage
                  src="/vision_image1.png"
                  alt="Visionaries icon"
                  className="w-[2rem] h-[2rem] md:w-20 md:h-20"
                />
                <VisionWord className="text-[#fff]">visionaries,</VisionWord>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4">
                  <VisionImage
                  src="/vision_image3.png"
                  alt="Innovators icon"
                  className="w-[2rem] h-[2rem] text-[#fff] md:w-20 md:h-20"
                />
                <VisionWord className="text-[#fff]">innovators,</VisionWord>
              
              </div>
              <span className='text-[18px] md:text-[47px] font-anek-devanagari text-[#fff] md:text-[47px] font-[400] leading-[1.6px]'>&</span>
              <div className="flex items-center gap-2  md:gap-4">
                <VisionImage
                  src="/vision_image2.png"
                  alt="Game-changers icon"
                  className="w-[2rem] h-[2rem] text-[#fff] md:w-20 md:h-20 md:ml-[33px]"
                />
                <VisionWord className="text-[#fff]">game-changers,</VisionWord>
              </div>
            </div>

            {/* Updated text container */}
            <div className="text-[17px] md:text-[47px] font-[400] leading-[1.7rem] md:leading-[5.6rem] text-[#fff] max-w-[90%] md:max-w-[80%] whitespace-nowrap">
              <VisionWord>fuelling ventures</VisionWord> that shape the <br></br>
              future across industries and geographies.
            </div>
          </motion.div>
  
  );
}