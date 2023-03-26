/**
 * HEADER COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 26-03-2023
 */

import React from "react";
import useScroll from "../../hooks/useScroll";
import "./Header.css";

const Header = () => {
  //#region for states
  const isDeviceScrolled = useScroll();
  //#endregion

  return (
    <div id="header-wrapper" className={isDeviceScrolled > 55 ? "fixed" : ""}>
      <div className="header-area">
        <div className="logo-area">
          <h6 className="v-logo">
            Vivek<span>Box</span>Maker
          </h6>
        </div>
        <div className="header-links-wrapper">
          <nav className="nav-bar">
            <ul>
              <li>
                <a className="nav-links" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-links" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-links" href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-links" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
