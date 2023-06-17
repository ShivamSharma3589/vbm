/**
 * THIS IS THE OUR VALUES SECTION COMPONENT FOR HOMEPAGE
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */
import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiOutlineGift } from "react-icons/ai";
import { Header1 } from "../../common";
import "./AppValues.scss";

const AppValues = () => {
  return (
    <div className="our-values-wrapper">
      <Header1
        title="Our values are the reason behind our success"
        subTitle="Our Values"
      />
      <div className="our-values-grid">
        <div className="grid-item">
          <div className="grid-card">
            <div className="grid-icon">
              <RiCustomerService2Line />
            </div>
            <p className="grid-title">Quality</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-card">
            <div className="grid-icon">
              <FaShippingFast />
            </div>
            <p className="grid-title">Design</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-card">
            <div className="grid-icon">
              <HiOutlineCurrencyRupee />
            </div>
            <p className="grid-title">Excellent Customer Relationship</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="grid-card">
            <div className="grid-icon">
              <AiOutlineGift />
            </div>
            <p className="grid-title">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppValues;
