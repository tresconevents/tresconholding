"use client";

import { useState } from 'react';
import { SidebarHeader } from './sidebar-header';
import { SidebarNav } from './sidebar-nav';
import { SidebarToggle } from './sidebar-toggle';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidebarToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <aside 
        className={`fixed top-0 left-0 h-full bg-[#003B3D] w-64 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <SidebarHeader onClose={() => setIsOpen(false)} />
          <SidebarNav onClose={() => setIsOpen(false)} />
        </div>
      </aside>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}