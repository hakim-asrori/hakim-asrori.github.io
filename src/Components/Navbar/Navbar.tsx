import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css"
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return <div className="n-wrapper">
    <div className="n-left">
      <div className="n-name">Tigin</div>
      <Toggle />
    </div>
    <div className="n-right">
      <div className="n-list">
        <ul>
          <li><Link spy={true} to="home" smooth={true} activeClass="activeClass" >Home</Link></li>
          <li><Link spy={true} to="services" smooth={true} >Services</Link></li>
          <li><Link spy={true} to="experience" smooth={true} >Experience</Link></li>
          <li><Link spy={true} to="portfolio" smooth={true} >Portfolio</Link></li>
          {/* <li><Link spy={true} to="testimonial" smooth={true} >Testimonials</Link></li> */}
        </ul>
      </div>
      <button className="button n-button">
        Contact Me
      </button>
    </div>
  </div>;
};


export default Navbar;
