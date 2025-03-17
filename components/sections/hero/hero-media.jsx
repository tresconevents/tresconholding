"use client";

import { VideoBackground } from './video-background';
import { VideoPlayer } from './video-player';

export function HeroMedia() {
  return (
    <div className="relative w-full aspect-square">
      <div className="absolute inset-0">
        <VideoBackground />
        <VideoPlayer />
      </div>
    </div>
  );
}