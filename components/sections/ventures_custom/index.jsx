"use client";
import React from "react";
import VentureSlider from "./VentureSlider";
import VentureContainer from "./VentureContainer";
import Image from "next/image";
import Veturecontent from "./Veturecontent";

const Ventures_custom = () => {
  return (
    <section className="bg-[#1E2124] relative">
      <VentureContainer>
      <h2 className="text-[#00A5A3] text-lg font-semibold text-[18px] py-10 md:text-[24px] pb-4 font-[400] border-b border-[rgba(255,255,225,0.1)]">
        VENTURES & PORTFOLIO COMPANIES
      </h2>
        <Veturecontent />
        <VentureSlider />
      </VentureContainer>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] ">
        <Image
          src="/black_dot.png"
          alt="Ellipse"
           fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Ventures_custom;
