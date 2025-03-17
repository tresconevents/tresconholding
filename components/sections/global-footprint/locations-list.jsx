import { useState } from "react";
import { locations } from "./locations-data";
import Image from "next/image";

const GlobalMap = () => {
  const [activeCountry, setActiveCountry] = useState("India");
  const [activeCoordinates, setActiveCoordinates] = useState({ x: 0, y: 0 });

  const handleCountryClick = (location) => {
    setActiveCountry(location.name);
    setActiveCoordinates(location.coordinates);
  };

  return (
    <>
      <div className="full-background pb-[10rem] relative">
        {/* <h2 className="font-manrope text-6xl font-[500] leading-[78px] mt-[5rem] mb-[20px] font-[500] font-anek-devanagari text-white z-[10] relative">
          Our Global Footprint
        </h2> */}

        <div className="flex items-center justify-between">
          <div className="md:flex flex-col">
            <ul className="font-anek-devanagari z-10 text-[34px] mt-[9rem] font-[600] leading-[40.5px] md:flex flex-col mb-[0]">
              {locations.map((location, index) => (
                <li
                  key={index}
                  className={`my-4 pl-2 cursor-pointer ${
                    activeCountry === location.name ? "text-[#00A5A3]" : ""
                  }`}
                  onClick={() => handleCountryClick(location)}
                >
                  {location.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mb-[20px]">
            <div className="absolute top-0 left-[50px]">
              {/* <Image
                src="/Vector.svg"
                alt="global map"
                width={1007}
                height={542}
                className="object-cover"
              /> */}
              {/* Render a point on the map based on activeCoordinates */}
              {/* <div
                style={{
                  position: "absolute",
                  left: `${activeCoordinates.x}px`,
                  top: `${activeCoordinates.y}px`,
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red", // Change color as needed
                  borderRadius: "50%", // Makes it a circle
                  zIndex: 50, // Ensure it's above the map
                }}
              /> */}
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default GlobalMap;