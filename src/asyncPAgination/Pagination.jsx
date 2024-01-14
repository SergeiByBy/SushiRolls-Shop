import React from "react";

const Pagination = ({ coutriesPerPage, totalCountries, paginate }) => {
  const pageNaumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / coutriesPerPage); i++) {
    pageNaumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNaumbers.map((number) => (
          <li className="page-item" key={number}>
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
