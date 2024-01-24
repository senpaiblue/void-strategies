import React from "react";
import Bg8 from "../../../public/assets/About/A5.png";
import Image from "next/image";
import Link from "next/link";

const Last = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-row items-center justify-center md:gap-60">
        <div className="hidden md:block w-4/12">
          <Image src={Bg8} alt="sales" className="w-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-8xl text-4xl  text-center leading-normal font-bold text-[#5F2F90]">
            Last Longer
            <br />
            In The Market
          </h1>
          <Link href={"/ContactUs"}>
            <button className="bg-[#ff8513] w-full md:my-4 md:px-24 md:py-4 my-2 px-4 py-2 md:text-3xl text-xl text-white rounded-full font-semibold hover:bg-[#5F2F90] whitespace-nowrap">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Last;
