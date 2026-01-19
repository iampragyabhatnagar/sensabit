import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import './About.css'

const About = () => {
  return (
    <>
      <SEO
        title="About Us - Sensabit Team | Founders, Medical Experts & Advisors"
        description="Meet the Sensabit team - Founders Anushka Bainsla and Monica Sharma, Medical Experts Dr. Anuradha, Dr. Mohan, Dr. Bhawana, and our panel of advisors specializing in research, design, and electronics."
        keywords="sensabit team, founders, medical experts, advisors, Anushka Bainsla, Monica Sharma, sleep monitoring experts, health technology team"

      />
      <Navigation scrolled={false} />
      <section id="about" className="about-section">
        <div className="about-background"></div>
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <div className="about-section-content">
            <h2>Founders</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img src="/about_us/Anushka Bainsla.png" alt="Anushka Bainsla" className="team-image" />
                </div>
                <h3>Anushka Bainsla</h3>
                <p>Marketing Expert (Canada & US)</p>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/about_us/Monica Sharma.png"
                    alt="Monica Sharma"
                    className="team-image"
                  />
                </div>
                <h3>Monica Sharma</h3>
                <p>Business Expert, Health Enthusiast</p>
              </div>
            </div>
          </div>

          <div className="about-section-content">
            <h2>Medical Experts</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img src="/about_us/Dr. Mohan.png" alt="Dr. Mohan" className="team-image" />
                </div>
                <h3>Dr. Mohan</h3>
                <p>General Surgeon, FICS</p>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/about_us/Dr. Bhawana.png"
                    alt="Dr. Bhawana"
                    className="team-image"
                  />
                </div>
                <h3>Dr. Bhawana</h3>
                <p>MBBS, Cancer Hospital</p>
              </div>
            </div>
          </div>

          <div className="about-section-content">
            <h2>Panel of Advisors</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/about_us/Shikha.png"
                    alt="Shikha"
                    className="team-image"
                  />
                </div>
                <h3>Shikha</h3>
                <p>Research Implementation</p>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/about_us/Rhea.png"
                    alt="Rhea"
                    className="team-image"
                  />
                </div>
                <h3>Rhea</h3>
                <p>Research Design</p>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/about_us/Eesha.png"
                    alt="Eesha"
                    className="team-image"
                  />
                </div>
                <h3>Eesha</h3>
                <p>User Experience Design</p>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/about_us/Rishi.png"
                    alt="Rishi"
                    className="team-image"
                  />
                </div>
                <h3>Rishi</h3>
                <p>Electronics Design</p>
              </div>
            </div>
          </div>
        </div >

      </section >
      <Footer />
    </>
  )
}

export default About

