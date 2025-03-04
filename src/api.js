import axios from "axios";

const api_url = "https://restcountries.com/v3.1";

export const fetchAllCountries = () => axios.get(`${api_url}/all`);

export const fetchCountryByName = (name) => axios.get(`${api_url}/name/${name}`);

export const fetchCountryBorders = (codes) => axios.get(`${api_url}/alpha?codes=${codes}`);
