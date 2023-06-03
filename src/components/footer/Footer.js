/**
 * FOOTER COMPONENT
 * @author: shivayasharma1149@gmail.com
 * @date : 03 June 2023
 */
import React from "react";
import { Link } from "react-router-dom";
import {
  BsHexagonFill,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="upper-row">
          <div className="address-column">
            <div className="footer-logo-area">
              <Link to="/" className="logo-area">
                <BsHexagonFill className="icon" />
                <h6 className="logo">
                  Vivek<span>Box</span>Maker
                </h6>
              </Link>
            </div>
            <div className="address-details-wrapper">
              <ul>
                <li>
                  <p>
                    <span></span>
                    <span>
                      Address: E23, Sector 63, Noida - 201 301, UP, India
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>
                    <span>Phone: +91-120-4243310</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span></span>
                    <span>Email: vivekboxmaker@gmail.com</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="social-media-links-wrapper">
              <ul>
                <li>
                  <Link to="/">
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <RiInstagramFill />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="footer-links-wrapper">
              <h5>Categories</h5>
              <ul>
                <li>
                  <Link to="/">Sofa Sets</Link>
                </li>
                <li>
                  <Link to="/">Couch</Link>
                </li>
                <li>
                  <Link to="/">Furniture</Link>
                </li>
                <li>
                  <Link to="/">Office Tables</Link>
                </li>
                <li>
                  <Link to="/">Tables</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="footer-links-wrapper">
              <h5>Information</h5>
              <ul>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Delivery Information</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms &amp; Condition</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="footer-links-wrapper">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link to="/">Personal Details</Link>
                </li>
                <li>
                  <Link to="/">Address Book</Link>
                </li>
                <li>
                  <Link to="/">My Rewards</Link>
                </li>
                <li>
                  <Link to="/">Order History</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-area-wrapper">
        <div className="bottom-area">
          <p className="bottom-txt">
            Copyright 2023 - Velocity Software Solution Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
