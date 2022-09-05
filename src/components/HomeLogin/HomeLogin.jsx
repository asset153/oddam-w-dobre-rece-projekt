import React, { useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import HomeNav from "../HomeNav/HomeNav";

function HomeLogin() {
  const id = useId();
  const navigate = useNavigate();

  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  const [correctLogin, SetCorrectLogin] = useState(true);

  const handleChangeSignIn = (e) => {
    SetCorrectLogin(true);
    setUserSignIn((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signIn({
      email: userSignIn.email,
      password: userSignIn.password,
      // email: "example@email.com",
      // password: "example-password",
    });

    if (!error && userSignIn.password.length !== 0) {
      SetCorrectLogin(true);
      navigate("/");
    } else {
      SetCorrectLogin(false);
    }
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
            <input
              type="email"
              id={`email${id}`}
              value={userSignIn.email}
              onChange={handleChangeSignIn}
              name="email"
            />
          </div>

          <div>
            <label htmlFor={`password${id}`}>Password</label>
            <input
              type="password"
              id={`password${id}`}
              value={userSignIn.password}
              onChange={handleChangeSignIn}
              name="password"
            />
          </div>

          <div
            style={{
              display: !correctLogin ? "block" : "none",
              color: !correctLogin ? "red" : "",
              height: 0,
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
