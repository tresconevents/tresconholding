"use client";

import { motion } from 'framer-motion';

export function HeroContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" absolute  sm:bottom-[20%] sm:left-0 bottom-[60px] md:bottom-[90px]  left-0 z-20 max-w-7xl mx-auto px-[1rem] md:px-[1rem] sm:px-6 lg:px-8 pt-32 "
    >
      <div className="sm:max-w-3xl  lg:max-w-[25rem] max-w-[300px]  sm:max-w-[450px]">
        <h1 className="text-[#C0F33C] text-[42px] leading-[30px] sm:text-5xl lg:text-5xl font-anek-devanagari font-bold  mb-2">
          Driving
        </h1>
        <div className="space-y-4">
          <h2 className="text-white text-[35px] leading-[42px] sm:text-4xl lg:text-5xl font-anek-devanagari">
            Global Innovation & Sustainable Growth
          </h2>
       
        </div>
        <p className="text-[#EEEEEE] text-base text-[17px]  md:text-[19px] leading-[25px] sm:text-lg sm:mt-6 mt-2 max-w-xl">
          A multifaceted global enterprise nurturing transformative ventures across technologies and markets
        </p>
      </div>
    </motion.div>
  );
}