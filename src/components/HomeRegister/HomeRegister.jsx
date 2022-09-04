import React, { useId, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import validateEmail from "../../utilities/regexUserEmail";
import HomeNav from "../HomeNav/HomeNav";

function HomeLogin() {
  const id = useId();
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const repeatPasswordRef = useRef("");

  const [userValueErrors, SetUserValueErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
  });

  const validateSignUp = () => {
    if (
      !validateEmail(emailRef.current.value) ||
      emailRef.current.value.length === 0
    ) {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          email: true,
        };
      });
      return true;
    } else {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          email: false,
        };
      });
    }

    if (
      passwordRef.current.value < 6 ||
      passwordRef.current.value.length === 0
    ) {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          password: true,
        };
      });
      return true;
    } else {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          password: false,
        };
      });
    }

    if (
      repeatPasswordRef.current.value !== passwordRef.current.value ||
      repeatPasswordRef.current.value.length === 0
    ) {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          repeatPassword: true,
        };
      });
      return true;
    } else {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          repeatPassword: false,
        };
      });
    }

    return false;
  };

  const signUp = async () => {
    try {
      if (validateSignUp() === false) {
        const { user, session, error } = await supabase.auth.signUp({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        console.log("user", user);
        console.log("session", session);
        console.log("error", error);

        document.getElementById("register-form").reset();
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="registerContainer">
      <HomeNav />

      <article className="registerContainer__article">
        <h3>Załóż konto</h3>

        <div className="registerContainer__article__fancy-border"></div>

        <form id="register-form" className="registerContainer__article__form">
          <div>
            <label htmlFor={`email${id}`}>Email</label>
            <input
              type="email"
              id={`email${id}`}
              ref={emailRef}
              required
              style={{
                borderBottom: userValueErrors.email
                  ? "1px solid red"
                  : "1px solid #3c3c3c",
              }}
            />

            <div
              style={{
                display: userValueErrors.email ? "block" : "none",
                color: userValueErrors.email ? "red" : "",
              }}
            >
              Podany email jest nieprawidłowy!
            </div>
          </div>

          <div>
            <label htmlFor={`password${id}`}>Hasło</label>
            <input
              type="password"
              id={`password${id}`}
              ref={passwordRef}
              required
              style={{
                borderBottom: userValueErrors.password
                  ? "1px solid red"
                  : "1px solid #3c3c3c",
              }}
            />

            <div
              style={{
                display: userValueErrors.password ? "block" : "none",
                color: userValueErrors.password ? "red" : "",
              }}
            >
              Podane hasło jest za krótkie!
            </div>
          </div>

          <div>
            <label htmlFor={`repeat-password${id}`}>Powtórz hasło</label>
            <input
              type="password"
              id={`repeat-password${id}`}
              ref={repeatPasswordRef}
              required
              style={{
                borderBottom: userValueErrors.repeatPassword
                  ? "1px solid red"
                  : "1px solid #3c3c3c",
              }}
            />
          </div>

          <div
            style={{
              display: userValueErrors.repeatPassword ? "block" : "none",
              color: userValueErrors.repeatPassword ? "red" : "",
            }}
          >
            Podane hasła nie są takie same!
          </div>
        </form>

        <div className="registerContainer__article__btns">
          <button onClick={signUp}>Załóż konto</button>
          <button onClick={() => navigate("/logowanie")}>Zaloguj się</button>
        </div>
      </article>
    </section>
  );
}

export default HomeLogin;
