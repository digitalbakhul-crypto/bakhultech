"use client";
import React from "react";
import Image from "next/image";

export default function OurPortfolio() {
  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      src: "/iconImages/service-facebook.svg",
      link: "https://facebook.com",
    },
    {
      id: 2,
      name: "Twitter",
      src: "/iconImages/service-tiwitter.svg",
      link: "https://twitter.com",
    },
    {
      id: 3,
      name: "Instagram",
      src: "/iconImages/service-instagram.svg",
      link: "https://instagram.com",
    },
    {
      id: 4,
      name: "LinkedIn",
      src: "/iconImages/service-linkdin.svg",
      link: "https://linkedin.com",
    },
  ];

  return (
    <div className="w-full bg-violet-50 py-16 mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        <p className="text-sm sm:text-base font-medium text-gray-800 opacity-70 mb-2">
          What we created
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 font-poppins leading-tight mb-6">
          Our Work Portfolio
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base font-medium text-gray-800 opacity-70 leading-relaxed">
          We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-3.5 h-3.5 rounded-full"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={18}
                height={18}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
