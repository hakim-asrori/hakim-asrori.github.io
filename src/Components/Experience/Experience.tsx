import React from 'react'

import './Experience.css'

const Experience = () => {
  const darkMode = JSON.parse(localStorage.getItem('darkMode') || "true");

  return (
    <div className="experiance" id='experience'>
      <div className="achievement">
        <div className="circle">8+</div>
        <span>years </span>
        <span>Experiance</span>
      </div>
      <div className="achievement">
        <div className="circle">8+</div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">8+</div>
        <span>companies </span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience
