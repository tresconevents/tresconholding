import React from "react";
import GlobalContainer from "./GlobalContainer";
import GlobalHeader from "./GlobalHeader";
import GlobalMap from "./GlobalMap";

const GlobalFootprint = () => {
  return (
    <section className="bg-[#1E2124] relative h-[auto] font-manrope lg:pb-[25rem] pb-[5rem]">
      <GlobalContainer>
        <GlobalHeader />
        <GlobalMap />
      </GlobalContainer>
    </section>
  );
};

export default GlobalFootprint;
