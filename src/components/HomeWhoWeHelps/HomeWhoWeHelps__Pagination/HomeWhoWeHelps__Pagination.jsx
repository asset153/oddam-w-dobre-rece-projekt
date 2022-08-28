import React, { useState } from "react";

const Pagination = function ({ infoPerPage, totalInfo, paginate }) {
  const pageNumbers = [];
  const [currNumber, setCurrNumber] = useState(1);

  for (let i = 1; i <= Math.ceil(totalInfo / infoPerPage); i++) {
    pageNumbers.push(i);
  }

  if (totalInfo > 3) {
    return (
      <nav className="paginationContainer">
        <ul className="paginationContainer__list">
          {pageNumbers?.map((number, index) => {
            return (
              <li key={number} className="paginationContainer__list__elements">
                <button
                  onClick={() => {
                    paginate(number);
                    setCurrNumber(number);
                  }}
                  style={{
                    border:
                      number === currNumber ? "1px solid #3c3c3c" : "none",
                  }}
                >
                  {number}
                </button>
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
