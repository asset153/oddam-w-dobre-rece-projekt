import React, { useEffect, useState } from "react";

// TODO => separate that component
const Information = function ({ informations, loading }) {
  return <div></div>;
};
//

function HomeWhoWeHelps() {
  const [informationsDATA, setinformationsDATA] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [infoPerPage] = useState(10);

  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      const fetchDATA = await fetch("./src/db.json");
      const response = await fetchDATA.json();

      setinformationsDATA(response);
      setLoading(false);
    };

    fn();
  }, []);

  // paginate variable
  const indexOfLastInfo = currentPage * infoPerPage;
  const indexOfFirstInfo = indexOfLastInfo - infoPerPage;
  const currentInfo = informationsDATA?.fundation.slice(
    indexOfFirstInfo,
    indexOfLastInfo
  );
  //

  // fn to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //

  return (
    <section className="sectionWhoWeHelpContainer">
      <h4>Komu pomagamy?</h4>
      <img src="assets/Decoration.svg" alt="fancy border" />
      <div className="sectionWhoWeHelpContainer__kindsOfInstitution">
        <button>Fundacjom</button>
        <button>Organizacjom pozarządowymOP</button>
        <button>Lokalnym zbiórkom</button>
      </div>

      <p className="sectionWhoWeHelpContainer__content">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>

      <Information informations={currentInfo} loading={loading} />
    </section>
  );
}

export default HomeWhoWeHelps;
