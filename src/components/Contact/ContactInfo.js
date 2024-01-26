"use client";
import React, { useState } from "react";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      company,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setBody("");
      }
    });
  };

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <h1 className="text-[#5F2F90] md:text-6xl md:font-bold md:pb-12 text-5xl font-bold pb-4">Contact Form</h1>
      <form className="flex flex-col items-center md:gap-8 w-full">
        <div className="flex md:flex-row flex-col items-center justify-between gap-4 md:gap-16">
          <formGroup className="flex flex-col items-start">
            <label className="text-2xl font-bold text-[#5F2F90]" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your name"
              className="border-[#5F2F90] border-2 text-[#5F2F90] rounded-xl px-24 py-6"
            />
          </formGroup>
          <formGroup className="flex flex-col items-start">
            <label className="text-2xl font-bold text-[#5F2F90]" htmlFor="name">
              Company Name
            </label>
            <input
              type="name"
              name="name"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              placeholder="Enter Company name"
              className="border-[#5F2F90] text-[#5F2F90] border-2 rounded-xl px-24 py-6"
            />
          </formGroup>
        </div>
        <div className="flex flex-col items-start gap-4 md:gap-16">
          <formGroup className="flex flex-col items-start">
            <label
              className="text-2xl font-bold text-[#5F2F90]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your mail"
              className="border-[#5F2F90] text-[#5F2F90] border-2 rounded-xl md:px-80 md:py-6 px-24 py-6"
            />
          </formGroup>
          <formGroup className="flex flex-col items-start">
            <label
              className="text-2xl font-bold text-[#5F2F90]"
              htmlFor="message"
            >
              Message
            </label>
            <input
              type="text"
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Drop your message !!"
              className="border-[#5F2F90] border-2 rounded-xl md:px-80 md:py-24 px-24 py-12"
            />
          </formGroup>
        </div>
        <button
          className="text-white md:px-48 md:py-4 px-16 py-4 mt-4 rounded-xl bg-[#5F2F90] font-bold"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactInfo;
