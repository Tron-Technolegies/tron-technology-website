// Footer.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Footer.css";

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

      {/* Connect Button */}
      <div className="footer-connect-btn">
        <Link to="/contact">
          <button>Connect</button>
        </Link>
      </div>

      {/* Locations */}
      <div className="footer-page-btn">
        <p>Location we serve</p>
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
          </ul>
        </div>
        <div className="footer-col">
          <h4>Clients</h4>
          <ul>
            <li>Mobile App</li>
            <li>Blockchain</li>
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
