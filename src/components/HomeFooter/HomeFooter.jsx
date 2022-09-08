import React, { useId, useRef, useEffect, useState, useContext } from "react";
import validateUserName from "../../utilities/regexUserName";
import validateEmail from "../../utilities/regexUserEmail";

function HomeFooter() {
  const id = useId;

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const [formValueErrors, setFormValueErrors] = useState({
    name: false,
    email: false,
    textarea: false,
  });

  const handleChange = (e) => {
    setFormValueErrors((prevState) => {
      return {
        ...prevState,
        [e.target.name]: false,
      };
    });

    setFormValues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [showMessageStatus200, setShowMessageStatus200] = useState(false);
  const userNameRef = useRef("");
  const userEmailRef = useRef("");
  const userTextArea = useRef("");

  const validateFn = () => {
    if (
      formValues.name.length === 0 ||
      formValues.name.length > 15 ||
      validateUserName(formValues.name)
    ) {
      setFormValueErrors((prevState) => {
        return {
          ...prevState,
          name: true,
        };
      });
    } else {
      setFormValueErrors((prevState) => {
        return {
          ...prevState,
          name: false,
        };
      });
    }

    if (formValues.email.length === 0 || !validateEmail(formValues.email)) {
      setFormValueErrors((prevState) => {
        return {
          ...prevState,
          email: true,
        };
      });
    } else {
      setFormValueErrors((prevState) => {
        return {
          ...prevState,
          email: false,
        };
      });
    }

    if (formValues.textarea.length === 0 || formValues.textarea.length < 120) {
      setFormValueErrors((prevState) => {
        return {
          ...prevState,
          textarea: true,
        };
      });
    } else {
      setFormValueErrors((prevState) => {
        return {
          ...prevState,
          textarea: false,
        };
      });
    }
  };

  const sendMessage = async function () {
    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          headers: {
            "Content-Type": "application/json",
          },

          method: "POST",
          body: JSON.stringify({
            name: formValues.name,
            email: formValues.email,
            message: formValues.textarea,
          }),
        }
      );

      if (response.status === 200) {
        document.getElementById("footerForm").reset();
        setFormValues({
          name: "",
          email: "",
          textarea: "",
        });
        setShowMessageStatus200(true);
      } else {
        setShowMessageStatus200(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFn();
    sendMessage();
  };

  const messageStatus200 = (
    <div style={{ color: "green" }}>
      Wiadomość została wysłana!
      <br />
      Wkrótce się skontaktujemy
    </div>
  );

  return (
    <footer className="footerContainer" name="contact">
      <article className="footerContainer__article">
        <h6>Skontaktuj się z nami</h6>

        <img src="/assets/Decoration.svg" alt="fancy border" />

        {showMessageStatus200 ? messageStatus200 : null}

        <form id="footerForm" className="footerContainer__article__form">
          <div className="footerContainer__article__form__container--nameEmail">
            <div>
              <label htmlFor={`${id}name`}>Wpisz swoje imię</label>
              <input
                type="text"
                id={`${id}name`}
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Krzysztof"
                style={{
                  borderBottom: formValueErrors.name
                    ? "1px solid red"
                    : "1px solid #3c3c3c",
                }}
              />
              <div
                style={{
                  display: formValueErrors.name ? "block" : "none",
                  color: formValueErrors.name ? "red" : "",
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
                name="email"
                value={formValues.email}
                onChange={handleChange}
                style={{
                  borderBottom: formValueErrors.email
                    ? "1px solid red"
                    : "1px solid #3c3c3c",
                }}
              />
              <div
                style={{
                  display: formValueErrors.email ? "block" : "none",
                  color: formValueErrors.email ? "red" : "",
                }}
              >
                Podany email jest nieprawidłowy!
              </div>
            </div>
          </div>

          <div className="footerContainer__article__form__container--textArea">
            <label htmlFor={`${id}textarea`}>Wpisz swoją wiadomość</label>
            <textarea
              name="textarea"
              value={formValues.textarea}
              onChange={handleChange}
              id={`${id}textarea`}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              style={{
                borderBottom: formValueErrors.textarea
                  ? "1px solid red"
                  : "1px solid #3c3c3c",
              }}
            ></textarea>
            <div
              style={{
                display: formValueErrors.textarea ? "block" : "none",
                color: formValueErrors.textarea ? "red" : "",
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
          <img src="/assets/Facebook.svg" alt="facebook icon" />
          <img src="/assets/Instagram.svg" alt="instagram icon" />
        </div>
      </aside>
    </footer>
  );
}

export default HomeFooter;
