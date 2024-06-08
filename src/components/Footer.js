import Image from "next/image";
import Link from "next/link";
import React from "react";
import Insta from "../../public/assets/Insta.svg";
import linkedin from "../../public/assets/Linkedin.svg";

const Footer = () => {
  return (
    <div className="flex mt-8 md:mt-12">
      <div className="bg-[#5F2F90] w-[70%]">
        <div className="flex flex-col items-center justify-start">
          <h1 className="text-lg p-4 md:p-12 md:text-3xl font-bold text-white ">
            © 2024 voidstrategies. All rights reserved.
          </h1>
          <div className="flex flex-row items-center justify-center gap-4 lg:gap-6 pb-4 px-4">
            <Link href={"/privacy"}>
              <h3 className="text-white/[0.8]  text-lg">Privacy Policy</h3>
            </Link>

            <Link href={"/terms"}>
              <h3 className="text-white/[0.8]">Terms & Condition</h3>
            </Link>
            <Link href={"/support"}>
              <h3 className="text-white/[0.8]">Customer Support</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[30%] px-4 py-4 md:px-32 md:py-12 bg-[#ff8513]">
        <div className="flex flex-row md:gap-0 gap-4">
          <Link
            href={"https://www.instagram.com/voidstrategies/"}
            target="_blank"
            className="w-full "
          >
            <Image src={Insta} alt="InstaIcom" />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/voidstrategies"}
            target="_blank"
            className="w-full"
          >
            <Image src={linkedin} alt="InstaIcom" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
