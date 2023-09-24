import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import "./Portfolio.css"
import "swiper/css"

import Skalapehnangka from "../../assets/img/web-skalpehnangka.png"
import RTQ from "../../assets/img/web-rumah-tahfidz-quran.png"
import Silihin from "../../assets/img/web-silihin.png"
import SupportSystem from "../../assets/img/web-support-system.png"

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
          <img src={Skalapehnangka} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RTQ} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Silihin} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SupportSystem} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
