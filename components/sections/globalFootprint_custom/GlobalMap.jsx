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

  // Separate function for line positioning
  const getLinePosition = (location) => ({
    position: 'absolute',
    ...(viewportWidth <= 768 
      ? {
          // Mobile vertical line position - exact center
          top: `calc(${location.position.top})`,
          left: `calc(${location.position.left})`,
          transform: 'translate(-50%, 0)', // Center with the point
          zIndex: 10
        }
      : {
          // Desktop horizontal line position - exact center
          top: `calc(${location.position.top})`,
          left: `calc(${location.position.left})`,
          transform: 'translate(0, -50%)', // Center with the point
          zIndex: 10
        }
    )
  });

  // Line styles function focusing on appearance properties
  const getLineStyles = (location) => ({
    ...(viewportWidth <= 768 
      ? {
          // Vertical line for mobile
          width: '1px',
          height: '120px',
          backgroundColor: 'white',
          transformOrigin: 'center top'
        }
      : {
          // Horizontal line for desktop
          height: '1px',
          width: viewportWidth <= 1024 
            ? (location.name === 'India' ? '230px' 
              : location.name === 'Mauritius' ? '170px'
              : location.name === 'Kingdom of Saudi Arabia' ? '200px'
              : location.name === 'Dubai' ? '160px'
              : '140px')
            : viewportWidth >= 1440 ? '250px' : '230px',
          backgroundColor: 'white',
          transformOrigin: 'left center'
        }
    )
  });

  // Add special handling for Mauritius position with exact position values
  const adjustPositionForMobile = (location) => {
    if (viewportWidth <= 768) {
      if (location.name === 'Mauritius') {
        // Set exact position for Mauritius on mobile to top:63% and left:59%
        return {
          ...location,
          position: {
            ...location.position,
            top: '63%',
            left: '59%'
          }
        };
      }
    }
    return location;
  };

  // Use the adjusted location when needed
  const displayLocation = activeLocation ? adjustPositionForMobile(activeLocation) : null;

  // Update text positioning to be closer to the line
  const getTextPosition = (location) => ({
    position: 'absolute',
    ...(viewportWidth <= 1024 && viewportWidth > 768
      ? {
          top: '21%',
          right: '20px', // Moved closer
          transform: 'none',
          maxWidth: '250px'
        }
      : {
          top: `calc(${location.position.top} - 25%)`,
          right: viewportWidth >= 1440 ? '50px' : '30px', // Moved closer
          transform: 'translateY(0)'
        }
    )
  });

  return (
    <div className="relative text-white lg:pb-40 ">
      <div className="relative z-10">
        <h2 className="text-2xl md:text-[34px] xl:text-[60px] font-[500] leading-tight md:mt-[4rem] xl:mt-[4rem] mb-8 mt-8 font-anek">
          Our Global Footprint
        </h2>

        {viewportWidth <= 768 ? (
          <>
            {/* Horizontal country list - left aligned */}
            <div className="overflow-x-auto no-scrollbar mb-8">
              <div className="flex space-x-6 whitespace-nowrap">
                {locations.map((location) => (
                  <span
                    key={location.id}
                    className={`cursor-pointer text-lg font-semibold font-anek transition-all ${
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
            </div>

            {/* Map Image */}
            <div className="relative w-full h-[300px] mb-8">
              <Image
                src="/map.png"
                alt="Global Map"
                fill
                className="object-contain"
              />
              {/* Pointer and Line animations remain unchanged */}
              <AnimatePresence mode="wait">
                {displayLocation && (
                  <React.Fragment key={displayLocation.id}>
                    {/* Place the pointer element first in DOM order */}
                    <motion.div
                      layout
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1,
                        opacity: 1,
                        top: displayLocation.position.top,
                        left: displayLocation.position.left,
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0 }}
                      className={`absolute ${
                        viewportWidth <= 768 ? 'w-2 h-2' : 'w-3 h-3'
                      } bg-[#C0F43C] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(192,244,60,0.5)] drop-shadow-lg animate-pulse z-30`}
                      style={{
                        animation: 'blink 3.5s infinite' // Increased from 2s to 3.5s for slower blinking
                      }}
                    />
                    {/* Place line after pointer so pointer appears above line */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute"
                      style={{
                        ...getLinePosition(displayLocation),
                        ...getLineStyles(displayLocation)
                      }}
                    />
                  </React.Fragment>
                )}
              </AnimatePresence>
            </div>

            {/* Location Details - left aligned */}
            {displayLocation && (
              <div className="text-white space-y-4 text-left">
                <div className="space-y-2">
                  <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                    viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                  }`}>
                    {displayLocation.address?.area}
                  </h3>
                  <p className={`text-[#F6FAFA] font-manrope ${
                    viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                  } leading-[24px]`}>
                    {displayLocation.address?.office}
                  </p>
                </div>
                {displayLocation.address?.area_2 && (
                  <div>
                    <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                    }`}>
                      {displayLocation.address?.area_2}
                    </h3>
                    <p className={`text-[#F6FAFA] font-manrope ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                    } leading-[24px]`}>
                      {displayLocation.address?.office_2}
                    </p>
                  </div>
                )}
                {displayLocation.address?.area_3 && (
                  <div>
                    <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                    }`}>
                      {displayLocation.address?.area_3}
                    </h3>
                    <p className={`text-[#F6FAFA] font-manrope ${
                      viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                    } leading-[24px]`}>
                      {displayLocation.address?.office_3}
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          // Original desktop layout
          <>
            <div className="absolute top-[-1.6%] left-[4.5%] w-full max-w-[1007px] h-auto aspect-[1.86/1] sm:left-1/2 sm:-translate-x-1/2 md:w-[85%] lg:left-[4.5%] lg:translate-x-0 lg:w-[76%] xl:w-[90%] z-[-1]">
              <Image
                src="/map.png"
                alt="Global Map"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100%, (max-width: 1024px) 76%, (max-width: 1280px) 90%, 1007px"
              />
              
              {/* Add Pointer and Line */}
              <AnimatePresence mode="wait">
                {displayLocation && (
                  <React.Fragment key={displayLocation.id}>
                    {/* Place the pointer element first in DOM order */}
                    <motion.div
                      layout
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1,
                        opacity: 1,
                        top: displayLocation.position.top,
                        left: displayLocation.position.left,
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0 }}
                      className={`absolute ${
                        viewportWidth <= 768 ? 'w-2 h-2' : 'w-3 h-3'
                      } bg-[#C0F43C] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_5px_rgba(192,244,60,0.5)] drop-shadow-lg animate-pulse z-30`}
                      style={{
                        animation: 'blink 2s infinite' // Increased from 2s to 3.5s for slower blinking
                      }}
                    />
                    {/* Place line after pointer so pointer appears above line */}
                    <motion.div
                      initial={viewportWidth <= 768 ? { scaleY: 0 } : { scaleX: 0 }}
                      animate={viewportWidth <= 768 ? { scaleY: 1 } : { scaleX: 1 }}
                      exit={viewportWidth <= 768 ? { scaleY: 0 } : { scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bg-white z-20"
                      style={{
                        ...getLinePosition(displayLocation),
                        ...getLineStyles(displayLocation)
                      }}
                    />
                  </React.Fragment>
                )}
              </AnimatePresence>
            </div>

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
                {displayLocation && (
                  <div 
                    key={displayLocation.id} 
                    className="text-white flex flex-col gap-8"
                    style={getTextPosition(displayLocation)}
                  >
                    <div className="space-y-2">
                      <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                        viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                      }`}>
                        {displayLocation.address?.area}
                      </h3>
                      <p className={`text-[#F6FAFA] font-manrope ${
                        viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                      } leading-[24px]`}>
                        {displayLocation.address?.office}
                      </p>
                    </div>
                    {displayLocation.address?.area_2 && (
                      <div>
                        <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                          viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                        }`}>
                          {displayLocation.address?.area_2}
                        </h3>
                        <p className={`text-[#F6FAFA] font-manrope ${
                          viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                        } leading-[24px]`}>
                          {displayLocation.address?.office_2}
                        </p>
                      </div>
                    )}
                    {displayLocation.address?.area_3 && (
                      <div>
                        <h3 className={`text-[#F6FAFA] font-anek font-[600] ${
                          viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[17px]' : 'text-[22px]'
                        }`}>
                          {displayLocation.address?.area_3}
                        </h3>
                        <p className={`text-[#F6FAFA] font-manrope ${
                          viewportWidth <= 1024 && viewportWidth > 768 ? 'text-[12px]' : 'text-[14px]'
                        } leading-[24px]`}>
                          {displayLocation.address?.office_3}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GlobalMap;
