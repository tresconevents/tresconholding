"use client";

import { X } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export function SidebarHeader({ onClose }) {
  return (
    <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
      <Logo />
      <button
        onClick={onClose}
        className="text-white hover:text-[#C0F43C] transition-colors"
        aria-label="Close sidebar"
      >
        <X size={24} />
      </button>
    </div>
  );
}