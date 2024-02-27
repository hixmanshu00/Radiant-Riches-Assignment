import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h4>categories</h4>
        <Link href="/" className="footer-link">
          Web Builder
        </Link>
        <Link href="/" className="footer-link">
          Hosting
        </Link>
        <Link href="/" className="footer-link">
          Data Center
        </Link>
        <Link href="/" className="footer-link">
          Robotic-Automation
        </Link>
      </div>
      <div className="footer-container">
        <h4>contact</h4>
        <Link href="/" className="footer-link">
          Contact
        </Link>
        <Link href="/" className="footer-link">
          Privacy Policy
        </Link>
        <Link href="/" className="footer-link">
          Terms Of Service
        </Link>
        <Link href="/" className="footer-link">
          Categories
        </Link>
        <Link href="/" className="footer-link">
          About
        </Link>
      </div>
      <div className="country">
        <p>United States</p>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Footer;
