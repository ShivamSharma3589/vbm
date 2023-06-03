/**
 * THIS IS THE CARDS CAROUSEL COMPONENT FOR SLIDER CARDS
 * @author: shivayasharma1149@gmail.com
 * @date : 04 June 2023
 */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product-card/ProductCard";
import { testCategory } from "../../../data"; 

const CardsCarousel = () => {
  return (
    <div className="cards-carousel">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2.2,
          },
          565: {
            slidesPerView: 2.2,
          },
          992: {
            slidesPerView: 3.5,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        loop={true}
      >
        {testCategory?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardsCarousel;
