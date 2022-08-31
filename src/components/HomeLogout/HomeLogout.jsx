import React from "react";
import { useNavigate } from "react-router-dom";
import HomeNav from "../HomeNav/HomeNav";

function HomeLogout() {
  const navigate = useNavigate();

  return (
    <section className="logoutContainer">
      <HomeNav />
      <article className="logoutContainer__article">
        <h5>
          Wylogowanie nastąpiło <br /> pomyślnie
        </h5>
        <img src="assets/Decoration.svg" alt="fancy border" />
        <button onClick={() => navigate("/")}>Strona główna</button>
      </article>
    </section>
  );
}

export default HomeLogout;
