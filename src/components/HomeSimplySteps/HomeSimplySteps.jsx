import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

function HomeSimplySteps() {
  const navigate = useNavigate();
  const session = supabase.auth.session();

  const handleClickNavigate = (location) => {
    return session ? null : navigate(location);
  };

  return (
    <section className="sectionSimplyStepsContainer" name="simplySteps">
      <h2>Wystarczą 4 proste kroki</h2>

      <img src="assets/Decoration.svg" alt="fancy border" />

      <article className="sectionSimplyStepsContainer__article">
        <div className="sectionSimplyStepsContainer__article__container">
          <img src="assets/Icon-1.svg" alt="t-shirt" />
          <span>Wybierz rzeczy</span>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>

        <div className="sectionSimplyStepsContainer__article__container">
          <img src="assets/Icon-2.svg" alt="ecology trash bag" />
          <span>Spakuj je</span>
          <p>skorzystaj z worków na śmieci</p>
        </div>

        <div className="sectionSimplyStepsContainer__article__container">
          <img src="assets/Icon-3.svg" alt="loop" />
          <span>Zdecyduj komu chcesz pomóc</span>
          <p>wybierz zaufane miejsce</p>
        </div>

        <div className="sectionSimplyStepsContainer__article__container">
          <img src="assets/Icon-4.svg" alt="circle ecology" />
          <span>Zamów kuriera</span>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </article>

      <button onClick={() => handleClickNavigate("/logowanie")}>
        Oddaj <br /> rzeczy
      </button>
    </section>
  );
}

export default HomeSimplySteps;
