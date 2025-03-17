import Image from "next/image";
import React from "react";
import { Strategic } from "./strategic";
import Strategic_Icon from "./strategic_Icon";

const Strategic_content = ({ activeStrategy }) => {
  const strategy = Strategic.find((s) => s.id === activeStrategy);
  // debugger
  // console.log(strategy)
  return (
    <div
      className="flex-shrink-[1] flex-grow-[1] basis-[40rem] relative"
      key={activeStrategy}
  
    >
      <Image
        src={strategy.image}
        alt={strategy.altData}
        width={100}
        height={100}
        className="!w-[100%]  !h-[100%] "
      />

      <Strategic_Icon />
    </div>
  );
};

export default Strategic_content;
