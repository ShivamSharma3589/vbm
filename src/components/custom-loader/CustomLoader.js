/**
 * CUSTOM LOADER COMPONENT
 */

import React from "react";
import { Spin } from "antd";
import "./CustomLoader.css";

const CustomLoader = () => {
  return (
    <div className="custom-loader">
      <Spin size="large" />
    </div>
  );
};

export default CustomLoader;
