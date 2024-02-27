"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import "../../styles/navbar.scss";
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const isMobile = windowWidth <= 620 ? true : false;
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <div className="navbar-container">
      <div className="search-container">
        <input type="text" />
        <CiSearch className="search-icon" size={26} />
      </div>
      <div className="links">
        <Link href="/" className="link">
          Categories
        </Link>
        <Link href="/" className="link">
          Website Builders
        </Link>
        <Link href="/" className="link">
          Today's deals
        </Link>
      </div>
      {isMobile ? (
        <IoMdMenu size={30} className="menu" onClick={toggleMobileMenu} />
      ) : (
        <></>
      )}

      <div
        className={`${isMobileMenuOpen ? "mobile-menu" : "mobile-menu-close"}`}
      >
        <div className="close">
          <h3>R.</h3>
          <IoMdClose onClick={toggleMobileMenu} size={30} />
        </div>
        <div className="mobile-links">
          <Link href="/" className="mobile-link">
            Categories
          </Link>
          <Link href="/" className="mobile-link">
            Website Builders
          </Link>
          <Link href="/" className="mobile-link">
            Today's deals
          </Link>
        </div>
        <h1>Radiant.</h1>
      </div>
    </div>
  );
};

export default Navbar;
