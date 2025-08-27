import React from "react";
import "./MobileNavbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router";
const MobileNavbar = () => {
  return (
    <div id="mobileNav">
      <Link>
        <IoHomeOutline size={20} />
        Home
      </Link>
      <Link>
        <RxDashboard size={20} />
        Category
      </Link>
      <Link>
        <BsCart size={20} />
        Cart
      </Link>
      <Link>
        <FaRegUser size={20} />
        Account
      </Link>
    </div>
  );
};

export default MobileNavbar;
