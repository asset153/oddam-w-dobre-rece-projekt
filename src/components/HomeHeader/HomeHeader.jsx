import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function HomeHeader() {
  const navigate = useNavigate();

  const handleClickNavigate = (location) => {
    return navigate(location);
  };

  return (
    <header className="headerContainer">
      <div className="header__img"></div>

      <div className="header__content">
        <div className="header__content__loginRegister">
          <button onClick={() => handleClickNavigate("/logowanie")}>
            Zaloguj
          </button>
          <button onClick={() => handleClickNavigate("/rejestracja")}>
            Załóż konto
          </button>
        </div>

        <nav className="header__content__navigation">
          <ul>
            <li>Start</li>
            <li>O co chodzi?</li>
            <li>O nas</li>
            <li>Fundacje i organizacje</li>
            <li>Kontakt</li>
          </ul>
        </nav>

        <div className="header__content__titleAndBtns">
          <h1>
            Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <div className="header__content__titleAndBtns__border"></div>
          <div className="header__content__titleAndBtns__buttons">
            <button onClick={() => handleClickNavigate("/logowanie")}>
              Oddaj <br /> rzeczy
            </button>
            <button onClick={() => handleClickNavigate("/logowanie")}>
              Zorganizuj <br /> Zbiórkę
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
