import React from "react";
import "./TechStackSection.css";
import { FaReact, FaNodeJs, FaPython, FaAws, FaFigma } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNextdotjs,
  SiAngular,
  SiDjango,
  SiLaravel,
  SiFlutter,
  SiReact,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // for MidJourney placeholder

const techCategories = [
  {
    title: "DESIGN",
    techs: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
      { name: "MidJourney", icon: <FaRobot /> },
    ],
  },
  {
    title: "FRONT-END",
    techs: [
      { name: "React", icon: <FaReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "BACK-END",
    techs: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Laravel", icon: <SiLaravel /> },
    ],
  },
  {
    title: "MOBILE",
    techs: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "React Native", icon: <SiReact /> },
    ],
  },
  {
    title: "SYSTEMS",
    techs: [
      { name: "AWS", icon: <FaAws /> },
      // { name: "Azure", icon: <SiMicrosoftazure /> },
    ],
  },
  {
    title: "AI/DATA SCIENCE",
    techs: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="techstack-section">
      <p className="subtitle">the tech stack that helps</p>
      <h2 className="title">MAXIMISE YOUR BUSINESS VALUE</h2>

      <div className="categories">
        {techCategories.map((category, index) => (
          <div key={index} className="category-card">
            <h3 className="category-title">{category.title}</h3>
            <div className="tech-list">
              {category.techs.map((tech, idx) => (
                <div key={idx} className="tech-item">
                  <div className="tech-icon">{tech.icon}</div>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
