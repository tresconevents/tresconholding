import Image from "next/image";
import React from "react";

const VideoPlay = () => {
  return (
    <div className="relative  ">
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0">
          <div className="absolute inset-0   flex items-center justify-center">
            <div className="relative w-full h-full ">
              <Image src="/full_image.png" alt="full_image.png" className="object-cover" fill />
            </div>
          </div>
          <div className="flex items-center justify-center absolute inset-0 ">
            <div className="w-[80%] h-[80%] relative">
            <video
         
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full rounded-[20rem] object-cover"
        >
          <source src="/banner_video_wbs.mp4" type="video/mp4" />
        </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
