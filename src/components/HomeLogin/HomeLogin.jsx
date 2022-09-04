import React, { useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import HomeNav from "../HomeNav/HomeNav";

function HomeLogin() {
  const id = useId();
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [correctLogin, SetCorrectLogin] = useState(true);

  const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      // email: emailRef.current.value,
      // password: passwordRef.current.value,
      email: "example@email.com",
      password: "example-password",
    });

    if (!error) {
      SetCorrectLogin(true);
      navigate("/");
    } else {
      SetCorrectLogin(false);
    }

    console.log("user", user);
    console.log("session", session);
    console.log("error", error);

    // email: 'example@email.com',
    // password: 'example-password',
  };

  return (
    <section className="loginContainer">
      <HomeNav />

      <article className="loginContainer__article">
        <h3>Zaloguj się</h3>

        <div className="loginContainer__article__fancy-border"></div>

        <form className="loginContainer__article__form">
          <div>
            <label htmlFor={`email${id}`}>Email</label>
            <input type="text" id={`email${id}`} ref={emailRef} />
          </div>

          <div>
            <label htmlFor={`password${id}`}>Password</label>
            <input type="password" id={`password${id}`} ref={passwordRef} />
          </div>

          <div
            style={{
              display: !correctLogin && emailRef ? "block" : "none",
              color: !correctLogin && passwordRef ? "red" : "",
            }}
          >
            Nieprawidłowy login lub hasło!
          </div>
        </form>

        <div className="loginContainer__article__btns">
          <button onClick={() => navigate("/rejestracja")}>Załóż konto</button>
          <button onClick={signIn}>Zaloguj się</button>
        </div>
      </article>
    </section>
  );
}

export default HomeLogin;
