import React, { useState } from 'react'

import './Hero.css'

const Hero = ({ onImageLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    'Sleep Analysis',
    'Stress Analysis',
    'SpO2, HR & HRV',
    'ECG, Respiration',
    'Temperature, Snoring'
  ]

  // Track Scroll for Parallax
  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-cycle (keeps the beat) unless hovered
  React.useEffect(() => {
    if (isHovered) return; // Pause on hover

    const cycleInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(cycleInterval)
  }, [isHovered])

  const handleImageLoad = () => {
    setImageLoaded(true)
    if (onImageLoad) {
      onImageLoad()
    }
  }

  // Slot Machine Text Helper
  const renderRollingText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{
          display: 'inline-block',
          animationDelay: `${index * 0.05}s` // Staggered delay for roll effect
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  // Carousel Data
  const topText = ["ADVANCED", "PRECISION", "SMART", "ADVANCED"];
  const bottomText = ["TRACKING", "MONITORING", "INSIGHTS", "TRACKING"];

  // Carousel Helper Component
  const VerticalCarousel = ({ items, className, delay = "0s", direction = "normal" }) => (
    <div className={`text-carousel-container ${className}`}>
      <div
        className="text-carousel-track"
        style={{ animationDelay: delay, animationDirection: direction }}
      >
        {items.map((text, i) => (
          <div key={i} className="text-carousel-item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="home" className="hero">
      <div className="hero-image-container" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <img
          src="/sensabit_hero_new.png"
          alt="Sensabit Smart Sleep Monitoring Device - Table Background"
          className="hero-image"
          onLoad={handleImageLoad}
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
          loading="eager"
        />
      </div>

      <div className="hero-tagline-container" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <h3 className="hero-pre-tagline">Advanced Health Tracking</h3>

        {/* Fixed Rectangle Box (Metrics List) */}
        <div
          className="hero-metrics-list"
          onMouseLeave={() => setIsHovered(false)}
        >
          {features.map((feature, index) => (
            <p
              key={index}
              className={index === activeIndex ? 'active' : 'inactive'}
              onMouseEnter={() => {
                setActiveIndex(index);
                setIsHovered(true);
              }}
            >
              {feature}
            </p>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero

