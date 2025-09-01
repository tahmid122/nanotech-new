import React from "react";
import "./FilterCheckbox.css";
const FilterCheckbox = () => {
  return (
    <div id="filterCheckbox">
      <h6>BRAND</h6>
      <ul className="checkboxContainer">
        <li>
          <label>
            <input type="checkbox" name="nano-tech" value="nano-tech" />
            Nano-Tech
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="acc" value="ACC" />
            ACC
          </label>
        </li>
      </ul>
    </div>
  );
};

export default FilterCheckbox;
