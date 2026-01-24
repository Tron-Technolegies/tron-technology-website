import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";

export default function ITSolution() {
  const solutions = [
    {
      icon: "/star-icon.svg", // you can replace with react-icon too
      title: "Deliver on time",
      desc: "Timely precision, where promises meet performance, ensuring your project's success.",
    },
    {
      icon: <GoShieldCheck size={40} />,
      title: "Security",
      desc: "Your data's safety, our commitment to security.",
    },
    {
      icon: <IoExtensionPuzzleOutline size={40} />,
      title: "Flexibility",
      desc: "Tailored solutions, perfect for your unique needs.",
    },
    {
      icon: <BsCurrencyDollar size={40} />,
      title: "Pricing",
      desc: "Efficient solutions, cost-conscious choices, saving you money and time.",
    },
  ];

  return (
    <section className="bg-black py-16 px-6 font-manrope">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-gray-400 text-sm tracking-wide">IT Solutions</p>
        <h2 className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto mt-4 text-white">
          The Excellence Defined by How We Work.
        </h2>
        <p>
          We specialize in providing reliable IT solutions with proper planning,
          consideration and after sales services- such that your technology will
          support your business rather than act as an obstacle to your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] border border-transparent hover:border-white transition-all rounded-2xl py-10 px-6 text-left"
          >
            <div className="mb-6">
              {typeof item.icon === "string" ? (
                <img src={item.icon} alt={item.title} className="w-8 h-8" />
              ) : (
                item.icon
              )}
            </div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
                {item.title}
              </span>
              {/* underline line */}
              <span className="block w-10 h-[2px] bg-gradient-to-r from-white to-gray-500 mt-6"></span>
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
