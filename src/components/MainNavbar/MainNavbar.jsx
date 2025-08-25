import React, { useState } from "react";
import "./MainNavbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import useLang from "../../hooks/useLang";
const MainNavbar = () => {
  const [isShow, setIsShow] = useState(false);
  const { isBangla } = useLang();

  // This is Main navbar. It will show to everywhere.
  return (
    <div className="mainNavBarContainer">
      <div id="mainNavbar">
        <div className="navbarLeft">
          <div className="mainNavLogo">
            <Logo />
          </div>
          <div className="searchBar">
            <input
              type="text"
              name="search"
              placeholder="Search Your Product..."
            />
            <button>{isBangla ? "খুঁজুন" : "Search"}</button>
          </div>
        </div>
        <div className="navbarRight">
          <Link className="cart" title="Cart">
            <img src="/cart.png" alt="cart" />
          </Link>

          <div onClick={() => setIsShow(!isShow)} className="location">
            <img src="/location.png" alt="location" />
            <span>
              Select Location <IoIosArrowDown />
            </span>
            <ul
              style={{ display: isShow ? "block" : "none" }}
              className="locationType"
            >
              <li>
                <FaLocationCrosshairs />
                Current Location
              </li>
              <li>
                <FaLocationDot />
                Manual Location
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
