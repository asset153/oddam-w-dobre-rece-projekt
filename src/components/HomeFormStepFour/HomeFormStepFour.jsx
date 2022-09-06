import React from "react";
import { useNavigate } from "react-router-dom";

function HomeFormStepFour() {
  const navigate = useNavigate();

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/krok-trzeci");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/podsumowanie");
  };

  return (
    <form>
      <span>Krok 4/4</span>
      <div>
        <button onClick={handleClickReturn}>Wstecz</button>
        <button onClick={handleClickNext}>Dalej</button>
      </div>
    </form>
  );
}

export default HomeFormStepFour;
