import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "./Portfolio.css"
import "swiper/css"

import Skalapehnangka from "../../assets/img/web-skalpehnangka.png"
import RTQ from "../../assets/img/web-rumah-tahfidz-quran.png"
import Silihin from "../../assets/img/web-silihin.png"
import SupportSystem from "../../assets/img/web-support-system.png"
import Ekl from "../../assets/img/web-eklontong.png"
import Bestive from "../../assets/img/web-bestive.png"
import Acteeve from "../../assets/img/web-acteeve.png"

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
          <img src={Acteeve} alt="" height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bestive} alt="" height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ekl} alt="" height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Skalapehnangka} alt="" height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RTQ} alt="" height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Silihin} alt="" height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SupportSystem} alt="" height={200} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
