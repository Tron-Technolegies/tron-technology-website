import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./KeralaHeroSection.css";
import { handleChatClickCustom } from "../../../utils/whatsapp";

export default function KeralaHeroSection() {
  return (
    <section className="kerala-hero">
      <div className="kerala-hero-content">
        {/* top icon/image */}
        <img
          src="/kl-hero-icon.svg"
          alt="decorative"
          className="kerala-top-icon"
        />

        <h1 className="kerala-hero-title">
          Empowering You <br />
          in the Digital Age
        </h1>
        <p className="kerala-hero-subtitle">
          We provide Seamless Digital Acceleration by boosting engineering and
          design capabilities, improving processes, and delivering end-to-end
          digital products.
        </p>

        <div className="kerala-hero-buttons">
          <img src="./btn-arrow.png" alt="" className="kl-btn-arrow" />
          <button
            className="btn-primary"
            onClick={() =>
              handleChatClickCustom(
                "I would Like to work Together with Tron Technologies",
              )
            }
          >
            Let’s Work Together
          </button>
        </div>
      </div>

      {/* STACK + EXPERIENCE SECTION */}
      <div className="kerala-stack-container">
        {/* stack badges */}
        <div className="kerala-tech-stack">
          <span>Python</span>
          <span>React js</span>
          <span>Flutter</span>
          <span>Node js</span>
          <span>UI/UX Design</span>
          <span>Wordpress</span>
          <span>PHP</span>
          <span>Laravel</span>
          <span>Shopify</span>
        </div>

        {/* floating experience stats */}
        <div className="kerala-stats-grid">
          <div className="stat-box">
            <h3>
              30<span>+</span>
            </h3>
            <p>Completed Projects</p>
          </div>
          <div className="stat-box">
            <h3>
              200<span>+</span>
            </h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <h3>
              03<span>+</span>
            </h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-box">
            <h3>
              30<span>+</span>
            </h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>

      {/* scroll down arrow */}
      <div className="scroll-down">
        <span>↓</span>
      </div>
    </section>
  );
}
