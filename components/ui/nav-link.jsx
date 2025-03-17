"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';

export function NavLink({ href, className, children, ...props }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-white hover:text-[#C0F43C] transition-colors group",
        className
      )}
      {...props}
    >
      <span className="relative">
        {children}
        <span className={cn(
          "absolute -bottom-1 left-0 w-full h-0.5 bg-[#C0F43C] transition-transform duration-300",
          className?.includes('text-[#C0F43C]') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        )} />
      </span>
    </Link>
  );
}