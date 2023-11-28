import React from 'react'

// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Swiper.css';

import { Swiper, SwiperSlide, } from 'swiper/react';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const SwiperTiktok = () => {
  const publicURL = process.env.PUBLIC_URL;
  const videos = ([
    {   
        id: 1,
        title: 'Pedir aumento imagen',
        location: '/video/tiktok1.mp4' 
    },
    {
        id: 2,
        title: 'Pedir vacaciones imagen',
        location: '/video/tiktok1.mp4' 
    },
    {
        id: 3,
        title: 'Home Office imagen',
        location: '/video/tiktok1.mp4' 
    },
    {
        id: 4,
        title: 'Work slide 1',
        location: '/video/tiktok1.mp4' 
    },
    {
      id: 5,
      title: 'Work slide 1',
      location: '/video/tiktok1.mp4' 
  }
]);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center ">
        <img src={publicURL + '/images/icons/left.png'} 
          id='swiper-tiktok-iconleft'
          alt="left-icon" 
          className='swiper--iconleft z-1'  />
        <Swiper
        id='swiper-tiktoks'
        className='swiper p-0 my-4 w-75'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={3}
        navigation={{
          prevEl: '#swiper-tiktok-iconleft',
          nextEl: '#swiper-tiktok-iconright',
        }}
        loop={true}
        centeredSlidesBounds={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 60,
          depth: 300,
          modifier: 1,
          slideShadows: false,
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [-56, 0, 0],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: [-56, 0, 0],
          },
        }}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 90
          }
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {
            videos.map((video, index) => (
                <SwiperSlide key={index} className='h-100'>
                    <video className="rounded-5" controls="controls" muted="muted" loop="loop" autoPlay="autoplay">
                      <source src={publicURL + video.location} type="video/mp4" />
                    </video>
                </SwiperSlide>
            ))
        }
      </Swiper>
        <img src={publicURL + '/images/icons/right.png'} 
        alt="right-icon" 
        id='swiper-tiktok-iconright'
        className='swiper--iconright z-1'/>
      </div>
       
    </div>
  )
}

export default SwiperTiktok
