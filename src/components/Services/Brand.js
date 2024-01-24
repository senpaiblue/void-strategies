import React from "react";
import Bg5 from "../../../public/assets/Services/A5.png";
import Bg6 from "../../../public/assets/Services/A6.png";
import Bg7 from "../../../public/assets/Services/A7.png";
import Bg8 from "../../../public/assets/Services/A8.png";
import right from "../../../public/assets/Services/Desktop_Semicircle1.png";
import left from "../../../public/assets/Services/Desktop_Semicircle2.png";
import rightPhone from "../../../public/assets/Services/Mobile/Mobile_Semicircle1.png";
import leftPhone from "../../../public/assets/Services/Mobile/Mobile_Semicircle2.png";
import PhoneBg5 from "../../../public/assets/Services/Mobile/A5.png";
import PhoneBg6 from "../../../public/assets/Services/Mobile/A6.png";
import PhoneBg7 from "../../../public/assets/Services/Mobile/A7.png";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <div>
      <div className="md:p-16 ">
        <Image src={Bg5} alt="brand-img" className="hidden md:block" />
      </div>
      <div className="md:hidden p-4">
        <Image src={PhoneBg5} alt="brand-phone" className=" md:hidden" />
      </div>
      <h1 className="font-bold md:text-6xl text-3xl text-[#F58A23] text-center">
        Highlights from Our
      </h1>
      <h1 className="font-bold md:text-6xl text-3xl text-[#5F2F90] md:pt-4 pt-2 text-center">
        Umbrella Of Brands!
      </h1>
      <div className="flex flex-col">
        <div className="w-full flex flex-row-reverse relative">
          <Image src={right} alt="rightcircle" className="relative w-5/12 hidden md:block"/>
          <Image src={rightPhone} alt="rightcircle" className="relative w-5/12 md:hidden"/>
          <div className="absolute md:hidden p-8 inset-0 m-auto">
            <Image src={PhoneBg6} alt="Testimoninal" />
          </div>
          <div className="absolute hidden md:block p-60 inset-0 m-auto">
            <Image src={Bg6} alt="Testimoninal" />
          </div>
        </div>
        <div className="w-full flex flex-row relative">
          <Image src={leftPhone} alt="rightcircle" className="relative w-5/12 md:hidden"/>
          <Image src={left} alt="rightcircle" className="relative w-5/12 hidden md:block"/>
          <div className="absolute md:hidden p-8 inset-0 m-auto">
            <Image src={PhoneBg7} alt="Testimoninal" />
          </div>
          <div className="absolute hidden md:block p-60 inset-0 m-auto">
            <Image src={Bg7} alt="Testimoninal" />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-row items-center justify-center md:gap-80">
          <div className="">
            <h1 className="md:text-8xl text-4xl font-bold text-[#5F2F90]">
              Get Results,
              <br />
              Not Hassles.
            </h1>
            <Link href={"/ContactUs"}>
            <button className="bg-[#ff8513] md:w-[80%] w-full md:my-4 md:px-8 md:py-4 my-2 px-4 py-2 md:text-3xl text-xl text-white rounded-full font-semibold hover:bg-[#5F2F90]">
              Contact Us
            </button>
          </Link>
          </div>
          <div className="hidden md:block">
            <Image src={Bg8} alt="sales" className="w-9/12"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
