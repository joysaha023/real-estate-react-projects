import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='slide slide1'>Slide 1</div></SwiperSlide>
        <SwiperSlide><div className='slide slide2'>Slide 2</div></SwiperSlide>
        <SwiperSlide><div className='slide slide3'>Slide 3</div></SwiperSlide>
        <SwiperSlide><div className='slide slide4'>Slide 4</div></SwiperSlide>
      </Swiper>
    </>
  );
}
