import React, { useEffect, useState } from "react";
import Informations from "./HomeWhoWeHelps__Informations/HomeWhoWeHelps__Informations";
import Pagination from "./HomeWhoWeHelps__Pagination/HomeWhoWeHelps__Pagination";

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
    <section className="sectionWhoWeHelpContainer" name="whoWeHelps">
      <h4>Komu pomagamy?</h4>
      <img src="assets/Decoration.svg" alt="fancy border" />
      <div className="sectionWhoWeHelpContainer__kindsOfInstitution">
        <button
          onClick={() => chooseOrganization("Fundations")}
          style={{
            border:
              whichOrganization === "Fundations" ? "1px solid #3c3c3c" : "none",
          }}
        >
          Fundacjom
        </button>
        <button
          onClick={() => chooseOrganization("NonProfitOrganizations")}
          style={{
            border:
              whichOrganization === "NonProfitOrganizations"
                ? "1px solid #3c3c3c"
                : "none",
          }}
        >
          Organizacjom <br /> pozarządowym
        </button>
        <button
          onClick={() => chooseOrganization("LocallyHelps")}
          style={{
            border:
              whichOrganization === "LocallyHelps"
                ? "1px solid #3c3c3c"
                : "none",
          }}
        >
          Lokalnym zbiórkom
        </button>
      </div>

      <p className="sectionWhoWeHelpContainer__content">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>

      <Informations informations={currentInfo} loading={loading} />
      <Pagination
        infoPerPage={infoPerPage}
        totalInfo={informationsDATA?.length}
        paginate={paginate}
      />
    </section>
  );
}

export default HomeWhoWeHelps;
