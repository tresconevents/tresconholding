"use client";

import { StrengthContainer } from './strength-container';
import { StrengthHeading } from './strength-heading';
import { StrengthContent } from './strength-content';
import { StrengthDifferentiators } from './strength-differentiators';
import { Background } from './background';

export function StrengthSection() {
  return (
    <section className="relative  pb-[5rem] pt-[0rem]     bg-[#ffffff]" id="outsrengthandkey">
      <StrengthContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <StrengthHeading />
            <StrengthContent />
          </div>
          <StrengthDifferentiators />
        </div>
      </StrengthContainer>
      <Background />
    </section>
  );
}