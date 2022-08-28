const Informations = function ({ informations, loading }) {
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

export default Informations;
