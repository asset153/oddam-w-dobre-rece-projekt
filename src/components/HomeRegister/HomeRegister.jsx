import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import validateEmail from "../../utilities/regexUserEmail";
import HomeNav from "../HomeNav/HomeNav";

function HomeLogin() {
  const id = useId();
  const navigate = useNavigate();

  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [userValueErrors, SetUserValueErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
  });

  const validateSignUp = () => {
    if (validateEmail(userValues.email) && userValues.email.length > 0) {
      console.log(true);
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          email: false,
        };
      });
    } else {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          email: true,
        };
      });
    }

    if (userValues.password >= 6 && userValues.password.length > 0) {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          password: false,
        };
      });
    } else {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          password: true,
        };
      });
    }

    if (
      userValues.repeatPassword === userValues.password &&
      userValues.repeatPassword.length > 0
    ) {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          repeatPassword: false,
        };
      });
    } else {
      SetUserValueErrors((prevState) => {
        return {
          ...prevState,
          repeatPassword: true,
        };
      });
    }
  };

  const handleChange = function (e) {
    setUserValues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const signUp = async () => {
    // validateSignUp();

    console.log(supabase);

    // const { user, session, error } = await supabase.auth.signUp({
    //   email: "example@email.com",
    //   password: "example-password",
    // });

    // console.log("user", user);
    // console.log("session", session);
    // console.log("error", error);
  };

  return (
    <section className="registerContainer">
      <HomeNav />

      <article className="registerContainer__article">
        <h3>Załóż konto</h3>

        <div className="registerContainer__article__fancy-border"></div>

        <form className="registerContainer__article__form">
          <div>
            <label htmlFor={`email${id}`}>Email</label>
            <input
              type="email"
              id={`email${id}`}
              value={userValues.email}
              name="email"
              onChange={handleChange}
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
              value={userValues.password}
              onChange={handleChange}
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
              value={userValues.repeatPassword}
              onChange={handleChange}
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
          <button onClick={validateSignUp}>Załóż konto</button>
          <button onClick={() => navigate("/logowanie")}>Zaloguj się</button>
        </div>
      </article>
    </section>
  );
}

export default HomeLogin;
// mat@mat.com
