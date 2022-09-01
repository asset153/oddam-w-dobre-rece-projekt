import React from "react";

function HomeFooter() {
  return (
    <footer className="footerContainer" name="contact">
      <article className="footerContainer__article">
        <h6>Skontaktuj się z nami</h6>

        <img src="assets/Decoration.svg" alt="fancy border" />

        <form className="footerContainer__article__form">
          <div className="footerContainer__article__form__container--nameEmail">
            <div>
              <label htmlFor="">Wpisz swoje imię</label>
              <input type="text" placeholder="Krzysztof" />
            </div>

            <div>
              <label htmlFor="">Wpisz swój email</label>
              <input type="text" placeholder="abc@xyz.pl" />
            </div>
          </div>

          <div className="footerContainer__article__form__container--textArea">
            <label htmlFor="">Wpisz swoją wiadomość</label>
            <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
          </div>

          <button className="footerContainer__article__form__container--submit">
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
