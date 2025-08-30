import React, { useState } from "react";
import "./MobileNavbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { FaRegUser, FaXmark } from "react-icons/fa6";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
import Categories from "../Categories/Categories";
const MobileNavbar = () => {
  const { isBangla } = useLang();
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <div id="mobileNav">
      {isShow && (
        <div className="mobileCategory">
          <span className="closeMobileCategory">
            <FaXmark
              style={{ cursor: "pointer" }}
              onClick={() => setIsShow(false)}
              size={20}
            />
          </span>
          <Categories />
        </div>
      )}
      <Link>
        <IoHomeOutline size={20} />
        {isBangla ? "হোম" : "Home"}
      </Link>
      <Link onClick={() => setIsShow(!isShow)}>
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
