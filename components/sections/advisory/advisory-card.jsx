"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AdvisoryCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative w-full h-full"
    >
      <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full rounded-lg overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <h4 className="text-white text-xl lg:text-2xl font-semibold mb-2">
            {member.name}
          </h4>
          {member.title && (
            <p className="text-white/80 text-sm lg:text-base mb-1">
              {member.title}
            </p>
          )}
          <p className="text-white/60 text-sm lg:text-base">
            {member.organization}
          </p>
        </div>
      </div>
    </motion.div>
  );
}