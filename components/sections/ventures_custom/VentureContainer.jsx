"use client"
import React from 'react'

const VentureContainer = ({ children }) => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 lg:pr-0  text-white">
      {children}
    </div>
  );
};

export default VentureContainer 