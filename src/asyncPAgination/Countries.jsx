import React from "react";

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <h2>...Loading</h2>;
  } else {
    return (
      <ul className="list-group mb-2">
        {countries.map((country, i) => {
          return (
            <li key={i} className="list-group-item mx-2">
              {country.name.common}
              <img
                className="mx-2"
                src={country.flags.png}
                alt={country.flags.alt}
                style={{ width: 25 }}
              />
            </li>
          );
        })}
      </ul>
    );
  }
};
export default Countries;
