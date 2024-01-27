import React from "react";
import Bg from "../../../public/assets/Contact/A1.png";
import Bg2 from "../../../public/assets/Contact/A2.png";
import PhoneBg1 from "../../../public/assets/Contact/Mobile/A1.png";
import PhoneBg2 from "../../../public/assets/Contact/Mobile/A2.png";
import Image from "next/image";
import Link from "next/link";

const WhatsApp = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 px-4 py-4 w-full md:px-32 md:gap-16 md:py-20 items-center justify-center">
      <div className="relative">
        <Image src={Bg} className="hidden md:block"/>
        <Image src={PhoneBg2} className="block md:hidden"/>
        <div className=" absolute top-4 right-4 md:left-64 md:top-8 flex flex-col md:gap-2">
          <Link
            href={"mailto:info@voidstrategies.com"}
            className="text-white text-lg md:text-2xl font-bold"
          >
            info@voidstrategies.com
          </Link>
          <Link
            href={"mailto:growth@voidstrategies.com"}
            className="text-white md:text-2xl font-bold"
          >
            growth@voidstrategies.com
          </Link>
          <Link
            href={"mailto:support@voidstrategies"}
            className="text-white md:text-2xl font-bold"
          >
            support@voidstrategies
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image src={Bg2} className="hidden md:block"/>
        <Image src={PhoneBg1} className="md:hidden"/>
        <div className=" absolute md:left-16 md:top-8 flex flex-col gap-2">
          <Link
            href={"https://wa.me/+917563824249"}
            className="text-white md:text-2xl font-bold"
          >
            Click here to<br/>
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
