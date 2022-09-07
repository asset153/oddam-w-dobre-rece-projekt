import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import HomeFooter from "../HomeFooter/HomeFooter";
import HomeFormHeader from "../HomeFormHeader/HomeFormHeader";

function Form() {
  return (
    <section className="homeFormContainer">
      <Outlet />
    </section>
  );
}

function HomeForm() {
  return (
    <main>
      <HomeFormHeader />
      <Form />
      <HomeFooter />
    </main>
  );
}

export default HomeForm;
