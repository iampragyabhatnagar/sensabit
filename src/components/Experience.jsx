import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Experience.css'

const Experience = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [stepsRef, stepsVisible] = useScrollAnimation()

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="section-title">Sensabit experience</h2>
          <p className="section-subtitle">
            The Sensabit is designed for a smooth and hassle-free experience,
            making your journey from purchase to sleep monitoring a breeze!
          </p>
        </div>
        <div
          ref={stepsRef}
          className={`experience-steps ${stepsVisible ? 'animate-in' : ''}`}
        >
          <div className="step">
            <div className="step-number">01</div>
            <h3>PERSONAL USE</h3>
            <p>Personal wellness monitoring at home</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>EASY SETUP</h3>
            <p>Quick and easy setup</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>SMART FEATURES</h3>
            <p>Advanced wellness monitoring</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <h3>SLEEP TRACKING</h3>
            <p>Track your sleep patterns</p>
          </div>
          <div className="step">
            <div className="step-number">05</div>
            <h3>PROFESSIONAL USE</h3>
            <p>Wellness monitoring support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

