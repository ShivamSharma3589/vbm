/**
 * HOME PAGE
 */

import React from "react";
import { Divider } from "antd";
import { home } from "../../data";
import { Banner, ProductGrid, PromoList } from "../../components";
import {
  BANNER,
  CATEGORY,
  HORIZONTAL_PRODUCTS,
  PRODUCT_GRID,
  VERTICAL_PRODUCTS,
} from "../../constants";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {home.elements?.map((item) => {
        // eslint-disable-next-line default-case
        switch (item.type) {
          case BANNER:
            return <Banner />;
          case CATEGORY:
            return <div>Category</div>;
          case HORIZONTAL_PRODUCTS:
            return <div>Horizontal Products</div>;
          case PRODUCT_GRID:
            return <ProductGrid />;
          case VERTICAL_PRODUCTS:
            return <div>Vertical Product</div>;
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
