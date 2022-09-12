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
    navigate("/oddaj-rzeczy/podziekowania");
  };

  const { stepOneData, stepTwoData, stepThreeData, stepFourData } = state;

  return (
    <div className="formSummaryWrapper">
      <p className="formSummaryWrapper__step">Podsumowanie Twojej darowizny</p>

      <div className="formSummaryWrapper__gave">
        <p>Oddajesz:</p>

        <div>
          <img src="/assets/Icon-1.svg" alt="t-shirt icon" />
          <p>{stepTwoData} worki</p>
          <p>{stepOneData}</p>
          <p>{stepThreeData?.whoDoYouWantHelps}</p>
        </div>

        <div>
          <img src="/assets/Icon-4.svg" alt="ecology cyrcle icon" />
          <p>Dla lokalizacji: {stepThreeData?.location}</p>
        </div>
      </div>

      <div className="formSummaryWrapper__data">
        <div>
          <p>Adres odbioru:</p>
          <div>
            <p>Ulica {stepFourData?.street}</p>
          </div>

          <div>
            <p>Miasto {stepFourData?.city}</p>
          </div>

          <div>
            <p>Kod pocztowy {stepFourData?.postCode}</p>
          </div>

          <div>
            <p>Numer telefonu {stepFourData?.phoneNumber}</p>
          </div>
        </div>
        <div>
          <p>Termin odbioru:</p>
          <div>
            <p>Data {stepFourData?.date}</p>
            <p>Godzina {stepFourData?.time}</p>
            <p>Uwagi dla kuriera {stepFourData?.messFromDeliveryMan}</p>
          </div>
        </div>
      </div>

      <div>
        <button
          className="formSummaryWrapper__btn formSummaryWrapper__btn--after"
          onClick={handleClickReturn}
        >
          Wstecz
        </button>
        <button
          className="formSummaryWrapper__btn formSummaryWrapper__btn--before"
          onClick={handleClickNext}
        >
          Potwierdzam
        </button>
      </div>
    </div>
  );
}

export default HomeFormSummary;
