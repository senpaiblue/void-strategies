import React from "react";
import Bg from "../../../public/assets/Services/A1.png";
import PhoneBg from "../../../public/assets/Services/Mobile/A1.png";
import Image from "next/image";

const Offer = () => {
  return (
    <section>
      <div className="bg-white relative hidden md:flex">
        <Image
          src={Bg}
          alt="backgroundOffer"
          className="w-full p-20 hidden md:flex"
        />
        <Image
          src={PhoneBg}
          alt="backgroundOffer"
          className="w-full p-4 flex md:hidden"
        />
        <div className="text-white absolute md:left-24 md:bottom-36 lg:bottom-40 lg:left-40">
          <h1 className="text-white lg:text-6xl md:text-2xl font-bold">
            {" "}
            We Offer
          </h1>
        </div>
        <p className="text-white font-medium leading-normal text-xl md:text-lg md:font absolute right-40 top-40 w-[50vw]">
          Our services are uniquely designed to assist you in executing our
          &ldquo;Bring, Do, Retain&rdquo; philosophy, effectively eradicating
          business dysfunctions within your organization. Think of us as your
          backstage crew of brands, all our services working in sync to ensure
          your market performance is an enduring hit. At Void Strategies, we
          serve as your trusted B2B Service Umbrella. This means we bring
          together a community of brands, each specializing in a specific
          department, creating a diverse workforce of creative thinkers,
          strategists, designers, developers, architects, analysts, and
          marketing experts. This collective knowledge and experience enable us
          to offer a wide array of services, driving businesses like yours to
          success.
        </p>
      </div>
      <div className="relative md:hidden">
        <Image
          src={PhoneBg}
          alt="backgroundOffer"
          className="w-full p-4 flex md:hidden"
        />
        <div className="text-white absolute top-16 left-20">
          <h1 className="text-white text-4xl font-bold"> We Offer</h1>
        </div>
        <p className="text-white font-normal leading-normal text-sm absolute left-4 top-32 p-4">
          Our services are uniquely designed to assist you in executing our
          &ldquo;Bring, Do, Retain&rdquo; philosophy, effectively eradicating
          business dysfunctions within your organization. Think of us as your
          backstage crew of brands, all our services working in sync to ensure
          your market performance is an enduring hit. At Void Strategies, we
          serve as your trusted B2B Service Umbrella. This means we bring
          together a community of brands, each specializing in a specific
          department, creating a diverse workforce of creative thinkers,
          strategists, designers, developers, architects, analysts, and
          marketing experts. This collective knowledge and experience enable us
          to offer a wide array of services, driving businesses like yours to
          success.
        </p>
      </div>
    </section>
  );
};

export default Offer;
