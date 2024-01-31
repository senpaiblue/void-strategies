import React from "react";
import cloud from "../../../public/assets/Home/A10.png";
import Image from "next/image";
import Link from "next/link";

const Note = () => {
  return (
    <section className="flex-col md:flex">
      <div className="md:flex items-start hidden mt-20 ">
        <Image src={cloud} alt="cloud" className="max-w-[30%]" />
        <div className="flex-col px-40 py-20">
          <div className="flex gap-2 pb-10">
            <h1 className="text-[#ff8513] text-6xl font-bold">On a serious</h1>
            <div className="bg-[#5F2F90] box-shadow p-2">
              <h1 className="text-white text-6xl font-bold">Note</h1>
            </div>
          </div>
          <p className="text-3xl leading-normal font-medium text-[#5F2F90]">
            To grow in a fast-paced world, Is to constantly evolve. This
            evolution is a hassle on its own. Don &apos; t hassle. We will.
            Enabling you to build superior products.
          </p>
          <div className="flex items-center gap-10 pt-10">
            <Link href={"/ContactUs"}>
              <button className="bg-[#ff8513] px-8 py-4 text-3xl text-white rounded-full font-semibold hover:bg-[#5F2F90]">
                Contact Us
              </button>
            </Link>
            <Link href={"Services"}>
              <button className="bg-[#5F2F90] px-8 py-4 text-3xl text-white rounded-full font-semibold hover:bg-[#ff8513]">
                Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden flex-col items-center justify-center">
        <h1 className="text-[#5F2F90] text-6xl font-bold text-center">
          Are You Ready?
        </h1>
        <div className=" flex flex-col items-center p-20">
          <Link href={"/ContactUs"}>
            <button className="bg-[#ff8513] px-8 py-4 text-3xl text-white rounded-full font-semibold hover:bg-[#5F2F90] whitespace-nowrap">
              Contact Us
            </button>
          </Link>
          <Link href={"/Services"}>
            <button className="bg-[#5F2F90] mt-8 px-14 text-center py-4 text-3xl text-white rounded-full font-semibold hover:bg-[#ff8513]">
              Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Note;
