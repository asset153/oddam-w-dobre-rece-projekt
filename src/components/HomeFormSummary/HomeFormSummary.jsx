import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function HomeFormSummary() {
  const navigate = useNavigate();
  const { state } = useContext(UserContext);

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/oddaj-rzeczy/krok-czwarty");
  };

  const handleClickNext = (e) => {
    e.preventDefault();

    console.log(state);
    // navigate("/oddaj-rzeczy/podziekowania");
  };

  const { stepOneData, stepTwoData, stepThreeData, stepFourData } = state;

  return (
    <div>
      <p>Podsumowanie Twojej darowizny</p>

      <div>
        <p>Oddajesz:</p>

        <div>
          <p>{stepTwoData} worki</p>
          <p>{stepOneData}</p>
          <p>{stepThreeData.whoDoYouWantHelps}</p>
          <img src="/assets/Icon-1.svg" alt="t-shirt icon" />
        </div>

        <div>
          <p>Dla lokalizacji: {stepThreeData.location}</p>
          <img src="/assets/Icon-4.svg" alt="ecology cyrcle icon" />
        </div>
      </div>

      <div>
        <div>
          <p>Adres odbioru:</p>
          <div>
            <p>Ulica</p>
          </div>

          <div>
            <p>Miasto</p>
          </div>

          <div>
            <p>Kod pocztowy</p>
          </div>

          <div>
            <p>Numer telefonu</p>
          </div>
        </div>
        <div>
          <p>Termin odbioru:</p>
          <div>
            <p>Data</p>
            <p>Godzina</p>
            <p>Uwagi dla kuriera</p>
          </div>
        </div>
      </div>

      <div>
        <button onClick={handleClickReturn}>Wstecz</button>
        <button onClick={handleClickNext}>Potwierdzam</button>
      </div>
    </div>
  );
}

export default HomeFormSummary;
