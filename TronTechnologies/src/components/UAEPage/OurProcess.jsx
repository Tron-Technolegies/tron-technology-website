import React from "react";

export default function OurProcess() {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "Every project starts with understanding the challenge and the landscape...",
      img: "/process1.png",
    },
    {
      id: 2,
      title: "Design",
      desc: "...allowing us to design a solution that meets your needs...",
      img: "/process2.png",
    },
    {
      id: 3,
      title: "Develop",
      desc: "...keeping development quality high and costs low...",
      img: "/process3.png",
    },
    {
      id: 4,
      title: "Deliver",
      desc: "...resulting in a tailored solution that provides you value.",
      img: "/process4.png",
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-6 font-manrope">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-gray-400 uppercase text-xs tracking-wide">Our Process</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">Experience the Power of Process.</h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
          Instead of focusing just on the problem, we take the holistic approach so we can build a
          solution that works end to end.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row items-center md:items-center md:gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={step.img}
                alt={step.title}
                className="rounded-lg shadow-md w-[220px] md:w-[260px]"
              />
              {/* <span className="absolute -top-3 -right-3 bg-gray-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs border border-gray-600">
                {step.id}
              </span> */}
            </div>

            {/* Text */}
            <div className="max-w-xs mt-4 md:mt-0">
              <h3 className="text-orange-400 text-base font-semibold">{step.title}</h3>
              <p className="text-gray-300 mt-1 text-sm leading-snug">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
