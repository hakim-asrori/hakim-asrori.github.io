import React from 'react'
import { motion } from "framer-motion";

import './Works.css'

import Arahan from "../../assets/img/arahan.png"
import RTQ from "../../assets/img/rtq.png"
import Teras from "../../assets/img/teras.png"
import Skalapehnangka from "../../assets/img/skalapehnangka.png"
import Himatif from "../../assets/img/himatif.png"


const Works = () => {
  function onRedirect() {
    window.location.href = '/src/assets/files/tigin.pdf'
  }
  
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        
        <span>Brands & Clients</span>
        
        <span>
        </span>
        
        <button className="button s-button" onClick={onRedirect}>Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className="w-right">
        <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3.5, type: 'spring' }} className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Arahan} alt="" height={150} />
          </div>
          <div className="w-secCircle">
            <img src={RTQ} alt="" height={80} />
          </div>
          <div className="w-secCircle">
            <img src={Teras} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Skalapehnangka} alt="" height={150} />
          </div>
          <div className="w-secCircle">
            <img src={Himatif} alt="" height={150} />
          </div>
        </motion.div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
