// Footer.jsx
import React from 'react';
import './Footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const phone = '+233241353042';
  const fb = 'https://www.facebook.com/'; // replace with actual
  const ig = 'https://www.instagram.com/'; // replace with actual

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Contact</h4>
          <p>1 Accra, Tesan, Opposite Police Station</p>
          <p>Phone: {phone}</p>
        </div>
        <div className="footer-col">
          <h4>Follow</h4>
          <div className="socials">
            <a href={`https://wa.me/233241353042`} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
            <a href={fb} target="_blank" rel="noreferrer"><FacebookIcon /> Facebook</a>
            <a href={ig} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Jonadab NeoLife</div>
    </footer>
  );
}
