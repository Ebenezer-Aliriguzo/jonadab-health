// JonadabHealthProducts.jsx
import React from "react";
import Carusol from "./Carusol";
import "./JonadabHealthProducts.css";

// PRODUCTS — images now served from public/assets/
const productsData = [
  {
    id: 1,
    name: "Aloe Vera Plus (1 L)",
    short: "Soothing drink to support digestion",
    desc: "Aloe Vera Plus supports digestive health, immunity and general wellness.",
    priceGHS: 170,
    image: "/assets/product-aloevera-plus.jpg",
  },
  {
    id: 2,
    name: "Liqui-Vite (Multivitamin)",
    short: "Daily liquid multivitamin",
    desc: "Liqui-Vite provides broad-spectrum vitamins and minerals in an easy-to-take liquid.",
    priceGHS: 240,
    image: "/assets/product-liqui-vite.jpg",
  },
  {
    id: 3,
    name: "Carotenoid Complex (30 caps)",
    short: "Antioxidant support",
    desc: "Carotenoid Complex contains carotenoids to support eyes and immune function.",
    priceGHS: 150,
    image: "/assets/product-carotenoid-complex.jpg",
  },
  {
    id: 4,
    name: "Chelated Zinc",
    short: "Zinc supplement",
    desc: "Chelated Zinc to support immune health and wound healing.",
    priceGHS: 85,
    image: "/assets/product-chelated-zinc.jpg",
  },
  {
    id: 5,
    name: "All C (Chewable Vitamin C)",
    short: "Kids & adult chewable vitamin C",
    desc: "All C chewable provides Vitamin C for immune support.",
    priceGHS: 60,
    image: "/assets/product-all-c.jpg",
  },
  {
    id: 6,
    name: "BetaGuard",
    short: "Beta carotene antioxidant",
    desc: "BetaGuard helps protect cells from oxidative stress.",
    priceGHS: 140,
    image: "/assets/product-betaguard.jpg",
  },
  {
    id: 7,
    name: "Wheat Germ Oil with Vitamin E",
    short: "Omega and vitamin E support",
    desc: "Wheat germ oil for healthy skin and cellular support.",
    priceGHS: 120,
    image: "/assets/product-wheatgerm-oil.jpg",
  },
];

function openWhatsApp(product) {
  const phone = "233241353042"; // +233 24 135 3042
  const text = encodeURIComponent(
    `Hello Jonadab, I want to buy: ${product.name} priced at GHS ${product.priceGHS}. Please send details.`
  );
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}

function shareProduct(product) {
  const shareText = `${product.name} — GHS ${product.priceGHS}. Check it out at Jonadab NeoLife https://jonadab-health.vercel.app/ .`;
  if (navigator.share) {
    navigator.share({ text: shareText }).catch(() => {});
  } else {
    const url = encodeURIComponent(window.location.href);
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(
      shareText
    )}`;
    window.open(fb, "_blank");
  }
}

export default function JonadabHealthProducts() {
  const products = productsData;

  return (
    <div className="page-root">
      {/* Carousel Section */}
      <section className="hero">
        <Carusol
          items={products.map((p) => ({
            name: p.name,
            short: p.short,
            image: p.image,
          }))}
        />
      </section>

      {/* Product List */}
      <section id="products" className="products-section">
        <h2>NeoLife Products </h2>
        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} className="product-img" />
              <div className="product-body">
                <h3>{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                <p className="product-price">GHS {p.priceGHS}</p>
                <div className="product-actions">
                  <button className="buy-btn" onClick={() => openWhatsApp(p)}>
                    Order / Buy
                  </button>
                  <button className="share-btn" onClick={() => shareProduct(p)}>
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
