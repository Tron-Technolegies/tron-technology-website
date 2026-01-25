import React from "react";

export default function OurProcess() {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "Each project begins with the realization of the challenge and the landscape",
      desc2:
        "We also take time to find out about your business needs, users and technical limitations. This assists us to figure out the actual problem, not to make assumptions, and have a clear direction before we proceed",
      img: "/process1.png",
    },
    {
      id: 2,
      title: "Design",
      desc: "…so that we can make a design that will really suit you. ",
      desc2:
        "We develop ideas in structured designs using what we learn in the discovery process - balancing the usability, aesthetics, and functionality to develop experiences that are both intuitive and purposeful. ",
      img: "/process2.png",
    },
    {
      id: 3,
      title: "Develop",
      desc: "… maintaining quality of development and keeping the costs down",
      desc2:
        "We develop with clean and scalable code and practices. We are performance oriented, maintainable and long term value conscious, without an artificial level of complexity or exaggerated scheduling. ",
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
        <p className="text-gray-400 uppercase text-xs tracking-wide">
          Our Process
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Feel the Strength of Process.
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
          We are also holistic and end to end in our approach, i.e., we do not
          just solve problems in isolation but make all the solutions to be
          coordinated and well thought through.
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
            <div className="max-w-sm mt-4 md:mt-0">
              <h3 className="text-orange-400 text-base font-semibold">
                {step.title}
              </h3>
              <p className="text-gray-300 mt-1 text-sm leading-snug">
                {step.desc}
              </p>
              <p className="text-gray-300 mt-1 text-sm leading-snug">
                {step.desc2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
