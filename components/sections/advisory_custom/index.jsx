import React from "react";
import AdvisoryContainer from "./advisoryMain";
import { AdvisoryHeader } from "./advisoryHeading";
import AdvisoryContent from './advisoryContent';
import AdvisorySlider from './advisorySlider';

const Advisory_custom = () => {
  return (
    <section className="bg-white py-24 relative lg:py-0 lg:bottom-[8rem] mt-[15rem]">
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
