"use client";

import { useState, useEffect } from 'react';

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if(window.scrollY > 0 ){
      setIsScrolled(true);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
}