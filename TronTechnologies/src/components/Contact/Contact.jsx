import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <h3>NEW PROJECT IN MIND?</h3>
        <h1>LET'S TALK</h1>
        <div className="alt-contacts">
          <p>
            <strong>ALTERNATIVE CONTACTS</strong>
          </p>
          <p>📞 +91 9876543210</p>
          <p>✉️ trontechnologies@gmail.com</p>
        </div>
      </div>

      <div className="contact-right">
        <h2>
          Get in <span>touch</span>
        </h2>
        <p>Explain your project and book a meeting today.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Company" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Let's talk about your idea"></textarea>

          <div className="upload-box">
            <label htmlFor="file-upload">📎 Upload Additional file</label>
            <input id="file-upload" type="file" />
          </div>

          <div className="privacy-note">
            *Read the full list of personal data we process and your rights here
          </div>

          <div className="checkbox">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              I allow Imaginary Cloud to store and process my personal data*
            </label>
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
