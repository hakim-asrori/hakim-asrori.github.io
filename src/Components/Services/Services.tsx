import React from 'react'
import { motion } from "framer-motion";

import "./Services.css"

import HeartEmoji from "../../assets/img/heartemoji.png"
import Glasses from "../../assets/img/glasses.png"
import Humble from "../../assets/img/humble.png"
import Card from '../Card/Card'

const Services = () => {
  const transition = {duration: 2, type: "spring"}

  return (
    <div className='services' id='services'>
      <div className="awesome">
        <span>My Awesome</span>
        
        <span>Services</span>
        
        <span>
          I am experienced in utilizing various tools and technologies <br /> to optimize web application performance and ensuring high-quality code.
        </span>
        
        <button className="button s-button">Download CV</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <motion.div whileInView={{ left: "14rem" }} initial={{ left: "25rem" }} transition={transition} style={{ left: "14rem" }}>
          <Card emoji={HeartEmoji} heading={"Frontend Developer"} detail={"HTML, CSS, Javascript, Vue JS, and React JS"} />
        </motion.div>
        
        <motion.div initial={{ left: "-36%" }} whileInView={{ left: "-4rem" }} transition={transition} style={{ left: "-4rem", top: "12rem" }}>
          <Card emoji={Glasses} heading={"Backend Developer"} detail={"JavaScript, PHP, Laravel, CodeIgniter, and MySQL "} />
        </motion.div>
        
        <motion.div whileInView={{ left: "12rem" }} initial={{ left: "25rem" }} transition={transition} style={{ left: "12rem", top: "19rem" }}>
          <Card emoji={Humble} heading={"Others"} detail={"Git, Figma, Arduino, JQuery, Express JS, and Flutter"} />
        </motion.div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services
