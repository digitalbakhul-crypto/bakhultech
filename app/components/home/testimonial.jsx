"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const slides = [
    {
      id: 1,
      stars: 5,
      title: "Exceptional Solutions, Exceeded Expectations!",
      message:
        "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
      name: "Mary Johnson",
      role: "CEO of TechCraft Solutions",
      logo: "/iconImages/profileLogo-1.svg",
    },
    {
      id: 2,
      stars: 5,
      title: "Transformed Our Business with Innovative Tech!",
      message:
        "We owe a significant part of our success to Company Name. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
      name: "Mark Williams",
      role: "COO of InnovateNow Inc",
      logo: "/iconImages/profileLogo-2.svg",
    },
    {
      id: 3,
      stars: 5,
      title: "Sculpted User Experiences Beyond Imagination!",
      message:
        "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
      name: "Emily Clark",
      role: "CMO of Visionary Apps",
      logo: "/iconImages/profileLogo-3.svg",
    },
    {
      id: 4,
      stars: 5,
      title: "Transformed Our Business with Innovative Tech!",
      message:
        "We owe a significant part of our success to Company Name. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
      name: "Mark Williams",
      role: "COO of InnovateNow Inc",
      logo: "/iconImages/profileLogo-2.svg",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024, // lg & below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm & below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setTotalSlides(slides.length - 1);
  }, [slides.length]);

  const renderStars = (count) =>
    Array.from({ length: count }, (_, i) => (
      <span key={i} className="text-[#FF7800]">
        ★
      </span>
    ));

  return (
    <>
      <div className="relative w-full">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bgImages/awards.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-8 md:py-16">
          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center">
            {/* Left Image */}
            <div className="flex justify-center items-start pb-8">
              <img
                src="/bgImages/ReviewsBackground.webp"
                alt="reviews-page-background"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[500px] h-auto object-contain xl:w-[881px] xl:h-[587px]"
              />
            </div>

            {/* Text Section */}
            <div className="max-w-xl items-center xl:text-left flex flex-col justify-start self-start xl:mt-15">
              <h2 className="text-[#FF7800] text-xl md:text-2xl xl:text-4xl font-medium leading-tight">
                We've stopped counting. Over 500 brands count on us.
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-medium mt-5 leading-relaxed">
                Our 4,000+ team has expertise in almost every programming
                language.
              </p>
            </div>
          </div>
        </div>

        {/* Slick Slider Section */}
        <div className="relative mt-8 md:absolute md:bottom-[-400px] lg:bottom-[-370px] xl:bottom-[-250px]  md:left-1/2 md:-translate-x-1/2 w-full max-w-[1440px] px-4 z-20 md:px-8">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((item) => (
              <div key={item.id} className="px-4">
                <div className="bg-white text-[#1E1B39] rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[527px]">
                  <div>
                    <div className="mb-5 text-slate-800 text-2xl tracking-[2.89px] leading-7">
                      {renderStars(item.stars)}
                    </div>
                    <h3 className="text-base md:text-xl lg:2xl font-medium mb-3 leading-9 text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 mt-auto">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-10 w-15 md:h-15 md:w-20 rounded-full object-contain"
                    />
                    <div>
                      <p className="text-sm md:text-base font-bold">
                        {item.name}
                      </p>
                      <p className="text-xs md:text-sm text-[#6E6C83]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Slider Navigation */}
          <div className="relative z-50 flex justify-center gap-4 mt-8">
            {/* Prev */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              disabled={currentSlide === 0}
              aria-label="Previous Slide"
              className={`w-8 h-8 md:w-12 md:h-12 bg-slate-50 rounded-full flex items-center justify-center shadow-md border border-gray-300 hover:bg-slate-100 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <img
                src="/iconImages/arrow-left.svg"
                alt="Previous"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </button>

            {/* Next */}
            <button
              onClick={() => sliderRef.current?.slickNext()}
              disabled={currentSlide === totalSlides}
              aria-label="Next Slide"
              className={`w-8 h-8 md:w-12 md:h-12 bg-slate-50 rounded-full flex items-center justify-center shadow-md border border-gray-300 hover:bg-slate-100 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                currentSlide === totalSlides
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <img
                src="/iconImages/arrow-right.svg"
                alt="Next"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
