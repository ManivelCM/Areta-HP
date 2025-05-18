import React, { useState } from 'react';
import './Header.css';

const saleBanners = [
  'Summer Sale: Up to 60% off',
  'Flash Deal: Extra 20% on Accessories',
  'New Arrivals: Shop the Latest Trends',
];

const Header = () => {
  const [bannerIdx, setBannerIdx] = useState(0);

  const handlePrev = () => {
    setBannerIdx((prev) => (prev - 1 + saleBanners.length) % saleBanners.length);
  };
  const handleNext = () => {
    setBannerIdx((prev) => (prev + 1) % saleBanners.length);
  };

  return (
    <header>
      {/* Top Sale Banner */}
      <div className="top-sale-banner">
        <img
          src={require('../../assets/icons/left.png')}
          alt="Left Arrow"
          className="banner-arrow"
          onClick={handlePrev}
        />
        <span className="sale-text">{saleBanners[bannerIdx]}</span>
        <img
          src={require('../../assets/icons/right.png')}
          alt="Right Arrow"
          className="banner-arrow"
          onClick={handleNext}
        />
      </div>
      {/* Navigation Bar */}
      <nav className="main-nav">
        <div className="nav-left">
          <ul className="nav-menu">
            <li><a href="/men">MEN</a></li>
            <li><a href="/women">WOMEN</a></li>
            <li><a href="/accessories">ACCESSORIES</a></li>
            <li><a href="/bags-luggage">BAGS & LUGGAGE</a></li>
            <li><a href="/sportswear">SPORTSWEAR</a></li>
          </ul>
        </div>
        <div className="nav-center">
          <img src={require('../../assets/images/logo-img.jpg')} alt="Areta360 Logo" className="logo" />
        </div>
        <div className="nav-right">
          <span className="currency">USA (USD $)</span>
          <img src={require('../../assets/icons/like.png')} alt="Like" className="icon icon-32" />
          <img src={require('../../assets/icons/search.png')} alt="Search" className="icon icon-22" />
          <img src={require('../../assets/icons/Cart.png')} alt="Cart" className="icon icon-32" />
          <img src={require('../../assets/icons/profile.png')} alt="Profile" className="icon icon-24" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
