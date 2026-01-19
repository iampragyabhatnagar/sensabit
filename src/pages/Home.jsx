import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Technology from '../components/Technology'
import Experience from '../components/Experience'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import ProductIntro from '../components/ProductIntro'

function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  return (
    <div className="App">
      <Loading isLoading={isLoading} />
      <Navigation scrolled={scrolled} />
      <Hero onImageLoad={handleImageLoad} />

      <div className="content-wrapper">
        <Technology />
        <Experience />
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default Home

