import React from "react";
import "./ProductDetailsMain.css";
const ProductDetailsMain = () => {
  return (
    <div id="productDetailsMain">
      <div className="pdLeft">Product Details</div>
      <div className="pdRight">
        <div className="deliveryOptions"></div>
        <div className="returnPolicy">
          <h5>Return & Warranty</h5>
          <hr className="pdHr" />
          <div>
            <img src="/returnBox.webp" alt="return box" />
            Return as per company policy
          </div>
          <div>
            <img src="/warrantyBox.webp" alt="return box" />
            Warranty as per company policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMain;
