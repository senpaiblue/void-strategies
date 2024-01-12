import Image from "next/image";
import React from "react";
import LaunchBg from "../../../public/assets/Home/LaunchPad.png";
import LaunchMobile from "../../../public/assets/Home/HomeMobile/LaunchMobile.png";

const LaunchPad = () => {
  return (
    <div className="relative bg-white p-4 lg:p-8 lg:items-center lg:justify-center">
      <div className="hidden md:block w-full h-auto">
        <Image
          src={LaunchBg}
          alt="LaunchPadBg"
          layout="responsive"
          width={700}
          height={400}
        />
      </div>
      <div className="md:hidden w-full h-auto">
        <Image
          src={LaunchMobile}
          alt="HeroPhone"
          layout="responsive"
          width={700}
          height={400}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center lg:justify-start justify-center lg:pt-36 w-full gap-5 px-6 lg:items-end sm:px-10 lg:px-20 pt-36 ">
        <h1 className="montserrat w-full text-lg font-medium text-center text-white md:text-4xl lg:text-2xl lg:w-[40%] md:text-right lg:justify-between">
          At Void Strategies, we are your trusted B2B Service Umbrella.
        </h1>
        <h1 className="montserrat w-full text-xl font-bold text-white text-center md:text-3xl lg:text-3xl lg:w-1/2 md:text-left lg:text-right">
          What does that mean?
        </h1>
        <h1 className="montserrat w-full px-2 text-sm font-medium text-center text-white md:text-4xl lg:text-2xl lg:w-[40%] md:text-right lg:justify-between">
          Well, we bring together a community of brands, each specializing in a
          specific department, allowing us to have a workforce pool of creative
          thinkers, strategists, designers, developers, architects, analysts,
          and marketing experts. This collective knowledge and experience enable
          us to offer a wide array of services to propel businesses like 
          <span className="lg:text-3xl ml-1 font-semibold text-lg lg:font-bold">yours.</span>
        </h1>
      </div>
    </div>
  );
};

export default LaunchPad;
