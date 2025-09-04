import React from "react";
import "./SalesPointCart.css";
import useCart from "../../../hooks/useCart";
const SalesPointCart = () => {
  const { cartItems, setCartItems } = useCart();
  console.log(cartItems);
  return <div>SalesPointCart</div>;
};

export default SalesPointCart;
