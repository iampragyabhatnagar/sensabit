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
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">We'd love to hear from you</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info-section">
              <div className="info-card">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
                <h3>General Inquiries</h3>
                <p>For questions about Sensabit features and availability</p>
                <a href="mailto:info@sensabit.com">info@sensabit.com</a>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                </div>
                <h3>Support</h3>
                <p>Need help with your Sensabit device?</p>
                <a href="mailto:support@sensabit.com">support@sensabit.com</a>
              </div>

              <div className="info-card">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                </div>
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
