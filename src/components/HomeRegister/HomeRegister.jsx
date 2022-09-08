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

  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChangeSignUp = (e) => {
    SetUserValueErrors((prevState) => {
      return {
        ...prevState,
        [e.target.name]: false,
      };
    });

    setUserSignUp((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const validateEmailSignUp = () => {
    if (!validateEmail(userSignUp.email) || userSignUp.email.length === 0) {
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

    return false;
  };

  const validatePasswordSignUp = () => {
    if (userSignUp.password.length < 6 || userSignUp.password.length === 0) {
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

    return false;
  };

  const validateRepeatPasswordSignUp = () => {
    if (
      userSignUp.repeatPassword !== userSignUp.password ||
      userSignUp.repeatPassword.length === 0
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
    validateEmailSignUp();
    validatePasswordSignUp();
    validateRepeatPasswordSignUp();

    try {
      if (
        !validateEmailSignUp() &&
        !validatePasswordSignUp() &&
        !validateRepeatPasswordSignUp()
      ) {
        const { user, session, error } = await supabase.auth.signUp({
          email: userSignUp.email,
          password: userSignUp.password,
        });
        console.log("user", user);
        console.log("session", session);
        console.log("error", error);
        document.getElementById("register-form").reset();
        navigate("/");
        window.location.reload();
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
              name="email"
              onChange={handleChangeSignUp}
              value={userSignUp.email}
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
              name="password"
              onChange={handleChangeSignUp}
              value={userSignUp.password}
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
              name="repeatPassword"
              onChange={handleChangeSignUp}
              value={userSignUp.repeatPassword}
              required
              style={{
                borderBottom: userValueErrors.repeatPassword
                  ? "1px solid red"
                  : "1px solid #3c3c3c",
              }}
            />

            <div
              style={{
                display: userValueErrors.repeatPassword ? "block" : "none",
                color: userValueErrors.repeatPassword ? "red" : "",
              }}
            >
              Podane hasła nie są takie same!
            </div>
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
