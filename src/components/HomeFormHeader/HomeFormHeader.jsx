import React from "react";
import { supabase } from "../../supabaseClient";
import HomeNav from "../HomeNav/HomeNav";

function HomeFormHeader() {
  return (
    <header className="headerFormContainer">
      <div className="headerForm__img"></div>

      <div className="headerForm__content">
        <HomeNav />

        <div className="headerForm__content__titleAndSteps">
          <h1>
            Oddaj rzeczy, których już nie chcesz <br /> POTRZEBUJĄCYM
          </h1>
          <img src="/assets/Decoration.svg" alt="fancy border" />

          <h2>Wystarczą 4 proste kroki:</h2>
          <div className="headerForm__content__titleAndSteps__steps">
            <div className="headerForm__content__titleAndSteps__steps--step">
              <p>1</p>
              <p>Wybierz rzeczy</p>
            </div>
            <div className="headerForm__content__titleAndSteps__steps--step">
              <p>2</p>
              <p>Spakuj je w worki</p>
            </div>
            <div className="headerForm__content__titleAndSteps__steps--step">
              <p>3</p>
              <p>Wubierz fundację</p>
            </div>
            <div className="headerForm__content__titleAndSteps__steps--step">
              <p>4</p>
              <p>Zamów kuriera</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeFormHeader;
