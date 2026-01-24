import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaWordpress,
  FaReact,
  FaNode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Dahab Mining App",
    category: "Financial App",
    description:
      "A Mining management App, where you can buy miners and track and analyze your earnings",
    image: "/projects/mining.jpg",
    tech: [
      { title: "HTML", icon: <FaHtml5 /> },
      { title: "CSS", icon: <FaCss3Alt /> },
      { title: "Javascript", icon: <SiJavascript /> },
      { title: "Tailwind", icon: <SiTailwindcss /> },
      { title: "Node JS", icon: <FaNode /> },
      { title: "Mongo DB", icon: <SiMongodb /> },
      { title: "React", icon: <FaReact /> },
    ],
  },
  {
    id: 2,
    title: "Handcar",
    category: "E-Commerce & Service",
    description:
      "An end-to-end eCommerce platform with cart, payments, and vendor integration built for automobiles parts and services",
    image: "/projects/handcar.jpg",
    tech: [
      { title: "HTML", icon: <FaHtml5 /> },
      { title: "CSS", icon: <FaCss3Alt /> },
      { title: "Tailwind", icon: <SiTailwindcss /> },
      { title: "Python", icon: <FaPython /> },
      { title: "Django", icon: <SiDjango /> },
      { title: "PostgresQl", icon: <SiPostgresql /> },
      { title: "React", icon: <FaReact /> },
    ],
  },
  {
    id: 3,
    title: "Hire In Abudhabi",
    category: "Market Place",
    description: "A marketplace for hiring experts suited for your business",
    image: "/projects/hirein.jpg",
    tech: [
      { title: "HTML", icon: <FaHtml5 /> },
      { title: "CSS", icon: <FaCss3Alt /> },
      { title: "Tailwind", icon: <SiTailwindcss /> },
      { title: "Javascript", icon: <SiJavascript /> },
      { title: "React", icon: <FaReact /> },
    ],
  },
];

export default function UaePortfolio() {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const { title, category, description, image, tech } = projects[current];

  return (
    <section className="bg-white text-black py-20 px-7 font-manrope">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-gray-400 uppercase text-sm tracking-wide">
          Portfolio
        </p>
        <h2 className="text-xl md:text-2xl  max-w-2xl mx-auto mt-4">
          From Challenge to Outcome
        </h2>
        <p>Real Projects. Clear Problems. Practical Solutions.</p>
      </div>

      {/* Project Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-md transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <p className="text-gray-400 text-sm mb-2">Category: {category}</p>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-500 text-sm mb-6">{description}</p>

          {/* Technology Stack */}
          <p className="text-gray-400 text-sm mb-4">Technology</p>
          <div className="flex gap-6 text-3xl text-gray-600 mb-8">
            {tech.map((icon, index) => (
              <span
                key={index}
                title={icon.title}
                className="hover:text-black transition-colors cursor-pointer"
              >
                {icon.icon}
              </span>
            ))}
          </div>

          {/* Button */}
          {/* <button className="border border-black px-6 py-2 rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition">
            View Case Study →
          </button> */}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-16">
        <button
          onClick={prevProject}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200  transition"
        >
          <img src="/left-arrow-btn.svg" alt="" />
        </button>
        <button
          onClick={nextProject}
          className="w-10 h-10 flex items-center justify-center  rounded-full hover:bg-gray-200 transition"
        >
          <img src="/right-arrow-btn.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
