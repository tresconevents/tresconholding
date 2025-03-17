import React from "react";
import Heading from "./heading";

import Impact_Initiatives_Content from "./impact_initiatives_content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Impact_Initiatives_Values = () => {
  return (
    <section className="relative bg-white py-24 ">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <Heading />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 mt-[2rem]  items-center">
          <div className="flex flex-col   gap-2  text-[#000]">
            <p className="font-anek-devanagari font-[400] text-[42px]">
              Through Trescon Foundation and our ventures, we're creating
              meaningful impact across:
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-[20px] line-[30px] mb-10 gap-4 text-[#000000] hover:text-[#FFFFFF]/80 transition-colors font-manrope text-base font-semibold mt-6 group"
            >
              Learn More Abut Out Impact
              <button className=" p-3 rounded-full rounded-full bg-[#00A5A3] text-[#fff]">
                <ArrowUpRight className="align-[center] w-5 h-5" />
              </button>
            </Link>
            <Impact_Initiatives_Content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact_Initiatives_Values;
