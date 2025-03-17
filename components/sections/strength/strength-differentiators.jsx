"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { differentiators } from './differentiators-data';

export function StrengthDifferentiators() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 
          className="font-['Manrope'] text-[24px] font-[700] leading-[32.78px] text-left text-[#00A5A3] pb-4 border-b border-[#00A5A3] mb-12"
          style={{ 
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none'
          }}
        >
          KEY DIFFERENTIATORS
        </h3>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-2 gap-8"
      >
        {differentiators.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex md:flex items-center gap-[10px] md:gap-[40px] flex-col md:flex-row"
          >
            <div className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] relative flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                 fill
                className="object-cover mb-20"
              />
            </div>
            <div>
              <h3 
                id={item.id}
                className="font-['Anek_Devanagari'] text-[18px] lg:text-[22px] mt-3 font-[500] leading-[28.6px] text-center sm:text-left text-[#01373D] mb-2"
                style={{ 
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none'
                }}
              >
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}