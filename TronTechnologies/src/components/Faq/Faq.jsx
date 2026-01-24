import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Can you design a custom website for my business in India?",
      answer:
        "Yes, we specialize in tailored websites that are mobile-friendly, SEO-optimized, and built for growth.",
    },
    {
      question: "Do you also offer SEO and digital marketing?",
      answer:
        "Absolutely. Our digital marketing team provides SEO, ads, and content strategies to help you rank and grow.",
    },
    {
      question: "How long does it take to build a mobile app?",
      answer: "On average, 6–12 weeks, depending on features and complexity.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p>
        The purpose of a FAQ is generally to provide information on frequent questions or concerns.
        However, the format is a useful means of organizing information and text.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
            <p>{faq.question}</p>
            <span className="faq-toggle">{active === index ? "-" : "+"}</span>
            {active === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
