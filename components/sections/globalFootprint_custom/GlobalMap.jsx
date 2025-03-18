"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { locations } from "./locations-data";
import { motion, AnimatePresence } from "framer-motion";

const GlobalMap = () => {
  const [activeCountry, setActiveCountry] = useState("India");
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const storedCountry = localStorage.getItem("activeCountry");
    if (storedCountry) setActiveCountry(storedCountry);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCountryClick = (country) => {
    setActiveCountry(country);
    localStorage.setItem("activeCountry", country);
  };

  const activeLocation = locations.find(loc => loc.name === activeCountry);

  // Calculate line width based on viewport
  const getLineWidth = (location) => {
    if (viewportWidth <= 1024) {
      const widths = {
        'India': 450,
        'Dubai': 420,
        'Kingdom of Saudi Arabia': 430,
        'Mauritius': 440,
        'Qatar': 425
      };
      return widths[location.name] || 400;
    }
    return 350;
  };

  const getLineStyles = (location) => ({
    position: 'absolute',
    height: '1px',
    backgroundColor: 'white',
    top: `calc(${location.position.top} + 0.9%)`,
    left: `calc(${location.position.left} + 1%)`,
    width: viewportWidth <= 1024 ? (
      location.name === 'India' ? '150px' :       // Reduced from 140px
      location.name === 'Mauritius' ? '100px' :   // Reduced proportionally
      location.name === 'Kingdom of Saudi Arabia' ? '120px' : // Reduced proportionally
      location.name === 'Dubai' ? '110px' :        // Reduced proportionally
      '90px'                                      // Reduced default
    ) : viewportWidth >= 1440 ? '180px' : '200px',  // Reduced larger screen sizes
    transform: 'translateY(-50%)',
    transformOrigin: 'left'
  });

  // Update text positioning style
  const getTextPosition = (location) => ({
    position: 'absolute',
    ...(viewportWidth <= 1024 && viewportWidth > 768
      ? {
          top: '21%',
          right: '40px',
          transform: 'none',
          maxWidth: '250px'
        }
      : {
          top: `calc(${location.position.top} - 25%)`,
          right: viewportWidth >= 1440 ? '100px' : '50px',
          transform: 'translateY(0)'
        }
    )
  });

  return (
    <div className="relative text-white pb-40">
      {/* Map Image - Positioned Behind */}
      <div className="absolute top-[-1.6%] left-[4.5%] w-full max-w-[1007px] h-auto aspect-[1.86/1] md:w-[85%] lg:w-[76%] xl:w-[90%] z-0">
        <Image
          src="/map.png"
          alt="Global Map"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100%, (max-width: 1024px) 76%, (max-width: 1280px) 90%, 1007px"
        />
        
        {/* Add Pointer and Line */}
        <AnimatePresence mode="wait">
          {activeLocation && (
            <React.Fragment key={activeLocation.id}>
              <motion.div
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  top: activeLocation.position.top,
                  left: activeLocation.position.left,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0 }}
                className="absolute w-3 h-3 bg-[#C0F43C] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(192,244,60,0.5)] drop-shadow-lg animate-pulse z-20"
                style={{
                  animation: 'blink 2s infinite'
                }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute h-[1px] bg-white z-[10]"
                style={getLineStyles(activeLocation)}
              />
            </React.Fragment>
          )}
        </AnimatePresence>
      </div>

      {/* Content - Positioned Above */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-[34px] xl:text-[60px] font-[500] leading-tight md:mt-[4rem] xl:mt-[4rem] mb-8 font-anek">
          Our Global Footprint
        </h2>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Country List (Left Side) */}
          <div className="flex flex-col space-y-4 md:mt-[8rem] lg:mt-[12rem]">
            {locations.map((location) => (
              <span
                key={location.id}
                className={`cursor-pointer pb-[1rem] xl:pb-[2rem] text-lg md:text-[24px] xl:text-[34px] font-semibold font-anek transition-all ${
                  activeCountry === location.name
                    ? "text-[#00A5A3]"
                    : "text-white"
                }`}
                onClick={() => handleCountryClick(location.name)}
              >
                {location.name}
              </span>
            ))}
          </div>

          {/* Location Details (Right Side) */}
          <div className="flex flex-col space-y-4 items-end text-left relative">
            {activeLocation && (
              <div 
                key={activeLocation.id} 
                className="text-white flex flex-col gap-8"
                style={getTextPosition(activeLocation)}
              >
                <div className="space-y-2">
                  <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                    viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                  }`}>
                    {activeLocation.address?.area}
                  </h3>
                  <p className={`text-[#F6FAFA] font-manrope ${
                    viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                  } leading-[24px]`}>
                    {activeLocation.address?.office}
                  </p>
                </div>
                {activeLocation.address?.area_2 && (
                  <div>
                    <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                    }`}>
                      {activeLocation.address?.area_2}
                    </h3>
                    <p className={`text-[#F6FAFA] font-manrope ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                    } leading-[24px]`}>
                      {activeLocation.address?.office_2}
                    </p>
                  </div>
                )}
                {activeLocation.address?.area_3 && (
                  <div>
                    <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                    }`}>
                      {activeLocation.address?.area_3}
                    </h3>
                    <p className={`text-[#F6FAFA] font-manrope ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                    } leading-[24px]`}>
                      {activeLocation.address?.office_3}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
