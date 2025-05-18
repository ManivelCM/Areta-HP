import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Womenpage.css';
import women1 from '../assets/images/list1.png';
import women2 from '../assets/images/list2.png';
import women3 from '../assets/images/list3.png';
import women4 from '../assets/images/list4.png';
import women5 from '../assets/images/list5.png';
import women6 from '../assets/images/list6.png';
import women7 from '../assets/images/list7.png';
import women8 from '../assets/images/list8.png';
import women9 from '../assets/images/list9.png';
import downArrow from '../assets/icons/down-arrow.png';

const filtersData = [
  {
    title: 'Availability',
    options: [
      { label: 'In Stock (8)', type: 'checkbox' },
      { label: 'Out of stock (0)', type: 'checkbox' },
    ],
  },
  {
    title: 'Price',
    options: [],
  },
  {
    title: 'Color',
    options: [],
  },
  {
    title: 'Product type',
    options: [],
  },
  {
    title: 'Occasion (1)',
    options: [],
  },
  {
    title: 'Model',
    options: [],
  },
  {
    title: 'Rating',
    options: [],
  },
  {
    title: '$29.99',
    options: [],
  },
  {
    title: 'Red',
    options: [],
  },
  {
    title: 'T-Shirt',
    options: [],
  },
  {
    title: 'Price',
    options: [],
  },
  {
    title: 'Color',
    options: [],
  },
];

const products = [
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women1 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women2 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women3 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women4 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women5 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women6 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women7 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women8 },
  { brand: 'NIFE', title: 'BLACK SKIRT WITH HIGH WAIST', price: '$400', img: women9 },
];

const Womenpage = () => {
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (title) => {
    setOpenFilters((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      <Header />
      <div className="women-page">
        <div className="breadcrumb">Home / Women</div>
        <div className="women-header">
          <div className="women-title">Women</div>
          <div className="women-header-divider"></div>
          <div className="women-subtitle">Explore our range of exciting accessories</div>
        </div>
        <div className="women-header-hr"></div>
        <div className="women-main">
          <aside className="women-sidebar">
            <div className="filter-label">Filter</div>
            <div className="product-count">8 Product</div>
            <div className="filters">
              {filtersData.map((filter, idx) => (
                <div className="filter-group" key={filter.title}>
                  <div className="filter-title" onClick={() => toggleFilter(filter.title)}>
                    {filter.title}
                    <span className="filter-arrow">
                      <img src={downArrow} alt="Down Arrow" style={{ width: 18, height: 18, transform: openFilters[filter.title] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </span>
                  </div>
                  {openFilters[filter.title] && filter.options.length > 0 && (
                    <div className="filter-options">
                      {filter.options.map((opt, i) => (
                        <label key={i} className="filter-option">
                          <input type={opt.type} /> {opt.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>
          <section className="women-content">
            <div className="women-sort-row">
              <div></div>
              <div className="sort-by">
                <span>Sort by:</span>
                <button className="sort-dropdown">Alphabetically, A-Z <span className="sort-arrow">▼</span></button>
              </div>
            </div>
            <div className="product-grid">
              {products.map((product, idx) => (
                <div className="product-card" key={idx}>
                  <img src={product.img} alt={product.title} className="product-img" />
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-title">{product.title}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-dot"></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Womenpage;
