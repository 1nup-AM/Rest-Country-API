import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <search className="flex justify-center items-center gap-5 mb-4">
      <IoSearchOutline />
      <input
        type="text"
        placeholder="Search for a country..."
        value={term}
        onChange={handleChange}
      />
    </search>
  );
};

export default SearchBar;
