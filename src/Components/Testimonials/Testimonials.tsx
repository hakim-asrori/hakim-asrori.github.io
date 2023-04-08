import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

import "./Testimonials.css"
import "swiper/css"
import "swiper/css/pagination"

import profilePic1 from "../../assets/img/profile1.jpg"
import profilePic2 from "../../assets/img/profile2.jpg"
import profilePic3 from "../../assets/img/profile3.jpg"
import profilePic4 from "../../assets/img/profile4.jpg"
import profilePic5 from "../../assets/img/profile5.jpg"
import profilePic6 from "../../assets/img/profile6.jpg"

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi architecto facilis, itaque sapiente maiores repudiandae vero excepturi vitae, laborum recusandae doloribus ipsam tenetur repellendus. Suscipit!"
    },
    {
      img: profilePic2,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi architecto facilis, itaque sapiente maiores repudiandae vero excepturi vitae, laborum recusandae doloribus ipsam tenetur repellendus. Suscipit!"
    },
    {
      img: profilePic3,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi architecto facilis, itaque sapiente maiores repudiandae vero excepturi vitae, laborum recusandae doloribus ipsam tenetur repellendus. Suscipit!"
    },
    {
      img: profilePic4,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi architecto facilis, itaque sapiente maiores repudiandae vero excepturi vitae, laborum recusandae doloribus ipsam tenetur repellendus. Suscipit!"
    },
    {
      img: profilePic5,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi architecto facilis, itaque sapiente maiores repudiandae vero excepturi vitae, laborum recusandae doloribus ipsam tenetur repellendus. Suscipit!"
    },
    {
      img: profilePic6,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi architecto facilis, itaque sapiente maiores repudiandae vero excepturi vitae, laborum recusandae doloribus ipsam tenetur repellendus. Suscipit!"
    },
  ]

  return (
    <div className="t-wrapper" id='testimonial'>
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>

        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable:true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials
