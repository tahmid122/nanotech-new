import React from "react";
import "./SalesPointCart.css";
import useSalesPointCart from "../../../hooks/useSalesPointCart";
const SalesPointCart = () => {
  const { salesCartItems, setSalesCartItems } = useSalesPointCart();
  return <div>SalesPointCart</div>;
};

export default SalesPointCart;
