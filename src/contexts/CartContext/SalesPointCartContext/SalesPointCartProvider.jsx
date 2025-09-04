import React, { useState } from "react";
import { SalesPointCartContext } from "./SalesPointCartContext";

const SalesPointCartProvider = ({ children }) => {
  const [salesCartItems, setSalesCartItems] = useState([]);
  return (
    <SalesPointCartContext value={{ salesCartItems, setSalesCartItems }}>
      {children}
    </SalesPointCartContext>
  );
};

export default SalesPointCartProvider;
