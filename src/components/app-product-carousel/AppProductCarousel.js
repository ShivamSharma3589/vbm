// /**
//  * COMPONENT FOR PRODUCT CARDS CAROUSEL
//  * @author: shivayasharma1149@gmail.com
//  * @date : 02 Apr 2023
//  */

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { testCategory } from "../../data";
// import { ProductCard } from "../index";
// import "./AppProductCarousel.scss";

// const AppProductCarousel = ({ data, heading }) => {
//   return (
//     <div className="app-product-carousel-wrapper">
//       {heading.length > 0 && <h4 className="section-heading">{heading}</h4>}
//       <div className="product-carousel">
//         <Swiper
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             400: {
//               slidesPerView: 2.2,
//             },
//             565: {
//               slidesPerView: 2.2,
//             },
//             992: {
//               slidesPerView: 3.5,
//             },
//             1200: {
//               slidesPerView: 4.5,
//             },
//           }}
//         >
//           {testCategory?.map((item) => {
//             return (
//               <SwiperSlide className="swiper-slider" key={item.id}>
//                 <ProductCard data={item} showText={true} imageFit={"cover"} />
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default AppProductCarousel;
