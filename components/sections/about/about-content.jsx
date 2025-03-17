"use client";

import { motion } from 'framer-motion';

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
         <h3 
        className="font-['Anek_Devanagari'] mb-8 mt-8 md:mt-12  md:mb-12 text-[32px] md:text-[69px] md:leading-[66px] font-[500] leading-[41.8px] text-left text-[#1E2124]"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Driving Global Innovation
      </h3>
      <p 
        className="font-['Manrope'] text-[18px]  md:text-[22px]  font-[400] md:leading-[35.6px] leading-[39.6px] text-left text-[#464D53]"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Trescon Holdings stands at the forefront of  technological advancement and business 
        transformation. Through our portfolio of innovative  ventures, we're creating meaningful 
        impact across  global markets.
      </p>
    </motion.div>
  );
}