import React from "react";
import { FaChartLine, FaRocket, FaCogs, FaUsers, FaFileAlt, FaHandshake } from "react-icons/fa";
import "./WhyUs.css";

export default function WhyUs() {
  const cards = [
    {
      icon: <FaChartLine />,
      title: "Build to scale",
      text: "Tech that grows with your business.",
    },
    {
      icon: <FaRocket />,
      title: "AI-Powered Efficiency",
      text: "Smarter, faster, more reliable.",
    },
    {
      icon: <FaCogs />,
      title: "Proven Expertise ",
      text: "60+ successful projects in diverse industries",
    },
    // {
    //   icon: <FaUsers />,
    //   title: "Transparent Process",
    //   text: "Work with EU-based developers experienced across industries.",
    // },
    {
      icon: <FaFileAlt />,
      title: "Transparent Process",
      text: "Clear communication & delivery.",
    },
    {
      icon: <FaHandshake />,
      title: "Long-Term Partnership ",
      text: "Beyond launch, we help you grow.",
    },
  ];

  return (
    <section className="why-us">
      {/* Title with diode line */}
      <div className="why-us-title-container">
        <span className="line"></span>
        <p className="why-us-title">Why us</p>
        <span className="line"></span>
      </div>

      {/* Heading */}
      <div className="why-us-heading-container">
        <h3>What set us apart</h3>
        <p className="why-us-desc">
          Tron Technologies was founded with the vision to create digital identities that impact the
          future, not simply websites and apps. We go beyond code writing. Our engineers and
          AI-driven intelligence empower businesses to build solutions that think, adapt, and grow
          along with their business. By working closely with your team, we help organizations
          deliver mission-critical solutions with confidence. Our foundational principles are simple
          and effective: innovate intelligently, build accurately, and design intentionally. With
          every engagement, we aspire to create lasting, sustainable value, not just deliver
          software
        </p>
      </div>

      {/* Cards */}
      <div className="why-us-cards">
        {cards.map((card, i) => (
          <div key={i} className="why-us-card">
            <div className="icon">{card.icon}</div>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="result-container">
        <h3 className="result-title">Enjoy tangible results</h3>
        <p className="result-desc">
          Over the years we’ve created a unique process that delivers exceptional results with
          blazing-fast efficiency.
        </p>

        <div className="result-stats">
          <div className="result-stat-container">
            <div className="result-stat">
              <h3>99%</h3>
              <p>faster teacher guide creation process – from 4 hours to 45 sec</p>
            </div>
            <div className="result-stat">
              <h3>300+</h3>
              <p>Digital solutions delivered</p>
            </div>
            <div className="result-stat">
              <h3>60%</h3>
              <p>more user engagement with hyper-personalization for a proptech</p>
            </div>
            <div className="result-stat">
              <h3>77%</h3>
              <p>faster page speed for a website</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
