import React, { useId } from "react";
import { useNavigate } from "react-router-dom";

function HomeLogin() {
  const id = useId();
  const navigate = useNavigate();

  return (
    <section className="loginContainer">
      <article className="loginContainer__article">
        <h3>Zaloguj się</h3>

        <div className="loginContainer__article__fancy-border"></div>

        <form className="loginContainer__article__form">
          <div>
            <label htmlFor={`email${id}`}>Email</label>
            <input type="text" id={`email${id}`} />
          </div>

          <div>
            <label htmlFor={`password${id}`}>Password</label>
            <input type="text" id={`password${id}`} />
          </div>
        </form>

        <div className="loginContainer__article__btns">
          <button onClick={() => navigate("/rejestracja")}>Załóż konto</button>
          <button>Zaloguj się</button>
        </div>
      </article>
    </section>
  );
}

export default HomeLogin;
