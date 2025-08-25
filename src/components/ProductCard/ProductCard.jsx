import React from "react";
import "./ProductCard.css";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import useLang from "../../hooks/useLang";
const ProductCard = ({ product = {} }) => {
  const { isBangla } = useLang();
  return (
    // Single Product card
    <div id="productCard">
      <Link>
        <div className="proCardUpper">
          <img src={product.image} alt={product.name} />
          <div className="proDescription">
            {/* <span className="proModel">{product.model}</span> */}
            <span className="proTitle">
              {isBangla ? product.bn_name : product.name}
            </span>
          </div>
        </div>{" "}
      </Link>
      <div className="proCardBottom">
        <div className="proPrice">
          <p>
            {isBangla ? "টাকা" : "MRP"} ৳{" "}
            <span style={{ fontWeight: "bold" }}>
              {isBangla ? product.bn_price : product.price}
            </span>
          </p>
        </div>
        <div className="proAction">
          <span>
            <BsCart />
          </span>
          <button className="proBtn">
            {isBangla ? "এখনই কিনুন" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
