import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import themeContext from "../context/themeContext";
import ThemeToggle from "../context/ThemeToggle";

const CountryDetail = ({ countries }) => {
  const { name } = useParams();
  const country = countries.find((c) => c.name.common === name);
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);

  if (!country) return <div>Country Not Found!</div>;

  //Helper function to render nested objects(e.g. languages, currencies;)
  const renderObj = (obj) => {
    return Object.entries(obj).map(([key, value]) => (
      <div key={key}>
        {value.name || value}
      </div>
    ));
  };
  return (
    <div className={`${theme} lg:h-[100vh]`}>
      <div className="flex gap-7 lg:justify-between items-center px-6 lg:px-10 py-4 h-[10vh]">
        <h1 className="text-xl lg:text-2xl font-semibold">Where in the world?!</h1>
        <ThemeToggle />
      </div>
      <div className="flex justify-center items-center flex-col lg:h-[80vh] mx-5 lg:mx-5">
        <div className="flex items-start m-4 lg:mb-10 w-full lg:w-[80vw]">
        <button onClick={() => navigate(-1)} className="flex justify-center items-center gap-1 border border-gray-300 rounded-xl px-6 py-1"><p className="text-2xl">&larr;</p> Back</button>
        </div>
        <div className="lg:flex justify-center items-center gap-24 ">
          <div>
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="h-45 w-full lg:h-80 lg:w-md rounded-[7px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-5">{country.name.common}</h2>
            <div className="lg:flex gap-10">
              <div className="left">
                <div className="flex gap-1"><p className="font-semibold">Official Name:</p> {country.name.official}</div>
                <div className="flex gap-1"><p className="font-semibold">Population:</p> {country.population}</div>
                <div className="flex gap-1"><p className="font-semibold">Region:</p> {country.region}</div>
                <div className="flex gap-1"><p className="font-semibold">Sub Region:</p> {country.subregion || "No Sub Region"}</div>
                <div className="flex gap-1"><p className="font-semibold">Capital:</p> {country.capital}</div>
              </div>
              <div className="right">
                <div className="flex gap-1"><p className="font-semibold">Top Level Domain:</p> {country.tld}</div>
                <div className="flex gap-2">
                  <p className="font-semibold">Currencies:</p>
                  {country.currencies
                    ? renderObj(country.currencies)
                    : "No currencies found!"}
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold">Languages:</p>{" "}
                  {country.languages
                    ? renderObj(country.languages)
                    : "No languages found!"}
                </div>
              </div>
            </div>
            <div className="lg:flex gap-2 mt-10">
              <h3 className="font-semibold">Border Countries:</h3>
              <ul className="flex flex-wrap gap-2 max-w-xl">
                {country.borders ? (
                  country.borders?.map((border) => {
                    const borderCountry = countries.find(
                      (c) => c.cca3 === border
                    );
                    return (
                      <li key={border} className="border border-gray-300 rounded-[6px] px-1 lg:px-2">
                        <Link to={`/country/${borderCountry.name.common}`}>
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <p>No bordering countries</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
