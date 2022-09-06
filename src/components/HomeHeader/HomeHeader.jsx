import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import HomeNav from "../HomeNav/HomeNav";

function HomeHeader() {
  const navigate = useNavigate();
  const session = supabase.auth.session();

  return (
    <header className="headerContainer">
      <div className="header__img"></div>

      <div className="header__content">
        <HomeNav />

        <div className="header__content__titleAndBtns">
          <h1>
            Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <img src="/assets/Decoration.svg" alt="fancy border" />
          <div className="header__content__titleAndBtns__buttons">
            <button
              onClick={() => navigate(session ? "/oddaj-rzeczy" : "/logowanie")}
            >
              Oddaj <br /> rzeczy
            </button>
            <button
              onClick={() => navigate(session ? "/oddaj-rzeczy" : "/logowanie")}
            >
              Zorganizuj <br /> Zbiórkę
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
