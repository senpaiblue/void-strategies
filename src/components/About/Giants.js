import React from "react";
import Bg from "../../../public/assets/About/A6.png";
import Image from "next/image";

const Giants = () => {
  return (
    <section>
      <div className="bg-white relative hidden md:flex py-20">
        <Image
          src={Bg}
          alt="backgroundOffer"
          className="w-full px-20 hidden md:flex"
        />
        <div className=" absolute left-40 top-80 w-[60vw]">
          <h1 className="font-bold text-6xl text-white pb-6">
            Guided by the Giants
          </h1>
          <p className="text-white font-medium leading-normal text-xl md:text-2xl">
            {" "}
            At Void Strategies, we stand on the shoulders of giants. Our journey
            is bolstered by the formidable support and guidance of Aarbee
            Structures, a luminary in the field with over 25 years of experience
            and expertise. Their legacy is not just built on years but on a
            foundation of groundbreaking achievements and a relentless pursuit
            of excellence.
            <p className="pt-6">
              Aarbee &apos;s journey, detailed at aarbeestructures.com, has been
              marked by a steadfast commitment to quality, innovation, and an
              unwavering dedication to client satisfaction. This aligns
              perfectly with our ethos at Void Strategies, where we aspire to
              embody these same values in every project and partnership we
              undertake.
            </p>
            <p className="pt-6">
              The wisdom and insights gained from Aarbee &apos;s extensive
              experience are invaluable to us. Their guidance has been a guiding
              star, helping us navigate the complexities of the business world
              with confidence and precision. Their expertise in various domains
              provides us with a unique vantage point, enabling us to foresee
              industry trends and adapt our strategies accordingly
            </p>
          </p>
        </div>
      </div>

      <div className=" bg-[#5F2F90] mx-4 my-8  rounded-3xl  p-5 flex flex-col md:hidden">
        <h1 className="font-bold text-2xl text-white text-center pb-1">
          Guided by the Giants
        </h1>
        <p className="text-white font-normal leading-normal text-sm">
          At Void Strategies, we stand on the shoulders of giants. Our journey
          is bolstered by the formidable support and guidance of Aarbee
          Structures, a luminary in the field with over 25 years of experience
          and expertise. Their legacy is not just built on years but on a
          foundation of groundbreaking achievements and a relentless pursuit of
          excellence.{" "}
          <p className="pt-2">
            Aarbee &apos;s journey, detailed at aarbeestructures.com, has been
            marked by a steadfast commitment to quality, innovation, and an
            unwavering dedication to client satisfaction. This aligns perfectly
            with our ethos at Void Strategies, where we aspire to embody these
            same values in every project and partnership we undertake.
          </p>
          <p className="pt-2">
            The wisdom and insights gained from Aarbee &apos;s extensive
            experience are invaluable to us. Their guidance has been a guiding
            star, helping us navigate the complexities of the business world
            with confidence and precision. Their expertise in various domains
            provides us with a unique vantage point, enabling us to foresee
            industry trends and adapt our strategies accordingly
          </p>
        </p>
      </div>
    </section>
  );
};

export default Giants;
