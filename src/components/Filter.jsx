import React, { useContext } from "react";
import themeContext from "../context/themeContext";

const Filter = ({ onFilter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const { theme } = useContext(themeContext);

  return (
    <section>
      <label for='category'>Filter by region:</label>
      <select id="category" name="category" onChange={(e) => onFilter(e.target.value)}>
        <option value="" className={`${theme}`}>
          Choose
        </option>
        {regions.map((region) => (
          <option key={region} value={region} className={`${theme}`}>
            {region}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filter;
