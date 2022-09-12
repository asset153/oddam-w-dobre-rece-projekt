import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function HomeFormStepTwo() {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_STEP_TWO_DATA",
      payload: value,
    });

    navigate("/oddaj-rzeczy/krok-trzeci");
  };

  return (
    <form className="formStepTwoWrapper">
      <span className="formStepTwoWrapper__step">Krok 2/4</span>
      <fieldset className="formStepTwoWrapper__fieldset">
        <legend className="formStepTwoWrapper__legend">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </legend>

        <label className="formStepTwoWrapper__label" htmlFor="step2">
          Liczba 60l worków:
        </label>

        <select
          className="formStepTwoWrapper__select"
          id="step2"
          onChange={handleChange}
        >
          <option value="">— wybierz —</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </fieldset>

      <div className="formStepTwoWrapper__btnWrapper">
        <button
          className="formStepTwoWrapper__btn formStepTwoWrapper__btn--before"
          onClick={handleClickReturn}
        >
          Wstecz
        </button>
        <button
          className="formStepTwoWrapper__btn formStepTwoWrapper__btn--after"
          onClick={handleClickNext}
        >
          Dalej
        </button>
      </div>
    </form>
  );
}

export default HomeFormStepTwo;
