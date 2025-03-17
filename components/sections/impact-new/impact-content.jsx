    "use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ImpactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h3 
        className="font-['Anek_Devanagari'] text-[38px] text-left md:text-left md:text-[50px] font-[500] leading-[45px] md:leading-[70px] text-[#003B3D]  lg:text-left"
      >
        Empowering Change, Driving Innovation, and Creating Lasting Impact
      </h3>
      
      <div className="flex justify-start lg:justify-start pb-20">
      <Link
      href="#"
      className="inline-flex items-center !text-[20px] line-[30px] gap-4 text-[#3F3F3F]  transition-colors font-manrope text-base  mt-0 group"
    >
      View Website
      <button className=" p-3 rounded-full rounded-full  bg-[#00A5A3] text-[#fff]">
        <ArrowUpRight className="align-[center] w-5 h-5" />
      </button>
    </Link>
      </div>
    </motion.div>
  );
}
