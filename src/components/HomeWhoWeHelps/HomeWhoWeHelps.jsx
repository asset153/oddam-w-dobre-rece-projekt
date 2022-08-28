import React, { useEffect, useState } from "react";

// TODO => separate that component
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
//

// TODO => separate that component
const Information = function ({ informations, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <ul className="informationContainer">
        {informations?.map((item) => {
          return (
            <li key={item.name} className="informationContainer__list">
              <div className="informationContainer__list__left">
                <p>{item.name}</p>
                <p>{item.mission}</p>
              </div>
              <div className="informationContainer__list__right">
                <p>{item.things}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
};
//

function HomeWhoWeHelps() {
  const [whichOrganization, setWhichOrganization] = useState("Fundations");
  const [informationsDATA, setinformationsDATA] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(3);

  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      const fetchDATA = await fetch(`./src/db${whichOrganization}.json`);
      const response = await fetchDATA.json();

      setinformationsDATA(response);
      setLoading(false);
    };

    fn();
  }, [whichOrganization]);

  // paginate variable
  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;
  const currentInfo = informationsDATA?.slice(
    indexOfFirstInfo,
    indexOfLastInfo
  );
  //

  // fn to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //

  // fn choose organization
  const chooseOrganization = (org) => setWhichOrganization(org);

  return (
    <section className="sectionWhoWeHelpContainer">
      <h4>Komu pomagamy?</h4>
      <img src="assets/Decoration.svg" alt="fancy border" />
      <div className="sectionWhoWeHelpContainer__kindsOfInstitution">
        <button onClick={() => chooseOrganization("Fundations")}>
          Fundacjom
        </button>
        <button onClick={() => chooseOrganization("NonProfitOrganizations")}>
          Organizacjom <br /> pozarządowym
        </button>
        <button onClick={() => chooseOrganization("LocallyHelps")}>
          Lokalnym zbiórkom
        </button>
      </div>

      <p className="sectionWhoWeHelpContainer__content">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>

      <Information informations={currentInfo} loading={loading} />
      <Pagination
        infoPerPage={infoPerPage}
        totalInfo={informationsDATA?.length}
        paginate={paginate}
      />
    </section>
  );
}

export default HomeWhoWeHelps;
