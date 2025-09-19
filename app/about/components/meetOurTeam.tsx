"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { name: "John Smith", role: "CEO", image: "/sectionImages/about-team-1.png" },
  { name: "Simon Adams", role: "CTO", image: "/sectionImages/about-team-2.png" },
  { name: "Paul Jones", role: "Design Lead", image: "/sectionImages/about-team-3.png" },
  { name: "Sara Hardin", role: "Project Manager", image: "/sectionImages/about-team-4.png" },
];

export default function MeetOurTeam() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative py-16 sm:py-20 bg-violet-50">
      <div className="relative z-10 max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-gray-800 font-poppins mb-12 sm:mb-16">
          Meet our team
        </h2>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
              <div className="h-[340px] w-64 bg-white p-6 shadow-md text-center flex flex-col items-center mx-auto rounded-lg">
                <div className="w-[149px] h-[149px] mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 font-poppins">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-poppins opacity-70">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
