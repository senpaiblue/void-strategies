import React from "react";
import PhoneBg from "../../../public/assets/About/Mobile/A1.png";
import Bg from "../../../public/assets/About/A1.png";
import Bg2 from "../../../public/assets/About/A3.png";
import Image from "next/image";

const Story = () => {
  return (
    <section>
      <div className="bg-white relative hidden md:flex">
        <Image
          src={Bg}
          alt="backgroundOffer"
          className="w-full p-20 hidden md:flex"
        />
        <div className=" absolute left-40 top-40 w-[50vw]">
          <h1 className="font-bold text-6xl text-white pb-2">
          Our Story
          </h1>
          <h2 className="font-semibold text-3xl text-white pb-8">
          What makes us, us.
          </h2>
          <p className="text-white font-medium leading-normal text-2xl md:text-">
            {" "}
            The roots of Void Strategies are deeply entwined with the day-to-day
            realities of Small and Medium-Sized Enterprises (SMEs). Our journey
            began not within the confines of a traditional corporate setting,
            but amid the dynamic and challenging environments where SMEs
            operate. It was here that our founders, though still undergraduate
            students at the time, gained invaluable insights into the myriad
            challenges these businesses regularly face.
          </p>
        </div>
      </div>
      <div className="relative md:hidden">
        <Image
          src={PhoneBg}
          alt="backgroundOffer"
          className="w-full p-4 flex md:hidden"
        />
        <div className=" absolute left-4 right-4 top-20 p-4">
        <h1 className="font-bold text-2xl text-white pb-1">
          Our Story
          </h1>
          <h2 className="font-semibold text-sm text-white pb-2">
          What makes us, us.
          </h2>
          <p className="text-white font-normal leading-normal text-sm">
            The roots of Void Strategies are deeply entwined with the day-to-day
            realities of Small and Medium-Sized Enterprises (SMEs). Our journey
            began not within the confines of a traditional corporate setting,
            but amid the dynamic and challenging environments where SMEs
            operate. It was here that our founders, though still undergraduate
            students at the time, gained invaluable insights into the myriad
            challenges these businesses regularly face.
          </p>
        </div>
      </div>
      {/* SECOND SECTION */}
      <div className="bg-white relative hidden md:flex">
        <Image
          src={Bg2}
          alt="backgroundOffer"
          className="w-full px-20 hidden md:flex"
        />
        <div className=" absolute right-80 top-36 w-[50vw]">
          <p className="text-white font-medium leading-normal text-xl md:text-3xl">
            {" "}
            The roots of Void Strategies are deeply entwined with the day-to-day
            realities of Small and Medium-Sized Enterprises (SMEs). Our journey
            began not within the confines of a traditional corporate setting,
            but amid the dynamic and challenging environments where SMEs
            operate. It was here that our founders, though still undergraduate
            students at the time, gained invaluable insights into the myriad
            challenges these businesses regularly face.
          </p>
        </div>
      </div>
      
        <div className=" bg-[#F58A23] m-4  rounded-3xl  p-5 flex md:hidden">
          <p className="text-white font-normal leading-normal text-sm">
            The roots of Void Strategies are deeply entwined with the day-to-day
            realities of Small and Medium-Sized Enterprises (SMEs). Our journey
            began not within the confines of a traditional corporate setting,
            but amid the dynamic and challenging environments where SMEs
            operate. It was here that our founders, though still undergraduate
            students at the time, gained invaluable insights into the myriad
            challenges these businesses regularly face.
          </p>
        </div>
    </section>
  );
};

export default Story;
