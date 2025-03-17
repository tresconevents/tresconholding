import React from "react";
import Heading from "./heading";
import Core_content from "./core_content";

const Coral_Values = () => {
  return (
    <section className="relative bg-white py-24 ">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <Heading />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 mt-[2rem]  items-center">
          <div className="flex flex-col   gap-2  text-[#000]">
              <Core_content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coral_Values;
