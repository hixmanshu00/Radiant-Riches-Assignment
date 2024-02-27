import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import "../../styles/header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Best Website builders in the US</h1>
      <div className="filter">
        <div className="filter-container-1">
          <div className="date-container">
            <IoIosArrowDropdown />
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div className="advertising-info">
            <GoInfo />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="filter-container-2">
          <p>Top Relevant</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="tools">
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
        <p>BlueHosting</p>
      </div>
      <div className="links">
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/" className="link">
            Hosting for all
          </Link>
          <Link href="/" className="link">
            Hosting
          </Link>
          <Link href="/" className="link">
            Hosting6
          </Link>
          <Link href="/" className="link">
            Hosting5
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Header;
