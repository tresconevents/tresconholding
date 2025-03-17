"use client"

import React from 'react'
import { motion } from 'framer-motion'
const AdvisoryContent = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="space-y-8"
  >
    <h3 
      className="text-[60px] font-[400] leading-[70px] text-[#1E1E1E]"
      style={{ 
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none'
      }}
    >
      Guided by <br/> Visionaries
    </h3>
    
    <p 
      className="font-manrope text-[20px] font-[400] leading-[30px] text-[#1E1E1E]"
      style={{ 
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none'
      }}
    >
      Our advisory board consists of industry <br/> leaders and experts who provide invaluable <br/> guidance and insights.
    </p>
  </motion.div>
  )
}

export default AdvisoryContent