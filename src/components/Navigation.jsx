import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'About Us', href: '/about' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="/sensabit_logo.png"
              alt="Sensabit Logo - Smart Sleep Monitoring Technology"
              className="logo-image"
            />
          </Link>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.href.startsWith('/') ? (
                <Link to={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="nav-right">

          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

