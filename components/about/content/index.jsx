"use client";

import { VideoSection } from './video-section';
import { TextContent } from './text-content';

export function AboutContent() {
  return (
    <section className="relative bg-white py-24 ">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <TextContent />
          <VideoSection />
        </div>
      </div>
    </section>
  );
}