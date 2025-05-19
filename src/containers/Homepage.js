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

const Homepage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);
    const navigate = useNavigate();

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
                <div className="bestseller-carousel">
                   
                    <div className="bestseller-list">
                        <div className="product-card">
                            <div className="product-image-box">
                                <img src={require('../assets/images/option1.png')} alt="Black Skirt" />
                            </div>
                            <div className="product-info">
                                <div className="product-brand">NIFE</div>
                                <div className="product-title">BLACK SKIRT WITH HIGH WAIST</div>
                                <div className="product-price">$400</div>
                                <div className="product-selector"></div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image-box">
                                <img src={require('../assets/images/option2.png')} alt="Cobalt Trousers" />
                            </div>
                            <div className="product-info">
                                <div className="product-brand">NIFE</div>
                                <div className="product-title">COBALT TROUSERS WITH WIDE-DOWN LEG</div>
                                <div className="product-price">$400</div>
                                <div className="product-selector"></div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image-box">
                                <img src={require('../assets/images/option3.png')} alt="Flared Skirt" />
                            </div>
                            <div className="product-info">
                                <div className="product-brand">NIFE</div>
                                <div className="product-title">FLARED KNEE-LENGTH SKIRT - RED & BLACK</div>
                                <div className="product-price">$400</div>
                                <div className="product-selector"></div>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image-box">
                                <img src={require('../assets/images/option4.png')} alt="Cobalt Trousers" />
                            </div>
                            <div className="product-info">
                                <div className="product-brand">NIFE</div>
                                <div className="product-title">COBALT TROUSERS WITH WIDE-DOWN LEG</div>
                                <div className="product-price">$400</div>
                                <div className="product-selector"></div>
                            </div>
                        </div>
                    </div>
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
                        </div>
                        <div className="spring-product-card">
                            <img src={require('../assets/images/option2.png')} alt="Blue Fitted Dress" />
                            <div className="spring-product-info">
                                <div style={{ fontSize: '0.8rem', color: '#888' }}>NIFE</div>
                                <div>BLUE FITTED DRESS</div>
                                <div>$60.00</div>
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