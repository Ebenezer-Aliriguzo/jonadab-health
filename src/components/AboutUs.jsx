import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Jonadab NeoLife</h2>
        <p>
          <strong>Jonadab NeoLife</strong> is committed to providing high-quality
          <strong> NeoLife health and wellness products</strong> that promote
          vitality, strengthen immunity, and support healthy living for all
          ages.
        </p>
        <p>
          We are an authorized distributor of NeoLife products — trusted
          worldwide for their superior nutrition, natural ingredients, and
          scientific formulation.
        </p>
        <p>
          Our mission is to make these products easily accessible across Ghana
          and beyond, ensuring everyone can live healthier, more energetic
          lives.
        </p>

        <div className="about-values">
          <h3>Our Core Values</h3>
          <ul>
            <li>🌿 Genuine NeoLife products only</li>
            <li>❤️ Health, wellness, and customer satisfaction</li>
            <li>🤝 Integrity and excellence in service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
