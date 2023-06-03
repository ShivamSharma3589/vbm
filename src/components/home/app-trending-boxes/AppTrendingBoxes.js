/**
 * TRENDING BOXES SECTION COMPONENT FOR HOMEPAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testCategory } from "../../../data";
import { Header2, ProductCard } from "../../common";
import "./AppTrendingBoxes.scss";

const AppTrendingBoxes = () => {
  return (
    <div className="trending-boxes-wrapper">
      <Header2 />

      <div className="trending-boxes-carousels">
        <div className="trending-carousel">
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
                slidesPerView: 4,
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
      </div>
    </div>
  );
};

export default AppTrendingBoxes;
