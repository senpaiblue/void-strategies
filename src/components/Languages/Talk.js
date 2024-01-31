import React from "react";
import phoneBg from "../../../public/assets/Languages/Mobile/A3.png";
import phone from "../../../public/assets/Languages/A4.png";
import Image from "next/image";
import Link from "next/link";

const Talk = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between md:p-20 p-4 ">
      <Image src={phoneBg} alt="talk" className="md:flex hidden" />
      <Image src={phone} alt="talk" className="md:hidden flex w-[60%]" />
      <div className="flex flex-col md:items-center md:justify-center p-4 md:p-20">
        <h1 className="text-[#5F2F90] md:text-8xl font-bold text-2xl text-left md:pb-8 pb-2">
          Let&apos;s Talk?
        </h1>
        <Link href={"/ContactUs"}>
          <button className="bg-[#F58A23] text-lg p-2 hover:bg-[#5F2F90] montserrat text-white rounded-xl  md:rounded-full md:px-20 md:py-6 md:text-3xl font-bold whitespace-nowrap">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Talk;
