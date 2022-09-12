import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

function HomeFormStepOne() {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setValue(e.target.value);
  };

  const handleClickNext = (e) => {
    e.preventDefault();

    if (value) {
      dispatch({
        type: "SET_STEP_ONE_DATA",
        payload: value,
      });
      navigate("/oddaj-rzeczy/krok-drugi");
    } else {
      setError(true);
      return null;
    }
  };

  return (
    <form className="formStepOneWrapper">
      <span className="formStepOneWrapper__step">Krok 1/4</span>
      <fieldset className="formStepOneWrapper__fieldset">
        <legend className="formStepOneWrapper__legend">
          Zaznacz co chcesz dodać:
        </legend>

        <div className="formStepOneWrapper__inputWrapper">
          <input
            className="formStepOneWrapper__input"
            type="radio"
            id="step101"
            name="step101"
            value="ubrania, które nadają się do ponownego użycia"
            onChange={handleChange}
          />
          <label className="formStepOneWrapper__label" htmlFor="step101">
            ubrania, które nadają się do ponownego użycia
          </label>
        </div>

        <div className="formStepOneWrapper__inputWrapper">
          <input
            className="formStepOneWrapper__input"
            value="ubrania, do wyrzucenia"
            onChange={handleChange}
            type="radio"
            id="step102"
            name="step101"
          />
          <label className="formStepOneWrapper__label" htmlFor="step102">
            ubrania, do wyrzucenia
          </label>
        </div>

        <div className="formStepOneWrapper__inputWrapper">
          <input
            className="formStepOneWrapper__input"
            value="zabawki"
            onChange={handleChange}
            type="radio"
            id="step103"
            name="step101"
          />
          <label className="formStepOneWrapper__label" htmlFor="step103">
            zabawki
          </label>
        </div>

        <div className="formStepOneWrapper__inputWrapper">
          <input
            className="formStepOneWrapper__input"
            value="książki"
            onChange={handleChange}
            type="radio"
            id="step104"
            name="step101"
          />
          <label className="formStepOneWrapper__label" htmlFor="step104">
            książki
          </label>
        </div>

        <div className="formStepOneWrapper__inputWrapper">
          <input
            className="formStepOneWrapper__input"
            value="Inne"
            onChange={handleChange}
            type="radio"
            id="step105"
            name="step101"
          />
          <label className="formStepOneWrapper__label" htmlFor="step105">
            Inne
          </label>
        </div>

        <div
          style={{
            display: error ? "block" : "none",
            color: error ? "red" : "none",
          }}
        >
          Wymagane pola muszą być uzupełnione!
        </div>
      </fieldset>

      <div className="formStepOneWrapper__btnWrapper">
        <button className="formStepOneWrapper__btn" onClick={handleClickNext}>
          Dalej
        </button>
      </div>
    </form>
  );
}

export default HomeFormStepOne;
