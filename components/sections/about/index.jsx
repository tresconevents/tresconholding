"use client";

import { AboutContainer } from './about-container';
import { AboutHeading } from './about-heading';
import { AboutContent } from './about-content';
import { AboutImage } from './about-image';

export function AboutSection() {
  return (
    <section className="relative pt-[3rem] md:pt-[6rem] border-[none] bg-white">
      <AboutContainer>
        <AboutHeading />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="">
            <AboutContent />
          </div>
          <AboutImage />
        </div>
      </AboutContainer>
    </section>
  );
}