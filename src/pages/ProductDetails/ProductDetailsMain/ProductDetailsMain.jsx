import React from "react";
import "./ProductDetailsMain.css";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider";
const ProductDetailsMain = () => {
  return (
    <div id="productDetailsMain">
      <div className="pdLeft">
        <div className="pdProductImage">
          <div className="pdProMainImage">
            <img
              src="https://cdn.waltonplaza.com.bd/364e7d1d-24dc-4d25-afc8-36ba0aa99322.jpeg"
              alt="main image"
            />
          </div>
          <div className="pdImagesSlider">
            <ProductImagesSlider />
          </div>
        </div>
        <div className="pdProductDetails">details</div>
      </div>
      <div className="pdRight">
        <div className="deliveryOptions">
          <div className="doTop">
            <div className="doTime">
              <img src="/truck.webp" alt="delivery truck icon" />
              <span>
                Home Delivery <br />{" "}
                <span style={{ fontWeight: "400", fontSize: "14px" }}>
                  2 - 3 Days
                </span>
              </span>
            </div>
            <div>৳700</div>
          </div>
          <div className="doNotice">
            <b>Notice:</b> As per the delivery policy, please receive your
            ordered product within 5 days; otherwise, it will be automatically
            cancelled.
          </div>
          <div className="cashOnDel">
            <img src="/dollar.webp" alt="dollar" />
            Cash on Delivery Available
          </div>
        </div>
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
