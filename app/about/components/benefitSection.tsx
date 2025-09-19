'use client'

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const benefitData = [
  {
    icon: "/iconImages/benefit-icon-3.svg",
    title: "Customize with ease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: "/iconImages/benefit-icon-2.svg",
    title: "Perfectly Responsive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    icon: "/iconImages/benefit-icon-1.svg",
    title: "Friendly Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
];

export default function BenefitSection () {
  const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.3,
    });
  return (
    <>
     <div ref={ref} className="py-8 md:py-16 px-6 md:px-8 lg:px-10 bg-transparent">
      <div className="max-w-[1136px] mx-auto">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold text-white">
          The benefits of working with us
        </h1>

        {/* Benefits Cards */}
        <div className="grid gap-8 mt-15 text-gray-600 text-[16px] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {benefitData.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-sm h-full"
            >
              <img
                className="w-10 h-10 mb-4"
                src={benefit.icon}
                alt={`${benefit.title} Icon`}
              />
              <h2 className="text-xl text-gray-700 font-semibold mb-3">
                {benefit.title}
              </h2>
              <p className="text-[15px]">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Users + Logos Section */}
        <div className="hidden lg:flex flex-col sm:flex-row items-center justify-between gap-8 lg:mt-10 xl:mt-14 text-center sm:text-left">
          {/* Users Text */}
          <div>
            <p className="text-3xl font-semibold text-white">
              {inView ? (
                <CountUp start={0} end={1000} duration={1} delay={0.2} redraw />
              ) : (
               0
              )}+</p>
            <p className="text-sm text-white">Finsweet Users</p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center sm:justify-between lg:gap-x-6 xl:gap-x-12 gap-y-6">
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src={`/iconImages/benefit-logo-${i + 1}.svg`}
                alt={`Logo ${i + 1}`}
                className="h-7 w-auto bg-gray-800"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    
</>
  );
};