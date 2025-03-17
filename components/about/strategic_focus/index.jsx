import React, { useState } from "react";
import Strategic_content from "./Strategic_content";
import Strategic_nav from "./Strategic_nav";
// import Heading from "./heading";

const Strategic_focus = () => {
    const  [activeStrategy,setActiveStrategy]=useState("leadership")
  return (
    <section className="relative bg-[#1E2124] z-20 ">
      <div className="max-w-[88rem] mx-auto sm:px-6 lg:px-8 z-20">
        <div className="flex flex-wrap-reverse">
          <Strategic_nav activeStrategy={activeStrategy} onSelect={setActiveStrategy}/>
          <Strategic_content activeStrategy={activeStrategy}/>
        </div>
      </div>
    </section>
  );
};

export default Strategic_focus;
