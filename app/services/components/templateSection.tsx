"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function TemplateSection() {
  const [filter, setFilter] = useState("all");

  const cards = [
    {
      id: 1,
      title: "Template 1",
      category: "figma",
      img: "/sectionImages/card2.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 2,
      title: "Template 2",
      category: "webflow",
      img: "/sectionImages/card1.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 3,
      title: "Template 3",
      category: "design",
      img: "/sectionImages/card3.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 4,
      title: "Template 4",
      category: "figma",
      img: "/sectionImages/card4.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 5,
      title: "Template 5",
      category: "webflow",
      img: "/sectionImages/card5.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
    {
      id: 6,
      title: "Template 6",
      category: "design",
      img: "/sectionImages/card6.png",
      content:
        "Apparently we had reached a great height in the atmosphere for the sky was a dead black, and the stars had ceased to twinkle ",
      content2: "Read case study",
    },
  ];

  const filteredCards =
    filter === "all" ? cards : cards.filter((card) => card.category === filter);

  return (
    <div className="w-full min-h-screen text-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
        {/* Filter Buttons */}
        <div className="space-x-4 mb-15 text-center flex justify-center flex-wrap gap-4">
  {["all", "design", "webflow", "figma"].map((type) => {
    const isActive = filter === type;
    return (
      <button
        key={type}
        onClick={() => setFilter(type)}
        className={`relative group text-base capitalize font-medium px-2 text-white ${
          isActive ? "text-amber-500" : "text-white"
        }`}
      >
        {type === "all"
          ? "All"
          : type === "design"
          ? "UI Design"
          : `${type.charAt(0).toUpperCase()}${type.slice(1)} Design`}

        {/* Underline effect */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] w-full bg-amber-500 transition-all duration-500 ease-in-out transform origin-left scale-x-0 group-hover:scale-x-100 ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
        ></span>
      </button>
    );
  })}
</div>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-center">
          {filteredCards.map((card) => (
            <div key={card.id}>
              <div className="bg-[#92c8ef] rounded text-black w-full max-w-[552px] min-h-[337px] p-4 flex flex-col justify-center text-center mx-auto">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={483}
                  height={281}
                  className="object-cover rounded mx-4 my-4 w-full h-auto max-w-[483px] max-h-[281px]"
                />
              </div>

              <div className="gap-[30px] mx-[42px]">
                <h3 className="text-[#FF7800] font-poppins font-semibold text-[20px] sm:text-[28px] md:text-[33.725px] leading-[30px] mt-[21px] sm:leading-[40px] md:leading-[49.7px]">
                  {card.title}
                </h3>
                <p className="text-white w-full sm:w-[90%] md:w-[552px] mt-[10px] text-justify font-poppins text-[13px] sm:text-[14px] md:text-[14.2px] leading-[22px] sm:leading-[24px] md:leading-[24.85px]">
                  {card.content}
                </p>

                {/* Read Case Study with Arrow */}
                <div className="w-full sm:w-[193px] mt-[21px] mb-[57px] font-poppins text-[13px] sm:text-[14.2px] font-medium leading-[140%] sm:leading-[150%] flex items-center gap-2">
                  {card.content2}
                  <Image
                    src="/iconImages/template-arrow-1.svg"
                    alt="Arrow"
                    width={18}
                    height={18}
                    unoptimized
                    className="inline-block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
