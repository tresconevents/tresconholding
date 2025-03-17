import React from "react";
import VideoPlay from "./bg_video";
import OurContent from "./our_content";
import Heading from "./heading";
// import HeadinOurVision from "./headinOurVision";
import HeadingOurVision from "./headinOurVision";
import OurVisionContain from "./ourVisionContain";

const Ourpurpose = () => {
  return (
    <section className="relative bg-white py-24 ">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  items-center">
          <VideoPlay />
          <div>
          <Heading />
          <OurContent />
          <HeadingOurVision />
          <OurVisionContain />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Ourpurpose;
