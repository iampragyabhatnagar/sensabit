import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Footer.css'

const Footer = () => {
  const [contentRef, contentVisible] = useScrollAnimation()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div
          ref={contentRef}
          className={`footer-content ${contentVisible ? 'animate-in' : ''}`}
        >
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="footer-logo-sensabit">Sensabit</span>
            </h3>
            <p className="footer-description">
              Sensabit uses advanced sensor technology to monitor your sleep and health metrics with clinical precision.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/sensabit" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/sensabit" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/sensabit" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#specifications">Specifications</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/cookie">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ marginBottom: '0.5rem' }}>Sensabit is owned by SLIMiot Technologies Pvt Ltd</p>
          <p style={{ marginBottom: '0.5rem' }}>&copy; 2026 all rights reserved Terms | Privacy</p>
          <p style={{ marginBottom: '0.5rem' }}>Registered office: Faridabad, India</p>
          <p>+91-9310035724 plawat[at]slimiot.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
