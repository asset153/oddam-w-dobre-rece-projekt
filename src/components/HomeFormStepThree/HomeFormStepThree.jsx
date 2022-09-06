import React from "react";
import { useNavigate } from "react-router-dom";

function HomeFormStepThree() {
  const navigate = useNavigate();

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/krok-drugi");
  };

  const handleClickNext = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/krok-czwarty");
  };

  return (
    <form>
      <span>Krok 3/4</span>
      <div>
        <button onClick={handleClickReturn}>Wstecz</button>
        <button onClick={handleClickNext}>Dalej</button>
      </div>
    </form>
  );
}

export default HomeFormStepThree;
