import React from "react";
import heart from "../../../public/assets/Languages/Mobile/A1.png";
import heartBg from "../../../public/assets/Languages/A1.png";
import Image from "next/image";

const Heart = () => {
  return (
    <div className="bg-white relative">
      <Image
        src={heartBg}
        alt="Heart Background"
        className="w-full pl-16 py-16 hidden md:flex "
      />
      <Image
        src={heart}
        alt="phoneHeart"
        className="w-full pl-4 py-4 md:hidden"
      />
      <h1 className="text-white montserrat md:hidden font-bold text-right text-2xl pb-4 absolute top-10 right-10 ">
        True Global
        <br /> at Heart
      </h1>
      <p className="text-[#5F2F90] montserrat md:hidden px-6 py-4 text-center font-normal text-sm">
          We believe in the power of communication to transcend boundaries. Our
          commitment to multilingualism is not a business strategy, but a
          celebration of cultural diversity. We embrace languages from around
          the globe, to connect businesses with their audiences in a meaningful
          way because at our heart, we believe in fostering understanding and
          collaboration across various cultures and regions
        </p>

      <div className="absolute w-[40vw] right-36 top-36 hidden md:block">
        <h1 className="text-white montserrat font-bold text-4xl pb-4">
          True Global at Heart
        </h1>
        <p className="text-white font-normal montserrat text-lg">
          We believe in the power of communication to transcend boundaries. Our
          commitment to multilingualism is not a business strategy, but a
          celebration of cultural diversity. We embrace languages from around
          the globe, to connect businesses with their audiences in a meaningful
          way because at our heart, we believe in fostering understanding and
          collaboration across various cultures and regions
        </p>
      </div>
    </div>
  );
};

export default Heart;
