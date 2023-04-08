import React from "react";
import { themeContext } from "../../Context";
import { useContext } from 'react'
import { motion } from "framer-motion"

import "./Intro.css";

import FloatingDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../assets/img/github.png"
import LinkedIn from "../../assets/img/linkedin.png"
import Instagram from "../../assets/img/instagram.png"
import Vector1 from "../../assets/img/Vector1.png"
import Vector2 from "../../assets/img/Vector2.png"
import boy from "../../assets/img/boy.png"
import Thumbup from "../../assets/img/thumbup.png"
import Crown from "../../assets/img/crown.png"
import Glassesimoji from "../../assets/img/glassesimoji.png"

const Intro = () => {
  const transition = {duration: 2, type: "spring"}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <span>Hakim Asrori</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, error!
          </span>
        </div>

        <button className="button i-button">Hire Me</button>

        <div className="i-icons">
          <a href=""> 
            <img src={Github} alt="" />
          </a>
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img initial={{ left: "-36%" }} whileInView={{ left: "-24%" }} transition={transition} src={Glassesimoji} alt="" />
          <motion.div className="floating-div" initial={{ top: "-4%", left: "74%" }} whileInView={{ left: "68%" }} transition={transition} style={{ top: '-4%', left: '68%' }}>
            <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
          </motion.div>
          <motion.div className="floating-div" initial={{ left: "9rem", top: "18rem" }} whileInView={{ left: "0rem" }} transition={transition} style={{ top: '18rem', left: '0rem' }}>
            <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
          </motion.div>

          <div className="blur" style={{ background: "rgba(238 210 255)" }}></div>
          <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
      </div>
    </div>
  );
};

export default Intro;
