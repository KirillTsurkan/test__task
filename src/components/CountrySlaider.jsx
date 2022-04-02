import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../blocks/slider/slider.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
function Slider() {
  const array = [
    "Сент Винсент и Гренадины",
    "Португалия",
    "Саудовская Аравия",
    "Испания",
    "Франция",
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class= ${className}> ${array[index]} </span>`;
    },
  };

  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {array.map((item) => (
          <SwiperSlide>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
