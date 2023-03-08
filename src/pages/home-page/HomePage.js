/**
 * HOME PAGE
 */

import React from "react";
import { Banner, PromoList } from "../../components";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <PromoList />
      <Banner />
    </div>
  );
};

export default HomePage;
