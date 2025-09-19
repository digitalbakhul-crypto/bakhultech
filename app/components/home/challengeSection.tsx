"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamData = [
  {
    title: "Front-end",
    icon: "iconImages/monitor.svg",
    description:
      "Our frontend developers understand the delicate balance between aesthetics and functionality.",
  },
  {
    title: "Back-end",
    icon: "iconImages/Backend.svg",
    description:
      "Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.",
  },
  {
    title: "Data Analysts",
    icon: "iconImages/driver.svg",
    description:
      "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.",
  },
];

export default function Challenge() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="bgImages/our_solutions_bg.svg fill.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-8 md:py-16 flex flex-col items-center gap-12">
          {/* Heading */}
          <h2 className="text-xl md:text-2xl xl:text-4xl font-medium text-center font-epilogue leading-[30px] max-w-5xl">
            We have multidisciplinary teams to meet any{" "}
            <span className="text-orange-500">challenge.</span>
          </h2>

          {/* Cards Section */}
          <div className="w-full bg-stone-950 rounded-[35.39px] shadow-md px-6 py-6">
            <div className="flex flex-col md:flex-row justify-center items-start lg:items-stretch gap-12">
              {teamData.map((team, idx) => (
                <div key={idx} className="flex flex-col items-start gap-6 max-w-md mx-start">
                  <img src={team.icon} alt={team.title} className="h-8 w-8 md:w-12 md:h-12" />
                  <h3 className="text-xl md:2xl font-medium text-gray-200 font-epilogue">{team.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 font-epilogue">{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
