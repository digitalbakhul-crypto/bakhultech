"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const images = [
    "iconImages/aws.svg",
    "iconImages/oddo.svg",
    "iconImages/azure.svg",
    "iconImages/microsoft.svg",
    "iconImages/blueprism.svg",
    "clientlogo/AAYAAM.png",
  ];

  const settings = {
    infinite: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/bgImages/03b6f9ef40d26b445747cb2d74f0d2e25b890019.png')",
        }}
      ></div>

      {/* Overlay content wrapper */}
      <div className="relative z-10 w-full h-full py-20">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center space-y-8 px-6 md:px-8 lg:px-10">
          {/* Heading */}
          <div className="max-w-xl text-xl md:text-2xl xl:text-4xl font-medium leading-tight text-white">
            Driving Innovation and <br /> Transformation
          </div>

          {/* Subheading */}
          <div className="hidden md:flex max-w-xl text-base md:text-md text-gray-400 leading-relaxed tracking-tight">
            Harnessing emerging technologies and innovation to drive <br />
            transformation, shaping a connected, accessible and <br />
            intelligent future for the business world.
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <button className="flex items-center gap-2 w-fit px-6 py-3 bg-orange-500 text-sm font-normal text-white rounded-lg transition duration-300 cursor-pointer">
                Explore more
                <img
                  src="iconImages/849726bf2a372b12e002274293079733cf151d4d.png"
                  alt="arrow"
                  className="w-3 h-auto"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      {/* <div className="hidden xl:flex absolute bottom-20 w-full justify-center gap-2 z-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-zinc-100" : "bg-zinc-100 opacity-30"
            }`}
          />
        ))}
      </div> */}

      {/* Partners Slider */}
      <div className="relative z-20 w-full bg-gradient-to-b from-black/0 to-black py-6 md:px-8 lg:px-10 -mt-2">
        <div className="text-center text-xs text-gray-300 font-normal md:font-medium uppercase mb-2 md:mb-4">
          Our Client
        </div>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="h-12 w-20 md:h-15 md:w-23 xl:h-24 xl:w-36 object-contain transform hover:scale-105 transition duration-300 mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
