"use client";

import { motion } from 'framer-motion';

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=""
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[35px] leading-[42px] font-bold md:text-[65px] tracking-[-0.02em] mb-4"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block font-anek md:font-[700] font-[700] text-[42px]  md:leading-[75px] md:text-[75px]"
        >
          Building
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-anek font-[400] md:leading-[75px] md:text-[75px]"
        >
          Tomorrow&apos;s<br />
          Business Ecosystem
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-lg mb-8 text-[18px] md:text-[18px] text-[17px] font-[500] md:leading-[27px]"
      >
        A global enterprise nurturing innovative ventures across technology,
        digital transformation, and sustainability
      </motion.p>
    </motion.div>
  );
}