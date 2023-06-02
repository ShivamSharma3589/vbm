/**
 * THIS IS THE COMPONENT FOR IN SECTION HEADER COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */

import React from "react";
import "./Header1.scss";

const Header1 = ({ subTitle, title }) => {
  return (
    <header className="section-header-1">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </header>
  );
};

export default Header1;
