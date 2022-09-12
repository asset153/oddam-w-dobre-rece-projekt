import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function HomeFormStepFour() {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const [value, setValue] = useState({
    street: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    date: "",
    time: "",
    messFromDeliveryMan: "",
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
    navigate("/oddaj-rzeczy/krok-trzeci");
  };

  const handleClickNext = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_STEP_FOUR_DATA",
      payload: value,
    });
    navigate("/oddaj-rzeczy/podsumowanie");
  };

  const {
    street,
    city,
    postCode,
    phoneNumber,
    date,
    time,
    messFromDeliveryMan,
  } = value;

  return (
    <form className="formStepFourWrapper">
      <span className="formStepFourWrapper__step">Krok 4/4</span>

      <fieldset className="formStepFourWrapper__fieldsetWrapper">
        <legend>Podaj adres oraz termin odbioru rzecz przez kuriera</legend>

        <fieldset>
          <legend>Adres odbioru:</legend>
          <div>
            <label htmlFor="street">Ulica</label>
            <input
              type="text"
              id="street"
              name="street"
              value={street}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="city">Miasto</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Kod pocztowy</label>
            <input
              type="number"
              id="postCode"
              name="postCode"
              value={postCode}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Numer telefonu</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Termin odbioru:</legend>
          <div>
            <label htmlFor="date">Data</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="time">Godzina</label>
            <input
              type="number"
              name="time"
              id="time"
              value={time}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="messFromDeliveryMan">Uwagi dla kuriera</label>
            <input
              type="text"
              name="messFromDeliveryMan"
              id="messFromDeliveryMan"
              value={messFromDeliveryMan}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>
      </fieldset>

      <div>
        <button
          className="formStepFourWrapper__btn formStepFourWrapper__btn--before"
          onClick={handleClickReturn}
        >
          Wstecz
        </button>
        <button
          className="formStepFourWrapper__btn formStepFourWrapper__btn--after"
          onClick={handleClickNext}
        >
          Dalej
        </button>
      </div>
    </form>
  );
}

export default HomeFormStepFour;
