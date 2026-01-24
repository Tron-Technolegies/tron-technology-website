import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left content */}
        <div className="about-text">
          <div className="about-line"></div>
          <div>
            <p className="about-label">ABOUT</p>
            <h2>
              The future of intelligent <br /> automation and decision-making.
            </h2>
            <p className="about-desc">
              Tron Technologies was founded with the vision to create digital identities that impact
              the future, not simply websites and apps. We go beyond code writing. Our engineers and
              AI-driven intelligence empower businesses to build solutions that think, adapt, and
              grow along with their business. By working closely with your team, we help
              organizations deliver mission-critical solutions with confidence. Our foundational
              principles are simple and effective: innovate intelligently, build accurately, and
              design intentionally. With every engagement, we aspire to create lasting, sustainable
              value, not just deliver software.
            </p>
          </div>
        </div>

        <div className="about-image">
          <video src="./about-image.mp4" autoPlay loop muted className="about-video"></video>
        </div>
      </div>
    </section>
  );
}
