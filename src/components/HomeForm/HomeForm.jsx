import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import HomeFooter from "../HomeFooter/HomeFooter";
import HomeFormHeader from "../HomeFormHeader/HomeFormHeader";
import { UserContext } from "../../App";

function Form() {
  const values = useContext(UserContext);

  console.log(values);

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
