import React, { useId, useRef, useEffect, useState } from "react";
import axios from "axios";
import validateUserName from "../../utilities/regexUserName";
import validateEmail from "../../utilities/regexUserEmail";

function HomeFooter() {
  const id = useId;
  const [error, setError] = useState({
    name: false,
    email: false,
    textarea: false,
  });
  const userNameRef = useRef("");
  const userEmailRef = useRef("");
  const userTextArea = useRef("");

  // TODO =>
  // const showMessage = () => {
  //   if (!error.name && !error.email && !error.textarea) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const sendMessage = async function () {
    try {
      const response = await axios.get(
        "https://fer-api.coderslab.pl/v1/portfolio/contact"
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  axios
    .get("https://fer-api.coderslab.pl/v1/portfolio/contact")
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });

  const validateFn = () => {
    if (
      userNameRef.current.value.length === 0 ||
      userNameRef.current.value.length > 15 ||
      validateUserName(userNameRef.current.value)
    ) {
      setError((prevState) => {
        return {
          ...prevState,
          name: true,
        };
      });
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          name: false,
        };
      });
    }

    if (
      userEmailRef.current.value.length === 0 ||
      !validateEmail(userEmailRef.current.value)
    ) {
      setError((prevState) => {
        return {
          ...prevState,
          email: true,
        };
      });
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          email: false,
        };
      });
    }

    if (
      userTextArea.current.value.length === 0 ||
      userTextArea.current.value.length < 120
    ) {
      setError((prevState) => {
        return {
          ...prevState,
          textarea: true,
        };
      });
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          textarea: false,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFn();
    sendMessage();
  };

  return (
    <footer className="footerContainer" name="contact">
      <article className="footerContainer__article">
        <h6>Skontaktuj się z nami</h6>

        <img src="assets/Decoration.svg" alt="fancy border" />

        {/* <div
          style={{
            display:
              !error.name && !error.email && !error.textarea ? "block" : "none",
            color:
              !error.name && !error.email && !error.textarea ? "green" : "",
          }}
        >
          Wiadomość została wysłana!
          <br />
          Wkrótce się skontaktujemy
        </div> */}

        <form className="footerContainer__article__form">
          <div className="footerContainer__article__form__container--nameEmail">
            <div>
              <label htmlFor={`${id}name`}>Wpisz swoje imię</label>
              <input
                type="text"
                id={`${id}name`}
                ref={userNameRef}
                placeholder="Krzysztof"
                style={{
                  borderBottom: error.name
                    ? "1px solid red"
                    : "1px solid #3c3c3c",
                }}
              />
              <div
                style={{
                  display: error.name ? "block" : "none",
                  color: error.name ? "red" : "",
                }}
              >
                Podane imię jest nieprawidłowe!
              </div>
            </div>

            <div>
              <label htmlFor={`${id}email`}>Wpisz swój email</label>
              <input
                type="email"
                id={`${id}email`}
                placeholder="abc@xyz.pl"
                ref={userEmailRef}
                style={{
                  borderBottom: error.email
                    ? "1px solid red"
                    : "1px solid #3c3c3c",
                }}
              />
              <div
                style={{
                  display: error.email ? "block" : "none",
                  color: error.email ? "red" : "",
                }}
              >
                Podany email jest nieprawidłowy!
              </div>
            </div>
          </div>

          <div className="footerContainer__article__form__container--textArea">
            <label htmlFor={`${id}textarea`}>Wpisz swoją wiadomość</label>
            <textarea
              ref={userTextArea}
              id={`${id}textarea`}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              style={{
                borderBottom: error.textarea
                  ? "1px solid red"
                  : "1px solid #3c3c3c",
              }}
            ></textarea>
            <div
              style={{
                display: error.textarea ? "block" : "none",
                color: error.textarea ? "red" : "",
              }}
            >
              Wiadomość musi mieć przynajmniej 120 znaków!
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="footerContainer__article__form__container--submit"
          >
            Wyślij
          </button>
        </form>
      </article>
      <aside className="footerContainer__aside">
        <span className="footerContainer__aside__copyright">
          Copyright by Coders Lab
        </span>
        <div className="footerContainer__aside__icons">
          <img src="assets/Facebook.svg" alt="facebook icon" />
          <img src="assets/Instagram.svg" alt="instagram icon" />
        </div>
      </aside>
    </footer>
  );
}

export default HomeFooter;
