import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function VentureButton() {
  return (
    <Link
      href="#"
      className="inline-flex items-center text-[20px] line-[30px] gap-4 text-[#FFFFFF] hover:text-[#FFFFFF]/80 transition-colors font-manrope text-base font-semibold mt-6 group"
    >
      View Website
      <button className=" p-3 rounded-full rounded-full bg-[#00A5A3] text-[#fff]">
        <ArrowUpRight className="align-[center] w-5 h-5" />
      </button>
    </Link>
  );
}