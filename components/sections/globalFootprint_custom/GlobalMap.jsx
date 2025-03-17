"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { locations } from "./locations-data";

const GlobalMap = () => {
  const [activeCountry, setActiveCountry] = useState("India");

  // Get current active location data
  const activeLocation = locations.find(loc => loc.name === activeCountry);

  // Get line position for active country with fixed precise positioning
  const getLineStyles = () => {
    if (!activeLocation) return {};

    const baseStyles = {
      position: 'absolute',
      height: '2px',
      backgroundColor: '#00A5A3',
      zIndex: 15,
      left: '35%'  // Consistent starting point
    };

    // Positions aligned with locations-data.js coordinates
    switch (activeCountry) {
      case 'Dubai':
        return { ...baseStyles, top: '24rem', width: '27%' };
      case 'India':
        return { ...baseStyles, top: '29rem', width: '34%' };
      case 'Kingdom of Saudi Arabia':
        return { ...baseStyles, top: '33.5rem', width: '25%' };
      case 'Mauritius':
        return { ...baseStyles, top: '38rem', width: '25%' };
      case 'Qatar':
        return { ...baseStyles, top: '42.5rem', width: '24%' };
      default:
        return { ...baseStyles, top: '29rem', width: '34%' };
    }
  };

  return (
    <section className="relative text-white pb-10">
      {/* Map background with fixed dimensions */}
      <div className="absolute top-0 left-0 w-full h-full z-0" style={{ opacity: 0.75 }}>
        <div className="absolute" style={{ 
          top: '-2rem',
          left: '92px',
        }}>
          <div style={{ width: '1007px', height: '542px', margin: '0 auto' }}>
            <Image
              src="/TRESCON Holdings Assets/PNG - 1x/MAP.png"
              alt="Global Map"
              width={1007}
              height={600}
              priority
              className="object-cover"
              style={{ width: '1007px', height: '100%' }}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl xl:text-[60px] font-[500] leading-tight mb-8 mt-[5rem] font-anek">
          Our Global Footprint
        </h2>
        
        {/* Animated pointer line with fixed positioning */}
        {activeLocation && (
          <motion.div
            key={activeCountry}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={getLineStyles()}
            className="origin-left"
          >
            <div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-[#00A5A3]"></div>
          </motion.div>
        )}
        
        {/* Grid layout for country names and location details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[10rem]">
          {/* Left side - Country Names */}
          <div className="flex flex-col space-y-8 mt-[5rem]">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveCountry(location.name)}
                className={`text-left text-[34px] font-[600] font-anek transition-colors duration-300 ${
                  activeCountry === location.name ? "text-[#00A5A3]" : "text-white"
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
          
          {/* Right side - Location Details */}
          <div className="flex justify-end mt-[5rem]">
            <div className="space-y-6 text-left">
              {activeLocation && (
                <>
                  <div className="space-y-2">
                    <h3 className="text-[#F6FAFA] font-anek font-[600] text-[22px]">
                      {activeLocation.address.area}
                    </h3>
                    <p className="text-[#F6FAFA] font-manrope font-[400] text-[14px] leading-[24px]">
                      {activeLocation.address.office}
                    </p>
                  </div>
                  
                  {activeLocation.address.area_2 && (
                    <div className="space-y-2">
                      <h3 className="text-[#F6FAFA] font-anek font-[600] text-[22px]">
                        {activeLocation.address.area_2}
                      </h3>
                      <p className="text-[#F6FAFA] font-manrope font-[400] text-[14px] leading-[24px]">
                        {activeLocation.address.office_2}
                      </p>
                    </div>
                  )}
                  
                  {activeLocation.address.area_3 && (
                    <div className="space-y-2">
                      <h3 className="text-[#F6FAFA] font-anek font-[600] text-[22px]">
                        {activeLocation.address.area_3}
                      </h3>
                      <p className="text-[#F6FAFA] font-manrope font-[400] text-[14px] leading-[24px]">
                        {activeLocation.address.office_3}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
