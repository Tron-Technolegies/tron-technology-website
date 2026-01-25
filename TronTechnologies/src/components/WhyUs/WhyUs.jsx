import React from "react";
import {
  FaChartLine,
  FaRocket,
  FaCogs,
  FaUsers,
  FaFileAlt,
  FaHandshake,
} from "react-icons/fa";
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
    <section className="why-us" id="whyus">
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
          Tron Technologies was founded with the vision to create digital
          identities that impact the future, not simply websites and apps. We go
          beyond code writing. Our engineers and AI-driven intelligence empower
          businesses to build solutions that think, adapt, and grow along with
          their business. By working closely with your team, we help
          organizations deliver mission-critical solutions with confidence. Our
          foundational principles are simple and effective: innovate
          intelligently, build accurately, and design intentionally. With every
          engagement, we aspire to create lasting, sustainable value, not just
          deliver software
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
          Over the years we’ve created a unique process that delivers
          exceptional results with blazing-fast efficiency.
        </p>

        <div className="result-stats">
          <div className="result-stat-container">
            <div className="result-stat">
              <h4 className="text-2xl font-semibold ">99% Faster Process</h4>
              <p>
                Optimized workflows that reduce delivery time from hours to
                seconds.
              </p>
            </div>
            <div className="result-stat">
              <h4 className="text-2xl font-semibold ">
                30+ Solutions Delivered
              </h4>
              <p>
                Web and mobile products successfully launched across multiple
                industries.
              </p>
            </div>
            <div className="result-stat">
              <h4 className="text-2xl font-semibold ">60% Higher Engagement</h4>
              <p>
                Improved user interaction through data-driven design and
                personalization.
              </p>
            </div>
            <div className="result-stat">
              <h4 className="text-2xl font-semibold ">77% Faster Page Speed</h4>
              <p>Performance-focused engineering for lightning-fast websites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
