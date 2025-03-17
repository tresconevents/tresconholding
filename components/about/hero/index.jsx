"use client";

import { VideoBackground } from './video-background';
import { DecorativeElements } from './decorative-elements';
import { HeroContent } from './hero-content';

export function AboutHero() {
  return (
    <section id='About_hero' className="relative min-h-screen">
      <VideoBackground />
      <DecorativeElements />
      <HeroContent />
    </section>
  );
}