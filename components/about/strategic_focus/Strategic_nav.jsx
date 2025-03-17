import React from "react";
import Heading from "./heading";
import { Strategic } from "./strategic";

const Strategic_nav = ({activeStrategy,onSelect}) => {
  return (
    <div className="py-[1rem]">
      <Heading />
      <ul className="pb-[2rem]">
        {Strategic.map((Strategic) => (
          <li key={Strategic.id} className={`text-[2rem] font-[500] font-anek-devanagari cursor-pointer pr-[1rem] py-[1rem] ${
            activeStrategy === Strategic.id ? 'text-[#C0F43C]' :'text-white/60 hover:text-white'
          }`} onClick={() => onSelect(Strategic.id)}>{Strategic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Strategic_nav;
