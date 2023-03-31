/**
 * CUSTOM LOADER COMPONENT
 */

import React from "react";
import "./CustomLoader.css";

const CustomLoader = () => {
  return (
    <div className="custom-loader">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CustomLoader;
