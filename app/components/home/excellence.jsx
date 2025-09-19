"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Excellence() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <>
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="bgImages/background-3.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Optional: Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Foreground Content */}
        <div
          ref={ref}
          className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-8 lg:px-10 py-8 md:py-16 flex flex-col md:flex-row gap-12 md:gap-24"
        >
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-gray-200 text-xl md:text-2xl xl:text-4xl font-medium leading-tight">
              16 years of Delivering <br /> Excellence
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4">
              Helping global enterprises with digital transformations that help
              them grow, adapt, scale, and reinvent themselves
            </p>
          </div>

          {/* Stats Grid */}
          <div className="w-full md:w-[65%] grid grid-cols-2 md:grid-cols-2 gap-y-8 gap-x-12">
            {/* Counter 1 */}
            <div className="flex flex-col items-start gap-2">
              <div className="text-neutral-400 text-xl md:text-2xl xl:text-4xl font-medium">
                {inView ? (
                  <CountUp start={0} end={20} duration={2} delay={0.2} redraw />
                ) : (
                  0
                )}
                yrs
              </div>
              <div className="text-gray-400 text-xs md:text-ms xl:text-base">
                avg client tenure
              </div>
            </div>

            {/* Counter 2 */}
            <div className="flex flex-col items-start gap-2">
              <div className="text-neutral-400 text-xl md:text-2xl xl:text-4xl font-medium">
                {inView ? (
                  <CountUp start={0} end={80} duration={2} delay={0.2} redraw />
                ) : (
                  0
                )}
                +
              </div>
              <div className="text-gray-400 text-xs md:text-ms xl:text-base">
                solutions delivered
              </div>
            </div>

            {/* Counter 3 */}
            <div className="flex flex-col items-start gap-2">
              <div className="text-neutral-400 text-xl md:text-2xl xl:text-4xl font-medium">
                {inView ? (
                  <CountUp start={0} end={60} duration={2} delay={0.2} redraw />
                ) : (
                  0
                )}
                mn
              </div>
              <div className="text-gray-400 text-xs md:text-ms xl:text-base">
                daily digital journeys
              </div>
            </div>

            {/* Counter 4 */}
            <div className="flex flex-col items-start gap-2">
              <div className="text-neutral-400 text-xl md:text-2xl xl:text-4xl font-medium">
                {inView ? (
                  <CountUp
                    start={0}
                    end={200}
                    duration={2}
                    delay={0.2}
                    redraw
                  />
                ) : (
                  0
                )}
                x
              </div>
              <div className="text-gray-400 text-xs md:text-ms xl:text-base">
                increase in operations growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
