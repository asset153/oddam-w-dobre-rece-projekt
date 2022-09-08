import React, { createContext, useState, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeForm from "./components/HomeForm/HomeForm";
import HomeLogin from "./components/HomeLogin/HomeLogin";
import HomeLogout from "./components/HomeLogout/HomeLogout";
import HomeRegister from "./components/HomeRegister/HomeRegister";
import HomeFormStepOne from "./components/HomeFormStepOne/HomeFormStepOne";
import HomeFormStepTwo from "./components/HomeFormStepTwo/HomeFormStepTwo";
import HomeFormStepThree from "./components/HomeFormStepThree/HomeFormStepThree";
import HomeFormStepFour from "./components/HomeFormStepFour/HomeFormStepFour";
import HomeFormSummary from "./components/HomeFormSummary/HomeFormSummary";
import HomeFormThankYou from "./components/HomeFormThankYou/HomeFormThankYou";
import HomeNotFound from "./components/HomeNotFound/HomeNotFound";

import { reducer, initialState } from "./utilities/reducer";

import { supabase } from "./supabaseClient";
export const UserContext = createContext();

function App() {
  const session = supabase.auth.session();

  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state);

  const NestedPath = (
    <Route path="/oddaj-rzeczy" element={<HomeForm />}>
      <Route path="/oddaj-rzeczy" element={<HomeFormStepOne />} />
      <Route path="krok-drugi" element={<HomeFormStepTwo />} />
      <Route path="krok-trzeci" element={<HomeFormStepThree />} />
      <Route path="krok-czwarty" element={<HomeFormStepFour />} />
      <Route path="podsumowanie" element={<HomeFormSummary />} />
      <Route path="podziekowania" element={<HomeFormThankYou />} />
    </Route>
  );

  return (
    <UserContext.Provider value={{ dispatch, state }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {session ? NestedPath : <Route path="*" element={<HomeNotFound />} />}
          <Route path="/logowanie" element={<HomeLogin />} />
          <Route path="/rejestracja" element={<HomeRegister />} />
          <Route path="/wylogowano" element={<HomeLogout />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
