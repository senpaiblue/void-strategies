import React from "react";
import bring from "../../../public/assets/Home/A6.png";
import bringPhone from "../../../public/assets/Home/HomeMobile/A7.png";
import Image from "next/image";

const Bring = () => {
  return (
    <div className="bg-white max-w-auto ">
      <Image
        src={bring}
        alt="bring"
        className="max-w-[40%] px-6 hidden md:flex"
      />
      <Image
        src={bringPhone}
        alt="bring"
        className="max-w-auto px-6 md:hiden lg:hidden"
      />
      <h1 className="lg:px-32 font-semibold lg:text-xl px-5 lg:text-left text-center text-[#5F2F90]">
        From setting up brand your brand to bringing customers
      </h1>
    </div>
  );
};

export default Bring;
