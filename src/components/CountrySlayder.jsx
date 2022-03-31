import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
function Slider() {
  return (
    <Swiper
      tag="section"
      wrapperTag="ul"
      spaceBetween={50}
      slidesPerView={1}
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide tag="li">Сент Винсент и Гренадины</SwiperSlide>
      <SwiperSlide tag="li">Португалия</SwiperSlide>
      <SwiperSlide tag="li">Саудовская Аравия</SwiperSlide>
      <SwiperSlide tag="li">Испания</SwiperSlide>
      <SwiperSlide tag="li">Франция</SwiperSlide>
    </Swiper>
  );
}

export default Slider;
