import React from "react";
import "./MobileNavbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
const MobileNavbar = () => {
  const { isBangla } = useLang();
  return (
    <div id="mobileNav">
      <Link>
        <IoHomeOutline size={20} />
        {isBangla ? "হোম" : "Home"}
      </Link>
      <Link>
        <RxDashboard size={20} />
        {isBangla ? "ক্যাটেগরি" : "Category"}
      </Link>
      <Link>
        <BsCart size={20} />
        {isBangla ? "কার্ট" : "Cart"}
      </Link>
      <Link>
        <FaRegUser size={20} />
        {isBangla ? "একাউন্ট" : "Account"}
      </Link>
    </div>
  );
};

export default MobileNavbar;
