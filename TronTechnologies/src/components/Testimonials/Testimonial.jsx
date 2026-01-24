import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonial.css";

export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rushil Kamarudheen",
      role: "Marketing Head • Dahab Miners",
      text: "Working with this team was a smooth and professional experience from start to finish. They understood our requirements clearly and delivered a fast, clean, and scalable website that exceeded our expectations. Communication was excellent throughout the project.",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "Favas Ahmed",
      role: "ED • HandCar",
      text: "We hired them to build our mobile application, and the result was a stable, high-performance app delivered on time. Their technical expertise and attention to detail really stood out",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "Fathima Hanaan",
      role: "Marketing Strategist • Pizza Club",
      text: "Their design approach is very practical and user-focused. The UI they created not only looks great but significantly improved usability and user engagement on our platform",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "Mohammad Favas",
      role: "SEO Specialist • Dahab Miners",
      text: "From design to development, they handled the entire project with professionalism and clarity. The final product was exactly aligned with our business goals and user needs",
      avatar: "/api/placeholder/48/48",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="testimonial-section" id="testimonials">
      {/* Title with badge */}
      <div className="testimonial-badge">
        <span>Testimonial</span>
      </div>

      {/* Main heading */}
      <h2 className="testimonial-title">
        What's our clients says
        <br />
        about us
      </h2>

      {/* Testimonial card */}
      <div className="testimonial-card">
        <div className="testimonial-innercard">
          {/* Navigation arrows */}
          <button
            className="nav-arrow nav-arrow-left"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="nav-arrow nav-arrow-right"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Avatar and info */}
          <div className="testimonial-header">
            <div className="avatar">
              <div>
                {testimonials[currentTestimonial].name
                  .slice(0, 1)
                  .toUpperCase()}
              </div>
            </div>
            <div className="testimonial-info">
              <h3 className="testimonial-name">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="testimonial-role">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>

          {/* Testimonial text */}
          <p className="testimonial-text">
            {testimonials[currentTestimonial].text}
          </p>

          {/* Dots indicator */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? "active" : ""}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
