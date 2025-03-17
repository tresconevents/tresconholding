"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMedia';

export function MessageImage() {
  const isMobile = useMediaQuery("(max-width: 769px)");
    return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-[0.9] overflow-hidden w-auto" >
        {!isMobile ?
        <Image
          src="/Saleem1.svg"
          alt="Mohammed Saleem - Founder & CEO"
          className="object-cover"
          priority
          fill
        />
        :
        <Image
          src="/Saleem_mobile.svg"
          alt="Mohammed Saleem - Founder & CEO"
          className="object-cover"
          priority
          fill
        />}
        
       <div className='absolute bottom-0 right-0  p-6 lg:p-8'>
          <h4 className="text-white text-xl font-anek-devanagari mb-2">
            Mohammed Saleem
          </h4>
          </div>
      </div>
    </motion.div>
  );
}