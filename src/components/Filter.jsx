import React, {useContext} from 'react'
import themeContext from '../context/themeContext';

const Filter = ({onFilter}) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const {theme} = useContext(themeContext);

  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="" className={`${theme}`}>Filter by region</option>
      {regions.map((region) => (
        <option key={region} value={region} className={`${theme}`}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default Filter;