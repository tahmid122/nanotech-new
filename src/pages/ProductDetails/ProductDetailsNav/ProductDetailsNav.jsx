import React from "react";
import "./ProductDetailsNav.css";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
const ProductDetailsNav = () => {
  return (
    <div id="productDetailsNav">
      <Link to={"/"}>
        Home <IoIosArrowForward />
      </Link>
      <Link to={"/"}>
        Air Conditioner <IoIosArrowForward />
      </Link>
      <Link to={"/"}>
        Split AC <IoIosArrowForward />
      </Link>
      <p>Walton Inverter AC 1.5 Ton</p>
    </div>
  );
};

export default ProductDetailsNav;
