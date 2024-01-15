import axios from "axios";
import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import Pagination from "./Pagination";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coutriesPerPage] = useState(10);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoading(true);
        const resp = await axios
          .get("https://restcountries.com/v3.1/all")
          .catch((error) => console.log(error));
        setCountries(resp.data);
      } catch (error) {
        setError("Ошибка получения стран!");
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const lastCountryIndex = Math.min(
    coutriesPerPage * currentPage,
    countries.length
  );
  const firstCountryIndex = Math.min(
    lastCountryIndex - coutriesPerPage,
    countries.length
  );
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNaumber) => setCurrentPage(pageNaumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Страны</h1>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination
        coutriesPerPage={coutriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      {currentPage > 1 ? (
        <button className="btn-primary btn" onClick={prevPage}>
          Предыдущая страница
        </button>
      ) : null}
      {currentPage < Math.ceil(countries.length / coutriesPerPage) ? (
        <button className="btn-primary btn ms-2" onClick={nextPage}>
          Следующая страница
        </button>
      ) : null}
    </div>
  );
};

export default App;
