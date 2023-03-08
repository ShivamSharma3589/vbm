import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PromolistItem from "./PromolistItem";
import { promolist } from "../../data";
import "swiper/css";
import "./PromoList.css";

const PromoList = () => {
  return (
    <div className="promolist-wrapper">
      <Swiper slidesPerView={4} spaceBetween={0}>
        {promolist?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <PromolistItem src={item.src} alt={item.alt} title={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PromoList;
