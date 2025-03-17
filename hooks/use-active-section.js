"use client";

import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if(window.screenY >0){
      setActiveSection(true)
    }
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 0;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}