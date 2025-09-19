"use client";
export default function ProcessSection () {
     const images = [
    "/iconImages/Line-and-Icon.svg",
  ];

    const steps = [
  {
    title: "Planning",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Conception",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Design",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    title: "Development",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
];

    return (
        <>
 <div className="w-full px-6 md:px-8 lg:px-10 py-8 md:py-16 bg-transparent text-white">
  <div className="max-w-[1136px] mx-auto space-y-12">
    {/* Title */}
    <h2 className="text-3xl md:text-5xl font-semibold text-center font-poppins">
      The process we follow
    </h2>

    {/* Timeline Items */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 mt-10">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-start text-left">
          {/* Full-width Image with Line */}
          <img
            src={images[0]}
            alt="Timeline Line with Dot"
            className="w-full h-auto mb-4"
          />

          {/* Text Content */}
          <h3 className="text-xl font-medium font-poppins leading-loose">
            {step.title}
          </h3>
          <p className="text-sm opacity-70 leading-normal font-poppins">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
        </>
    )
}