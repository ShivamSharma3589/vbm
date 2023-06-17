/**
 * COMPONENT FOR BANNER CAROUSEL
 * @author: shivayasharma1149@gmail.com
 * @date: 01 Apr 2023
 */

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./AppBannerCarousel.scss";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const AppBannerCarousel = ({
  data, // Contains the array with the image list to show them on banner
}) => {
  return (
    <div className="app-carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id} className="app-carousel-slide">
              <Link to="/">
                <LazyLoadImage
                  className="app-carousel-image"
                  src={item.src}
                  alt={item.title}
                  title={item.title}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AppBannerCarousel;
