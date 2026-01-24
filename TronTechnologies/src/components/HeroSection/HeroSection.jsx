import React from "react";
import "./HeroSection.css";
import bgImage from "../../assets/hero-bg-new.png";

export default function HeroSection() {
  const stats = [
    { number: "200+", label: "Happy Client" },
    { number: "60+", label: "Projects" },
    { number: "95%", label: "Growth" },
    { number: "03+", label: "Years" },
  ];

  return (
    <>
      {/* Hero with background image */}
      <section
        className="hero"
        style={{
          background: `url(${bgImage}) no-repeat center/cover`,
        }}
      >
        <div className="hero-inner container">
          {/* Left text */}
          <div className="hero-content">
            <span className="hero-tag">be the future</span>
            <h1>
              Be the Future of
              <br />
              <span>Technology</span>
            </h1>
            <p>
              At Tron Technologies, we blend AI, design, and engineering to create digital solutions
              that adapt, scale, and lead.
            </p>
            <div className="hero-cta">
              <img src="./btn-arrow.png" alt="arrow" className="btn-arrow" />
              <button className="btn-primary"> Start Your Project</button>
              {/* <button className="btn-secondary">Case studies</button> */}
            </div>
          </div>

          {/* Right-bottom callouts */}
          <div className="right-callouts">
            {/* <a href="#" className="callout">
              <span>
                Future-Ready
                <br />
                Strategies
              </span>
              <span className="arrow">↗</span>
            </a>
            <a href="#" className="callout">
              <span>
                24/7 Customer
                <br />
                Support
              </span>
              <span className="arrow">↗</span>
            </a> */}

            <img src="/hero-cta.png" alt="" className="cta-img" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="stats">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="num">{s.number}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
