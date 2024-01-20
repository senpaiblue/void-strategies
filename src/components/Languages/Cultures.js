import React from "react";
import culture from "../../../public/assets/Languages/Mobile/A2.png";
import cultureBg from "../../../public/assets/Languages/A2.png";
import Image from "next/image";

const Cultures = () => {
  return (
    <div className="bg-white relative">
      <Image
        src={cultureBg}
        alt="Heart Background"
        className="w-full p-8 hidden md:flex "
      />
      <div className="flex flex-row itens-center justify-between w-full p-4 md:hidden">
        <div className="flex flex-col">
          <h1 className="text-xl montserrat font-bold text-[#5F2F90] ">
            We interpret cultures
          </h1>
          <h2 className="text-[#F58A23] montserrat font-medium text-lg pb-4">
            No, we don&apos;t translate languages
          </h2>

        </div>
        <div className="flex flex-row-reverse md:hidden">
          <Image
            src={culture}
            alt="phoneHeart"
            className="w-full md:hidden "
          />
        </div>
      </div>
      <div className="bg-[#5F2F90] md:hidden">
      <p className="text-white montserrat text-center p-4 font-normal montserrat text-sm">
          Language is the heart of cultural identity. Understanding this our
          team of linguistic experts ensures that every message resonates with
          its intended audience. This cultural sensitivity is at the core of our
          approach, enabling us to navigate complex global markets and build
          bridges where language barriers once existed. Language is the key to
          emotional connection. Every language carries its emotional weight, a
          unique ability to touch hearts.
        </p>
      </div>
      <div className="absolute montserrat top-20 left-20 hidden md:block">
        <h1 className="text-white font-bold text-4xl">We interpret cultures</h1>
        <h2 className="text-[#F58A23] font-bold text-3xl pb-4">
          No, we don&apos;t translate languages
        </h2>
        <p className="text-white montserrat w-[50vw] font-normal montserrat text-lg">
          Language is the heart of cultural identity. Understanding this our
          team of linguistic experts ensures that every message resonates with
          its intended audience. This cultural sensitivity is at the core of our
          approach, enabling us to navigate complex global markets and build
          bridges where language barriers once existed. Language is the key to
          emotional connection. Every language carries its emotional weight, a
          unique ability to touch hearts.
        </p>
      </div>
    </div>
  );
};

export default Cultures;
