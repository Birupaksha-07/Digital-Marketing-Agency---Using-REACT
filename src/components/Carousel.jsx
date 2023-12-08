
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


function Carousel() {
  return (
    <>
      <Swiper
        cssMode={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiperImg" src="./assets/images/carousel image1.jpg" alt="" />

          <div className="hero-banner-text">
            <h6>Digital Marketting Agency</h6>
            <h1>We are available for marketing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              doloremque vero ea quibusdam temporibus Lorem
            </p>
            <div><a href="*" className="hero-btn">Get Started</a></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="swiperImg" src="./assets/images/carousel image 2.jpg" alt="" />
          <div className="hero-banner-text">
            <h6>Digital Marketting Agency</h6>
            <h1>Wellcome To B-Agency</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              doloremque vero ea quibusdam temporibus Lorem
            </p>
            <div><a href="*" className="hero-btn">Get Started</a></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="swiperImg" src="./assets/images/carousel image 3.jpg" alt="" />

          <div className="hero-banner-text">
            <h6>Digital Marketting Agency</h6>
            <h1>We are available for marketing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              doloremque vero ea quibusdam temporibus Lorem
            </p>
            <div><a href="*" className="hero-btn">Get Started</a></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="swiperImg" src="./assets/images/carousel image 4.jpg" alt="" />
          <div className="hero-banner-text">
            <h6>Digital Marketting Agency</h6>
            <h1>Wellcome To our Agency</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              doloremque vero ea quibusdam temporibus Lorem
            </p>
            <div><a href="*" className="hero-btn">Get Started</a></div>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  )
}

export default Carousel;