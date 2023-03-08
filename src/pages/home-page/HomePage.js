/**
 * HOME PAGE
 */

import { Divider } from "antd";
import React from "react";
import { Banner, ProductGrid, PromoList } from "../../components";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <PromoList />
      <Divider className="mb-2 mt-0" />
      <Banner />
      <Divider className="my-2" />
      <ProductGrid />
    </div>
  );
};

export default HomePage;
