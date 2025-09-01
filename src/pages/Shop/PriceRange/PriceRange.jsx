import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";
import "./PriceRange.css";
import { FaSliders } from "react-icons/fa6";
const PriceRange = () => {
  const [value, setValue] = useState([500, 5000]); // default min & max

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="priceRange">
      <h6>PRICE</h6>
      <div className="rangeContainer">
        <div className="minMaxContainer">
          <span>Min ৳36,900</span>
          <FaSliders />
          <span>Max ৳1,27,000</span>
        </div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
          step={100}
          sx={{ color: "var(---primaryColor)" }}
        />
        <div className="minMaxContainer">
          <span>৳{value[0]}</span>
          <span className="minMaxClear">CLEAR</span>
          <span>৳{value[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
