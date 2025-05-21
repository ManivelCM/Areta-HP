import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Homepage.css';

const heroSlides = [
    { type: 'video', src: require('../assets/videos/video.mp4') },
    { type: 'image', src: require('../assets/images/slide-img.png') },
    { type: 'image', src: require('../assets/images/slide-img.png') },
    { type: 'image', src: require('../assets/images/slide-img.png') },
];

const featuredCategories = [
  {
    img: require('../assets/images/women-img.png'),
    label: 'NEW SKIRT',
    sublabel: 'SHOP NEW COLLECTION',
    alt: 'New Skirt',
  },
  {
    img: require('../assets/images/men-img.png'),
    label: 'BLAZERS',
    sublabel: 'SHOP NEW COLLECTION',
    alt: 'Blazers',
  },
  // Add more categories here if needed
];

const bestsellerProducts = [
  {
    img: require('../assets/images/option1.png'),
    brand: 'NIFE',
    title: 'BLACK SKIRT WITH HIGH WAIST',
    price: '$400',
  },
  {
    img: require('../assets/images/option2.png'),
    brand: 'NIFE',
    title: 'COBALT TROUSERS WITH WIDE-DOWN LEG',
    price: '$400',
  },
  {
    img: require('../assets/images/option3.png'),
    brand: 'NIFE',
    title: 'FLARED KNEE-LENGTH SKIRT - RED & BLACK',
    price: '$400',
  },
  {
    img: require('../assets/images/option4.png'),
    brand: 'NIFE',
    title: 'COBALT TROUSERS WITH WIDE-DOWN LEG',
    price: '$400',
  },
  
  // Add more products as needed

  {
    img: require('../assets/images/option1.png'),
    brand: 'NIFE',
    title: 'BLACK SKIRT WITH HIGH WAIST',
    price: '$400',
  },
  {
    img: require('../assets/images/option2.png'),
    brand: 'NIFE',
    title: 'COBALT TROUSERS WITH WIDE-DOWN LEG',
    price: '$400',
  },
  {
    img: require('../assets/images/option3.png'),
    brand: 'NIFE',
    title: 'FLARED KNEE-LENGTH SKIRT - RED & BLACK',
    price: '$400',
  },
  {
    img: require('../assets/images/option4.png'),
    brand: 'NIFE',
    title: 'COBALT TROUSERS WITH WIDE-DOWN LEG',
    price: '$400',
  },
];

const Homepage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);
    const navigate = useNavigate();
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [bestsellerIndex, setBestsellerIndex] = useState(0);
    const visibleCount = 4;
    const maxBestsellerIndex = bestsellerProducts.length - visibleCount;

    useEffect(() => {
        // Only set interval for image slides
        if (heroSlides[currentSlide].type === 'image') {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 3500);
            return () => clearInterval(intervalRef.current);
        } else {
            // If it's a video, clear any interval
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, [currentSlide]);

    // Clean up on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleVideoEnded = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const leftArrowBg = bestsellerIndex === 0 ? 'rgba(181, 181, 181, 1)' : 'rgba(33, 39, 45, 1)';
    const rightArrowBg = bestsellerIndex === maxBestsellerIndex ? 'rgba(181, 181, 181, 1)' : 'rgba(33, 39, 45, 1)';

    return (
        <div className="homepage">
            <Header />
            {/* Hero Section with Image/Video Slider */}
            <section className="hero-section">
                {heroSlides[currentSlide].type === 'video' ? (
                    <video
                        className="hero-image"
                        src={heroSlides[currentSlide].src}
                        autoPlay
                        loop={false}
                        muted
                        onEnded={handleVideoEnded}
                        onClick={() => navigate('/women')}
                        style={{ cursor: 'pointer' }}
                    />
                ) : (
                    <img
                        className="hero-image"
                        src={heroSlides[currentSlide].src}
                        alt={`Hero Slide ${currentSlide + 1}`}
                    />
                )}
                <div className="hero-overlay">
                    <button className="discover-btn">
                        DISCOVER THE COLLECTION
                        <img src={require('../assets/icons/down.png')} alt="Down Arrow" className="discover-arrow" />
                    </button>
                </div>
                <div className="hero-dots">
                    {heroSlides.map((_, idx) => (
                        <span key={idx} className={`dot${currentSlide === idx ? ' active' : ''}`}></span>
                    ))}
                </div>
            </section>
            {/* Featured Categories */}
            <section className="featured-categories">
                <div className="category left">
                    <img src={require('../assets/images/women-img.png')} alt="New Skirt" />
                    <div className="category-label">NEW SKIRT<br /><span>SHOP NEW COLLECTION</span></div>
                </div>
                <div className="category right">
                    <img src={require('../assets/images/men-img.png')} alt="Blazers" />
                    <div className="category-label">BLAZERS<br /><span>SHOP NEW COLLECTION</span></div>
                </div>
            </section>
            {/* Bestseller Section */}
            <section className="bestseller-section">
                <h3>OUR BESTSELLER</h3>
                <div className="bestseller-carousel-wrapper">
                    <div className="bestseller-carousel">
                        <button
                            className="bestseller-arrow left"
                            onClick={() => setBestsellerIndex((prev) => Math.max(prev - 1, 0))}
                            disabled={bestsellerIndex === 0}
                            style={{ background: leftArrowBg }}
                            aria-label="Previous Products"
                        >
                            <img src={require('../assets/icons/leftarrow.png')} alt="Left Arrow" />
                        </button>
                        <div className="bestseller-list">
                            {bestsellerProducts.slice(bestsellerIndex, bestsellerIndex + visibleCount).map((product, idx) => (
                                <div className="product-card" key={idx}>
                                    <div className="product-image-box">
                                        <img src={product.img} alt={product.title} />
                                    </div>
                                    <div className="product-info">
                                        <div className="product-brand">{product.brand}</div>
                                        <div className="product-title">{product.title}</div>
                                        <div className="product-price">{product.price}</div>
                                        <div className="product-selector"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="bestseller-arrow right"
                            onClick={() => setBestsellerIndex((prev) => Math.min(prev + 1, maxBestsellerIndex))}
                            disabled={bestsellerIndex === maxBestsellerIndex}
                            style={{ background: rightArrowBg }}
                            aria-label="Next Products"
                        >
                            <img src={require('../assets/icons/rightarrow.png')} alt="Right Arrow" />
                        </button>
                    </div>
                </div>
                <div className="view-all-row">
                    <a href="/bestsellers" className="view-all">VIEW ALL</a>
                </div>
            </section>
            {/* Spring Look Section */}
            <section className="spring-look-section">
                <div className="spring-look-header">
                    <div className="spring-look-subtitle">Areta Collections</div>
                    <h4 className="spring-look-title">NEW SPRING LOOK</h4>
                </div>
                <div className="spring-look-video-wrapper">
                    <video
                        className="spring-look-video"
                        src={require('../assets/videos/video2.mp4')}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="spring-look-products">
                        <div className="spring-product-card">
                            <img src={require('../assets/images/option1.png')} alt="Blue Fitted Dress" />
                            <div className="spring-product-info">
                                <div style={{ fontSize: '0.8rem', color: '#888' }}>NIFE</div>
                                <div>BLUE FITTED DRESS</div>
                                <div>$60.00</div>
                            </div>
                            <div className="spring-product-icons">
                                <button className="icon-btn">
                                    <img src={require('../assets/icons/bag.png')} alt="Bag" />
                                </button>
                                <button className="icon-btn">
                                    <img src={require('../assets/icons/next.png')} alt="Arrow" />
                                </button>
                            </div>
                        </div>
                        <div className="spring-product-card">
                            <img src={require('../assets/images/option2.png')} alt="Blue Fitted Dress" />
                            <div className="spring-product-info">
                                <div style={{ fontSize: '0.8rem', color: '#888' }}>NIFE</div>
                                <div>BLUE FITTED DRESS</div>
                                <div>$60.00</div>
                            </div>
                            <div className="spring-product-icons">
                                <button className="icon-btn">
                                    <img src={require('../assets/icons/bag.png')} alt="Bag" />
                                </button>
                                <button className="icon-btn">
                                    <img src={require('../assets/icons/next.png')} alt="Arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Homepage;