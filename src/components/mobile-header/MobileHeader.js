/**
 * MOBILE HEADER COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 04 June 2023
 */

import React from "react";
import { Link } from "react-router-dom";
import { BsHexagonFill } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import "./MobileHeader.scss";

const MobileHeader = () => {
  return (
    <div className="mobile-header-wrapper">
      <div className="mobile-header">
        {/* LOGO AREA STARTS */}
        <Link to="/" className="logo-area">
          <BsHexagonFill className="icon" />
          <h6 className="logo">
            Vivek<span>Box</span>Maker
          </h6>
        </Link>
        {/* LOGO AREA ENDS */}

        {/* RIGHT SECTION ICONS STARTS */}
        <section className="right-section-icons">
          <Link to="/" className="icon">
            <HiOutlineSearch />
          </Link>
        </section>
        {/* RIGHT SECTION ICONS ENDS */}
      </div>
    </div>
  );
};

export default MobileHeader;
