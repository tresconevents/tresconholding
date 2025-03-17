"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = ['All', 'News', 'Events', 'Media'];

export function NewsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 alignItems-[center] mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "px-4 py-3 rounded-full transition-colors w-[120px] items-center",
            activeTab === tab 
              ? "bg-[#01373D] text-white" 
              : "text-gray-600 hover:text-[#00A5A3] border border-2 border-[#00A5A3]"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}