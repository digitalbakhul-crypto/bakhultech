"use client";

export default function GoalfocusSection() {
   const images = [
    "/sectionImages/about-goal-1.jpg",
  ];

    return (
        <>
  <div className="w-full py-16 text-gray-800 bg-transparent">
  {/* Content Section */}
  <div className="max-w-[1136px] mx-auto bg-orange-500 px-4 md:px-15 py-10">
    {/* Title */}
    <div className="text-sm font-medium font-poppins mb-6 text-center md:text-left">
      Who we are
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-15 ">
      {/* Left Block */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold font-poppins leading-tight mb-4">
          Goal focussed
        </h2>
        <p className="text-sm font-normal font-poppins leading-normal opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Block */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold font-poppins leading-tight mb-4">
          Continuous improvement
        </h2>
        <p className="text-sm font-normal font-poppins leading-normal opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>

  {/* Full-Width Image Section - No Padding */}
  <div className="max-w-[1136px] mx-auto mt-0">
    <img
      src={images[0]}
      alt="Who we are visual"
      className="w-full h-[302px] object-cover"
    />
  </div>
</div>


        </>
 );
}