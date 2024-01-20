import Image from "next/image";
import React from "react";
import retrain from "../../../public/assets/Home/A8.png";
import retrainPhone from "../../../public/assets/Home/HomeMobile/A9.png";

const Retain = () => {
  return (
    <div className="bg-white max-w-auto ">
      <Image
        src={retrain}
        alt="retrain"
        className="max-w-[40%] px-6 hidden md:flex"
      />
      <Image
        src={retrainPhone}
        alt="retrainPhone"
        className="max-w-auto px-6 md:hiden md:hidden"
      />
      <h1 className="lg:px-32 montserrat font-semibold lg:text-xl px-5 lg:text-left text-center text-[#5F2F90] pb-8">
        Ensuring customer satisfaction and retention
      </h1>
      <div className="lg:flex lg:relative z-2 lg:top-20 lg:flex-row lg:gap-12 lg:justify-end flex-col lg:items-center justify-center p-12 lg:p-0">
        <div className="bg-[#5F2F90] flex flex-col items-center justify-center p-10 lg:max-w-[30%]">
          <h1 className="text-white montserrat font-bold text-2xl">NURTURE</h1>
          <p className="text-white montserrat font-medium text-lg text-center">
            Building strong relationships with customers to keep them coming
            back
          </p>
        </div>
        <div className="bg-[#5F2F90] flex flex-col items-center justify-center p-10 lg:max-w-[30%]">
          <h1 className="text-white montserrat font-bold text-2xl">ANALYZE</h1>
          <p className="text-white montserrat font-medium text-lg text-center">
            Measuring and analyzing customer data to improve retention
            strategies
          </p>
        </div>
      </div>
      <div className="lg:flex items-center lg:justify-between justify-center p-12 lg:p-0">
        <div className="bg-[#ff8513] flex flex-col items-center justify-center p-12 lg:max-w-[40%]">
          <h1 className="text-white montserrat font-bold lg:text-6xl text-5xl lg:pb-8 pb-4">
            PERSO
          </h1>
          <p className="text-white montserrat font-medium text-lg text-center">
            Providing personalized experiences and solutions to meet individual
            customer needs. A happy customer always comes back!
          </p>
        </div>
        <h1 className="montserrat  text-shadowBring w-full text-4xl font-bold text-center text-[#5F2F90] md:text-3xl lg:text-5xl lg:w-1/2 md:text-left lg:justify-between 2xl:text-7xl pt-12">
        NEVER LET GO
        </h1>
      </div>
    </div>
  );
};

export default Retain;
