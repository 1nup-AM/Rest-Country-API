import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage";
import CountryDetail from "./pages/CountryDetail";
import './App.css';
import ThemeProvider from "./context/ThemeProvider";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage countries={countries} />} />
          <Route
            path="/country/:name"
            element={<CountryDetail countries={countries} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
