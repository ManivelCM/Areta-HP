import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <select className="language-select">
          <option>English (united States)</option>
        </select>
      </div>
      <div className="footer-bottom">
        <nav className="footer-links">
          <a href="#">About</a>
          <a href="#">Help Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">careers</a>
          <a href="#">@2025aretadesign</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
