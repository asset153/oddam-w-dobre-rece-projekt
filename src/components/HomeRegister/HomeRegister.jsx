import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import HomeNav from "../HomeNav/HomeNav";

function HomeLogin() {
  const id = useId();
  const navigate = useNavigate();

  return (
    <section className="registerContainer">
      <HomeNav />

      <article className="registerContainer__article">
        <h3>Załóż konto</h3>

        <div className="registerContainer__article__fancy-border"></div>

        <form className="registerContainer__article__form">
          <div>
            <label htmlFor={`email${id}`}>Email</label>
            <input type="text" id={`email${id}`} />
          </div>

          <div>
            <label htmlFor={`password${id}`}>Hasło</label>
            <input type="text" id={`password${id}`} />
          </div>

          <div>
            <label htmlFor={`repeat-password${id}`}>Powtórz hasło</label>
            <input type="text" id={`repeat-password${id}`} />
          </div>
        </form>

        <div className="registerContainer__article__btns">
          <button>Załóż konto</button>
          <button onClick={() => navigate("/logowanie")}>Zaloguj się</button>
        </div>
      </article>
    </section>
  );
}

export default HomeLogin;
