/**
 * HOME PAGE
 */

import React from "react";
import {
  BANNER,
  CATEGORY,
  HORIZONTAL_PRODUCTS,
  PRODUCT_GRID,
  VERTICAL_PRODUCTS,
} from "../../constants"; // constant keys
import {
  AppBannerCarousel,
  AppCategoryCarousel,
  AppProductCarousel,
  AppProductsGrid,
} from "../../components"; // Page components
import { home } from "../../data"; // API data is being called

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {home.elements?.map((item, index) => {
        // eslint-disable-next-line default-case
        switch (item.type) {
          case BANNER:
            return (
              <section key={index}>
                <AppBannerCarousel data={item.data} />
              </section>
            );
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
      })}
    </div>
  );
};

export default HomePage;
