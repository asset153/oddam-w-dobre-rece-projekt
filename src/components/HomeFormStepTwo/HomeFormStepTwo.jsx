import React from "react";
import { useNavigate } from "react-router-dom";

function HomeFormStepTwo() {
  const navigate = useNavigate();

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/krok-trzeci");
  };

  return (
    <form>
      <span>Krok 2/4</span>
      <label htmlFor="step201">Choose a pet:</label>

      <select id="step201">
        <option value="">— wybierz —</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <div>
        <button onClick={handleClickReturn}>Wstecz</button>
        <button onClick={handleClickNext}>Dalej</button>
      </div>
    </form>
  );
}

export default HomeFormStepTwo;
