import React from "react";
import { useNavigate } from "react-router-dom";

function HomeFormSummary() {
  const navigate = useNavigate();

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/krok-czwarty");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/podziekowania");
  };

  return (
    <div>
      <p>Podsumowanie Twojej darowizny</p>

      <div>
        <button onClick={handleClickReturn}>Wstecz</button>
        <button onClick={handleClickNext}>Dalej</button>
      </div>
    </div>
  );
}

export default HomeFormSummary;
