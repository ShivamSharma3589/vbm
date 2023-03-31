/**
 * HOME PAGE
 */

import React from "react";
import { Divider } from "antd";
import { home } from "../../data"; // API data is being called
import { Banner, ProductGrid, PromoList, AppCarousel } from "../../components"; // Page components
import {
  BANNER,
  CATEGORY,
  HORIZONTAL_PRODUCTS,
  PRODUCT_GRID,
  VERTICAL_PRODUCTS,
} from "../../constants"; // constant keys

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {home.elements?.map((item, index) => {
        // eslint-disable-next-line default-case
        switch (item.type) {
          case BANNER:
            return <AppCarousel key={index} data={item.data} />;
          case CATEGORY:
            return <div key={index}>Category</div>;
          case HORIZONTAL_PRODUCTS:
            return <div key={index}>Horizontal Products</div>;
          case PRODUCT_GRID:
            return <ProductGrid key={index} />;
          case VERTICAL_PRODUCTS:
            return <div key={index}>Vertical Product</div>;
          default:
            return null;
        }
      })}
      
      <Banner />
      <Divider className="mb-2 mt-0" />
      <PromoList />
      <Divider className="my-2" />
      <ProductGrid />
    </div>
  );
};

export default HomePage;
