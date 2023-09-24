import React from 'react'

import './Experience.css'
import moment from 'moment';

const Experience = () => {
  const darkMode = JSON.parse(localStorage.getItem('darkMode') || "true");

  let experienceYear = moment("20181201", "YYYYMMDD").fromNow()
  experienceYear = experienceYear.replace(/\s+years\s+ago/, "")

  return (
    <div className="experiance" id='experience'>
      <div className="achievement">
        <div className="circle">{experienceYear}+</div>
        <span>years </span>
        <span>Experiance</span>
      </div>
      <div className="achievement">
        <div className="circle">19+</div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">1</div>
        <span>companies </span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience
