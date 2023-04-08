import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import "./Portfolio.css"
import "swiper/css"

import Sidebar from "../../assets/img/sidebar.png"
import Ecommerce from "../../assets/img/ecommerce.png"
import HOC from "../../assets/img/hoc.png"
import MusicApp from "../../assets/img/musicapp.png"

const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper 
        spaceBetween={80} 
        slidesPerView={1} 
        grabCursor={true} 
        breakpoints={{ 
          480: {
            spaceBetween: 30,
            slidesPerView: 3
          }
        }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
