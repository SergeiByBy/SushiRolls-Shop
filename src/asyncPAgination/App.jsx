import axios from "axios";
import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import Pagination from "./Pagination";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coutriesPerPage] = useState(10);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(resp.data);
      setLoading(false);
    };
    getCountries();
  }, []);

  const lastCountryIndex = coutriesPerPage * currentPage;
  const firstCountryIndex = lastCountryIndex - coutriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNaumber) => setCurrentPage(pageNaumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination
        coutriesPerPage={coutriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      <button className="btn-primary btn" onClick={prevPage}>
        Предыдущая страница
      </button>
      <button className="btn-primary btn ms-2" onClick={nextPage}>
        Следующая страница
      </button>
    </div>
  );
};

export default App;
