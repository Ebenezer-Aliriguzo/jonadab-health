// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JonadabHealthProducts from "./components/JonadabHealthProducts";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import JonadabHealthProductsSpinner from "./components/JonadabHealthProductsSpinner";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay for spinner
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <JonadabHealthProductsSpinner />;

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<JonadabHealthProducts />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer /> {/* ✅ Appears once for all pages */}
    </Router>
  );
}
