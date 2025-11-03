// Carusol.jsx — Auto-advancing carousel of product images
import React, { useEffect, useState } from "react";
import "./Carosol.css";

export default function Carusol({ items = [] }) {
  const [index, setIndex] = useState(0);

  // Automatically switch slides every 3.5 seconds
  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="caro-wrap">
      {items.map((it, i) => (
        <div
          key={it.name}
          className={`caro-item ${i === index ? "active" : ""}`}
        >
          {/* ✅ images now from /public/assets — correct path */}
          <img src={it.image} alt={it.name} className="caro-img" />
          <div className="caro-caption">
            <h3>{it.name}</h3>
            <p>{it.short}</p>
          </div>
        </div>
      ))}

      {/* Dots (slide indicators) */}
      <div className="caro-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "dot-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
