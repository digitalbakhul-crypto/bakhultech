"use client";
import React from "react";

export default function TemplateSection() {
  return (
    <div className="w-full max-w-[1420px] mx-auto pb-16 px-6 md:px-8 lg:px-10 text-center">
      <h1 className="text-white font-poppins text-[32px] sm:text-[42.6px] not-italic font-semibold leading-[1.3] max-w-[647px] mx-auto">
        Let's build something great together
      </h1>

      <p className="text-white/70 font-poppins text-[14.2px] not-italic font-medium leading-[24.85px] max-w-[498px] mx-auto mt-4">
        Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies
        nec dolor sit amet, scelerisque cursus purus.
      </p>

      <button className="flex w-[204.125px] h-[56.8px] px-[58.575px] pt-[14.2px] pb-[13.6px] justify-center items-center rounded-[36px] bg-[#FF7800] mx-auto mt-6 mb-10">
        <span className="text-[#1B1C2B] font-manrope text-[15.975px] not-italic font-semibold leading-[28.4px]">
          Contact Us
        </span>
      </button>
    </div>
  );
};