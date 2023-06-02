/**
 * HEADER COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 26-03-2023
 */

import React from "react";
import useScroll from "../../hooks/useScroll";
import { Link, NavLink } from "react-router-dom";
import { BsHexagonFill } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import "./DesktopHeader.scss";

const Header = () => {
  //#region for states
  const isDeviceScrolled = useScroll();
  //#endregion

  return (
    <div
      id="desktop-header-wrapper"
      className={isDeviceScrolled > 55 ? "fixed" : ""}
    >
      <div className="header-area">
        <Link to="/" className="logo-area">
          <BsHexagonFill className="icon" />
          <h6 className="logo">
            Vivek<span>Box</span>Maker
          </h6>
        </Link>
        <div className="header-links-area">
          <nav className="nav-bar">
            <ul>
              <li>
                <NavLink className="nav-links" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="nav-links">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-links" to="/galllery">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-links" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-links" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="other-options-area">
          <Link to="/" className="other-opt-link">
            <HiOutlineSearch />
          </Link>
          <Link to="/" className="other-opt-link">
            <AiOutlineHeart />
          </Link>
          <Link to="/" className="other-opt-link">
            <HiOutlineShoppingBag />
          </Link>
          <Link to="/" className="other-opt-link">
            <BiUser />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
