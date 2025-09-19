"use client";
import React from "react";

export default function OurMission () {
  const images = [
    "/sectionImages/about-mission-1.png",
    "/sectionImages/about-mission-2.png",
  ];

  return (
    <>
    <div className="w-full bg-orange-500 py-8 md:py-16 px-6 md:px-8 lg:px-10">
  <div className="max-w-[1136px] mx-auto space-y-24">
    
    {/* Our Mission */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="text-sm text-gray-800 font-medium font-poppins">Our Mission</h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold font-poppins leading-tight">
          Inspire, Innovate, Share
        </h2>
        <p className="text-sm md:text-base text-gray-800 font-normal opacity-70 font-poppins leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={images[0]}
          alt="Mission"
          className="w-full max-w-[457px] h-auto md:h-[298px] object-cover mx-auto"
        />
      </div>
    </div>

    {/* Our Vision */}
    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
      <div className="w-full lg:w-1/2">
        <img
          src={images[1]}
          alt="Vision"
          className="w-full max-w-[457px] h-auto md:h-[298px] object-cover mx-auto"
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="text-sm text-gray-800 font-medium font-poppins lg:text-left">
          Our Vision
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold font-poppins leading-tight lg:text-left">
          Laser Focus
        </h2>
        <p className="text-sm md:text-base text-gray-800 font-normal opacity-70 font-poppins leading-relaxed lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>

  </div>
</div>
    </>
  );
};