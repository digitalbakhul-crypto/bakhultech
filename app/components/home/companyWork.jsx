"use client";

import React from "react";

const companySectionBg =
  "/bgImages/56a90a3ec0a84e28f5b9ea575ab167521baaf9d6.jpg";

const companies = [
  "spotify",
  "google",
  "uber",
  "microsoft",
  "shopify",
  "evernote",
  "adobe",
  "paypal",
  "amazon",
  "asana",
];

export default function CompanyWork() {
  return (
    <>
      <div className="relative w-full mt-8 md:mt-110 lg:mt-100 xl:mt-70">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${companySectionBg})` }}
        ></div>

        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/95"></div>

        {/* Content */}
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-16 z-10">
          <h2 className="text-center text-black text-xl md:text-2xl xl:text-4xl font-medium  capitalize mb-12">
            Companies we Work with
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20 justify-items-center">
            {companies.map((company) => (
              <div
                key={company}
                data-company={company}
                className="w-24 h-8 md:w-36 md:h-12 relative"
              >
                <img
                  src={`iconImages/${company}.svg`}
                  alt={`${company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
