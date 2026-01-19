import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import About from './pages/About'
import Contact from './pages/Contact'
import SleepHealth from './pages/SleepHealth'
import HeartHealth from './pages/HeartHealth'
import MindBody from './pages/MindBody'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sleep-health" element={<SleepHealth />} />
        <Route path="/heart-health" element={<HeartHealth />} />
        <Route path="/mind-body" element={<MindBody />} />
        {/* IMPORTANT: block admin path */}
        <Route path="/admin/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App

