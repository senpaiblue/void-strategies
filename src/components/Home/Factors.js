import React from "react";
import factor from "../../../public/assets/Home/factors.png";
import orange from "../../../public/assets/Home/Orange.png";
import arrow from "../../../public/assets/Home/arrow.png";
import bulb from "../../../public/assets/Home/bulb.png";
import factorMobile from "../../../public/assets/Home/HomeMobile/A2.png";
import Rocket from "../../../public/assets/Home/HomeMobile/A3.png";
import Image from "next/image";

const Factors = () => {
  return (
    <div>
      <div className="md:hidden bg-white max-w-auto max-h-auto p-4">
        <div className="flex items-center relative">
          <div className="max-w-[70%] relative">
            <Image
              src={factorMobile}
              alt="factor"
              className="hiden max-w-auto "
            />
            <div className="absolute max-w-auto text-white left-4 bottom-2">
              <p className="font-bold text-lg ">Our X Factors</p>
              <p className="font-bold text-white tracking-widest text-sm">
              It&rsquo;s what makes us tick!
              </p>
            </div>
          </div>
          <div className=" right-0 absolute max-w-[50%]">
            <Image src={Rocket} alt="rocket" className="max-w-auto" />
          </div>
        </div>
        <div className="flex-col items-center justify-center mt-12">
          <div className="flex items-center gap-4">
            <Image src={arrow} alt="arrow" className="w-2/6" />
            <p className="font-semibold text-sm  text-[#5F2F90]">
              Our mission is to usher growing brands to success through
              innovation, creative thinking, and the right course of action.
              With a client-centric approach and a commitment to excellence, we
            </p>
          </div>
          <div className="flex items-center gap-4 mt-12">
            <Image src={bulb} alt="arrow" className="w-2/6" />
            <p className="font-semibold text-sm text-[#5F2F90]">
              Our mission is to usher growing brands to success through
              innovation, creative thinking, and the right course of action.
              With a client-centric approach and a commitment to excellence, we
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white max-w-auto max-h-auto p-8 hidden md:flex">
        {/* left side */}
        <div className="flex">
          <div className="max-w-[70%] relative">
            <Image src={factor} alt="factor" className="hiden max-w-auto " />
            <div className="absolute max-w-auto text-white left-12 bottom-32">
              <p className="font-bold text-6xl py-4">Our X Factors</p>
              <p className="font-bold text-white tracking-widest text-3xl">
              It&rsquo;s what makes us tick!
              </p>
            </div>
          </div>
          {/* left side */}
          <div className="flex-col justify-between relative max-w-[45%]">
            <div className="flex-col items-center justify-center">
              <div className="flex items-center gap-4">
                <p className="font-semibold text-2xl text-[#5F2F90]">
                  Our mission is to usher growing brands to success through
                  innovation, creative thinking, and the right course of action.
                  With a client-centric approach and a commitment to excellence,
                  we
                </p>
                <Image src={arrow} alt="arrow" className="w-2/6" />
              </div>
              <div className="flex items-center gap-4 mt-12">
                <p className="font-semibold text-2xl text-[#5F2F90]">
                  Our mission is to usher growing brands to success through
                  innovation, creative thinking, and the right course of action.
                  With a client-centric approach and a commitment to excellence,
                  we
                </p>
                <Image src={bulb} alt="arrow" className="w-2/6" />
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <Image src={orange} alt="orange" className="max-w-auto " />
            </div>
            <p className="absolute bottom-16 right-16 text-white text-xl font-semibold w-[20vw]">
            When we partner, let&rsquo;s value Innovation, Collaboration, Integrity and Excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factors;
