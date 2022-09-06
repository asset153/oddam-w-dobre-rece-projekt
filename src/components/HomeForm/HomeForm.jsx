import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HomeFooter from "../HomeFooter/HomeFooter";
import HomeFormHeader from "../HomeFormHeader/HomeFormHeader";
import FormContext from "../../utilities/context";

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
