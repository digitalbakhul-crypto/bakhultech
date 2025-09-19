"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const slides = [
    {
      image: "slider/3b2edd69647ad9dd95037c3cf7adea5a3c6d2408.jpg",
      label: "Engineering",
    },
    {
      image: "slider/212cdd30f0efe126e2534436299e9d34372e9ecd.png",
      label: "Consulting",
    },
    {
      image: "slider/c8c4c1401669843fa80be5cfc57c3b727ed9b2a6.jpg",
      label: "Cloud",
    },
  ];

  const serviceCard = [
    {
      title: "Custom Software Development",
      desc: "Create custom software tailored for your unique needs, including front-end and back-end technology.",
      icon: "iconImages/document-code.svg",
    },
    {
      title: "QA and Testing",
      desc: "Ensure your custom software is reliable through end-to-end testing processes.",
      icon: "iconImages/setting-5.svg",
    },
    {
      title: "AI and Data Science",
      desc: "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
      icon: "iconImages/data.svg",
    },
    {
      title: "UX/UI Design",
      desc: "Create beautiful, pixel-perfect, and easy-to-use designs that delight your users.",
      icon: "iconImages/brush.svg",
    },
    {
      title: "Mobile App Development",
      desc: "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
      icon: "iconImages/mobile.svg",
    },
    {
      title: "Platform and Infrastructure",
      desc: "Ensure applications are secure and available with our DevOps and Security engineers.",
      icon: "iconImages/shapes.svg",
    },
  ];

  return (
    <>
      <div className="w-full bg-neutral-950 text-white  py-8 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          {/* Header and Slider Side by Side */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl xl:text-4xl font-medium mb-4">
                Our Services
              </h2>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl mb-6">
                With more than a decade of experience & insight, we provide
                Digital, RPA, Quality Assurance, AI, SAP, and Technology
                Consulting Services to companies of all scales, around the
                globe.
              </p>
              <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-2 py-1 md:px-4 md:py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition cursor-pointer">
                Our Approach
                <img
                  src="iconImages/849726bf2a372b12e002274293079733cf151d4d.png"
                  alt="Arrow"
                  className="w-3 h-3"
                />
              </button>
            </div>

            {/* Slider Section */}
            <div className="w-full md:w-[65%]">
              <Slider {...settings}>
                {slides.map((slide, idx) => (
                  <div key={idx} className="px-2">
                    <div className="flex flex-col items-center text-center">
                      <img src={slide.image} alt={slide.label} />
                      <p className="mb-2 text-sm font-semibold">
                        {slide.label}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Services Card */}
          <div className="mt-12 md:mt-24 text-gray-200 ">
            <div className="flex items-center gap-4 mb-15 justify-center">
              <img
                src="bgImages/Vector 6.svg"
                className="w-15 h-15 md:w-24 md:h-20"
              />
              <h3 className="max-w-2xl text-xl md:text-2xl xl:text-3xl font-semibold leading-tight">
                Empowering Your Digital Vision: Our Comprehensive Tech Services.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-13 gap-y-12">
              {serviceCard.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-orange-500 text-neutral-800 p-7 rounded-[30px] shadow-xl flex flex-col items-start gap-5"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12"
                  />
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
