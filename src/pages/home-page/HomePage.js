/**
 * THIS IS THE HOMEPAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 02 June 2023
 */

import React from "react";
// import {
//   CATEGORY,
//   HORIZONTAL_PRODUCTS,
//   PRODUCT_GRID,
//   VERTICAL_PRODUCTS,
// } from "../../constants"; // constant keys
import {
  AppBannerCarousel,
  // AppCategoryCarousel,
  // AppProductCarousel,
  // AppProductsGrid,
  AppValues,
} from "../../components"; // Page components
import { home } from "../../data"; // API data is being called
import "./HomePage.scss";
import { AppTodaysDeal, AppTrendingBoxes } from "../../components/home";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {/* APP BANNER CAROUSEL STARTS */}
      <section>
        <AppBannerCarousel data={home.elements[0].data} />
      </section>
      {/* APP BANNER CAROUSEL ENDS */}

      {/* OUR VALUES STARTS */}
      <section>
        <AppValues />
      </section>
      {/* OUR VALUES ENDS */}

      {/* WHAT ARE YOU LOOKING FOR TODAY STARTS */}
      <section>
        <AppTodaysDeal />
      </section>
      {/* WHAT ARE YOU LOOKING FOR TODAY ENDS */}

      {/* TRENDING BOXES SECTION STARTS */}
      <section>
        <AppTrendingBoxes />
      </section>
      {/* TRENDING BOXES SECTION ENDS */}
{/* 
      {home.elements?.map((item, index) => {
        // eslint-disable-next-line default-case
        switch (item.type) {
          case CATEGORY:
            return (
              <section key={index} className="section">
                <AppCategoryCarousel
                  data={item.data}
                  heading={item.heading}
                  showText={item.showText}
                />
              </section>
            );
          case PRODUCT_GRID:
            return (
              <section key={index} className="section">
                <AppProductsGrid
                  data={item.data}
                  heading={item.heading}
                  showText={item.showText}
                  imageFit={item.imageFit}
                />
              </section>
            );
          case HORIZONTAL_PRODUCTS:
            return (
              <section key={index} className="section">
                <AppProductCarousel heading={item.heading} data={item.data} />
              </section>
            );
          case VERTICAL_PRODUCTS:
            return <div key={index}>Vertical Product</div>;
          default:
            return null;
        }
      })} */}
    </div>
  );
};

export default HomePage;
