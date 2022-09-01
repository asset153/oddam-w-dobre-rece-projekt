import React, { useState } from "react";

const Pagination = function ({ infoPerPage, totalInfo, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalInfo / infoPerPage); i++) {
    pageNumbers.push(i);
  }

  if (totalInfo > 3) {
    return (
      <nav className="paginationContainer">
        <ul className="paginationContainer__list">
          {pageNumbers?.map((number) => {
            return (
              <li key={number} className="paginationContainer__list__elements">
                <button onClick={() => paginate(number)}>{number}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  } else {
    return null;
  }
};

export default Pagination;
