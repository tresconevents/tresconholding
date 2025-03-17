"use client";

import { Menu } from 'lucide-react';

export function SidebarToggle({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-4 left-4 z-50 p-2 text-white hover:text-[#C0F43C] transition-colors md:hidden"
      aria-label="Toggle sidebar"
    >
      <Menu size={24} />
    </button>
  );
}