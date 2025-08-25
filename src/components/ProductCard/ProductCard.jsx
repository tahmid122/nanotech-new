import React from "react";
import "./ProductCard.css";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
const ProductCard = () => {
  return (
    <div id="productCard">
      <Link>
        <div className="proCardUpper">
          <img
            src="https://cdn.waltonplaza.com.bd/98443f37-4b1a-4cb9-ad9b-f36d26b949c9.jpeg"
            alt="product Image"
          />
          <div className="proDescription">
            <span className="proModel">WNR-6F0-SCRC-CO</span>
            <span className="proTitle">Walton No-Frost Refrigerator 660L</span>
          </div>
        </div>{" "}
      </Link>
      <div className="proCardBottom">
        <div className="proPrice">
          <p>
            MRP ৳ <span style={{ fontWeight: "bold" }}>18,000</span>
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
  );
};

export default ProductCard;
