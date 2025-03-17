"use client";

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 'ventures',
    title: 'Discover Our Ventures',
    image: '/womens.png',
    section: 'ventures'
  },
  {
    id: 'impact',
    title: 'Our Global Impact',
    image: '/child_image_2.png',
    section: 'our-impact'
  }
];

export function HeroCards() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {cards.map((card) => (
        <motion.div 
          key={card.id} 
          className="relative bg-white overflow-hidden group lg:!gap-2 lg:!w-[230px] lg:!h-[126px] xl:!w-[300px] xl:!h-[126px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Header */}
          <div className="relative px-[22px] pt-[20px] pb-[30px] bg-white">
            <motion.h3 
              className="text-[#1E2124] lg:text-[17px] lg:font-[400] font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {card.title}
            </motion.h3>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[17/2] w-[100%] h-[100%]">
            <Image
              src={card.image}
              alt={card.title}
              layout='fill'
              className="object-cover scale-105 absolute z-[10] !top-[5%] !left-0 hover:!top-[-64%] hover:!w-[100%] hover:!h-[136px] hover:!transition-all hover:!duration-300 !transition-all !duration-300 !ease-in-out"
            />
          </div>

          {/* Action Button */}
          <motion.button
            onClick={() => scrollToSection(card.section)}
            className="absolute top-[65px] right-4 p-[10px] z-[10] rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label={`Go to ${card.title}`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ArrowDown className="w-[16px] h-[16px] text-[#1E2124]" />
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}