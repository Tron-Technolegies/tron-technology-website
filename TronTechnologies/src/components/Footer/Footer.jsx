// Footer.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Footer.css";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <section className={`footer ${isHome ? "footer-home" : "footer-default"}`}>
      {/* Logo */}
      <div className="footer-logo">
        <img src="/footer-logo.png" alt="footer logo" />
      </div>

      {/* Center Text */}
      <div className="footer-text">
        <p>
          Have a project in mind? <br /> Let’s get to work
        </p>
      </div>
      <p className="max-w-[800px] text-center">
        We need to build something that actually works. Building something that
        works is really important, to me. I think we should focus on making
        something that works. Something that works is what we are looking for.
      </p>
      <p className="max-w-[800px] mt-2 text-center">
        We want to help you with your idea. You might be just thinking about it.
        You might be ready to start working on it. Either way we are here to
        help you. We want to help you understand what you need to do and feel
        good about what you're doing. We will help you move forward with your
        idea, the Digital Product and have a plan and feel confident, about it
        your Digital Product.
      </p>

      {/* Connect Button */}
      <div className="footer-connect-btn">
        <button
          onClick={() =>
            handleChatClickCustom(
              "I want to Connect and Know more about Tron Technologies",
            )
          }
        >
          Connect
        </button>
      </div>

      {/* Locations */}
      <div className="footer-page-btn">
        {/* <p>Location we serve</p> */}
        <div className="footer-btn-container">
          <div className="footer-btn">
            <Link to="/kerala">
              <button>Kerala →</button>
            </Link>
          </div>
          <div className="footer-btn">
            <Link to="/uae">
              <button>UAE →</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="footer-links">
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>AI/Data Science</li>
            <li>UX/UI Design</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li>Education</li>
            <li>Block Chain</li>
            <li>E-commerce</li>
            <li>Restaurants</li>
            <li>Transportation</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Clients</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <a href="https://dahabminers.com/" target="_blank">
              Dahab Miners
            </a>
            <a href="https://shop.intermine-solutions.de/" target="_blank">
              Intermine Solutions
            </a>
            <a href="https://handcar.ae/" target="_blank">
              Handcar
            </a>
            <a href="https://pizzakebabclub.com/" target="_blank">
              Pizza Club
            </a>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Why Us</li>
            <li>Case Study</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
