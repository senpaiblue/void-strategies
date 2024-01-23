// Service.js
import React from "react";
import Image from "next/image";
import Bg1 from "../../../public/assets/Services/A2.png";
import Bg2 from "../../../public/assets/Services/A4.png";
import BgP1 from "../../../public/assets/Services/Mobile/A2.png";
import BgP2 from "../../../public/assets/Services/Mobile/A4.png";
import lady from "../../../public/assets/Services/A3.png";
import ladyMobile from "../../../public/assets/Services/Mobile/A3.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const servicesPhone = [
    {
      heading: "Software Suite",
      paragraph:
        "Your unique tech needs, we have the answer. From Web-D to custom software, we &apos; ve got you covered.",
    },
    {
      heading: "Branding Suite",
      paragraph:
        "Elevate your brand with our comprehensive branding expertise, leaving a lasting impression of excellence.",
    },
  ];
  const servicesPhone2 = [
    {
      heading: "Production House",
      paragraph:
        "Fuel your brand with captivating content that tells your story and connects with your audience on a deeper level.",
    },
    {
      heading: "Visual Experience",
      paragraph:
        "We all judge a book by its cover, so give your customers a visual delight with our suite of UI/UX solutions",
    },
  ];
  const servicesPhone3 = [
    {
      heading: "Consulting Strategy",
      paragraph:
        "Our strategic guidance empower your business to identify opportunities, overcome challenges, and achieve success.",
    },
    {
      heading: "Media Management",
      paragraph:
        "In an attention economy where engagement is the key metric, we ensure you're consistently at the top of this dynamic game.",
    },
  ];
  const servicesPhone4 = [
    {
      heading: "Serverless Computing",
      paragraph:
        "Optimize operations seamlessly with our cloud and serverless solutions for scalable efficiency, flexibility, and power.",
    },
    {
      heading: "Talent Solutions",
      paragraph:
        "Elevate your brand's potential with our finely tuned, customized talent solutions, ensuring a perfect match for enduring success.",
    },
  ];
  const services = [
    {
      heading: "Visual Experience",
      paragraph:
        "We all judge a book by its cover, so give your customers a visual delight with our suite of graphic design and UI/UX solutions",
    },
    {
      heading: "Ultimate Branding Suite",
      paragraph:
        "Elevate your brand to the next level with our comprehensive suite of branding services, creating a lasting impression in your customers mind.",
    },
    {
      heading: "Content Production House",
      paragraph:
        "Fuel your brand with captivating content that tells your story and connects with your audience on a deeper level.",
    },
  ];
  const servicesSecondRow = [
    {
      heading: "Suite of Software Solutions",
      paragraph:
        "Your unique tech needs, we have the answer. From Web-D to custom software, we &apos; ve got you covered.",
    },
    {
      heading: "Strategy and Consulting",
      paragraph:
        "Our strategic guidance empower your business to identify opportunities, overcome challenges, and achieve success.",
    },
  ];
  const servicesThirdRow = [
    {
      heading: "Social Media Management",
      paragraph:
        "In an attention economy where engagement is the key metric, we ensure you're consistently at the top of this dynamic game.",
    },
    {
      heading: "Serverless Computing",
      paragraph:
        "Optimize operations seamlessly with our cloud and serverless solutions for scalable efficiency, flexibility, and power.",
    },
    {
      heading: "Talent Solutions",
      paragraph:
        "Elevate your brand's potential with our finely tuned, customized talent solutions, ensuring a perfect match for enduring success.",
    },
  ];
  return (
    <section>
      <div className="relative p-16 w-full h-full hidden md:flex">
        <div className="md:flex flex-col items-center justify-between relative hidden">
          <Image src={Bg1} alt="up" className="pb-80" />
          <Image src={Bg2} alt="up" className="pt-80" />
          <Image
            src={lady}
            alt="lady"
            className="absolute inset-0 m-auto w-4/12"
          />
          <div className="md:flex flex-col absolute top-20 left-10 gap-20 hidden">
            <div className=" flex flex-row items-center justify-center gap-60">
              {services.map((services, index) => (
                <ServiceCard
                  key={index}
                  heading={services.heading}
                  paragraph={services.paragraph}
                />
              ))}
            </div>
            <div className="flex flex-row justify-between">
              {servicesSecondRow.map((servicesSecondRow, index) => (
                <ServiceCard
                  key={index}
                  heading={servicesSecondRow.heading}
                  paragraph={servicesSecondRow.paragraph}
                />
              ))}
            </div>
            <div className=" flex flex-row justify-between">
              {servicesThirdRow.map((servicesThirdRow, index) => (
                <ServiceCard
                  key={index}
                  heading={servicesThirdRow.heading}
                  paragraph={servicesThirdRow.paragraph}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* phone */}
      <div className=" p-4 relative w-full h-full md:hidden">
        <Image src={BgP1} alt="up" className="pb-8" />
        <Image
          src={ladyMobile}
          alt="lady"
          className="absolute inset-0 m-auto w-[80%]"
        />
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center gap-60">
            <div className="flex flex-col gap-4">
              <div className=" flex flex-row items-center justify-center gap-2">
                {servicesPhone.map((services, index) => (
                  <ServiceCard
                    key={index}
                    heading={services.heading}
                    paragraph={services.paragraph}
                  />
                ))}
              </div>
              <div className=" flex flex-row items-center justify-center gap-2">
                {servicesPhone2.map((services, index) => (
                  <ServiceCard
                    key={index}
                    heading={services.heading}
                    paragraph={services.paragraph}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className=" flex flex-row items-center justify-center gap-2">
                {servicesPhone3.map((services, index) => (
                  <ServiceCard
                    key={index}
                    heading={services.heading}
                    paragraph={services.paragraph}
                  />
                ))}
              </div>
              <div className=" flex flex-row items-center justify-center gap-2">
                {servicesPhone4.map((services, index) => (
                  <ServiceCard
                    key={index}
                    heading={services.heading}
                    paragraph={services.paragraph}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image src={BgP2} alt="up" className="pt-8" />
      </div>
    </section>
  );
};

export default Service;
