import React from "react";
import leafbg from "../../../public/assets/Home/A5.png";
import leafbgMobile from "../../../public/assets/Home/HomeMobile/A6.png";
import Image from "next/image";

const Longer = () => {
  return (
    <div className="relative bg-white">
      <div className="hidden md:block w-full lg:p-8 h-auto">
        <Image
          src={leafbg}
          alt="LaunchPadBg"
          layout="responsive"
          width={700}
          height={400}
        />
      </div>
      <div className="md:hidden w-full h-auto">
        <Image
          src={leafbgMobile}
          alt="HeroPhone"
          layout="responsive"
          width={700}
          height={400}
        />
      </div>
      {/* Text */}
      <div className="flex items-center justify-center absolute lg:top-24 lg:left-24 top-48 px-6 left-2 lg:max-w-[40%]">
        <p className="text-white font-semibold lg:text-3xl text-lg tracking-normal leading-normal">
          Amidst the market&rsquo;s rollercoaster, our commitment is to keep
          your show going, because we all know the best performances are the
          ones that last.
          <span className="text-[#F58A23] font-bold ml-2">LONGER.</span>
        </p>
      </div>
      <div className="flex items-center justify-center absolute lg:bottom-24 lg:right-24 bottom-2 right-2 lg:max-w-[40%] px-6">
        <p className="text-white font-semibold lg:text-3xl text-lg tracking-normal leading-normal">
          Our 3-Step Philosophy of Bring, Do, and Retain drives sustainable
          growth, simply put we&rsquo;re here to help you extend the &apos;good
          times&apos; because, well, who wants the party to end?
        </p>
      </div>
    </div>
  );
};

export default Longer;
