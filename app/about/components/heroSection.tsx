"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  const images = [
    "/sectionImages/about-hero-1.png",
  ];

  return (
    <> 
    <div className="text-white px-6 md:px-8 lg:px-10 py-8 md:py-16 mt-10 md:mt-20">
  <div className="mx-auto w-full max-w-[1136px] flex flex-col md:flex-row items-center gap-16">
    
    {/* 📝 Left: Text */}
    <div className="w-full md:w-1/2">
      <p className="text-sm md:text-base font-medium leading-7 mb-3 text-white">
        About us
      </p>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 font-poppins">
        Our designs solve problems
      </h2>
      <p className="max-w-md text-sm leading-relaxed opacity-70 text-justify font-poppins">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam.
      </p>
    </div>

    {/* 🖼️ Right: Image */}
    <div className="w-full md:w-[48%] relative aspect-[457/298] max-w-[485px] h-auto">
      <Image
        src={images[0]}
        alt="About us visual"
        fill
        className="object-cover"
        priority
      />
    </div>

  </div>
</div>
    </>
  );
}
