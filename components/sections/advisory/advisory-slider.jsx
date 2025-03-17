"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function AdvisorySlider({ visible, currentIndex }) {

  return (
    <>
      <div className='relative w-full flex gap-6 overflow-x-hidden'>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${visible[currentIndex].id}-${0}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, delay: 0 * 0.1 }}
            className="relative aspect-[2/3] max-w-[300px] min-w-[300px]"
          >
            <Image
              src={visible[currentIndex]?.image}
              alt={visible[currentIndex]?.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h4 className="text-white text-xl font-semibold">
                {visible[currentIndex]?.name}
              </h4>
              <p className="text-white/80 text-sm">
                {visible[currentIndex]?.title}
              </p>
              <p className="text-white/60 text-sm">
                {visible[currentIndex]?.organization}
              </p>
            </div>
          </motion.div>
          {visible?.map((image, idx) => {
            if (idx === currentIndex) return null;
            return (
              <motion.div
                key={`${image.id}-${idx}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative aspect-[2/3] max-w-[300px] min-w-[300px]"
              >
                <Image
                  src={image?.image}
                  alt={image?.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h4 className="text-white text-xl font-semibold">
                    {image?.name}
                  </h4>
                  <p className="text-white/80 text-sm">
                    {image?.title}
                  </p>
                  <p className="text-white/60 text-sm">
                    {image?.organization}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}
