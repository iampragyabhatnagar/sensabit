import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Technology.css'

const Technology = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [textRef, textVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()

  return (
    <section id="technology" className="technology">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="section-title">Sensabit Smart Band</h2>
        </div>
        <div className="technology-content">
          <div
            ref={textRef}
            className={`technology-text ${textVisible ? 'animate-in' : ''}`}
          >
            <p className="technology-description">
              A flexible, multi-signal wearable biosensor worn on the arm or ankle, suitable for defense forces, ICU monitoring, chronic disease management, and remote care.
              <br /><br />
              Innovative technology meets healthcare needs with sensabit's Healthcare. Designed for medical professionals and patients alike, our smart band assists in monitoring and tracking vital signs, ensuring accurate health assessments. With seamless integration into healthcare systems, sensabit Healthcare aims to revolutionize patient care and improve health outcomes for all.
            </p>
          </div>
          <div
            ref={featuresRef}
            className={`technology-features ${featuresVisible ? 'animate-in' : ''}`}
          >
            {/* 1. Sleep Analysis */}
            <div className="feature-card">
              <div className="feature-icon">😴</div>
              <h3>Sleep Analysis</h3>
              <p>Comprehensive sleep staging and quality tracking</p>
            </div>

            {/* 2. Stress Analysis */}
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Stress Analysis</h3>
              <p>Monitor stress levels via HRV tracking</p>
            </div>

            {/* 3. SpO2, HR & HRV */}
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>SpO2, HR & HRV</h3>
              <p>Complete cardiovascular health monitoring</p>
            </div>

            {/* 4. ECG, Respiration */}
            <div className="feature-card">
              <div className="feature-icon">🫁</div>
              <h3>ECG, Respiration</h3>
              <p>Medical-grade heart and lung tracking</p>
            </div>

            {/* 5. Temperature, Snoring */}
            <div className="feature-card">
              <div className="feature-icon">🌡️</div>
              <h3>Temperature, Snoring</h3>
              <p>Environmental and breathing disturbance monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
