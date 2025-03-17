"use client";

import { motion } from 'framer-motion';

export function StrengthContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p 
        className="font-['Manrope'] text-[18px] sm:text-[22px] font-[400] sm:leading-[36px] leading-[39px] text-left text-[#464D53]"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Our strength lies in our ability to identify transformative opportunities, 
        leverage global networks, and provide strategic support to ventures that 
        are reshaping industries. With a focus on emerging technologies and 
        sustainable solutions, we're building businesses that define tomorrow's 
        possibilities.
      </p>
    </motion.div>
  );
}