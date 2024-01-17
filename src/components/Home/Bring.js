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
        className="max-w-auto px-6 md:hiden md:hidden"
      />
      <h1 className="lg:px-32 montserrat font-semibold lg:text-xl px-5 lg:text-left text-center text-[#5F2F90] pb-8">
        From setting up brand your brand to bringing customers
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-12 lg:justify-end flex-col lg:items-center justify-center p-12 lg:p-0">
        <div className="bg-[#5F2F90] flex flex-col items-center justify-center p-8 lg:max-w-[30%]">
          <h1 className="text-white montserrat font-bold text-2xl">DISCOVER</h1>
          <p className="text-white montserrat font-medium text-lg text-center">
            Conducting comprehensive market research and analysis to understand
            your target audience and the competition
          </p>
        </div>
        <div className="bg-[#5F2F90] flex flex-col items-center justify-center p-10 lg:max-w-[30%]">
          <h1 className="text-white montserrat font-bold text-2xl">PLAN</h1>
          <p className="text-white montserrat font-medium text-lg text-center">
            Develop a tailored strategy and roadmap to achieve your business
            goals.
          </p>
        </div>
      </div>
      <div className="lg:flex items-center lg:justify-between justify-center p-12 lg:p-0">
        <div className="bg-[#ff8513] flex flex-col items-center justify-center p-12 lg:max-w-[40%]">
          <h1 className="text-white montserrat font-bold lg:text-6xl text-5xl lg:pb-8 pb-4">
            EXECUTE
          </h1>
          <p className="text-white montserrat font-medium text-lg text-center">
            Implementing the strategy through effective campaigns and activities
            to drive brand awareness and customer acquisition..
          </p>
        </div>
        <h1 className="montserrat  text-shadowBring w-full text-4xl font-bold text-center text-[#5F2F90] md:text-3xl lg:text-5xl lg:w-1/2 md:text-left lg:justify-between 2xl:text-7xl pt-12">
        BRING &apos;EM IN
        </h1>
      </div>
    </div>
  );
};

export default Bring;
