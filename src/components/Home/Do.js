import React from "react";
import doPhone from "../../../public/assets/Home/HomeMobile/A8.png";
import Doo from "../../../public/assets/Home/A7.png";
import Image from "next/image";

const Do = () => {
  return (
    <div className="bg-white max-w-auto mt-8 ">
      <div className=" max-w-auto lg:flex lg:justify-end">
        <Image
          src={Doo}
          alt="bring"
          className=" max-w-full px-6 hidden md:flex md:justify-end"
        />
        <Image
          src={doPhone}
          alt="bring"
          className="max-w-auto px-6 md:hiden md:hidden"
        />
      </div>
      <h1 className="lg:px-32 montserrat font-semibold lg:text-xl px-5 lg:text-right text-center text-[#5F2F90] pb-8">
        Everything you need to “do the business”, smoothly!
      </h1>
      <div className="lg:relative lg:top-5 z-2">
        <div className="lg:flex lg:flex-row lg:gap-12 lg:justify-start flex-col lg:items-center justify-center p-12 lg:p-0">
          <div className="bg-[#ff8513] flex flex-col mb-8 md:mb-0 items-center justify-center p-12 lg:max-w-[30%]">
            <h1 className="text-white montserrat font-bold text-2xl">
              OPTIMIZE
            </h1>
            <p className="text-white montserrat font-medium text-lg text-center">
              Improving your operations and processes for better efficiency
            </p>
          </div>
          <div className="bg-[#ff8513] flex flex-col items-center justify-center p-12 lg:max-w-[30%]">
            <h1 className="text-white montserrat font-bold text-2xl">
              INNOVATE
            </h1>
            <p className="text-white montserrat font-medium text-lg text-center">
              Develop new and creative ideas to set you apart from the
              competition
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:justify-between justify-center p-12 lg:p-0">
        <h1 className="montserrat  text-shadowBring w-full text-4xl font-bold text-center text-[#ff8513] md:text-3xl lg:text-5xl lg:w-1/2 md:text-left lg:justify-between 2xl:text-7xl pb-8 md:pb-8 lg:mx-16">
          JUST DO IT?
        </h1>
        <div className="bg-[#5F2F90] flex flex-col items-center justify-center p-12 lg:max-w-[40%]">
          <h1 className="text-white montserrat font-bold lg:text-6xl text-5xl lg:pb-8 pb-4">
            ENGAGE
          </h1>
          <p className="text-white montserrat font-medium text-lg text-center">
            ICreating an engaging customer experience that drives brand loyalty.
            Give them positive experiences to cherish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Do;
