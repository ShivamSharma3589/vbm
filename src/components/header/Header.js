/**
 * HEADER COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 26-03-2023
 */

import React from "react";
import useScroll from "../../hooks/useScroll";
import "./Header.sass";
import { Link } from "react-router-dom";

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
                <Link className="nav-links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/">
                  Products
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
