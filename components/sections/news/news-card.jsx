"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight ,ArrowUpRight} from 'lucide-react';

export function NewsCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative  h-48 sm:h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          
          <div className="px-3 py-1 bg-[#E4FF40] rounded-full">
            <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#003B3D' }}>
              {item.category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-[#fffee8]">
        <p className="text-sm text-gray-600 mb-2">{item.date}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{item.author}</p>
        {/* <button className=" p-3 rounded-full rounded-full bg-[#00A5A3] text-[#fff]">
        <ArrowUpRight className="align-[center] w-5 h-5" />
      </button> */}
        <button className="inline-flex mt-6 items-center text-[#3F3F3F] hover:text-[#000]/100 transition-colors">
          Read More 
          <span className="w-15 h-15 p-2 ml-3 rounded-full bg-[#00A5A3]">
            <ArrowUpRight className="w-5 h-5 align-[center] text-[#fff] text-[10px]" />
          </span>
        </button>
      </div>
    </motion.div>
  );
}