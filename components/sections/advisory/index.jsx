"use client";

import { AdvisoryContainer } from "./advisory-container";
import { AdvisoryHeader } from "./advisory-header";
import { AdvisoryContent } from "./advisory-content";
import { AdvisorySlider } from "./advisory-slider";
import { useState } from "react";
import { advisoryMembers } from "./advisory-data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMedia";
import { cn } from "@/lib/utils";

export function AdvisorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(advisoryMembers);
  const isMobile = useMediaQuery("(max-width: 769px)");

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % visible?.length;
    // Swap the current element with the next element
    // const updatedVisible = [...visible];
    // [updatedVisible[currentIndex], updatedVisible[nextIndex]] = [updatedVisible[nextIndex], updatedVisible[currentIndex]];
    // setVisible(updatedVisible); // Update the visible state with swapped data
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + visible?.length) % visible?.length;
    // Swap the current element with the previous element
    // const updatedVisible = [...visible];
    // [updatedVisible[currentIndex], updatedVisible[prevIndex]] = [updatedVisible[prevIndex], updatedVisible[currentIndex]];
    // setVisible(updatedVisible); // Update the visible state with swapped data
    setCurrentIndex(prevIndex);
  };
  return (
    <section className="bg-white py-24 relative lg:py-0 lg:bottom-[8rem] mt-[15rem]">
      <AdvisoryContainer>
        <AdvisoryHeader />
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 mt-16">
          <div className="space-y-8 m-0 lg:ml-[6.2rem] lg:mt-[2rem]">
            <AdvisoryContent />
            <div
              className={cn(
                `flex gap-3 mt-10`,
                isMobile ? "absolute bottom-0 right-1/2 translate-1/2" : ""
              )}
            >
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors w-[60px] h-[60px] flex justify-center items-center"
                aria-label="Previous slide"
              >
                <ArrowLeft className="text-black w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors w-[60px] h-[60px] flex justify-center items-center"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
          <AdvisorySlider visible={visible} currentIndex={currentIndex} />
        </div>
      </AdvisoryContainer>
    </section>
  );
}
