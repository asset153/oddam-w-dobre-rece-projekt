import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const navigate = useNavigate();

  const handleClickNavigate = (location) => {
    return navigate(location);
  };

  return (
    <nav className="navContainer">
      <div className="navContainer__loginRegister">
        <button onClick={() => handleClickNavigate("/logowanie")}>
          Zaloguj
        </button>
        <button onClick={() => handleClickNavigate("/rejestracja")}>
          Załóż konto
        </button>
      </div>

      <nav className="navContainer__navigation">
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="simplySteps" smooth={true} duration={500}>
              O co chodzi?
            </Link>
          </li>
          <li>
            <Link to="aboutUs" smooth={true} duration={500}>
              O nas
            </Link>
          </li>
          <li>
            <Link to="whoWeHelps" smooth={true} duration={500}>
              Fundacje i organizacje
            </Link>
          </li>
          <li>Kontakt</li>
        </ul>
      </nav>
    </nav>
  );
}

export default HomeNav;
