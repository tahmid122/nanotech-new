import React, { useState } from "react";
import "./UserCart.css";
import Navigation from "../../../components/Navigation/Navigation";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
const UserCart = () => {
  const { cartItems } = useCart();
  const [isShow, setIsShow] = useState(false);
  return (
    <div id="userCart">
      <div className="userCartLeft">
        <Navigation links={[{ label: "Home", href: "/" }]} title={"Cart"} />
        {/* address details */}
        {isShow ? (
          <form className="customerAddressForm">
            {/* Address form */}
            <div className="flexInput">
              <div className="addFormElm">
                <label htmlFor="Name">Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Input Your Name"
                />
              </div>
              <div className="addFormElm">
                <label htmlFor="mobile">Mobile Number*</label>
                <input
                  type="text"
                  name="mobile"
                  required
                  placeholder="Input Valid Number"
                />
              </div>
            </div>
            <div className="flexInput">
              <div className="addFormElm">
                <label htmlFor="addressLabel">Address Label*</label>
                <select name="addressLabel" id="">
                  <option value="home">HOME</option>
                  <option value="office">OFFICE</option>
                  <option value="other">OTHER</option>
                </select>
              </div>
              <div className="addFormElm">
                <label htmlFor="area">Area*</label>
                <input
                  type="text"
                  name="area"
                  required
                  placeholder="Input Your Area"
                />
              </div>
            </div>
            <div className="flexInput">
              <div className="addFormElm">
                <label htmlFor="address">Address*</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Input Your Address"
                />
              </div>
              <div className="addFormElm">
                <label htmlFor="Landmark">Landmark*</label>
                <input
                  type="text"
                  name="Landmark"
                  required
                  placeholder="Input Your Landmark"
                />
              </div>
            </div>
            <div className="defaultAddress">
              <h6>Default Address</h6>
              <label>
                <input type="checkbox" />
                Default Shipping Address
              </label>
              <label>
                <input type="checkbox" />
                Default Billing Address
              </label>
            </div>
            <div className="formActionsButtons">
              <button type="button" onClick={() => setIsShow(false)}>
                Cancel
              </button>
              <button>Save Address</button>
            </div>
          </form>
        ) : (
          <div className="addressButtons">
            <button onClick={() => setIsShow(true)}>
              Select Delivery Address
            </button>
            <button onClick={() => setIsShow(true)}>
              Select Billing Address
            </button>
          </div>
        )}

        <div className="userCartItems">
          {cartItems?.map((item, index) => (
            <div className="userCartItem">
              <div className="userCartItemTop" key={index}>
                <div className="uciLeft">
                  <IoLocationSharp size={20} /> <b>Nano-Tech</b> Software Park,
                  Jashore
                </div>
                <div className="uciRight">Delivery Charge: ৳1,200</div>
              </div>
              <div className="userCartItemBottom">
                <div className="img-desc">
                  <img src={item?.image} alt="product Image" />
                  <p>{item?.name}</p>
                </div>
                <div className="pqaContainer">
                  <div className="price-quantity">
                    <div className="quantityContainer">
                      <span className="increment">
                        <FaMinus />
                      </span>
                      <span>1</span>
                      <span className="decrement">
                        <FaPlus />
                      </span>
                    </div>
                    <span>৳{item?.price}</span>
                  </div>
                  <div className="actions">
                    <span>
                      <FaTrash />
                    </span>
                    <span>
                      <FaHeart />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="userCartRight">
        <div className="paymentMethods">
          <div className="paymentMethodsTop">
            <img src="/credit-card.gif" alt="credit card" />
            <h6>Select a payment method</h6>
          </div>
          <div className="paymentMethodsImages">
            <div>
              <img src="/bkash.png" alt="" />
            </div>
            <div>
              <img src="/nagad.png" alt="" />
            </div>
            <div>
              <img src="/visa.png" alt="" />
            </div>
            <div>
              <img src="/mastercard.png" alt="" />
            </div>
          </div>
        </div>
        <div className="orderSummary">
          <h6>Order Summary</h6>
          <div>
            <span>Subtotal</span>
            <span> ৳1,00,400</span>
          </div>

          <div>
            <span>Delivery Charge </span> <span>৳2,400</span>
          </div>

          <div>
            <span>Discount</span>
            <span> ৳10,040</span>
          </div>

          <hr />
          <div style={{ fontWeight: "bold" }}>
            <span>Payable</span>
            <span> ৳92,760</span>
          </div>
          <div className="termsCheck">
            <input type="checkbox" name="check" />
            <span>I have read and agreed to the Terms and Conditions*</span>
          </div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
