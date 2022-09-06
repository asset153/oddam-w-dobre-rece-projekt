import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oddaj-rzeczy" element={<HomeForm />}>
          <Route path="/oddaj-rzeczy" element={<HomeFormStepOne />} />
          <Route path="krok-drugi" element={<HomeFormStepTwo />} />
          <Route path="krok-trzeci" element={<HomeFormStepThree />} />
          <Route path="krok-czwarty" element={<HomeFormStepFour />} />
          <Route path="podsumowanie" element={<HomeFormSummary />} />
          <Route path="podziekowania" element={<HomeFormThankYou />} />
        </Route>
        <Route path="/logowanie" element={<HomeLogin />} />
        <Route path="/rejestracja" element={<HomeRegister />} />
        <Route path="/wylogowano" element={<HomeLogout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
