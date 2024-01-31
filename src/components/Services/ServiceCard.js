"use client";
import React, { useState } from "react";

const ServiceCard = ({ heading, paragraph }) => {
  const [hover, setHover] = useState(false);

  function onHover() {
    setHover(true);
  }

  function onHoverLeave() {
    setHover(false);
  }

  const color = hover ? "#FFFFFF" : "#000000";
  const backgroundColor = hover ? "#5F2F90" : "#FFFFFF";
  return (
      <div
        className=" border-[#5F2F90] md:w-[260px] h-[200px] border-2 flex flex-col items-center justify-center md:px-4 p-2 rounded-xl"
        style={{ backgroundColor }}
        onMouseEnter={onHover}
        onMouseLeave={onHoverLeave}
      >
        <div className="border-b border-[#F58A23] pb-2 items-center">
          <h1
            className="text-black font-medium md:font-semibold text-sm md:text-xl text-center"
            style={{ color }}
          >
            {heading}
          </h1>
        </div>
        <p
          className="pt-2 font-normal text-[12px] md:text-sm md:w-[15vw]  text-center leading-normal"
          style={{ color }}
        >
          {paragraph}
        </p>
      </div>
    
  );
};

export default ServiceCard;
