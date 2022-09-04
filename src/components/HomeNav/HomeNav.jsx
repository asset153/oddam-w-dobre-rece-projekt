import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const navigate = useNavigate();
  const session = supabase.auth.session();

  console.log(session);

  const handleClickNavigate = (location) => {
    return navigate(location);
  };

  const handleClickSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const userSessionSignIn = (
    <div className="navContainer__SignIn">
      <span>Cześć {session?.user.email}</span>
      <button>Oddaj rzeczy</button>
      <button onClick={handleClickSignOut}>Wyloguj</button>
    </div>
  );

  const userSessionSignOut = (
    <div className="navContainer__loginRegister">
      <button onClick={() => handleClickNavigate("/logowanie")}>Zaloguj</button>
      <button onClick={() => handleClickNavigate("/rejestracja")}>
        Załóż konto
      </button>
    </div>
  );

  return (
    <nav className="navContainer">
      {session ? userSessionSignIn : userSessionSignOut}

      <nav className="navContainer__navigation">
        <ul>
          <li onClick={() => navigate("/")}>
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
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default HomeNav;
