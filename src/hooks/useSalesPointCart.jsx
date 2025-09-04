import React, { useContext } from "react";
import { SalesPointCartContext } from "../contexts/CartContext/SalesPointCartContext/SalesPointCartContext";

const useSalesPointCart = () => {
  const { salesCartItems, setSalesCartItems } = useContext(
    SalesPointCartContext
  );
  return { salesCartItems, setSalesCartItems };
};

export default useSalesPointCart;
