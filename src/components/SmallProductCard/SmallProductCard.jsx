import React from "react";
import "./SmallProductCard.css";
import { Link } from "react-router";
import { BsCart } from "react-icons/bs";
const SmallProductCard = ({ product = {} }) => {
  return (
    <div id="smallProductCard">
      <div id="productCard">
        <Link>
          <div className="proCardUpper">
            <img
              className="smallProCardImage"
              src={product.image}
              alt={product.name}
            />
            <div className="proDescription">
              <span className="proModel">{product.model}</span>
              <span className="proTitle">{product.name}</span>
            </div>
          </div>{" "}
        </Link>
        <div className="proCardBottom">
          <div className="proPrice">
            <p>
              MRP ৳ <span style={{ fontWeight: "bold" }}>{product.price}</span>
            </p>
          </div>
          <div className="proAction">
            <span>
              <BsCart />
            </span>
            <button className="proBtn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProductCard;
