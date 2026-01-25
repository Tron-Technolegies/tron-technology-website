import React, { useState } from "react";
import "./Contact.css";
import { handleEnquiryFormClick } from "../../utils/whatsapp";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleEnquiryFormClick({ name, company, email, phone, message });
    setCompany("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }
  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <h3>NEW PROJECT IN MIND?</h3>
        <h1>LET'S TALK</h1>
        <div className="alt-contacts">
          <p>
            <strong>ALTERNATIVE CONTACTS</strong>
          </p>
          <p>📞 +91 9744866003</p>
          <p>✉️ trontechnologies@gmail.com</p>
        </div>
      </div>

      <div className="contact-right">
        <h2>
          Get in <span>touch</span>
        </h2>
        <p>Explain your project and book a meeting today.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Let's talk about your idea"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
