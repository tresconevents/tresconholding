// LocationCard.js
import React, { useState } from "react";

const LocationCard = ({ location, activeLocation, activeCoordinates }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleLocationClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-4 rounded-lg"
      id="locationCard"
    >
      {/* Glowing dot */}
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
          isClicked ? "translate-x-24" : "translate-x-0"
        }`}
      >
        {activeCoordinates && activeCoordinates.length > 0 && (
          <div
            className="pointer absolute w-6 h-6 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse"
            style={{
              left: `${activeCoordinates[0]}px`,
              top: `${activeCoordinates[1]}px`,
            }}
          ></div>
        )}{" "}
      </div>

      {/* Horizontal line */}
      <div className="absolute left-7 top-1/2 -translate-y-1/2">
        <div className="w-40 h-0.5 bg-gray-600"></div>
      </div>

      {/* Location text */}
      <div className="ml-48">
        <h2 className="text-white font-semibold text-lg">{location.name}</h2>
        <p className="text-gray-400 text-sm">{location.address.office}</p>
        <p className="text-gray-400 text-sm">{location.address.area}</p>
        <p className="text-gray-400 text-sm" onClick={handleLocationClick}>
          {location.address.country}
        </p>
        {location.id === activeLocation.id && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <div className="w-40 h-0.5 bg-gray-600"></div>
          </div>
        )}
      </div>

      {/* Honeycomb background pattern */}
    </div>
  );
};

export default LocationCard;
