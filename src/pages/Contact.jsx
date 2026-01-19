import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Sensabit - Get in Touch"
        description="Contact the Sensabit team for inquiries, support, or partnership opportunities."
      />
      <Navigation scrolled={false} />
      <section id="contact" className="contact-section">
        <div className="contact-background"></div>
        <div className="contact-container">

          <div className="contact-hero">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you</p>
          </div>

          <div className="contact-content">
            <div className="contact-info-section">
              <div className="info-card">
                <h3>General Inquiries</h3>
                <p>For questions about Sensabit features and availability</p>
                <a href="mailto:info@sensabit.com">info@sensabit.com</a>
              </div>

              <div className="info-card">
                <h3>Support</h3>
                <p>Need help with your Sensabit device?</p>
                <a href="mailto:support@sensabit.com">support@sensabit.com</a>
              </div>

              <div className="info-card">
                <h3>Sales</h3>
                <p>Interested in bulk orders or hospital partnerships?</p>
                <a href="mailto:sales@sensabit.com">sales@sensabit.com</a>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Partnerships</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
