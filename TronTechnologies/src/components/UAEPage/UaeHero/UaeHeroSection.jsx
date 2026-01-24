import React from "react";
import "./UaeHeroSection.css";

export default function UaeHeroSection() {
  return (
    <section className="uae-hero">
      <div className="uae-hero-content">
        <h1>
          Elevate Your Vision, Ignite <br /> Tomorrow’s Innovation.
        </h1>
        <p>Crafting Digital Excellence for a Future Beyond Imagination.</p>
      </div>
      <div className="uae-btn-container">
        {/* <div className="arrow-img">
          <img src="/btn-arrow.png" alt="" />
        </div> */}
        <button className="btn-primary">Let’s Work Together</button>
        <button>Case Studies</button>
      </div>
      <div className="uae-stats-container">
        <div className="uae-hero-stats">
          <p className="uae-hero-stats-number">400+</p>
          <p className="uae-hero-stats-desc">Projects Competed</p>
        </div>
        <hr className="uae-hero-stats-line" />
        <div className="uae-hero-stats">
          <p className="uae-hero-stats-number">15+</p>
          <p className="uae-hero-stats-desc">Successful Years</p>
        </div>
        <hr className="uae-hero-stats-line" />
        <div className="uae-hero-stats">
          <p className="uae-hero-stats-number">98%</p>
          <p className="uae-hero-stats-desc">Client Retention</p>
        </div>
        <hr className="uae-hero-stats-line" />
        <div className="uae-hero-stats">
          <p className="uae-hero-stats-number">30+</p>
          <p className="uae-hero-stats-desc">Countries</p>
        </div>
        <hr className="uae-hero-stats-line" />
      </div>
      <div className="uae-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
