import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonial.css";

export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "David J. Karem",
      role: "Businessman • 1 day ago",
      text: "Tron Technologies delivered exactly what we needed — a scalable platform with AI automation. Their team is reliable and highly skilled.",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager • 2 days ago",
      text: "Our website traffic and user engagement skyrocketed after their redesign. Professional and innovative team.",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "Michael Chen",
      role: "Developer • 3 days ago",
      text: "As a developer, I appreciate the technical excellence behind this platform. The API is well-documented, the service is reliable, and the temporary email feature has saved me countless hours during testing phases.",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director • 5 days ago",
      text: "This tool has been invaluable for our marketing team. We can test campaigns without cluttering our main inboxes, and the disposable email addresses work perfectly for lead generation and A/B testing.",
      avatar: "/api/placeholder/48/48",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="testimonial-section">
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
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
              />
            </div>
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonials[currentTestimonial].name}</h3>
              <p className="testimonial-role">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>

          {/* Testimonial text */}
          <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>

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
