import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>
          Have questions about NeoLife products or want to place an order?
          Reach out to us through any of the options below:
        </p>

        <div className="contact-info">
          <p>
            📍 <strong>Location:</strong> Accra, Ghana
          </p>
          <p>
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:+233241353042">+233 24 135 3042</a>
          </p>
          <p>
            💬 <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/233241353042"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>
          <p>
            ✉️ <strong>Email:</strong>{" "}
            <a href="mailto:jonadabneolife@gmail.com">
              jonadabneolife@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-socials">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
