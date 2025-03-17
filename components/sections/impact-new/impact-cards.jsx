"use client";

import { motion } from 'framer-motion';
import { impactCards } from '../impact-new/impact-data';

export function ImpactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {impactCards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1, delay: index * 0.1 }}
          className="group relative overflow-hidden "
          style={{ 
            backgroundImage: `url(${card.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '256px',
            transition: 'transform 0.1s ease-in-out'
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0  transition-transform duration-100" />
          
          {/* Title */}
          <div className="absolute top-4 left-4 px-3 py-2">
            <h4 className="text-white text-2xl font-semibold transition-opacity duration-100">
              {card.title}
            </h4>
          </div>
          
        </motion.div>
      ))}
    </div>
  );
}