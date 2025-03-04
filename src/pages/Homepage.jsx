import React, { useContext, useEffect, useState } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import themeContext from "../context/themeContext";
import ThemeToggle from "../context/ThemeToggle";

function Homepage({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const { theme } = useContext(themeContext);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleFilter = (region) => {
    setRegion(region);
    const filtered = region
      ? countries.filter((country) => country.region === region)
      : countries;
    setFilteredCountries(filtered);
  };

  return (
    <div className={`${theme} px-6 lg:px-12 min-h-[100vh]`}>
      <div className="flex gap-6 lg:justify-between items-center lg:px-10 py-4">
        <h1 className="text-xl lg:text-2xl font-semibold">Where in the world?!</h1>
        <ThemeToggle />
      </div>
      <div className="lg:flex justify-between px-12 my-16">
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-16">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
