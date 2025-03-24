import React from "react";
import AdvisoryContainer from "./advisoryMain";
import { AdvisoryHeader } from "./advisoryHeading";
import AdvisoryContent from './advisoryContent';
import AdvisorySlider from './advisorySlider';

const Advisory_custom = () => {
  return (
    <section className="bg-white lg:py-24  py-12 relative  lg:bottom-[8rem] lg:mt-[15rem]">
      <AdvisoryContainer>
        <AdvisoryHeader />
        <div className="">
          {/* <AdvisoryContent />    */}
        <AdvisorySlider />
        </div>
      </AdvisoryContainer>
    </section>
  );
};

export default Advisory_custom;
