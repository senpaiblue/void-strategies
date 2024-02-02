import Image from "next/image";
import React from "react";
import Bg from "../../../public/assets/About/Hero.png";
import PhoneBg from "../../../public/assets/About/Mobile/Hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative  max-h-screen min-h-[80vh]  xl:min-h-[80vh] md:min-h-[70vh] flex items-start justify-center flex-col w-full py-12 md:py-0 lg:pt-8 2xl:py-10 ">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <Image
          src={Bg}
          alt="bg"
          className="hidden object-cover w-full h-full md:block"
        />
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <Image
          src={PhoneBg}
          alt="HeroPhone"
          className="block object-cover w-full h-full max-h-full md:hidden" // Hide image on lg screens
        />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full gap-5 px-6 lg:items-start sm:px-10 lg:px-20 ">
        <h1 className="montserrat w-full text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl lg:w-1/2 md:text-left lg:justify-between 2xl:text-5xl">
        We&apos;re Cooking
        </h1>
        <h1 className="montserrat text-shadow w-full text-4xl font-bold text-center text-white md:text-3xl lg:text-5xl lg:w-full md:text-left lg:justify-between 2xl:text-7xl">
        SUCCESS STORIES
        </h1>
        <h1 className="montserrat w-full text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl lg:w-1/2 md:text-left lg:justify-between 2xl:text-5xl">
        Across The Globe.
        </h1>
        <Link
          href={"/ContactUs"}
          className="flex items-center justify-center w-full md:justify-start "
        >
          <button
            className="bg-[#F58A23] hover:bg-[#5F2F90] hover:border montserrat text-white  w-11/12 flex items-center justify-center px-5 py-2 rounded-full text-primary font-bold text-2xl  md:max-w-[30%] lg:max-w-[32%]"
          >
           
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
