import React, { useRef, useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Video.css'

const Video = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoRefAnim, videoVisible] = useScrollAnimation()

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
      }
    }
  }, [])

  useEffect(() => {
    if (videoVisible && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err)
      })
    }
  }, [videoVisible])

  return (
    <section id="video" className="video-section">
      <div 
        ref={videoRefAnim}
        className={`video-container ${videoVisible ? 'animate-in' : ''}`}
      >
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src="/vdo_3.mp4"
            className="video-player"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className={`video-overlay ${isPlaying ? 'playing' : ''}`} onClick={handlePlay}>
            {!isPlaying && (
              <div className="play-button">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="rgba(0, 212, 255, 0.8)" />
                  <path d="M32 25L32 55L55 40L32 25Z" fill="#000" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video

