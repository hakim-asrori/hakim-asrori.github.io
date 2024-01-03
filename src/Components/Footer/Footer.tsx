import React from 'react'
import Instagram from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github"

import "./Footer.css"

import Wave from "../../assets/img/wave.png"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />

      <div className="f-content">
        <span><a href="mailto:kevindarsono043@gmail.com">kevindarsono043@gmail.com</a></span>
        <div className="f-icons">
          <a href="https://www.instagram.com/sawalatigin" target="_blank">
            <Instagram color="white" size="3rem" />
          </a>
          {/* <a href="https://www.linkedin.com/in/hakim-asrori-2b42aa217/" target="_blank">
            <LinkedIn color="white" size="3rem" />
          </a> */}
          <a href="https://github.com/KevinDarsono" target="_blank">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
