import React from 'react'
import './Loading.css'

const Loading = ({ isLoading }) => {
  return (
    <div className={`loading-overlay ${!isLoading ? 'hidden' : ''}`}>
      <div className="loader"></div>
      <div className="loading-text">
        <span>SENSABIT</span>
      </div>
    </div>
  )
}

export default Loading

