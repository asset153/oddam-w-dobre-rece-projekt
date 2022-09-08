import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function HomeFormStepThree() {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const [value, setValue] = useState({
    location: "",
    whoDoYouWantHelps: "",
    optionalValueOrganization: "",
  });

  const handleChange = (e) =>
    setValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/krok-drugi");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_STEP_THREE_DATA",
      payload: value,
    });
    navigate("/oddaj-rzeczy/krok-czwarty");
  };

  return (
    <form>
      <span>Krok 3/4</span>

      <div>
        <label htmlFor="step3--localization">Lokalizacja:</label>
        <select
          name="location"
          id="step3--localization"
          onChange={handleChange}
        >
          <option value="">— wybierz —</option>
          <option value="Poznań">Poznań</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
          <option value="Wrocław">Wrocław</option>
          <option value="Katowice">Katowice</option>
        </select>
      </div>

      <div>
        <span>Komu chcesz pomóc?</span>
        <div>
          <input
            type="radio"
            id="childrens"
            name="whoDoYouWantHelps"
            value="dzieciom"
            onChange={handleChange}
          />
          <label htmlFor="childrens">dzieciom</label>
        </div>

        <div>
          <input
            type="radio"
            id="lonelyMothers"
            name="whoDoYouWantHelps"
            value="samotnym matkom"
            onChange={handleChange}
          />
          <label htmlFor="lonelyMothers">samotnym matkom</label>
        </div>

        <div>
          <input
            type="radio"
            id="homeless"
            name="whoDoYouWantHelps"
            value="bezdomnym"
            onChange={handleChange}
          />
          <label htmlFor="homeless">bezdomnym</label>
        </div>

        <div>
          <input
            type="radio"
            id="disabled"
            name="whoDoYouWantHelps"
            value="niepełnosprawnym"
            onChange={handleChange}
          />
          <label htmlFor="disabled">niepełnosprawnym</label>
        </div>

        <div>
          <input
            type="radio"
            id="olderPeople"
            name="whoDoYouWantHelps"
            value="osobom starszym"
            onChange={handleChange}
          />
          <label htmlFor="olderPeople">osobom starszym</label>
        </div>
      </div>

      <div>
        <label htmlFor="optionalOrganization">
          Wpisz nazwę konkretnej organizacji (opcjonalnie)
        </label>
        <input
          type="text"
          id="optionalOrganization"
          name="optionalValueOrganization"
          value={value.optionalValueOrganization}
          onChange={handleChange}
        />
      </div>

      <div>
        <button onClick={handleClickReturn}>Wstecz</button>
        <button onClick={handleClickNext}>Dalej</button>
      </div>
    </form>
  );
}

export default HomeFormStepThree;
