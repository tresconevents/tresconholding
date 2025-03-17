"use client";

import { useMediaQuery } from '@/hooks/useMedia';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export function MessageContent() {
  const isMobile = useMediaQuery("(max-width: 769px)");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8 relative p-[4rem] bg-no-repeat bg-bottom-right h-full flex items-center justify-center bg-[#003B3D] lg:p-0"
      style={{
        backgroundImage: "url('/chairmanBackground.png')",
        backgroundPosition: "bottom 0 right 0",
        backgroundSize: "contain", // or "cover" depending on your needs
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative flex justify-center items-start gap-10">
        {/* <Quote className="absolute -left-12 -top-6 w-12 h-12 text-white" /> */}
        <Image
          src="/quotation_img.svg"
          alt="quote"
          className="mt-[12px]"
          width={50}
          height={50}

        />
        {!isMobile ?
          <p className="font-manrope text-[24px] leading-relaxed text-left text-white/90 ">
            At Trescon Holdings, we believe in <br /> the power of innovation to transform <br /> industries and create sustainable <br /> value. Our commitment is to support <br /> visionary entrepreneurs and <br /> businesses that share our passion <br /> for driving meaningful change.
            {/* At Trescon Holdings, we believe in <br /> the power of innovation and collaboration <br /> to create a more sustainable future. <br /> Our commitment is to support ventures that<br /> positively impact how people live and work globally. */}
          </p>
          :
          <p className="font-manrope text-lg text-left leading-relaxed text-white/90">
            At Trescon Holdings, we believe in the power of innovation to transform industries and create sustainable value. Our commitment is to support visionary entrepreneurs and businesses that share our passion for driving meaningful change.
          </p>}
      </div>


    </motion.div>

  );
}