import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

function HomeFormStepOne() {
  const navigate = useNavigate();
  const { stepOneData, changeStepOneData } = useContext(UserContext);
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleClickNext = (e) => {
    e.preventDefault();
    changeStepOneData(value);
    navigate("/oddaj-rzeczy/krok-drugi");
  };

  return (
    <form>
      <span>Krok 1/4</span>
      <fieldset>
        <legend>Zaznacz co chcesz dodać:</legend>

        <div>
          <input
            type="radio"
            id="step101"
            name="step101"
            value="ubrania, które nadają się do ponownego użycia"
            onChange={handleChange}
          />
          <label htmlFor="step101">
            ubrania, które nadają się do ponownego użycia
          </label>
        </div>

        <div>
          <input
            value="ubrania, do wyrzucenia"
            onChange={handleChange}
            type="radio"
            id="step102"
            name="step101"
          />
          <label htmlFor="step102">ubrania, do wyrzucenia</label>
        </div>

        <div>
          <input
            value="zabawki"
            onChange={handleChange}
            type="radio"
            id="step103"
            name="step101"
          />
          <label htmlFor="step103">zabawki</label>
        </div>

        <div>
          <input
            value="książki"
            onChange={handleChange}
            type="radio"
            id="step104"
            name="step101"
          />
          <label htmlFor="step104">książki</label>
        </div>

        <div>
          <input
            value="Inne"
            onChange={handleChange}
            type="radio"
            id="step105"
            name="step101"
          />
          <label htmlFor="step105">Inne</label>
        </div>
      </fieldset>

      <div>
        <button onClick={handleClickNext}>Dalej</button>
      </div>
    </form>
  );
}

export default HomeFormStepOne;
