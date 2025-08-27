import React, { useState } from "react";
import "./ProductDetailsMain.css";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider";
import { IoIosArrowForward } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import ProductInDetail from "../ProductInDetail/ProductInDetail";
const ProductDetailsMain = () => {
  const [mainProImage, setMainProImage] = useState(
    "https://cdn.waltonplaza.com.bd/364e7d1d-24dc-4d25-afc8-36ba0aa99322.jpeg"
  );
  const handleImageChange = (url) => {
    setMainProImage(url);
  };
  return (
    <div id="productDetailsMain">
      <div>
        <div className="pdLeft">
          {/* product image */}
          <div className="pdProductImage">
            <div className="pdProMainImage">
              <img src={mainProImage} alt="main image" />
            </div>
            <div className="pdImagesSlider">
              <ProductImagesSlider handleImageChange={handleImageChange} />
            </div>
          </div>
          {/* product details */}

          <div className="pdProductDetails">
            <div className="pdProNameModel">
              <p className="pdProName">Walton Inverter AC 1.5 Ton</p>
              <p className="pdProModel">
                WSI-KRYSTALINE (PRETO)-18F [BLUETOOTH]
              </p>
            </div>
            <div className="pdProPriceDiscount">
              <p className="pdProPrice">
                <del style={{ color: "red" }}>MSRP ৳76,990</del>{" "}
                <span className="pdActualPrice">৳69,291</span>
              </p>
              <p className="pdDiscount">
                Save: ৳7,699{" "}
                <span style={{ color: "var(---primaryColor)" }}>(10% OFF)</span>
              </p>
            </div>
            {/* EMI plan */}
            <div className="emiPlan">
              <span className="pdViewPlanButton">
                <span style={{ color: "var(---primaryColor)" }}>EMI</span>{" "}
                available
              </span>
              <span className="pdViewPlanLink">
                View Plans <IoIosArrowForward />
              </span>
            </div>
            {/* offers */}
            <div className="pdProOfferSection">
              <h6>Available Offers</h6>
              <ul>
                <li>
                  <img className="pdPin" src="/pin.webp" alt="pin" />
                  <b>Kisti Offer</b> Check Kisti Eligibility{" "}
                  <span className="pdModalLink">T&C</span>
                </li>
                <li>
                  <img className="pdPin" src="/pin.webp" alt="pin" />
                  <b>EMI</b> Valid For Cart Value Above ৳10,000
                  <span className="pdModalLink">T&C</span>
                </li>
                <li>
                  <img className="pdPin" src="/pin.webp" alt="pin" />
                  <b>EMI Discount</b>
                  Get 5% OFF,Starting ৳6,095/Month
                  <span className="pdModalLink">More</span>
                </li>
              </ul>
            </div>
            {/* brand */}
            <div className="pdBrand">
              <span style={{ fontWeight: "bold" }}>Brand</span>
              <ul>
                <li>Nano-Tech</li>
                <li>
                  See More Products From
                  <span className="brandCat">
                    Split AC
                    <IoIosArrowForward />
                  </span>
                </li>
              </ul>
            </div>
            {/* Quantity and Buy */}
            <div className="pdQuantityBuy">
              <div className="pdQuantity">
                <span className="pdQuantityTitle">Quantity</span>
                <div className="pdQuantityCount">
                  <span className="pdQuantityIcon">
                    <FaMinus />
                  </span>
                  <span className="pdQuantityValue">1</span>
                  <span className="pdQuantityIcon">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <ProductInDetail />
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
